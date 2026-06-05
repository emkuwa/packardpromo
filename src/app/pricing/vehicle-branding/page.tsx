import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import VehicleBrandingContent from "./VehicleBrandingContent";

export const metadata: Metadata = defaultMetadata(
  "Vehicle Branding Price Tanzania | Packard Promo",
  "Vehicle branding prices in Tanzania. From TSh 80,000 per vehicle. Fleet discounts available. Full vehicle wraps, partial branding, magnetics. Dar es Salaam delivery.",
  "/pricing/vehicle-branding"
);

export function generateFAQStructuredData() {
  return faqSchema([
    { q: "Bei ya vehicle branding ni ngapi?", a: "Bei inapatikana kutoka TSh 80,000 kwa gari mmoja. Punguza unapo kuwa fleet ya 5+ gari." },
    { q: "How much does vehicle branding cost per vehicle?", a: "Standard partial wrap starts at TSh 80,000. Full wraps from TSh 150,000. Magnetics from TSh 40,000." },
    { q: "How long does vehicle branding take?", a: "Partial branding 1-2 days. Full wraps 2-3 days. Magnetics same-day available." },
    { q: "Do you provide vehicle branding services outside Dar es Salaam?", a: "Yes. We serve Arusha, Mwanza, Mbeya, Dodoma, Zanzibar with next-day to 3-day delivery." },
    { q: "What materials do you use for vehicle branding?", a: "Premium 3M vinyl with anti-graffiti laminate for 18+ month outdoor durability." }
  ]);
}

export default function VehicleBrandingPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <VehicleBrandingContent />
  </>;
}