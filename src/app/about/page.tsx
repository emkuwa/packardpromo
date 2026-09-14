import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import AboutContent from "./AboutContent";

export const metadata: Metadata = defaultMetadata(
  "About Packard Promo | Tanzania's Printing, Signage & Branding Company Since 2010",
  "Packard Promo is a division of Packard Limited, established in 2010 in Dar es Salaam, Tanzania. With 14+ years of experience, 4,500+ projects delivered, 50+ specialists, and a 12,000 sqm production facility, Packard Promo serves 250+ organizations across 8+ Tanzanian cities.",
  "/about"
);

export default function AboutPage() {
  return <AboutContent />;
}
