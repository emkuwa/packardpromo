"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const industries = [
  { id: "food", label: "Food & Beverage", icon: "🍞" },
  { id: "cosmetic", label: "Cosmetics & Beauty", icon: "💄" },
  { id: "pharma", label: "Pharmaceutical", icon: "💊" },
  { id: "retail", label: "Retail & Apparel", icon: "👕" },
  { id: "tech", label: "Electronics & Tech", icon: "📱" },
  { id: "gift", label: "Gifts & Premiums", icon: "🎁" },
  { id: "industrial", label: "Industrial / Hardware", icon: "🔧" },
  { id: "other", label: "Other", icon: "📦" },
];

const productTypes = [
  { id: "solid", label: "Solid product" },
  { id: "powder", label: "Powder / Granules" },
  { id: "liquid", label: "Liquid" },
  { id: "fragile", label: "Fragile / Glass" },
  { id: "multi", label: "Multi-pack / Variety" },
];

const volumes = [
  { id: "small", label: "Up to 1,000 / month", min: 100, max: 1000 },
  { id: "medium", label: "1,000 – 10,000 / month", min: 1000, max: 10000 },
  { id: "large", label: "10,000 – 100,000 / month", min: 10000, max: 100000 },
  { id: "xl", label: "100,000+ / month", min: 100000, max: 1000000 },
];

const budgets = [
  { id: "low", label: "TZS 200 – 500 / unit", range: [200, 500] },
  { id: "mid", label: "TZS 500 – 1,500 / unit", range: [500, 1500] },
  { id: "high", label: "TZS 1,500 – 5,000 / unit", range: [1500, 5000] },
  { id: "premium", label: "TZS 5,000+ / unit", range: [5000, 10000] },
];

interface Recommendation {
  format: string;
  material: string;
  finish: string;
  print: string;
  minOrder: string;
  leadTime: string;
  estimatedCost: string;
  notes: string;
  whatsappText: string;
}

