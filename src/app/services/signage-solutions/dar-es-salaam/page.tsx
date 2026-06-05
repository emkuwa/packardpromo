import type { Metadata } from "next";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import SignageDarContent from "./SignageDarContent";

export const metadata: Metadata = defaultMetadata(
  "Signage Solutions in Dar es Salaam | Packard Promo",
  "Signage solutions in Dar es Salaam. Shop signs, LED signs, building signage. From TSh 25,000. Installation included.",
  "/services/signage-solutions/dar-es-salaam"
);

export default function SignageDarPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema([
        { q: "Bei ya signage Dar es Salaam?", a: "Shop sign inapatikana kwa TSh 25,000. LED sign TSh 200,000+." },
      ]))
    }} />
    <SignageDarContent />
  </>;
}