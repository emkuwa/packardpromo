"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { City } from "@/types";
import { services } from "@/lib/services";

export default function LocationDetail({ city }: { city: City }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-promo-400 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">{city.name}</span>
          </nav>

          <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-3">{city.region} · Population {city.population}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-4 max-w-3xl">
            Printing & Signage in <span className="text-gradient-promo">{city.name}</span>
          </h1>
          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl mb-6">{city.description}</p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => setQuoteOpen(true)} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get {city.name} Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Us</a>
            <a href="tel:+255716002790" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">What you get in {city.name}</h2>
              <div className="space-y-3">
                {city.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-4 rounded-2xl glass-card">
                    <div className="w-9 h-9 rounded-lg bg-promo-500/10 border border-promo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-silver-300 text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Industries we serve in {city.name}</h2>
              <div className="grid grid-cols-2 gap-2.5">
                {city.industries.map((ind) => (
                  <div key={ind} className="p-3 rounded-xl bg-promo-500/5 border border-promo-500/15 text-promo-300 text-sm font-semibold">
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Services in {city.name}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">All services available in {city.name}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/services/${s.slug}`} className="block glass-card rounded-2xl p-5 hover:border-promo-500/30 group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-promo-500/10 border border-promo-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{s.title} in {city.name}</h3>
                      <p className="text-silver-400 text-xs mt-1 line-clamp-2">{s.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Need Printing in {city.name}?</h2>
              <p className="text-silver-300 text-lg mb-7">Get a free quote within 2 hours, or chat with our {city.name} team on WhatsApp.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => setQuoteOpen(true)} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Free Quote</button>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {quoteOpen && <QuoteModal city={city} onClose={() => setQuoteOpen(false)} />}
    </>
  );
}

function QuoteModal({ city, onClose }: { city: City; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-white mb-1">Get a Quote in {city.name}</h3>
            <p className="text-silver-400 text-sm mb-5">We deliver to {city.name} and surrounding areas.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">What do you need?</option>
                <option className="bg-packard-900">Digital Printing</option>
                <option className="bg-packard-900">Offset / Bulk Printing</option>
                <option className="bg-packard-900">Large Format / Banners</option>
                <option className="bg-packard-900">Signage / Shop Boards</option>
                <option className="bg-packard-900">Vehicle Branding</option>
                <option className="bg-packard-900">Packaging</option>
                <option className="bg-packard-900">Promotional Products</option>
                <option className="bg-packard-900">Exhibition & Events</option>
                <option className="bg-packard-900">Design Services</option>
                <option className="bg-packard-900">Multiple / Not sure</option>
              </select>
              <textarea placeholder="Tell us about your project..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
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
