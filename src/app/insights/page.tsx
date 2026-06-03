import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = defaultMetadata(
  "Insights & Resources | Printing, Signage & Branding Tips",
  "Expert insights on printing, signage, packaging, vehicle branding and promotional products. Tips, guides, and trends from Tanzania's leading print platform.",
  "/insights"
);

export default function InsightsPage() {
  return <InsightsContent />;
}
