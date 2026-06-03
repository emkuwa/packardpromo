import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ProductSearch from "@/components/home/ProductSearch";
import MostRequestedProducts from "@/components/home/MostRequestedProducts";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import BestSellers from "@/components/home/BestSellers";
import ProductionFacility from "@/components/home/ProductionFacility";
import AiTools from "@/components/home/AiTools";
import MultiStepQuote from "@/components/home/MultiStepQuote";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import ResultsImpact from "@/components/home/ResultsImpact";
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
      <ProductSearch />
      <MostRequestedProducts />
      <CategoryShowcase />
      <BestSellers />
      <ProductionFacility />
      <AiTools />
      <MultiStepQuote />
      <FeaturedProjects />
      <IndustrySolutions />
      <ResultsImpact />
      <LocationsSection />
      <ContactCTA />
    </>
  );
}
