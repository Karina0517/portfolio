import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .required("El nombre es obligatorio"),

  email: yup
    .string()
    .trim()
    .email("Debe ser un correo electrónico válido")
    .required("El correo es obligatorio"),

  message: yup
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede tener más de 500 caracteres")
    .required("El mensaje es obligatorio"),
});
