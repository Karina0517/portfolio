import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
    },
    message: {
      type: String,
      required: [true, "El mensaje es obligatorio"],
    },
  },
  {
    timestamps: true,
    collection: "contact", 
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
