import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioProjects, getProjectBySlug } from "@/lib/portfolio";
import { defaultMetadata } from "@/lib/seo";
import ProjectDetail from "./ProjectDetail";

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return defaultMetadata("Project Not Found", "Project not found", "/portfolio");
  return defaultMetadata(
    `${project.title} | Packard Promo Case Study`,
    `${project.description} Delivered by Packard Promo for ${project.client}.`,
    `/portfolio/${project.slug}`
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
