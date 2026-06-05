import type { Metadata } from "next";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import OffsetPrintingDarContent from "./OffsetPrintingDarContent";

export const metadata: Metadata = defaultMetadata(
  "Offset Printing in Dar es Salaam | Packard Promo",
  "Offset printing in Dar es Salaam. Books, magazines, brochures, annual reports. From TSh 220/unit. Bulk discounts available.",
  "/services/offset-printing/dar-es-salaam"
);

export default function OffsetPrintingDarPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema([
        { q: "Bei ya offset printing Dar es Salaam?", a: "Bei inapatikana kutoka TSh 220 kwa kitabu. Punguzo kwa order za 1,000+." },
        { q: "What is the minimum for offset printing?", a: "Minimum order is typically 200–1,000 units depending on the product." },
      ]))
    }} />
    <OffsetPrintingDarContent />
  </>;
}