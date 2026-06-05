import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import FlyersContent from "./FlyersContent";

export const metadata: Metadata = defaultMetadata(
  "Flyer Printing Price Tanzania | Packard Promo",
  "Flyer printing prices in Tanzania. From TSh 500 for 100 pieces. A5, A4, A3 sizes. Digital printing with fast turnaround. Free delivery in Dar es Salaam.",
  "/pricing/flyers"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "Bei ya flyer printing ni ngapi?", a: "Flyer inapatikana kutoka TSh 500 kwa 100 pieces (A5 size)." },
    { q: "What paper sizes are available for flyers?", a: "A5 (148x210mm), A4 (210x297mm), A3 (297x420mm). Custom sizes available." },
    { q: "How long does flyer printing take?", a: "Same-day for orders before noon. Standard 1-2 business days." },
    { q: "Can I get flyers delivered outside Dar es Salaam?", a: "Yes. Delivery to Arusha, Mwanza, Mbeya, Zanzibar within 2-3 days." }
  ]);
}

export default function FlyersPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <FlyersContent />
  </>;
}