"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { defaultMetadata, serviceSchema, faqSchema } from "@/lib/seo";

const products = [
  { id: "business-cards", name: "Business Cards", basePrice: 180, minQty: 100, multiplier: 1, leadDays: 1, category: "Digital Printing" },
  { id: "flyers", name: "Flyers (A5)", basePrice: 250, minQty: 100, multiplier: 1, leadDays: 2, category: "Digital Printing" },
  { id: "brochures", name: "Brochures (Bi-fold)", basePrice: 1500, minQty: 50, multiplier: 1, leadDays: 4, category: "Digital Printing" },
  { id: "posters", name: "Posters (A2)", basePrice: 8000, minQty: 10, multiplier: 1, leadDays: 1, category: "Digital Printing" },
  { id: "stickers", name: "Stickers (Die-cut)", basePrice: 150, minQty: 100, multiplier: 1, leadDays: 3, category: "Digital Printing" },
  { id: "menus", name: "Restaurant Menus", basePrice: 1400, minQty: 25, multiplier: 1, leadDays: 4, category: "Digital Printing" },
  { id: "books", name: "Books (200pp perfect bound)", basePrice: 9000, minQty: 200, multiplier: 1, leadDays: 14, category: "Offset Printing" },
  { id: "magazines", name: "Magazines (48pp)", basePrice: 1900, minQty: 500, multiplier: 1, leadDays: 12, category: "Offset Printing" },
  { id: "annual-reports", name: "Annual Reports (40pp)", basePrice: 12000, minQty: 100, multiplier: 1, leadDays: 10, category: "Offset Printing" },
  { id: "pvc-banner", name: "PVC Banner (per sqm)", basePrice: 12000, minQty: 1, multiplier: 1, leadDays: 2, category: "Large Format" },
  { id: "rollup", name: "Roll-up Banner", basePrice: 55000, minQty: 1, multiplier: 1, leadDays: 3, category: "Large Format" },
  { id: "backdrop", name: "Event Backdrop", basePrice: 145000, minQty: 1, multiplier: 1, leadDays: 5, category: "Large Format" },
  { id: "billboard", name: "Billboard (6×3m)", basePrice: 350000, minQty: 1, multiplier: 1, leadDays: 7, category: "Large Format" },
  { id: "cartons", name: "Folding Cartons", basePrice: 250, minQty: 1000, multiplier: 1, leadDays: 12, category: "Packaging" },
  { id: "food-pkg", name: "Food Packaging", basePrice: 180, minQty: 1000, multiplier: 1, leadDays: 12, category: "Packaging" },
  { id: "gift-boxes", name: "Gift Boxes (rigid)", basePrice: 1800, minQty: 100, multiplier: 1, leadDays: 18, category: "Packaging" },
  { id: "shop-sign", name: "Shop Signboard", basePrice: 180000, minQty: 1, multiplier: 1, leadDays: 10, category: "Signage" },
  { id: "led-sign", name: "LED Channel Letters", basePrice: 85000, minQty: 1, multiplier: 1, leadDays: 12, category: "Signage" },
  { id: "lightbox", name: "Lightbox", basePrice: 65000, minQty: 1, multiplier: 1, leadDays: 8, category: "Signage" },
  { id: "car-wrap", name: "Car Wrap (full)", basePrice: 350000, minQty: 1, multiplier: 1, leadDays: 4, category: "Vehicle Branding" },
  { id: "bus-wrap", name: "Bus Wrap (full)", basePrice: 1500000, minQty: 1, multiplier: 1, leadDays: 6, category: "Vehicle Branding" },
  { id: "truck-wrap", name: "Truck Wrap", basePrice: 1200000, minQty: 1, multiplier: 1, leadDays: 5, category: "Vehicle Branding" },
  { id: "tshirt", name: "Branded T-shirts", basePrice: 8500, minQty: 25, multiplier: 1, leadDays: 8, category: "Promotional Products" },
  { id: "polo", name: "Branded Polos", basePrice: 14000, minQty: 25, multiplier: 1, leadDays: 10, category: "Promotional Products" },
  { id: "mug", name: "Branded Mugs", basePrice: 4500, minQty: 25, multiplier: 1, leadDays: 12, category: "Promotional Products" },
  { id: "cap", name: "Branded Caps", basePrice: 6500, minQty: 25, multiplier: 1, leadDays: 12, category: "Promotional Products" },
  { id: "pen", name: "Branded Pens", basePrice: 950, minQty: 100, multiplier: 1, leadDays: 18, category: "Promotional Products" },
  { id: "diary", name: "Branded Diaries", basePrice: 6500, minQty: 50, multiplier: 1, leadDays: 18, category: "Promotional Products" },
  { id: "bottle", name: "Branded Bottles", basePrice: 5500, minQty: 50, multiplier: 1, leadDays: 18, category: "Promotional Products" },
  { id: "stand", name: "Exhibition Stand", basePrice: 850000, minQty: 1, multiplier: 1, leadDays: 21, category: "Exhibition & Events" },
  { id: "popup", name: "Pop-up Display", basePrice: 145000, minQty: 1, multiplier: 1, leadDays: 5, category: "Exhibition & Events" },
];

