import type { Metadata } from "next";
import { knowledgeArticles, knowledgeCategories } from "@/lib/knowledge";
import { defaultMetadata } from "@/lib/seo";
import KnowledgeContent from "./KnowledgeContent";

export const metadata: Metadata = defaultMetadata(
  "Knowledge Center | Printing, Signage & Branding Insights",
  "Expert insights, how-to guides, and industry trends on printing, signage, packaging, vehicle branding and promotional products. The Packard Promo knowledge center.",
  "/knowledge"
);

export default function KnowledgePage() {
  return <KnowledgeContent articles={knowledgeArticles} categories={knowledgeCategories} />;
}
