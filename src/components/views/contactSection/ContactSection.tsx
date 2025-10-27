'use client';

import { Mail, MapPin, Send } from 'lucide-react';
import styles from '../aboutSection/about.module.css';
import { Card } from './CardContact';
import { InputField } from './ContactForm';
import { MiButton } from '../../../components/ui/button/Button';
import { useContactForm } from "../../../hooks/useContactForm";

export default function ContactSection() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="min-h-screen py-30 px-4">
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
          <div className="space-y-8">
            <Card title="Información de Contacto">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className='text-pink-300 bg-pink-50 rounded' size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Correo Electrónico</p>
                    <a
                      href="mailto:tu@email.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      henaokarina17@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary-foreground">
                    <MapPin className='text-pink-300 bg-pink-50 rounded' size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-muted-foreground">Medellín, Colombia</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="¿Por qué trabajar conmigo?" variant="gradient">
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Código limpio y mantenible",
                  "Diseños responsive y modernos",
                  "Comunicación clara y constante",
                  "Entrega puntual de proyectos",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        index % 2 === 0 ? "bg-primary" : "bg-secondary"
                      }`}
                    ></span>
                    {text}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

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

            <MiButton
              variant="primary_1"
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
              text={isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            />
          </form>
        </div>
      </div>
    </section>
  );
}