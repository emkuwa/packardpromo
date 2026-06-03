import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities } from "@/lib/data";
import { defaultMetadata } from "@/lib/seo";
import LocationDetail from "./LocationDetail";

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return defaultMetadata("Location Not Found", "Location not found", "/locations");
  return defaultMetadata(
    `Printing & Signage Services in ${city.name} | Packard Promo Tanzania`,
    `Professional printing, signage, packaging, vehicle branding and promotional products in ${city.name}, ${city.region}. Trusted by leading brands across ${city.name}.`,
    `/locations/${city.slug}`
  );
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();
  return <LocationDetail city={city} />;
}
