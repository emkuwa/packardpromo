import type { Metadata } from "next";
import { portfolioProjects, portfolioCategories } from "@/lib/portfolio";
import { defaultMetadata } from "@/lib/seo";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = defaultMetadata(
  "Portfolio | Printing, Signage, Packaging & Branding Projects",
  "Explore our portfolio of 1,000+ printing, signage, packaging, vehicle branding and promotional product projects delivered across Tanzania for leading brands.",
  "/portfolio"
);

export default function PortfolioPage() {
  return <PortfolioContent projects={portfolioProjects} categories={portfolioCategories} />;
}
