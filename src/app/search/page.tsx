import type { Metadata } from "next";
import { services } from "@/lib/services";
import { portfolioProjects } from "@/lib/portfolio";
import { industries } from "@/lib/industries";
import { knowledgeArticles } from "@/lib/knowledge";
import { cities } from "@/lib/data";
import { defaultMetadata } from "@/lib/seo";
import SearchContent from "./SearchContent";

export const metadata: Metadata = defaultMetadata(
  "Search | Packard Promo",
  "Search across products, services, portfolio, industries, locations and knowledge center. Find what you need across the entire Packard Promo platform.",
  "/search"
);

export default function SearchPage() {
  const allProducts = services.flatMap((s) => s.products);
  return (
    <SearchContent
      services={services}
      products={allProducts}
      portfolio={portfolioProjects}
      industries={industries}
      knowledge={knowledgeArticles}
      cities={cities}
    />
  );
}
