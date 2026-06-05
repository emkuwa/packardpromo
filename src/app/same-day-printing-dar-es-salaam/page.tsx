import type { Metadata } from "next";
import Script from "next/script";
import { defaultMetadata, faqSchema } from "@/lib/seo";
import SameDayPrintingContent from "./SameDayPrintingContent";

export const metadata: Metadata = defaultMetadata(
  "Same-Day Printing in Dar es Salaam | Packard Promo",
  "Same-day printing in Dar es Salaam for businesses, NGOs, schools, hotels & events. Business cards, flyers, banners & more. Free delivery in DSM. Call 0716 002 790.",
  "/same-day-printing-dar-es-salaam"
);

export function generateFAQStructuredData() {
  return faqSchema([
    {
      q: "What is same-day printing?",
      a: "Same-day printing means your order is ready for pickup the same business day. Place your order before noon with ready artwork for same-day service."
    },
    {
      q: "How much does same-day printing cost?",
      a: "Pricing varies by product. Business cards start at TSh 150/pcs, flyers from TSh 500/100 pcs, banners from TSh 8,000, stickers from TSh 300/50 pcs. Use our instant quote tool for exact pricing."
    },
    {
      q: "Can I pay by M-Pesa or bank transfer?",
      a: "Yes. We accept M-Pesa, bank transfer, and cash payments. Mobile money is our preferred payment method for quick transactions."
    },
    {
      q: "Can I order from outside Dar es Salaam?",
      a: "Yes. Orders from outside Dar es Salaam qualify for next-day delivery to major cities including Arusha, Mwanza, Mbeya, Zanzibar and Dodoma."
    },
    {
      q: "What file formats do you accept?",
      a: "We accept PDF, AI, EPS, PNG, JPG formats. PDF is preferred for best quality and color accuracy."
    },
    {
      q: "Can I get same-day service if I miss the noon cutoff?",
      a: "Orders placed after noon qualify for 24-hour express service. Contact us for urgent requests - we often accommodate same-day for critical jobs."
    },
    {
      q: "Do you deliver for same-day orders?",
      a: "Free delivery is available within Dar es Salaam for orders over TSh 50,000. Place your order before 10am for same-day delivery eligibility."
    }
  ]);
}

export default function SameDayPrintingPage() {
  return <>
    <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQStructuredData()) }} />
    <SameDayPrintingContent />
  </>;
}