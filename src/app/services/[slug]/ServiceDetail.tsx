"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/types";
import FAQ from "@/components/shared/FAQ";
import ProductCard from "@/components/shared/ProductCard";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { corporateSiteUrl } from "@/lib/domains";

export default function ServiceDetail({ service }: { service: Service }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className={cn("absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-30", service.color)} />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-promo-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br border border-white/10 flex items-center justify-center mb-5", service.color)}>
                <svg className="w-8 h-8 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-4">
                {service.title} <span className="text-gradient-promo">Tanzania</span>
              </h1>
              <p className="text-silver-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">{service.shortDescription}</p>
              <p className="text-silver-400 text-base leading-relaxed mb-6 max-w-2xl">{service.description}</p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "service_detail_top" }); }}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400 transition-all"
                >
                  Get Free Quote
                </button>
                <Link href="/ai-tools/quote-generator" className="px-7 py-3.5 rounded-full bg-packard-500/20 border border-packard-500/30 text-packard-300 font-semibold text-sm hover:bg-packard-500/30">
                  AI Quote Generator
                </Link>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "service_detail_top" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {service.image && (
                <div className="glass-card rounded-2xl overflow-hidden relative">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-packard-950/85 to-transparent">
                      <span className="text-[10px] uppercase tracking-wider text-white font-semibold px-2.5 py-1 rounded-full bg-promo-500/90">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className={cn("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30", service.color)} />
                <h3 className="text-white font-bold text-base mb-4">What's included</h3>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-silver-300">
                      <svg className="w-4 h-4 text-promo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-promo-400 font-bold text-lg">{service.products.length}</div>
                      <div className="text-silver-500 text-[10px] uppercase">Products</div>
                    </div>
                    <div>
                      <div className="text-promo-400 font-bold text-lg">14+</div>
                      <div className="text-silver-500 text-[10px] uppercase">Years</div>
                    </div>
                    <div>
                      <div className="text-promo-400 font-bold text-lg">8</div>
                      <div className="text-silver-500 text-[10px] uppercase">Cities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our {service.title} Products</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{service.products.length} products available</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {service.products.map((product, i) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                description={product.description}
                startingPrice={product.startingPrice}
                minQty={product.minQty}
                leadTime={product.leadTime}
                index={i}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {(service.slug === "exhibition-events") && (
        <section className="section-padding bg-packard-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Sabasaba Exhibition</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Preparing for Sabasaba?</h2>
              <p className="text-silver-400 text-sm max-w-2xl">
                The Dar es Salaam International Trade Fair (Sabasaba) is Tanzania&apos;s premier business exhibition, held every July at the Mwalimu J.K. Nyerere Grounds. We provide complete exhibition branding packages including stands, banners, promotional products, and signage tailored for Sabasaba exhibitors.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/sabasaba-exhibition" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block group">
                <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">Sabasaba Exhibition Guide</span>
                <p className="text-silver-500 text-xs mt-1">Complete branding solutions</p>
              </Link>
              <Link href="/knowledge/sabasaba-exhibition-guide" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block group">
                <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">How to Prepare Guide</span>
                <p className="text-silver-500 text-xs mt-1">Step-by-step preparation</p>
              </Link>
              <Link href="/knowledge/exhibition-stand-design-guide" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block group">
                <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">Stand Design Guide</span>
                <p className="text-silver-500 text-xs mt-1">Design tips for trade fairs</p>
              </Link>
              <Link href="/knowledge/best-promotional-products-trade-shows" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block group">
                <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">Promo Products Guide</span>
                <p className="text-silver-500 text-xs mt-1">Best giveaways for exhibitions</p>
              </Link>
            </div>
            <div className="mt-4 text-center">
              <Link href="/sabasaba-exhibition" className="inline-flex px-5 py-2.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 font-semibold text-sm hover:bg-promo-500/20">
                Visit Sabasaba Exhibition Page →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 text-center">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-silver-400 text-center mb-10">Everything you need to know about our {service.title.toLowerCase()}.</p>
          <FAQ items={service.faqs} />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-promo-500/30 rounded-full blur-3xl" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Order {service.title}?</h2>
              <p className="text-silver-300 text-lg mb-7 max-w-xl mx-auto">Get a custom quote, see samples, or book a free consultation with our {service.title.toLowerCase()} specialists.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "service_detail_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">
                  Get Free Quote
                </button>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "service_detail_bottom" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">
                  Chat on WhatsApp
                </a>
                <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "service_detail_bottom" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">
                  Call 0716 002 790
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-silver-500 text-xs mb-2">Need corporate branding strategy, PR, or communications consulting?</p>
                <a href={corporateSiteUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-packard-300 hover:text-packard-200 text-xs font-semibold uppercase tracking-wider transition-colors">
                  Visit Packard Limited (Strategy & Comms) →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {quoteOpen && <QuoteModal service={service} onClose={() => setQuoteOpen(false)} />}
    </>
  );
}

function QuoteModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-white mb-1">Get a {service.title} Quote</h3>
            <p className="text-silver-400 text-sm mb-5">We'll respond within 2 hours during business hours.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">What product are you interested in?</option>
                {service.products.map((p) => (
                  <option key={p.id} className="bg-packard-900">{p.name}</option>
                ))}
                <option className="bg-packard-900">Other / Not sure</option>
              </select>
              <input type="text" placeholder="Approximate quantity" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <textarea placeholder="Tell us about your project, timeline, any specific requirements..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400">
                Send Inquiry →
              </button>
              <p className="text-[10px] text-silver-600 text-center">By submitting you agree to our privacy policy. We never share your data.</p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h3>
            <p className="text-silver-400 text-sm">We'll get back to you within 2 hours. For urgent requests, call +255 716 002 790.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
