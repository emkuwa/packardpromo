import type { Metadata } from "next";
import { industries } from "@/lib/industries";
import { defaultMetadata } from "@/lib/seo";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = defaultMetadata(
  "Industries We Serve | Printing & Branding Solutions by Sector",
  "Industry-specific printing, signage, packaging and branding solutions. 10 industries served across Tanzania — schools, universities, NGOs, government, banks, telecoms, hospitals, hotels, construction, real estate.",
  "/industries"
);

export default function IndustriesPage() {
  return <IndustriesContent industries={industries} />;
}
