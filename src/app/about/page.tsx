import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import AboutContent from "./AboutContent";

export const metadata: Metadata = defaultMetadata(
  "About Packard Promo | Tanzania's Leading Printing & Branding Platform",
  "Packard Promo is a division of Packard Limited, Tanzania's leading corporate branding agency. For 14+ years we've been helping businesses across Tanzania print, brand and promote.",
  "/about"
);

export default function AboutPage() {
  return <AboutContent />;
}
