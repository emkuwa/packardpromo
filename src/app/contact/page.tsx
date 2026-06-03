import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import ContactContent from "./ContactContent";

export const metadata: Metadata = defaultMetadata(
  "Contact Us | Packard Promo Tanzania",
  `Get in touch with Packard Promo. Call ${siteConfig.phone}, WhatsApp us, or visit our office in Dar es Salaam. We respond within 2 hours during business hours.`,
  "/contact"
);

export default function ContactPage() {
  return <ContactContent />;
}
