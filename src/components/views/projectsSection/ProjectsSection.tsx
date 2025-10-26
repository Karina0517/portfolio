"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card/Card";
import { MiButton } from "@/components/ui/button/Button";
import styles from "../../../components/views/aboutSection/about.module.css";
import { projects } from "@/data/projectsData";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen py-30 px-4 bg-gradient-to-b from-background to-muted/30 py-24">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className={styles.gradientText}>Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo web.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
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
                <Link href={`/projects/${project.slug}`}>
                  <MiButton variant="primary_1" text="Detalles" />
                </Link>

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
