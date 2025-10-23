"use client";

import { ExternalLink, Github } from "lucide-react";
import projectLibrary from "@/assets/libros.png";
import { Card } from "@/components/ui/card/Card";
import { MiButton } from "@/components/ui/button/Button";
import styles from "../aboutSection/about.module.css";
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    image: projectLibrary,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    image: projectLibrary,
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Blog",
    description:
      "Blog personal con CMS headless, sistema de comentarios y optimización SEO avanzada.",
    image: projectLibrary,
    technologies: ["Next.js", "MDX", "Vercel", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard interactivo del clima con mapas, gráficos y pronósticos en tiempo real.",
    image: projectLibrary,
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    demoLink: "#",
    githubLink: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className={`${styles.gradientText}`}>Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo web, desde aplicaciones fullstack hasta interfaces de
            usuario modernas.
          </p>
        </header>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                variant="project"
                title={project.title}
                description={project.description}
                image={project.image.src}
                badges={project.technologies}
              >
                {/* Botones dentro del Card */}
                <MiButton variant="primary_1" text="Detalles" />
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#B66D82] hover:bg-primary-hover transition-all hover-lift"
                >
                  <ExternalLink size={18} />
                  Ver Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-1 rounded-lg border border-[#A89C9F] text-[#A89C9F]"
                >
                  <Github size={18} />
                  Código
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
