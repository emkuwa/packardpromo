import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import SignboardsContent from "./SignboardsContent";

export const metadata: Metadata = defaultMetadata(
  "Signboard Price Tanzania | Signboard Makers Dar es Salaam | Packard Promo",
  "Signboard prices in Tanzania. From TSh 8,000 for basic banners to TSh 200,000+ for illuminated shop signs. Indoor & outdoor signage. Free delivery in Dar es Salaam.",
  "/pricing/signboards"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "Bei ya signboard ni ngapi Tanzania?", a: "Bei ya signboard hutoa TSh 8,000 kwa banner, TSh 25,000 kwa shop signboard ya kioo, na TSh 200,000+ kwa signboard iliyo na mwali. Bei inategemea ubora, ukubwa na muda wa uatoleaji." },
    { q: "Signboard makers Dar es Salaam - where are you located?", a: "Tunafanya signboard Dar es Salaam na maeneo yote Tanzania. Ofisi yetu ipo Dar es Salaam, Fire Area." },
    { q: "What materials are used for signboards?", a: "Vinyl, PVC, acrylic, corrugated plastic, aluminum composite panel, and wood depending on indoor/outdoor use and budget." },
    { q: "How long does signboard production take?", a: "Standard 2-3 days. Rush service available. Illuminated signs need 5-7 days due to electrical work." },
    { q: "Do you install signboards?", a: "Yes. We provide full installation service for shop signs, billboards, and vehicle branding across Dar es Salaam and major Tanzanian cities." }
  ]);
}

export default function SignboardsPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <SignboardsContent />
  </>;
}