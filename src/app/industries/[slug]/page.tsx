import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { defaultMetadata } from "@/lib/seo";
import { portfolioProjects } from "@/lib/portfolio";
import IndustryDetail from "./IndustryDetail";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return defaultMetadata("Industry Not Found", "Industry not found", "/industries");
  return defaultMetadata(
    `Printing & Branding for ${industry.name} | Packard Promo Tanzania`,
    `${industry.description} Industry-specific printing, signage, packaging and branding solutions for ${industry.name.toLowerCase()}.`,
    `/industries/${industry.slug}`
  );
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const caseStudies = industry.caseStudyIds
    .map((id) => portfolioProjects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return <IndustryDetail industry={industry} caseStudies={caseStudies} />;
}
