import type { Metadata } from "next";
import { services } from "@/lib/services";
import { defaultMetadata } from "@/lib/seo";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = defaultMetadata(
  "All Printing, Signage, Packaging & Promotional Services in Tanzania | Packard Promo",
  "Packard Promo offers 9 service categories: digital printing, offset printing, large format printing, packaging printing, signage solutions, vehicle branding, promotional products, exhibition & events, and design studio. 82+ products for businesses across Tanzania. Same-day printing available.",
  "/services"
);

export default function ServicesPage() {
  return <ServicesContent services={services} />;
}
