import type { Metadata } from "next";
import { cities } from "@/lib/data";
import { defaultMetadata } from "@/lib/seo";
import LocationsContent from "./LocationsContent";

export const metadata: Metadata = defaultMetadata(
  "Printing & Signage Services Across Tanzania | Packard Promo",
  "Find Packard Promo printing, signage, packaging and branding services in your city. We serve Dar es Salaam, Zanzibar, Arusha, Mwanza, Dodoma, Mbeya, Morogoro, Tanga and beyond.",
  "/locations"
);

export default function LocationsPage() {
  return <LocationsContent cities={cities} />;
}
