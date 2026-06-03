import { siteConfig } from "./data";

const baseUrl = siteConfig.url;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Packard Promo Tanzania",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/images/og-default.jpg`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.founded),
    areaServed: { "@type": "Country", name: "Tanzania" },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentBrand,
      url: siteConfig.parentUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fire Area",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      addressCountry: "TZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.replace(/\s/g, ""),
      contactType: "sales",
      areaServed: "TZ",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: siteConfig.name,
    alternateName: "Packard Promo Tanzania",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/images/og-default.jpg`,
    description: siteConfig.shortDescription,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fire Area",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      addressCountry: "TZ",
    },
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
    priceRange: "TSh TSh TSh",
    areaServed: { "@type": "Country", name: "Tanzania" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing, Signage & Promotional Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Printing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offset Printing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Large Format Printing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packaging Printing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Signage Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Branding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotional Products" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exhibition & Events" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Studio" } },
      ],
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function serviceSchema(services: { name: string; description: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}/services/${s.slug}`,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@type": "Organization", name: siteConfig.name },
        areaServed: { "@type": "Country", name: "Tanzania" },
      },
    })),
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  startingPrice: number;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "TZS",
      price: product.startingPrice,
      priceValidUntil: "2026-12-31",
      url: `${baseUrl}${product.url}`,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };
}

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

export function defaultMetadata(title: string, description: string, path: string) {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Packard Promo`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_TZ",
      type: "website" as const,
      images: [{ url: `${baseUrl}/images/og-default.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | Packard Promo`,
      description,
      images: [`${baseUrl}/images/og-default.jpg`],
    },
    other: {
      "geo.region": "TZ",
      "geo.placename": "Dar es Salaam",
    },
  };
}