const finishOptions: Record<string, { id: string; label: string; multiplier: number }[]> = {
  "Digital Printing": [
    { id: "matte", label: "Matte lamination", multiplier: 1.0 },
    { id: "gloss", label: "Gloss lamination", multiplier: 1.0 },
    { id: "soft", label: "Soft-touch lamination", multiplier: 1.4 },
    { id: "foil", label: "Gold/Silver foil", multiplier: 1.8 },
    { id: "spotuv", label: "Spot UV", multiplier: 1.5 },
  ],
  "Offset Printing": [
    { id: "matte", label: "Matte cover", multiplier: 1.0 },
    { id: "gloss", label: "Gloss cover", multiplier: 1.0 },
    { id: "soft", label: "Soft-touch + foil", multiplier: 1.5 },
  ],
  "Large Format": [
    { id: "std", label: "Standard PVC", multiplier: 1.0 },
    { id: "premium", label: "Premium 510gsm", multiplier: 1.4 },
    { id: "mesh", label: "Mesh (wind-resistant)", multiplier: 1.3 },
  ],
  "Packaging": [
    { id: "matte", label: "Matte lamination", multiplier: 1.0 },
    { id: "gloss", label: "Gloss lamination", multiplier: 1.0 },
    { id: "soft-foil", label: "Soft-touch + foil", multiplier: 1.7 },
    { id: "rigid", label: "Rigid premium", multiplier: 2.5 },
  ],
  "Signage": [
    { id: "non-lit", label: "Non-illuminated", multiplier: 1.0 },
    { id: "front-lit", label: "Front-lit LED", multiplier: 1.4 },
    { id: "halo", label: "Halo-lit LED", multiplier: 1.7 },
  ],
  "Vehicle Branding": [
    { id: "decal", label: "Decals only", multiplier: 0.6 },
    { id: "partial", label: "Partial wrap", multiplier: 1.0 },
    { id: "full", label: "Full wrap", multiplier: 1.6 },
  ],
  "Promotional Products": [
    { id: "screen", label: "Screen print", multiplier: 1.0 },
    { id: "embroidery", label: "Embroidery", multiplier: 1.3 },
    { id: "dtf", label: "DTF (full color)", multiplier: 1.2 },
    { id: "laser", label: "Laser engraving", multiplier: 1.4 },
  ],
  "Exhibition & Events": [
    { id: "modular", label: "Modular (reusable)", multiplier: 1.0 },
    { id: "custom", label: "Custom build", multiplier: 1.8 },
    { id: "premium", label: "Premium with LED", multiplier: 2.4 },
  ],
};

const deliveryLocations: { id: string; label: string; surcharge: number; extraDays: number }[] = [
  { id: "dar-cbd", label: "Dar es Salaam (CBD)", surcharge: 0, extraDays: 0 },
  { id: "dar-sub", label: "Dar es Salaam (Suburbs)", surcharge: 0.03, extraDays: 0 },
  { id: "zanzibar", label: "Zanzibar", surcharge: 0.05, extraDays: 2 },
  { id: "arusha", label: "Arusha", surcharge: 0.05, extraDays: 2 },
  { id: "dodoma", label: "Dodoma", surcharge: 0.05, extraDays: 2 },
  { id: "mwanza", label: "Mwanza", surcharge: 0.06, extraDays: 3 },
  { id: "mbeya", label: "Mbeya", surcharge: 0.07, extraDays: 3 },
  { id: "morogoro", label: "Morogoro", surcharge: 0.04, extraDays: 1 },
  { id: "tanga", label: "Tanga", surcharge: 0.05, extraDays: 2 },
  { id: "other", label: "Other Tanzania", surcharge: 0.08, extraDays: 4 },
];

