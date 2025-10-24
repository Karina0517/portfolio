'use client';
import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import styles from '../aboutSection/about.module.css';
import { Card } from './CardContact';
import { InputField } from './Input';
import { MiButton } from '../../../components/ui/button/Button';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    else if (formData.name.trim().length < 2)
      newErrors.name = 'Debe tener al menos 2 caracteres';

    if (!formData.email.trim()) newErrors.email = 'El correo es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Correo inválido';

    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Debe tener al menos 10 caracteres';

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors])
      setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={styles.gradientText}>Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea
            y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna Izquierda */}
          <div className="space-y-8">
            <Card title="Información de Contacto">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Correo Electrónico</p>
                    <a
                      href="mailto:tu@email.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tu@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary-foreground">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-muted-foreground">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="¿Por qué trabajar conmigo?" variant="gradient">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Código limpio y mantenible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Diseños responsive y modernos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Comunicación clara y constante
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Entrega puntual de proyectos
                </li>
              </ul>
            </Card>
          </div>

          {/* Columna Derecha - Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              id="name"
              name="name"
              label="Nombre"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              error={errors.name}
            />
            <InputField
              id="email"
              name="email"
              type="email"
              label="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              error={errors.email}
            />
            <InputField
              id="message"
              name="message"
              label="Mensaje"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame sobre tu proyecto..."
              error={errors.message}
              textarea
            />

            {/* <MiButton
              type="submit"
              className="w-full flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Mensaje
            </MiButton> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
