import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import QuoteContent from "./QuoteContent";

export const metadata: Metadata = defaultMetadata(
  "Get a Free Quote | Packard Promo Tanzania",
  "Get a free quote for printing, signage, packaging, vehicle branding or promotional products within 2 hours. Use our AI Quote Generator for instant estimates.",
  "/quote"
);

export default function QuotePage() {
  return <QuoteContent />;
}