function recommend(industry: string, productType: string, volume: string, budget: string): Recommendation {
  const v = volumes.find((x) => x.id === volume)!;
  const b = budgets.find((x) => x.id === budget)!;

  if (industry === "food") {
    return {
      format: productType === "liquid" ? "Bottle + sleeve label + outer carton" : productType === "powder" ? "Stand-up pouch + outer carton" : "Folding carton (auto-bottom or tuck-end)",
      material: productType === "liquid" ? "PE/PET bottle, BOPP label" : "Food-grade SBS / kraft with food-safe lining",
      finish: b.id === "premium" ? "Soft-touch laminate + gold foil" : b.id === "high" ? "Matte laminate + spot UV" : "Matte or gloss lamination",
      print: v.max > 10000 ? "Offset CMYK + spot color" : "Digital CMYK",
      minOrder: v.max > 10000 ? "5,000 units" : "1,000 units",
      leadTime: "10–18 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.8).toFixed(0)} – TZS ${(b.range[1] * 1.2).toFixed(0)} per unit`,
      notes: "Food-safe inks (low migration, FDA/EU compliant). TMDA / TBS compliant options. We can produce food-grade dieline, structural mockup, and shelf-ready shippers. Consider compostable PLA for eco positioning.",
      whatsappText: `Hi Packard Promo, I need food packaging. Industry: Food & Beverage, Product type: ${productTypes.find((p) => p.id === productType)?.label}, Volume: ${v.label}. Please share a quote.`,
    };
  }
  if (industry === "cosmetic") {
    return {
      format: b.id === "premium" ? "Rigid gift box with magnetic closure" : "Folding carton (reverse tuck or auto-bottom)",
      material: b.id === "premium" ? "Rigid grayboard wrapped in pearl / soft-touch paper" : "Premium SBS (350gsm+) with lamination",
      finish: b.id === "premium" ? "Soft-touch laminate + gold foil + emboss + flocked interior" : "Matte laminate + spot UV + foil logo",
      print: "Offset CMYK + spot Pantone colors",
      minOrder: b.id === "premium" ? "500 units" : "1,000 units",
      leadTime: "14–21 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.9).toFixed(0)} – TZS ${(b.range[1] * 1.3).toFixed(0)} per unit`,
      notes: "Cosmetics need shelf presence — we recommend foil + spot UV. We can produce 3D mockups before production. Compatible with bottles, jars and tubes. Premium rigid boxes typically have 30–50% perceived value uplift over standard folding cartons.",
      whatsappText: `Hi Packard Promo, I need cosmetic packaging. Budget: ${b.label}. Please share your cosmetic packaging catalog.`,
    };
  }
  if (industry === "pharma") {
    return {
      format: "Folding carton + patient information leaflet (PIL) + label",
      material: "Pharmaceutical-grade SBS / FBB with tamper-evident board",
      finish: "Matte or gloss lamination, optional UV varnish",
      print: "Offset CMYK + spot color + variable data (batch, expiry, barcode)",
      minOrder: "1,000 units",
      leadTime: "14–21 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.7).toFixed(0)} – TZS ${(b.range[1] * 1.1).toFixed(0)} per unit`,
      notes: "TMDA-compliant. We handle variable data printing (batch numbers, expiry dates, barcodes). Braille options available. Compatible with blister packs, bottles, and tubes. We work with your regulatory team to ensure all required information is included.",
      whatsappText: `Hi Packard Promo, I need pharmaceutical packaging. Volume: ${v.label}. Please share your pharma packaging options.`,
    };
  }
  if (industry === "retail") {
    return {
      format: productType === "fragile" ? "Corrugated mailer with custom insert" : "Folding carton (auto-bottom or reverse tuck) + hangtag",
      material: productType === "fragile" ? "E-flute corrugated + molded pulp insert" : "SBS / CCNB / kraft with optional lamination",
      finish: b.id === "premium" ? "Soft-touch + foil + spot UV" : "Matte or gloss lamination",
      print: v.max > 5000 ? "Offset CMYK + spot color" : "Digital CMYK",
      minOrder: v.max > 5000 ? "2,000 units" : "500 units",
      leadTime: "10–18 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.8).toFixed(0)} – TZS ${(b.range[1] * 1.2).toFixed(0)} per unit`,
      notes: "Shelf-ready packaging with tear-strip open. Hangtags, belly bands, and stickers can be added. For apparel, we also do branded tissue paper, stickers, and mailer boxes.",
      whatsappText: `Hi Packard Promo, I need retail packaging. Volume: ${v.label}. Please share your retail packaging options.`,
    };
  }
  if (industry === "tech") {
    return {
      format: "Rigid box with foam / cardboard insert",
      material: b.id === "premium" ? "Rigid board wrapped in soft-touch paper" : "Premium SBS (350gsm)",
      finish: b.id === "premium" ? "Soft-touch + spot UV + foil + custom foam insert" : "Matte laminate + spot UV",
      print: "Offset CMYK + spot color",
      minOrder: "500 units",
      leadTime: "14–21 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.9).toFixed(0)} – TZS ${(b.range[1] * 1.4).toFixed(0)} per unit`,
      notes: "Tech packaging needs protection + premium feel. Custom foam inserts (EVA, PE, pulp) protect your product. We can also produce user manuals, warranty cards, and branded stickers.",
      whatsappText: `Hi Packard Promo, I need tech/electronics packaging. Please share your premium tech packaging options.`,
    };
  }
  if (industry === "gift") {
    return {
      format: "Rigid magnetic-closure gift box or drawer box",
      material: "Rigid grayboard wrapped in art paper, leather-look or velvet",
      finish: "Gold/silver foil + ribbon pull + custom foam or card insert",
      print: "Offset CMYK + spot Pantone + foil stamping",
      minOrder: "100 units",
      leadTime: "14–21 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.9).toFixed(0)} – TZS ${(b.range[1] * 1.5).toFixed(0)} per unit`,
      notes: "Magnetic closure and drawer box formats add real perceived value. Add custom foam inserts, ribbon pulls, or flocked interiors. Perfect for VIP gifts, year-end corporate gifts, and luxury retail.",
      whatsappText: `Hi Packard Promo, I need gift boxes. Budget: ${b.label}. Please share your gift box catalog.`,
    };
  }
  if (industry === "industrial") {
    return {
      format: "Corrugated shipping carton + product label",
      material: "B-flute or E-flute corrugated + BOPP/PE label",
      finish: "Matte lamination, optional UV varnish on labels",
      print: "Offset CMYK + spot color",
      minOrder: "500 units",
      leadTime: "10–18 business days",
      estimatedCost: `TZS ${(b.range[0] * 0.7).toFixed(0)} – TZS ${(b.range[1] * 1.0).toFixed(0)} per unit`,
      notes: "Industrial packaging prioritizes durability and cost. We can add custom partitions, edge protectors, and stackable designs. Labels can be weatherproof and barcode-ready.",
      whatsappText: `Hi Packard Promo, I need industrial packaging. Volume: ${v.label}. Please share your industrial packaging options.`,
    };
  }
  return {
    format: "Custom — to be discussed",
    material: "Material based on your product and budget",
    finish: "Matte / gloss / soft-touch / foil options",
    print: "Offset or digital based on volume",
    minOrder: "1,000 units typical",
    leadTime: "10–18 business days",
    estimatedCost: "TZS 250 – 5,000 per unit",
    notes: "Tell us more about your product and we'll recommend the most cost-effective, high-impact packaging solution.",
    whatsappText: `Hi Packard Promo, I need custom packaging. Please contact me to discuss.`,
  };
}

