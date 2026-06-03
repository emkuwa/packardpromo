import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/lib/services";
import { defaultMetadata, serviceSchema, faqSchema, productSchema } from "@/lib/seo";
import ServiceDetail from "./ServiceDetail";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return defaultMetadata("Service Not Found", "Service not found", "/services");
  return defaultMetadata(
    `${service.title} in Tanzania | Packard Promo`,
    `${service.shortDescription} Premium ${service.title.toLowerCase()} services for businesses across Tanzania.`,
    `/services/${service.slug}`
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "Organization", name: "Packard Promo" },
            areaServed: { "@type": "Country", name: "Tanzania" },
            serviceType: service.title,
            offers: service.products.map((p) => ({
              "@type": "Offer",
              name: p.name,
              price: p.startingPrice,
              priceCurrency: "TZS",
            })),
          }),
        }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
