 "use client";

import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card/Card";
import { MiButton } from "@/components/ui/button/Button";
import styles from "./projects.module.css"; 
import { projects } from "@/data/projectsData";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Mis <span className={styles.gradientText}>Proyectos</span>
          </h2>
          <p className={styles.subtitle}>
            Una selección de proyectos que demuestran mis habilidades en desarrollo web.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`${styles.projectCard} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                variant="project"
                title={project.title}
                description={project.description}
                image={project.image.src}
              >
                <Link href={`/projects/${project.slug}`}>
                  <MiButton variant="primary_1" text="Detalles" />
                </Link>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoLink}
                >
                  <ExternalLink size={18} />
                  Ver Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeLink}
                >
                  <Github size={16} />
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
