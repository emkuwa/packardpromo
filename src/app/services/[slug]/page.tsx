import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/lib/services";
import { defaultMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import ServiceDetail from "./ServiceDetail";

const baseUrl = siteConfig.url;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return defaultMetadata("Service Not Found", "Service not found", "/services");
  return defaultMetadata(
    `${service.title} in Tanzania | Packard Promo`,
    `${service.shortDescription} Premium ${service.title.toLowerCase()} services for businesses across Tanzania. Starting from TZS ${Math.min(...service.products.map((p) => p.startingPrice)).toLocaleString()}. Request a free quote.`,
    `/services/${service.slug}`
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const serviceSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: serviceUrl,
    image: `${baseUrl}${service.image}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    areaServed: {
      "@type": "Country",
      name: "Tanzania",
    },
    serviceType: service.title,
    category: "Printing Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: p.name,
          url: `${baseUrl}/products/${p.slug}`,
          price: p.startingPrice,
          priceCurrency: "TZS",
          itemOffered: {
            "@type": "Product",
            name: p.name,
            description: p.description,
          },
        },
      })),
    },
  };

  const faqData = service.faqs && service.faqs.length > 0
    ? faqSchema(service.faqs)
    : null;

  const breadcrumbData = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
