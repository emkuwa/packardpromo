import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ProductSearch from "@/components/home/ProductSearch";
import MostRequestedProducts from "@/components/home/MostRequestedProducts";
import VisualProductCategories from "@/components/home/VisualProductCategories";
import QualityShowcase from "@/components/home/QualityShowcase";
import NeedItFast from "@/components/home/NeedItFast";
import ProductionFacility from "@/components/home/ProductionFacility";
import AiTools from "@/components/home/AiTools";
import MultiStepQuote from "@/components/home/MultiStepQuote";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import LocationsSection from "@/components/home/LocationsSection";
import ContactCTA from "@/components/home/ContactCTA";
import { heroStats, siteConfig } from "@/lib/data";

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
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            potentialAction: {
              "@type": "SearchAction",
              target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <HeroSection stats={heroStats} />
      <TrustedBy />
      
      {/* Quick Product Search */}
      <ProductSearch />
      
      {/* Popular Products with Prices */}
      <MostRequestedProducts />
      
      {/* Visual Product Categories Grid */}
      <VisualProductCategories />
      
      {/* Quality Showcase / Close-up Gallery */}
      <QualityShowcase />
      
      {/* Express Services */}
      <NeedItFast />
      
      {/* Production Capabilities */}
      <ProductionFacility />
      
      {/* AI Tools Section */}
      <AiTools />
      
      {/* Portfolio / Featured Projects */}
      <FeaturedProjects />
      
      {/* Industry Solutions */}
      <IndustrySolutions />
      
      {/* Service Areas */}
      <LocationsSection />
      
      {/* Final CTA */}
      <ContactCTA />
    </>
  );
}