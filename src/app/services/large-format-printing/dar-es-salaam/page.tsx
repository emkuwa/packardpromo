import type { Metadata } from "next";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import LargeFormatDarContent from "./LargeFormatDarContent";

export const metadata: Metadata = defaultMetadata(
  "Large Format Printing in Dar es Salaam | Packard Promo",
  "Large format printing in Dar es Salaam. Banners, roll-ups, backdrops. From TSh 8,000. Installation included.",
  "/services/large-format-printing/dar-es-salaam"
);

export default function LargeFormatDarPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema([
        { q: "Bei ya banner printing Dar es Salaam?", a: "Banner 3x1m inapatikana kwa TSh 8,000. Roll-up TSh 15,000." },
      ]))
    }} />
    <LargeFormatDarContent />
  </>;
}