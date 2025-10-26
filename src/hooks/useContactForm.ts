import { useState } from "react";
import { contactSchema } from "../app/validations/contactSchema";
import { notification } from "@/utils/notifications";

export const useContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); //Limpia errores dde antes
    setIsSubmitting(true);

    try {
      await contactSchema.validate(formData, { abortEarly: false });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        notification("Mensaje enviado con éxito", "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors({ message: "Error al enviar el mensaje. Intenta nuevamente." });
        notification("Error al enviar el mensaje. Intenta nuevamente.", "error");
      }

    } catch (err: any) {
      if (err.inner) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((error: any) => {
          if (!validationErrors[error.path]) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      } else {
        setErrors({ message: "Ocurrió un error inesperado." });
      }

    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
