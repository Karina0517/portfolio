import dbconnection from "../../lib/dbconnection";
import { NextResponse } from "next/server";
import Contact from "../../models/contact";
import { google } from "googleapis";
import { contactSchema } from "../../validations/contactSchema";

type PostResponse = { ok: true; message: string; createdId?: string };
type ErrorResponse = { ok: false; error: string; details?: string[] };
export type ResponseBody = PostResponse | ErrorResponse;

export async function POST(request: Request): Promise<NextResponse<ResponseBody>> {
  try {
    await dbconnection();

    const data = await request.json();

    // yup
    try {
      await contactSchema.validate(data, { abortEarly: false });
    } catch (validationError: any) {
      const errors = validationError.inner.map((err: any) => err.message);
      return NextResponse.json(
        { ok: false, error: "Errores de validación", details: errors },
        { status: 400 }
      );
    }

    const { name, email, message } = data;

    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "contacts";
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error("Missing Google Sheets environment variables");
      return NextResponse.json(
        { ok: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Se guarda en mongodb
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();

    // Se guarda en google sheets
    const timestamp = new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota",
      dateStyle: "short",
      timeStyle: "medium",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message, timestamp]],
      },
    });

    // Respuesta exitosa
    return NextResponse.json(
      {
        ok: true,
        message: "Mensaje enviado correctamente",
        createdId: savedContact._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
