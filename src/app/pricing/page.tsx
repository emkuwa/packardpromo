import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/data";
import { defaultMetadata, breadcrumbSchema } from "@/lib/seo";
import PricingContent from "./PricingContent";

const baseUrl = siteConfig.url;

export const metadata: Metadata = defaultMetadata(
  "Printing Prices in Tanzania 2026 | Business Cards, T-Shirts, Signage, Vehicle Wraps | Packard Promo",
  "Packard Promo printing prices in Tanzania: Business cards from TZS 18,000, T-shirts from TZS 8,500, shop signboards from TZS 180,000, vehicle wraps from TZS 350,000. 82+ products with transparent pricing, minimum orders and lead times. Instant AI quotes available 24/7.",
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
          text: "Business cards at Packard Promo start at TZS 18,000 for 100 standard cards on 350gsm+ card stock with matte, gloss or soft-touch lamination. Deluxe business cards cost from TZS 25,000. Executive business cards on 600gsm cotton with foil stamping cost from TZS 35,000. Same-day printing is available in Dar es Salaam. Premium finishes (foil, spot UV, edge painting) take 2-3 business days.",
        },
      },
      {
        "@type": "Question",
        name: "How much does t-shirt printing cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom branded T-shirts at Packard Promo start at TZS 8,500 per piece with a minimum order of 25 pieces. Polo shirts start at TZS 14,000. Prices depend on print method: screen print (1-6 colors), DTG (direct-to-garment, full color), heat transfer vinyl, or embroidery. Materials include 100% cotton (180-200gsm), poly-cotton blend, performance polyester (dri-fit), and organic cotton. Sizes range from XS to 3XL.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a shop signboard cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shop signboards at Packard Promo start at TZS 180,000 for standard ACP (aluminum composite panel) signs. LED illuminated signs from TZS 85,000. Premium 3D acrylic signs from TZS 65,000. Reception wall signs from TZS 125,000. Retail storefront branding from TZS 250,000. All prices include design and installation. LED modules are rated for 50,000+ hours with 5-7 year outdoor durability.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle branding cost in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full vehicle wraps at Packard Promo start at TZS 350,000 per vehicle using premium 3M IJ180Cv3 or Avery Dennison MPI 1105 cast vinyl with anti-graffiti laminate. Wraps last 5-7 years in East African conditions. Wheel covers from TZS 12,000 (minimum 4). Fleet discounts available for 5+ vehicles with mobile installation teams deployed to your premises.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest printing product at Packard Promo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NCR Receipt Books start at TZS 180 per book (minimum 1,000 books). Packaging Labels start at TZS 180 per label (minimum 1,000). Branded Pens start at TZS 950 each (minimum 100). Key Holders from TZS 1,800 (minimum 100). These are the most affordable products in the Packard Promo catalog of 82+ items.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods does Packard Promo accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Packard Promo accepts Cash, Mobile Money (M-Pesa, Tigo Pesa, Airtel Money), Bank Transfer, and corporate invoicing for approved clients. All prices are quoted in Tanzanian Shillings (TZS). Payment terms for corporate clients can be arranged upon credit approval.",
        },
      },
      {
        "@type": "Question",
        name: "How long does printing take in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Same-day printing is available for business cards, flyers, and posters in Dar es Salaam when artwork is ready. Standard turnaround is 1-3 business days for most stationery products. Large format printing (banners, roll-ups): 2-5 business days. Signage (shop signboards, LED signs): 5-10 business days. Packaging (folding cartons, food packaging): 10-21 business days. Offset printing (books, magazines): 7-14 business days.",
        },
      },
      {
        "@type": "Question",
        name: "Does Packard Promo deliver across Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Packard Promo delivers same-day in Dar es Salaam, next-day to Zanzibar, Arusha, and Dodoma, and within 2-3 days to Mwanza, Mbeya, Morogoro, Tanga and all major Tanzanian cities. The company has served 8+ cities across Tanzania for 14+ years with 99% on-time delivery rate.",
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
