import { siteConfig } from "./data";

const baseUrl = siteConfig.url;
const defaultOgImage = `${baseUrl}/images/og-default.jpg`;

function realSocialUrls() {
  return Object.values(siteConfig.social).filter(
    (url): url is string => Boolean(url && url !== "#" && url.startsWith("https://"))
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: ["Packard Promo Tanzania", "Packard Promo Dar es Salaam"],
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: defaultOgImage,
    description:
      "Packard Promo is Tanzania's leading printing, signage, packaging and promotional products platform with 14+ years of experience, 4,500+ projects delivered, and 250+ organizations served. Part of Packard Limited, a corporate branding agency established in 2010.",
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.founded),
    numberOfEmployees: { "@type": "QuantitativeValue", value: 50, unitText: "specialists" },
    areaServed: [
      { "@type": "Country", name: "Tanzania" },
      { "@type": "City", name: "Dar es Salaam" },
      { "@type": "City", name: "Zanzibar" },
      { "@type": "City", name: "Arusha" },
      { "@type": "City", name: "Mwanza" },
      { "@type": "City", name: "Dodoma" },
      { "@type": "City", name: "Mbeya" },
    ],
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.replace(/\s/g, ""),
        contactType: "sales",
        areaServed: "TZ",
        availableLanguage: ["English", "Swahili"],
      },
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "TZ",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    sameAs: realSocialUrls(),
    knowsAbout: [
      "Digital Printing Tanzania",
      "Offset Printing Tanzania",
      "Large Format Printing Tanzania",
      "Signage Solutions Tanzania",
      "Vehicle Branding Tanzania",
      "Packaging Printing Tanzania",
      "Promotional Products Tanzania",
      "Corporate Branding Tanzania",
      "Business Cards Tanzania",
      "Shop Signboards Tanzania",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: siteConfig.name,
    alternateName: "Packard Promo Tanzania",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: defaultOgImage,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.813791,
      longitude: 39.272225,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "TZS",
    paymentAccepted: "Cash, Mobile Money, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Dar es Salaam", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Zanzibar", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Arusha", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Mwanza", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Dodoma", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Mbeya", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Morogoro", containedInPlace: { "@type": "Country", name: "Tanzania" } },
      { "@type": "City", name: "Tanga", containedInPlace: { "@type": "Country", name: "Tanzania" } },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing, Signage & Promotional Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Printing", url: `${baseUrl}/services/digital-printing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offset Printing", url: `${baseUrl}/services/offset-printing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Large Format Printing", url: `${baseUrl}/services/large-format-printing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packaging Printing", url: `${baseUrl}/services/packaging-printing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Signage Solutions", url: `${baseUrl}/services/signage-solutions` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Branding", url: `${baseUrl}/services/vehicle-branding` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotional Products", url: `${baseUrl}/services/promotional-products` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exhibition & Events", url: `${baseUrl}/services/exhibition-events` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Studio", url: `${baseUrl}/services/design-studio` } },
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

export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Printing, Signage, Packaging & Promotional Products in Tanzania",
    description:
      "Packard Promo provides printing services, signage, packaging, promotional products and corporate branding in Dar es Salaam and across Tanzania.",
    isPartOf: { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: siteConfig.name, url: baseUrl },
    about: [
      { "@type": "Thing", name: "Printing Services" },
      { "@type": "Thing", name: "Signage" },
      { "@type": "Thing", name: "Packaging" },
      { "@type": "Thing", name: "Promotional Products" },
      { "@type": "Thing", name: "Corporate Branding" },
    ],
    primaryImageOfPage: { "@type": "ImageObject", url: defaultOgImage, width: 1200, height: 630 },
    publisher: { "@type": "Organization", name: siteConfig.name, url: baseUrl, logo: `${baseUrl}/logo.png` },
    inLanguage: "en-TZ",
  };
}

export function homepageFaqSchema() {
  return faqSchema([
    {
      q: "What printing services does Packard Promo offer in Tanzania?",
      a: "Packard Promo offers 9 service categories: digital printing, offset printing, large format printing, packaging printing, signage solutions, vehicle branding, promotional products, exhibition & events, and design studio. The catalog includes 82+ products ranging from business cards (from TZS 18,000) to full vehicle wraps (from TZS 350,000).",
    },
    {
      q: "How much does printing cost in Tanzania?",
      a: "Packard Promo printing prices start from TZS 180 for NCR receipt books, TZS 18,000 for business cards (100 pieces), TZS 8,500 for branded T-shirts (25 pieces), and TZS 55,000 for roll-up banners. All prices are in Tanzanian Shillings (TZS) with transparent minimum order quantities listed on each product page.",
    },
    {
      q: "Does Packard Promo offer same-day printing in Tanzania?",
      a: "Yes. Same-day printing is available for business cards, flyers, and posters in Dar es Salaam when artwork is ready. Standard turnaround is 1-3 business days for most products. Large format and signage take 3-10 business days, and packaging takes 10-21 business days.",
    },
    {
      q: "Does Packard Promo deliver across Tanzania?",
      a: "Yes. Same-day delivery in Dar es Salaam. Next-day to Zanzibar, Arusha, and Dodoma. 2-3 days to Mwanza, Mbeya, Morogoro, Tanga and all major Tanzanian cities. Packard Promo has served 8+ cities across Tanzania for 14+ years.",
    },
    {
      q: "Who are Packard Promo's clients?",
      a: "Packard Promo serves 250+ organizations including CRDB Bank, Vodacom, NMB Bank, Serena Hotels, Azam Media, Hyatt Regency, UNDP, UNICEF, WHO, Dangote Cement, Airtel, NBC Bank, Bakhresa Group, TPB Bank and World Bank across banking, telecoms, hospitality, NGOs, government and education sectors.",
    },
    {
      q: "How do I get a printing quote from Packard Promo?",
      a: "Request a quote through the online quote form at promo.packardltd.com/quote, message on WhatsApp at +255716002790, or use the AI quote generator tool for instant estimates 24/7. Formal quotes are responded to within 2 hours during business hours (Mon-Fri 8AM-6PM, Sat 9AM-2PM).",
    },
    {
      q: "What payment methods does Packard Promo accept?",
      a: "Packard Promo accepts Cash, Mobile Money (M-Pesa, Tigo Pesa, Airtel Money), Bank Transfer, and corporate invoicing for approved clients. All prices are quoted in Tanzanian Shillings (TZS).",
    },
    {
      q: "Where is Packard Promo located in Tanzania?",
      a: "Packard Promo headquarters is at Fire Area, Dar es Salaam, Tanzania (coordinates: -6.813791, 39.272225). The 12,000 sqm production facility houses Heidelberg offset presses, HP Indigo digital presses, large-format printers, signage fabrication workshop, vehicle branding bay and packaging design studio.",
    },
  ]);
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
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Packard Promo printing, signage, packaging and promotional products in Tanzania" }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | Packard Promo`,
      description,
      images: [defaultOgImage],
    },
    other: {
      "geo.region": "TZ",
      "geo.placename": "Dar es Salaam",
    },
  };
}
