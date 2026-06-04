import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import MostOrderedTanzania from "@/components/home/MostOrderedTanzania";
import VisualCategoryNav from "@/components/home/VisualCategoryNav";
import ProductSearch from "@/components/home/ProductSearch";
import MostRequestedProducts from "@/components/home/MostRequestedProducts";
import VisualProductCategories from "@/components/home/VisualProductCategories";
import QualityShowcase from "@/components/home/QualityShowcase";
import CategoryImageGrid from "@/components/home/CategoryImageGrid";
import ProductGallery from "@/components/home/ProductGallery";
import ProductionFacility from "@/components/home/ProductionFacility";
import NeedItFast from "@/components/home/NeedItFast";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import LocationsSection from "@/components/home/LocationsSection";
import AiTools from "@/components/home/AiTools";
import ContactCTA from "@/components/home/ContactCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientTrust from "@/components/home/ClientTrust";
import FinalCTA from "@/components/home/FinalCTA";
import { heroStats, siteConfig } from "@/lib/data";
import { homePageSchema, homepageFaqSchema } from "@/lib/seo";

const homeTitle = "Printing, Signage, Packaging & Promotional Products in Tanzania";
const homeDescription =
  "Packard Promo provides printing services, signage, packaging, promotional products and corporate branding in Dar es Salaam and across Tanzania. Request online quotes and nationwide delivery.";
const homeOgImage = `${siteConfig.url}/images/og-default.jpg`;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    title: `${homeTitle} | Packard Promo`,
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_TZ",
    type: "website",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "Packard Promo printing, signage, packaging and promotional products in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | Packard Promo`,
    description: homeDescription,
    images: [homeOgImage],
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="website-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
          }),
        }}
      />
      <Script
        id="homepage-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema()) }}
      />
      <Script
        id="homepage-faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema()) }}
      />

      {/* Hero with product visuals */}
      <HeroSection stats={heroStats} />

      {/* Compact brand trust strip */}
      <TrustedBy />

      {/* Most ordered products in Tanzania - large images */}
      <MostOrderedTanzania />

      {/* Visual category navigation */}
      <VisualCategoryNav />

      {/* Quick product search */}
      <ProductSearch />

      {/* Most requested products with prices */}
      <MostRequestedProducts />

      {/* Visual category showcase */}
      <VisualProductCategories />

      {/* Quality showcase / close-up gallery */}
      <QualityShowcase />

      {/* Category image grids */}
      <CategoryImageGrid />

      {/* Full product gallery */}
      <ProductGallery />

      {/* Express services */}
      <NeedItFast />

      {/* Production capabilities */}
      <ProductionFacility />

      {/* Portfolio / Featured projects */}
      <FeaturedProjects />

      {/* Industry solutions */}
      <IndustrySolutions />

      {/* Service areas */}
      <LocationsSection />

      {/* AI tools section */}
      <AiTools />

      {/* Conversion: Why Choose Us (4 cards) */}
      <WhyChooseUs />

      {/* Conversion: Client trust message */}
      <ClientTrust />

      {/* Conversion: Final CTA before footer */}
      <FinalCTA />

      {/* Final CTA */}
      <ContactCTA />
    </>
  );
}
