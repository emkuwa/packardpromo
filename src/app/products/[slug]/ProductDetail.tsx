"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import FAQ from "@/components/shared/FAQ";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { Service, Product } from "@/types";

export default function ProductDetail({ service, product }: { service: Service; product: Product & { category: string } }) {
  const [qty, setQty] = useState(product.minQty);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const formatPrice = (n: number) => new Intl.NumberFormat("en-TZ").format(n);
  const estimatedTotal = qty * product.startingPrice;

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-promo-400 transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-promo-400 transition-colors">{service.title}</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-packard-800 mb-6 border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-block text-[10px] uppercase tracking-wider text-white font-bold px-2.5 py-1 rounded-full bg-promo-500/95 backdrop-blur-sm">
                  {service.title}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-4">
                {product.name}
              </h1>
              <p className="text-silver-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">{product.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                <div className="p-3 rounded-xl bg-promo-500/10 border border-promo-500/20">
                  <div className="text-promo-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Starting From</div>
                  <div className="text-white font-bold text-base">TZS {formatPrice(product.startingPrice)}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Min Order</div>
                  <div className="text-white font-bold text-base">{product.minQty}+ units</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Lead Time</div>
                  <div className="text-white font-bold text-sm">{product.leadTime}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Category</div>
                  <div className="text-white font-bold text-sm">{service.title}</div>
                </div>
              </div>

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-white text-sm font-semibold mb-2">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-300 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {product.materials && product.materials.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-white text-sm font-semibold mb-2">Material Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((m) => (
                      <span key={m} className="px-3 py-1.5 rounded-full bg-packard-500/10 border border-packard-500/20 text-packard-300 text-xs">{m}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-white text-sm font-semibold mb-2">Features & Finishes</h3>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-silver-300">
                      <svg className="w-4 h-4 text-promo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-promo-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="text-silver-400 text-xs uppercase tracking-wider font-semibold mb-2">Estimated total</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">TZS {formatPrice(estimatedTotal)}</div>
                  <div className="text-silver-500 text-xs mb-5">Based on {qty.toLocaleString()} units × TZS {formatPrice(product.startingPrice)}</div>

                  <label className="block text-white text-xs font-semibold uppercase tracking-wider mb-2">Quantity</label>
                  <input
                    type="range"
                    min={product.minQty}
                    max={Math.max(product.minQty * 20, 10000)}
                    step={Math.max(1, Math.floor(product.minQty / 10))}
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value))}
                    className="w-full accent-promo-500"
                  />
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(Math.max(product.minQty, parseInt(e.target.value) || product.minQty))}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50"
                  />
                  <div className="mt-1.5 text-[10px] text-silver-500">Min: {product.minQty} · Bulk discounts available</div>

                  <div className="mt-5 space-y-2.5">
                    <button
                      onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "product_detail" }); }}
                      className="w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 transition-all"
                    >
                      Request Formal Quote →
                    </button>
                    <a
                      href={`https://wa.me/+255716002790?text=Hi%20Packard%20Promo%2C%20I'd%20like%20to%20order%3A%0A%0AProduct%3A%20${encodeURIComponent(product.name)}%0AQuantity%3A%20${qty}%0AEstimated%20Total%3A%20TZS%20${formatPrice(estimatedTotal)}%0A%0APlease%20confirm%20and%20send%20formal%20quote.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("whatsapp_click", { label: "product_detail" })}
                      className="block w-full text-center px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 font-semibold text-sm hover:bg-green-500/20"
                    >
                      💬 Order on WhatsApp
                    </a>
                    <Link
                      href="/ai-tools/quote-generator"
                      className="block w-full text-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10"
                    >
                      Use AI Quote Generator
                    </Link>
                  </div>

                  <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <svg className="w-4 h-4 text-promo-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="text-[10px] text-silver-500">Quality<br/>Guarantee</div>
                    </div>
                    <div>
                      <svg className="w-4 h-4 text-promo-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-[10px] text-silver-500">On-time<br/>Delivery</div>
                    </div>
                    <div>
                      <svg className="w-4 h-4 text-promo-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <div className="text-[10px] text-silver-500">Secure<br/>Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 text-center">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-silver-400 text-center mb-10">Common questions about ordering {product.name.toLowerCase()}.</p>
          <FAQ items={service.faqs} />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">More from {service.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {service.products.filter((p) => p.id !== product.id).slice(0, 4).map((p, i) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="block glass-card rounded-2xl p-4 hover:border-promo-500/30 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-wider text-promo-400 font-semibold">Product</span>
                  <span className="text-[10px] text-silver-500">From TZS {formatPrice(p.startingPrice)}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-promo-300">{p.name}</h3>
                <p className="text-silver-400 text-xs line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {quoteOpen && <QuoteModal product={product} qty={qty} onClose={() => setQuoteOpen(false)} />}
    </>
  );
}

function QuoteModal({ product, qty, onClose }: { product: Product; qty: number; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-white mb-1">Request Quote: {product.name}</h3>
            <p className="text-silver-400 text-sm mb-1">Quantity: {qty.toLocaleString()} units</p>
            <p className="text-promo-400 text-sm font-semibold mb-5">Estimated: TZS {(qty * product.startingPrice).toLocaleString()}</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <textarea placeholder="Specific requirements, sizes, materials, delivery city, deadline..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h3>
            <p className="text-silver-400 text-sm">We'll respond within 2 hours during business hours.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
