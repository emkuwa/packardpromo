import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import SabasabaContent from "./SabasabaContent";

const title = "Sabasaba Exhibition Branding & Printing Services | Dar es Salaam";
const description =
  "Complete Sabasaba exhibition branding services in Dar es Salaam. Exhibition stands, banners, promotional products, corporate gifts and printing for the Dar es Salaam International Trade Fair. Get your quote today.";

export const metadata: Metadata = {
  ...defaultMetadata(title, description, "/sabasaba-exhibition"),
  keywords: [
    "Sabasaba Tanzania",
    "Dar es Salaam International Trade Fair",
    "exhibition stand Tanzania",
    "exhibition branding Tanzania",
    "trade fair printing",
    "event branding Tanzania",
    "promotional products Tanzania",
    "corporate gifts Tanzania",
    "banner printing Dar es Salaam",
    "exhibition booth design Tanzania",
    "Sabasaba branding",
    "Sabasaba printing services",
  ],
};

function generateBreadcrumbLD() {
  return breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sabasaba Exhibition", url: "/sabasaba-exhibition" },
  ]);
}

function generateFAQStructuredData() {
  return faqSchema([
    {
      q: "What is Sabasaba (Dar es Salaam International Trade Fair)?",
      a: "Sabasaba, officially the Dar es Salaam International Trade Fair (DITF), is Tanzania's largest annual trade exhibition held every July at the Mwalimu J.K. Nyerere Grounds in Dar es Salaam. It attracts thousands of exhibitors and visitors from across East Africa and beyond.",
    },
    {
      q: "What branding materials do I need for Sabasaba?",
      a: "For a successful Sabasaba exhibition, you need an exhibition stand or booth, PVC banners, roll-up banners, teardrop flags, backdrop displays, promotional products (T-shirts, caps, corporate gifts), brochures, flyers, business cards, and signboards. Packard Promo provides all these materials in one place.",
    },
    {
      q: "How much does exhibition stand design cost in Tanzania?",
      a: "Exhibition stand design and fabrication costs vary based on size and complexity. A 3x3m modular stand starts at TZS 850,000. Custom island stands and large format booths are priced based on design requirements. Request a free quote for exact pricing.",
    },
    {
      q: "How far in advance should I order Sabasaba branding materials?",
      a: "We recommend ordering your Sabasaba exhibition materials 4-6 weeks before the event. Exhibition stands require 2-6 weeks for design and fabrication. Printed materials (banners, brochures, flyers) need 1-2 weeks. Promotional products may require 2-3 weeks depending on customization.",
    },
    {
      q: "Do you deliver exhibition materials within Dar es Salaam?",
      a: "Yes. We offer free delivery for exhibition materials within Dar es Salaam. We also provide on-site installation services at the Mwalimu J.K. Nyerere Grounds for exhibition stands, backdrops, and signage. Nationwide delivery is available for clients outside Dar es Salaam.",
    },
    {
      q: "Can you design and print custom promotional products for Sabasaba?",
      a: "Absolutely. We customise T-shirts, caps, corporate gifts, mugs, pens, power banks, USB drives, water bottles, and more with your brand logo. We offer screen printing, embroidery, sublimation, and laser engraving for a professional finish.",
    },
    {
      q: "What types of banners work best for outdoor exhibitions like Sabasaba?",
      a: "Heavy-duty PVC banners are ideal for outdoor exhibitions due to their weather resistance. Teardrop banners and feather flags are excellent for attracting attention. Roll-up banners work well for indoor booth areas. All our outdoor banners are UV-resistant and durable in Tanzanian weather conditions.",
    },
    {
      q: "Do you offer exhibition stand rental in Tanzania?",
      a: "Yes. We offer rental options for modular pop-up displays and exhibition stands. This is a cost-effective solution for short-term events like Sabasaba. Rental includes setup and breakdown. Custom-built stands can be stored at our facility for re-use at future events.",
    },
    {
      q: "Can I get a quote for all my Sabasaba branding needs in one request?",
      a: "Yes. Request a comprehensive quote covering all your Sabasaba exhibition needs — stand, banners, promotional products, printing, and signage. Our team provides a consolidated quote with pricing, timelines, and delivery details.",
    },
    {
      q: "Which payment methods do you accept for exhibition orders?",
      a: "We accept M-Pesa, bank transfer, and cash payments. For large exhibition orders, we offer flexible payment schedules including deposit upon order confirmation and final payment before delivery or installation.",
    },
  ]);
}

function generateWebPageLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/sabasaba-exhibition/#webpage`,
    url: `${siteConfig.url}/sabasaba-exhibition`,
    name: title,
    description: description,
    isPartOf: { "@type": "WebSite", "@id": `${siteConfig.url}/#website` },
    about: [
      { "@type": "Thing", name: "Sabasaba Exhibition" },
      { "@type": "Thing", name: "Dar es Salaam International Trade Fair" },
      { "@type": "Thing", name: "Exhibition Stand Design" },
      { "@type": "Thing", name: "Trade Fair Branding" },
      { "@type": "Thing", name: "Event Printing Tanzania" },
    ],
    primaryImageOfPage: { "@type": "ImageObject", url: `${siteConfig.url}/images/og-default.jpg` },
    breadcrumb: generateBreadcrumbLD(),
  };
}

export default function SabasabaPage() {
  return (
    <>
      <Script id="breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbLD()) }} />
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
      <Script id="webpage-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebPageLD()) }} />
      <SabasabaContent />
    </>
  );
}
