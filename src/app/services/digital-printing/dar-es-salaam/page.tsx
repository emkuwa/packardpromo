import type { Metadata } from "next";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import DigitalPrintingDarContent from "./DigitalPrintingDarContent";

export const metadata: Metadata = defaultMetadata(
  "Digital Printing in Dar es Salaam | Packard Promo",
  "Digital printing in Dar es Salaam. Business cards, flyers, brochures, posters. Same-day service available. From TSh 150/pcs. Free delivery.",
  "/services/digital-printing/dar-es-salaam"
);

export default function DigitalPrintingDarPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema([
        { q: "Same-day digital printing Dar es Salaam?", a: "Yes. Business cards, flyers, posters ready same day if ordered before noon." },
        { q: "Bei ya digital printing Dar es Salaam ni ngapi?", a: "Business cards TSh 150/pcs, flyers TSh 500/100 pcs, posters TSh 8,000." },
      ]))
    }} />
    <DigitalPrintingDarContent />
  </>;
}