export default function PackagingAdvisorPage() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState("");
  const [productType, setProductType] = useState("");
  const [volume, setVolume] = useState("");
  const [budget, setBudget] = useState("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else {
      setRecommendation(recommend(industry, productType, volume, budget));
    }
  };

  const reset = () => {
    setStep(1);
    setIndustry("");
    setProductType("");
    setVolume("");
    setBudget("");
    setRecommendation(null);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-500/60" />
            <span className="text-amber-400 text-xs uppercase tracking-[0.25em] font-semibold">AI Packaging Advisor</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Find the <span className="text-gradient" style={{ backgroundImage: "linear-gradient(135deg, #f1d488 0%, #e0bd6a 50%, #a87e2a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Perfect Packaging</span> in 4 Quick Questions
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Answer 4 questions about your industry, product, volume and budget — our AI will recommend the right packaging format, material, finish and print method.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!recommendation ? (
              <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-amber-400 text-xs uppercase tracking-wider font-semibold">Step {step} of 4</div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((s) => (
                      <div key={s} className={cn("h-1 w-10 rounded-full transition-all", s <= step ? "bg-amber-500" : "bg-white/10")} />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">What industry are you in?</h2>
                    <p className="text-silver-400 text-sm mb-5">This helps us recommend food-safe, pharma-compliant, or retail-grade materials.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {industries.map((i) => (
                        <button
                          key={i.id}
                          onClick={() => setIndustry(i.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-center transition-all",
                            industry === i.id
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="text-2xl mb-1">{i.icon}</div>
                          <div className="text-xs font-semibold">{i.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">What type of product?</h2>
                    <p className="text-silver-400 text-sm mb-5">Affects material choice — liquid needs barrier, fragile needs protection.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {productTypes.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setProductType(p.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            productType === p.id
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold">{p.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Monthly volume?</h2>
                    <p className="text-silver-400 text-sm mb-5">Higher volumes unlock better pricing (offset vs digital).</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {volumes.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setVolume(v.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            volume === v.id
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold">{v.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Per-unit budget?</h2>
                    <p className="text-silver-400 text-sm mb-5">Helps us recommend the right finish and print quality.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgets.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setBudget(b.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            budget === b.id
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold">{b.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10"
                    >
                      ← Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={(step === 1 && !industry) || (step === 2 && !productType) || (step === 3 && !volume) || (step === 4 && !budget)}
                    className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-packard-950 font-bold text-sm hover:from-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {step === 4 ? "Get Recommendation →" : "Continue →"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="rec" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-amber-500" />
                    <span className="text-amber-400 text-[10px] uppercase tracking-wider font-bold">Your Packaging Recommendation</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Format</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.format}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Material</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.material}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Finish</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.finish}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Print Method</div>
                      <div className="text-white text-sm font-semibold leading-relaxed">{recommendation.print}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Min Order</div>
                      <div className="text-white text-sm font-semibold">{recommendation.minOrder}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Lead Time</div>
                      <div className="text-white text-sm font-semibold">{recommendation.leadTime}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
                    <div className="text-emerald-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Estimated Cost</div>
                    <div className="text-white text-base font-bold">{recommendation.estimatedCost}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <p className="text-silver-300 text-sm leading-relaxed">{recommendation.notes}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/+255716002790?text=${encodeURIComponent(recommendation.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm hover:from-green-500 transition-all"
                    >
                      💬 Discuss with Packaging Specialist
                    </a>
                    <button
                      onClick={reset}
                      className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                    >
                      Start Over
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
