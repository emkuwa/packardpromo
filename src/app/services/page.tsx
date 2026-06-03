import type { Metadata } from "next";
import { services } from "@/lib/services";
import { defaultMetadata } from "@/lib/seo";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = defaultMetadata(
  "All Printing, Signage, Packaging & Promotional Services",
  "Browse all 9 service categories from Packard Promo — Tanzania's leading printing, signage, packaging and promotional products platform. Digital printing, offset, large format, signage, vehicle branding, packaging, promotional products, exhibition and design.",
  "/services"
);

export default function ServicesPage() {
  return <ServicesContent services={services} />;
}
