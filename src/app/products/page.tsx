import type { Metadata } from "next";
import { services } from "@/lib/services";
import { defaultMetadata } from "@/lib/seo";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = defaultMetadata(
  "All Products & Pricing | Packard Promo",
  "Browse our complete catalog of 50+ printing, signage, packaging and promotional products. Transparent pricing, fast turnaround, premium quality.",
  "/products"
);

export default function ProductsPage() {
  return <ProductsContent services={services} />;
}
