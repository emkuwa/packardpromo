"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const suggestions = [
  "100 branded polo shirts for a corporate event",
  "I need 5,000 flyers for a product launch",
  "Car branding for my new business",
  "Wedding invitations for 200 guests",
  "Packaging for a new skincare line",
  "Banners and backdrops for a conference",
  "School branded uniforms and notebooks",
  "Restaurant menu redesign and printing",
  "Promotional gift sets for our top 50 clients",
  "Vehicle wrap for my delivery van",
];

interface Recommendation {
  product: string;
  type: string;
  branding: string;
  quantity: number;
  priceRange: string;
  notes: string;
  whatsappText: string;
}

function analyze(prompt: string): Recommendation {
  const p = prompt.toLowerCase();

  if (p.includes("polo")) {
    const qtyMatch = p.match(/(\d+)\s*(?:branded|piece|pcs|units)?\s*polo/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 50;
    return {
      product: "Custom Embroidered Polo Shirts",
      type: "Cotton-poly pique polo, 200gsm, with embroidered logo on chest",
      branding: "Embroidery (premium corporate finish)",
      quantity: qty,
      priceRange: `TZS ${(qty * 12500).toLocaleString()} – TZS ${(qty * 17500).toLocaleString()}`,
      notes: "Standard sizing S–3XL. Lead time 7–14 days. We recommend ordering 10% extra to cover sizing variations. Setup fee waived for 50+ units.",
      whatsappText: `Hi Packard Promo, I'd like to order ${qty} custom branded polo shirts. Please share a formal quote with available colors.`,
    };
  }
  if (p.includes("tshirt") || p.includes("t-shirt")) {
    const qtyMatch = p.match(/(\d+)\s*(?:branded|piece|pcs|units)?\s*(?:t-?shirt|t shirt)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    return {
      product: "Custom Branded T-Shirts",
      type: qty > 200 ? "Heavy 200gsm cotton, screen printed" : "180gsm cotton, DTF or screen printed",
      branding: qty > 100 ? "Screen print (best value at volume)" : "DTF / heat transfer (good for full color)",
      quantity: qty,
      priceRange: `TZS ${(qty * 7500).toLocaleString()} – TZS ${(qty * 12000).toLocaleString()}`,
      notes: "Cotton, poly-cotton, or dri-fit available. Sizing XS–3XL. Lead time 5–10 business days. Discount tiers at 100/250/500/1000+ units.",
      whatsappText: `Hi Packard Promo, I'd like to order ${qty} custom branded t-shirts. Please share a formal quote with fabric options.`,
    };
  }
  if (p.includes("flyer")) {
    const qtyMatch = p.match(/(\d+)\s*flyer/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1000;
    return {
      product: "A5 Flyers (single or double-sided)",
      type: "150gsm gloss art, full color CMYK",
      branding: "Digital print (best for 100–2,000 units); offset for 5,000+",
      quantity: qty,
      priceRange: `TZS ${(qty * 220).toLocaleString()} – TZS ${(qty * 450).toLocaleString()}`,
      notes: "Standard A5 (148×210mm). Lead time 24–48 hours. A4, A6, DL also available. Folding and scoring optional.",
      whatsappText: `Hi Packard Promo, I'd like to order ${qty} A5 flyers. Please confirm pricing and turnaround.`,
    };
  }
  if (p.includes("car") || p.includes("vehicle") || p.includes("van") || p.includes("branding my car")) {
    return {
      product: "Vehicle Branding (Car / Van)",
      type: p.includes("full") || p.includes("wrap") ? "Full vehicle wrap with premium 3M cast vinyl" : "Strategic decal placement (partial branding)",
      branding: "3M IJ180Cv3 cast vinyl with anti-graffiti laminate",
      quantity: 1,
      priceRange: "TZS 350,000 – TZS 1,200,000 per vehicle",
      notes: "Durability 5–7 years. Free site survey in Dar. 2–4 day installation. Removable without paint damage. We also do fleets — discount on 5+ vehicles.",
      whatsappText: `Hi Packard Promo, I'd like to brand my vehicle. Please book a free site survey.`,
    };
  }
  if (p.includes("banner") || p.includes("rollup") || p.includes("roll-up")) {
    return {
      product: p.includes("rollup") || p.includes("roll-up") ? "Roll-up Banner" : "PVC Banner",
      type: p.includes("rollup") || p.includes("roll-up") ? "Retractable roll-up stand with printed graphic (85×200cm standard)" : "440gsm PVC banner, hemmed with eyelets",
      branding: "Large-format digital print, UV-stable inks",
      quantity: 1,
      priceRange: p.includes("rollup") || p.includes("roll-up") ? "TZS 55,000 – TZS 95,000 per unit" : "TZS 12,000 – TZS 25,000 per square meter",
      notes: p.includes("rollup") || p.includes("roll-up") ? "Carrying bag included. 1–3 day turnaround." : "Same-day to 3-day turnaround. Hemming and eyelets standard.",
      whatsappText: `Hi Packard Promo, I'd like to order a banner. Please confirm price and turnaround.`,
    };
  }
  if (p.includes("wedding") || p.includes("invitation")) {
    const qtyMatch = p.match(/(\d+)\s*(?:guests?|invitations?)?/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    return {
      product: "Wedding Invitation Suite",
      type: "Premium 300gsm card with foil stamping, custom design",
      branding: "Digital print with gold/silver foil accents, envelope matching",
      quantity: qty,
      priceRange: `TZS ${(qty * 1500).toLocaleString()} – TZS ${(qty * 4500).toLocaleString()}`,
      notes: "Includes main invite + RSVP card + envelope. Bilingual (English + Swahili) available. Lead time 7–14 days. Free design consultation.",
      whatsappText: `Hi Packard Promo, I'd like wedding invitations for ${qty} guests. Please share your wedding package.`,
    };
  }
  if (p.includes("packaging") || p.includes("box") || p.includes("carton")) {
    return {
      product: "Custom Product Packaging",
      type: p.includes("food") ? "Food-grade folding cartons (TBS compliant)" : p.includes("cosmetic") || p.includes("skincare") ? "Premium rigid boxes with foil stamping" : "Standard folding cartons (SBS or CCNB)",
      branding: "Offset print CMYK + spot colors, lamination, foil & embossing options",
      quantity: 1000,
      priceRange: "TZS 180 – TZS 1,800 per unit (depending on format and finish)",
      notes: "Free dieline design. Food-safe inks for food packaging. Lead time 10–18 days. Sample run available at 100 units.",
      whatsappText: `Hi Packard Promo, I need custom packaging. Please share your packaging options.`,
    };
  }
  if (p.includes("school") || p.includes("uniform") || p.includes("student")) {
    return {
      product: "School Branding Package",
      type: "Branded uniforms, exercise books, banners, and signage",
      branding: "Embroidery on uniforms, screen print on books, vinyl banners",
      quantity: 1,
      priceRange: "Custom quote (typically TZS 1.5M – TZS 8M depending on size)",
      notes: "Full school branding rollouts: uniforms, books, banners, signage, certificates, ID cards. We work with primary, secondary and universities. Free design consultation.",
      whatsappText: `Hi Packard Promo, I'm interested in a school branding package. Please schedule a consultation.`,
    };
  }
  if (p.includes("menu") || p.includes("restaurant")) {
    return {
      product: "Restaurant Menu Design & Print",
      type: "Laminated menus (A4 or A5), wipe-clean",
      branding: "Digital print on 250–300gsm card with matte or gloss lamination",
      quantity: 25,
      priceRange: "TZS 35,000 – TZS 95,000 (25+ units)",
      notes: "Single-page, multi-page, or wiro-bound options. Bilingual (English + Swahili). Lead time 5–7 days. We can also do branded coasters, table tents, and signage.",
      whatsappText: `Hi Packard Promo, I'd like to design and print restaurant menus. Please share your menu packages.`,
    };
  }
  if (p.includes("gift") || p.includes("corporate gift")) {
    return {
      product: "Corporate Gift Sets",
      type: "Curated gift set: branded diary + pen + mug + bottle in premium box",
      branding: "Embroidery, debossing, laser engraving, full-color print",
      quantity: 50,
      priceRange: `TZS ${(50 * 18000).toLocaleString()} – TZS ${(50 * 75000).toLocaleString()}`,
      notes: "Custom mix-and-match. Premium magnetic closure gift boxes. Bilingual cards. Lead time 14–28 days. Suitable for VIP clients, year-end gifts, conferences.",
      whatsappText: `Hi Packard Promo, I'd like to order corporate gift sets. Please share your gift catalog.`,
    };
  }
  if (p.includes("backdrop") || p.includes("event") || p.includes("conference")) {
    return {
      product: "Event Branding Package",
      type: "Backdrop + rollup banners + table throw + registration counter",
      branding: "Tension fabric or pop-up display with custom print",
      quantity: 1,
      priceRange: "TZS 350,000 – TZS 2,500,000 (depends on scale)",
      notes: "Full event branding: stage backdrop, step-and-repeat, registration desk, lanyards, delegate bags. We handle setup across Tanzania. Lead time 5–14 days.",
      whatsappText: `Hi Packard Promo, I need event branding for a conference. Please share your event packages.`,
    };
  }

  return {
    product: "Custom Printing Solution",
    type: "Tell us more specifics (product, quantity, materials) and we'll recommend the right solution",
    branding: "Multiple options available — screen print, digital, offset, embroidery, engraving",
    quantity: 100,
    priceRange: "TZS 50,000 – TZS 5,000,000+ (depending on spec)",
    notes: "For more specific recommendations, try mentioning: product type, quantity, use case, timeline, and any material preferences.",
    whatsappText: `Hi Packard Promo, I have a printing/branding project. Please help me find the right solution.`,
  };
}

export default function PrintConsultantPage() {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleSubmit = (text?: string) => {
    const final = text || prompt;
    if (!final.trim()) return;
    setPrompt(final);
    setRecommendation(analyze(final));
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-packard-500/15 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-packard-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-packard-500/60" />
            <span className="text-packard-300 text-xs uppercase tracking-[0.25em] font-semibold">AI Print Consultant</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Tell Us What You Need. <span className="text-gradient">We'll Recommend the Best Solution.</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Skip the back-and-forth. Describe your project in plain language — like texting a friend — and our AI consultant will recommend the right product, branding method, quantity, and budget.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-packard-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-packard-500 to-packard-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Packard Promo AI Consultant</div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · ready to help
                  </div>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="mb-5">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={3}
                  placeholder="Type your request here... e.g., 'I need 100 branded polo shirts for our annual corporate event'"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-packard-500/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full mt-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-packard-500 to-packard-400 text-white font-bold text-sm hover:from-packard-400 transition-all"
                >
                  Get Recommendation →
                </button>
              </form>

              <div className="text-[10px] text-silver-500 uppercase tracking-wider font-semibold mb-2">Try these examples:</div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSubmit(s)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-300 hover:bg-white/10 hover:border-packard-500/30 transition-all text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {submitted && recommendation && (
              <motion.div
                key="rec"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
              >
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-promo-500/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-promo-500" />
                    <span className="text-promo-400 text-[10px] uppercase tracking-wider font-bold">AI Recommendation</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{recommendation.product}</h2>
                  <p className="text-silver-400 text-sm mb-5">{recommendation.type}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-xl bg-packard-500/10 border border-packard-500/20">
                      <div className="text-packard-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Recommended Branding</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.branding}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-promo-500/10 border border-promo-500/20">
                      <div className="text-promo-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Suggested Quantity</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.quantity.toLocaleString()} units</div>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 sm:col-span-2">
                      <div className="text-emerald-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Estimated Budget</div>
                      <div className="text-white text-base md:text-lg font-bold">{recommendation.priceRange}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-2">Notes & Recommendations</div>
                    <p className="text-silver-300 text-sm leading-relaxed">{recommendation.notes}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/+255716002790?text=${encodeURIComponent(recommendation.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm hover:from-green-500 transition-all"
                    >
                      💬 Discuss with Sales on WhatsApp
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setPrompt(""); }}
                      className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                    >
                      Ask Another Question
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
