"use client"
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge/Badge";
import { MiButton } from "@/components/ui/button/Button";
import { projects } from "@/data/projectsData";
import { use } from "react";
import ProjectCarousel from "@/components/ui/carousel/ProjectCarousel";
import router from "next/router";

type ProjectParams = {
  slug: string;
};

export default function ProjectDetail({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = use(params) as ProjectParams; 

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <ProjectCarousel images={project.images} />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>

        <p className="mb-6">{project.details}</p>

      </div>
    </section>
  );
}
