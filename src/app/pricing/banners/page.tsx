import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import BannersContent from "./BannersContent";

export const metadata: Metadata = defaultMetadata(
  "Banner Printing Price Tanzania | Packard Promo",
  "Banner printing prices in Tanzania. From TSh 8,000 for 3x1m banners. Vinyl, fabric, mesh materials. Indoor and outdoor banners. Fast delivery.",
  "/pricing/banners"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "Bei ya banner printing ni ngapi?", a: "Banner 3x1m inapatikana kutoka TSh 8,000. Bei hutofautiana na ukubwa na ubora." },
    { q: "What materials are available for banners?", a: "Vinyl (standard), fabric (premium), mesh (wind-resistant), cast (long-lasting)." },
    { q: "How long does banner printing take?", a: "Same-day available for simple designs. Standard 1-2 days. Large formats 2-3 days." },
    { q: "Can banners withstand Tanzania weather?", a: "Yes. UV-resistant inks and weatherproof materials rated for 2-5 years outdoor use." }
  ]);
}

export default function BannersPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <BannersContent />
  </>;
}