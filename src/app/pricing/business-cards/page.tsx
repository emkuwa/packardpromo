import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import BusinessCardsContent from "./BusinessCardsContent";

export const metadata: Metadata = defaultMetadata(
  "Business Card Printing Price Tanzania | Packard Promo",
  "Business card printing prices in Tanzania. From TSh 150/pcs for 500+ pcs. Digital, spot UV, embossed, foil stamping options. Free delivery in Dar es Salaam. Order now.",
  "/pricing/business-cards"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "How much does business card printing cost in Tanzania?", a: "Business cards start at TSh 150/pcs for standard 350gsm full-color printing. Prices vary by quantity and finish options." },
    { q: "What is the minimum order for business cards?", a: "Minimum order is 100 pieces. We recommend 500+ pcs for better unit pricing." },
    { q: "How long does business card printing take?", a: "Standard production is 1-2 business days. Same-day service available for orders placed before noon in Dar es Salaam." },
    { q: "Can I see a proof before printing?", a: "Yes. We provide digital proofs for approval before production starts. Physical proofs available upon request." },
    { q: "What file formats do you accept for business cards?", a: "We accept PDF, AI, EPS, PNG, JPG. PDF with CMYK colors is preferred for best results." },
    { q: "Bei ya business card ni ngapi?", a: "Bei ya business card inapatikana kutoka TSh 150 kwa piece. Bei hufanya kwa wingi na ubora wa card." }
  ]);
}

export default function BusinessCardsPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <BusinessCardsContent />
  </>;
}