const formatTZS = (n: number) => new Intl.NumberFormat("en-TZ").format(Math.round(n));

export default function QuoteGeneratorPage() {
  const [productId, setProductId] = useState("business-cards");
  const [quantity, setQuantity] = useState(500);
  const [size, setSize] = useState("standard");
  const [printingType, setPrintingType] = useState("digital");
  const [finish, setFinish] = useState("matte");
  const [location, setLocation] = useState("dar-cbd");
  const [rush, setRush] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const product = products.find((p) => p.id === productId)!;
  const finishes = finishOptions[product.category] || [];
  const loc = deliveryLocations.find((l) => l.id === location)!;
  const finishOpt = finishes.find((f) => f.id === finish);

  const result = useMemo(() => {
    const baseUnit = product.basePrice;
    const sizeMultiplier = size === "custom" ? 1.3 : size === "premium" ? 1.2 : 1.0;
    const finishMultiplier = finishOpt?.multiplier || 1.0;
    const qtyDiscount = quantity >= 1000 ? 0.85 : quantity >= 500 ? 0.9 : quantity >= 100 ? 0.95 : 1.0;
    const rushMultiplier = rush ? 1.4 : 1.0;
    const unitPrice = baseUnit * sizeMultiplier * finishMultiplier * qtyDiscount * rushMultiplier;
    const subtotal = unitPrice * quantity;
    const delivery = subtotal * loc.surcharge;
    const total = subtotal + delivery;
    const lowEstimate = total * 0.9;
    const highEstimate = total * 1.15;
    const totalDays = product.leadDays + loc.extraDays + (rush ? 0 : 0) - (rush ? Math.ceil(product.leadDays * 0.4) : 0);
    return {
      unitPrice,
      subtotal,
      delivery,
      total,
      lowEstimate,
      highEstimate,
      leadDays: Math.max(1, totalDays),
    };
  }, [product, quantity, size, finish, loc, rush, finishOpt]);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">AI Quote Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Get an <span className="text-gradient-promo">Instant Price Estimate</span> in 30 Seconds
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Select your product, enter your specs, and our AI generates a transparent price range, lead time, and recommended options. No email required.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-white mb-1">Tell us about your project</h2>
                <p className="text-silver-500 text-xs mb-6">All fields below are required for an accurate estimate</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">1. What do you need?</label>
                    <select
                      value={productId}
                      onChange={(e) => { setProductId(e.target.value); setShowResult(false); }}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50"
                    >
                      {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
                        <optgroup key={cat} label={cat} className="bg-packard-900">
                          {products.filter((p) => p.category === cat).map((p) => (
                            <option key={p.id} value={p.id} className="bg-packard-900">{p.name}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">2. Quantity</label>
                      <input
                        type="number"
                        min={product.minQty}
                        value={quantity}
                        onChange={(e) => { setQuantity(Math.max(product.minQty, parseInt(e.target.value) || product.minQty)); setShowResult(false); }}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50"
                      />
                      <p className="text-silver-600 text-[10px] mt-1">Min: {product.minQty} units · Bulk discounts at 100/500/1000+</p>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">3. Size</label>
                      <select
                        value={size}
                        onChange={(e) => { setSize(e.target.value); setShowResult(false); }}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50"
                      >
                        <option value="standard" className="bg-packard-900">Standard size</option>
                        <option value="premium" className="bg-packard-900">Premium (larger / thicker)</option>
                        <option value="custom" className="bg-packard-900">Custom size (+30%)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">4. Printing Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "digital", label: "Digital" },
                        { id: "offset", label: "Offset" },
                        { id: "large-format", label: "Large Format" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => { setPrintingType(opt.id); setShowResult(false); }}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                            printingType === opt.id
                              ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                              : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">5. Finish / Material</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {finishes.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => { setFinish(f.id); setShowResult(false); }}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                            finish === f.id
                              ? "bg-packard-500/20 border border-packard-500/40 text-packard-300"
                              : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                          }`}
                        >
                          {f.label}
                          {f.multiplier > 1.2 && <span className="text-promo-400 ml-1">+{(f.multiplier - 1) * 100 | 0}%</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">6. Delivery Location</label>
                      <select
                        value={location}
                        onChange={(e) => { setLocation(e.target.value); setShowResult(false); }}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50"
                      >
                        {deliveryLocations.map((l) => (
                          <option key={l.id} value={l.id} className="bg-packard-900">{l.label}{l.surcharge > 0 ? ` (+${(l.surcharge * 100).toFixed(0)}%)` : ""}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">7. Rush?</label>
                      <button
                        onClick={() => { setRush(!rush); setShowResult(false); }}
                        className={`w-full px-3 py-3 rounded-xl text-sm font-semibold transition-all ${
                          rush
                            ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                            : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                        }`}
                      >
                        {rush ? "⚡ Rush (+40%)" : "Standard timeline"}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowResult(true)}
                    className="w-full mt-2 px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-base hover:from-promo-400 hover:to-promo-300 shadow-lg shadow-promo-500/30 transition-all"
                  >
                    Generate Estimate →
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {showResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card rounded-2xl p-6 md:p-7 relative overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-promo-500/30 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="text-promo-400 text-xs uppercase tracking-wider font-semibold mb-2">Estimated Price Range</div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        TZS {formatTZS(result.lowEstimate)}
                      </div>
                      <div className="text-silver-400 text-sm">to TZS {formatTZS(result.highEstimate)}</div>

                      <div className="my-5 h-px bg-white/5" />

                      <div className="space-y-2.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-silver-500">Unit price (avg)</span>
                          <span className="text-white font-semibold">TZS {formatTZS(result.unitPrice)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-silver-500">Quantity</span>
                          <span className="text-white font-semibold">{quantity} units</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-silver-500">Subtotal</span>
                          <span className="text-white font-semibold">TZS {formatTZS(result.subtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-silver-500">Delivery to {loc.label}</span>
                          <span className="text-white font-semibold">TZS {formatTZS(result.delivery)}</span>
                        </div>
                        <div className="flex justify-between pt-2.5 border-t border-white/5">
                          <span className="text-silver-300 font-semibold">Estimated total</span>
                          <span className="text-promo-400 font-bold text-base">TZS {formatTZS(result.total)}</span>
                        </div>
                      </div>

                      <div className="mt-5 p-4 rounded-xl bg-packard-500/10 border border-packard-500/20">
                        <div className="text-packard-300 text-xs font-semibold mb-1">⏱ Estimated Lead Time</div>
                        <div className="text-white font-bold text-lg">{result.leadDays} business day{result.leadDays > 1 ? "s" : ""}</div>
                      </div>

                      <div className="mt-5 space-y-2">
                        <a
                          href={`https://wa.me/+255716002790?text=Hi%20Packard%20Promo%2C%20I'd%20like%20to%20order%3A%0A%0AProduct%3A%20${encodeURIComponent(product.name)}%0AQuantity%3A%20${quantity}%0ALocation%3A%20${encodeURIComponent(loc.label)}%0AEstimated%20Total%3A%20TZS%20${formatTZS(result.total)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm hover:from-green-500 transition-all"
                        >
                          💬 Order via WhatsApp
                        </a>
                        <a
                          href={`mailto:promo@packardltd.co.tz?subject=Quote%20Request%3A%20${encodeURIComponent(product.name)}&body=Hi%2C%0A%0AI'd%20like%20a%20formal%20quote%20for%3A%0A%0AProduct%3A%20${encodeURIComponent(product.name)}%0AQuantity%3A%20${quantity}%0AFinish%3A%20${encodeURIComponent(finishOpt?.label || "")}%0ALocation%3A%20${encodeURIComponent(loc.label)}%0AEstimated%20Total%3A%20TZS%20${formatTZS(result.total)}%0A%0APlease%20confirm%20and%20send%20a%20formal%20quote.%0A%0AThanks`}
                          className="block w-full text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                        >
                          📧 Request Formal Quote
                        </a>
                      </div>

                      <div className="mt-5 text-[10px] text-silver-600 text-center">
                        This is an estimate only. Final pricing depends on artwork, materials, and current stock. We'll confirm within 2 hours.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card rounded-2xl p-7 md:p-8 text-center sticky top-24"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-promo-500/10 border border-promo-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Your estimate will appear here</h3>
                    <p className="text-silver-400 text-sm leading-relaxed">Fill in your product details and click "Generate Estimate" to see your instant price range and lead time.</p>

                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                      {[
                        { label: "30 sec", sub: "Estimate" },
                        { label: "Free", sub: "Service" },
                        { label: "No signup", sub: "Required" },
                      ].map((b) => (
                        <div key={b.label} className="rounded-xl bg-white/5 border border-white/5 p-2.5">
                          <div className="text-promo-400 font-bold text-base">{b.label}</div>
                          <div className="text-silver-500 text-[10px]">{b.sub}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
