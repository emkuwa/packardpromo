import type { Metadata } from "next";
import { services } from "@/lib/services";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import Link from "next/link";
import VehicleBrandingDarContent from "./VehicleBrandingDarContent";

const service = services.find(s => s.slug === "vehicle-branding")!;

export const metadata: Metadata = {
  title: `Vehicle Branding in Dar es Salaam | Packard Promo`,
  description: `Premium vehicle branding in Dar es Salaam. Full wraps, partial wraps, decals. From TSh 80,000 per vehicle. Free quote. Same-day turnaround for small jobs.`,
  alternates: { canonical: "/services/vehicle-branding/dar-es-salaam" },
};

export default function VehicleBrandingDarPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Bei ya vehicle branding Dar es Salaam ni ngapi?", acceptedAnswer: { "@type": "Answer", text: "Bei inapatikana kutoka TSh 80,000 kwa gari mmoja. Fleet discount yanapatikana kwa order za 5+ gari." } },
          { "@type": "Question", name: "How long does vehicle branding take in Dar es Salaam?", acceptedAnswer: { "@type": "Answer", text: "Partial wrap 1-2 days. Full wrap 2-3 days. Magnetics same-day available." } },
          { "@type": "Question", name: "Do you provide vehicle branding services in Dar es Salaam?", acceptedAnswer: { "@type": "Answer", text: "Yes. We have mobile installation teams for fleets of 5+ vehicles across Dar es Salaam." } },
        ]
      })
    }} />
    <VehicleBrandingDarContent />
  </>;
}