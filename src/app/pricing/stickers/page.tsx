import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import StickersContent from "./StickersContent";

export const metadata: Metadata = defaultMetadata(
  "Sticker Printing Price Tanzania | Packard Promo",
  "Sticker printing prices in Tanzania. From TSh 300 for 50 pieces. Custom shapes, die-cut, transparent options. Branding labels & packaging stickers.",
  "/pricing/stickers"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "Bei ya sticker printing ni ngapi?", a: "Sticker inapatikana kutoka TSh 300 kwa 50 pieces. Bei inategemea kikomo na ubora." },
    { q: "What sticker materials do you offer?", a: "White vinyl, transparent, reflective, holographic, paper. All weatherproof for outdoor use." },
    { q: "Can I get custom shaped stickers?", a: "Yes. Die-cut stickers from TSh 500/50 pcs. Provide vector artwork or request design." },
    { q: "How long for sticker printing?", a: "Same-day for simple designs. Standard 1-2 days. Bulk orders 3-5 days." }
  ]);
}

export default function StickersPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <StickersContent />
  </>;
}