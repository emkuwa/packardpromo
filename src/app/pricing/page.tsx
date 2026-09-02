import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/data";
import { defaultMetadata, breadcrumbSchema } from "@/lib/seo";
import PricingContent from "./PricingContent";

const baseUrl = siteConfig.url;

export const metadata: Metadata = defaultMetadata(
  "Printing Prices in Tanzania | Complete Pricing Guide | Packard Promo",
  "Transparent printing, signage, packaging and promotional product prices in Tanzania. 82+ products with starting prices, minimum orders and lead times. Instant AI quotes available.",
  "/pricing"
);

export default function PricingPage() {
  const allProducts = services.flatMap((s) =>
    s.products.map((p) => ({
      ...p,
      serviceTitle: s.title,
      serviceSlug: s.slug,
    }))
  );

  const sortedProducts = [...allProducts].sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Packard Promo — Printing, Signage & Promotional Products Pricing",
    description: "Complete pricing catalog for 82+ printing, signage, packaging and promotional products in Tanzania",
    numberOfItems: sortedProducts.length,
    itemListElement: sortedProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}/products/${p.slug}`,
      item: {
        "@type": "Product",
        name: p.name,
        url: `${baseUrl}/products/${p.slug}`,
        image: `${baseUrl}${p.image}`,
        description: p.description,
        brand: { "@type": "Brand", name: "Packard Promo" },
        category: p.serviceTitle,
        offers: {
          "@type": "Offer",
          priceCurrency: "TZS",
          price: p.startingPrice,
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${baseUrl}/products/${p.slug}`,
        },
      },
    })),
  };

  const breadcrumbData = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does business card printing cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business cards start at TZS 18,000 for 100 pieces. Deluxe cards from TZS 25,000. Executive cards from TZS 35,000. Prices include full-color printing on premium 350gsm+ card stock.",
        },
      },
      {
        "@type": "Question",
        name: "How much does t-shirt printing cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Branded T-shirts start at TZS 8,500 per piece (minimum 25 pieces). Polo shirts from TZS 14,000. Prices depend on print method (screen print, DTG, embroidery) and quantity.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a shop signboard cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shop signboards start at TZS 180,000 for standard ACP signs. LED illuminated signs from TZS 85,000. Premium 3D signs from TZS 85,000. Includes design and installation.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle branding cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full car wraps start at TZS 350,000 per vehicle using premium 3M or Avery vinyl. Wheel covers from TZS 12,000. Fleet discounts available for 5+ vehicles.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest printing product at Packard Promo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NCR Receipt Books start at TZS 180 per book (minimum 1,000). Paper Wristbands from TZS 350. Packaging Labels from TZS 180. These are the most affordable products.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods does Packard Promo accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept Cash, Mobile Money (M-Pesa, Tigo Pesa, Airtel Money), Bank Transfer, and corporate invoicing for approved clients.",
        },
      },
      {
        "@type": "Question",
        name: "How long does printing take in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Same-day printing is available for business cards, flyers, and posters in Dar es Salaam. Standard turnaround is 1-3 business days. Large format and signage: 3-10 business days. Packaging: 10-21 business days.",
        },
      },
      {
        "@type": "Question",
        name: "Does Packard Promo deliver across Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same-day delivery in Dar es Salaam. Next-day to Zanzibar, Arusha, Dodoma. 2-3 days to Mwanza, Mbeya, Morogoro, Tanga and all major Tanzanian cities.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="pricing-itemlist-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="pricing-faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Script
        id="pricing-breadcrumb-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <PricingContent products={sortedProducts} />
    </>
  );
}
