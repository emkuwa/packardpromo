"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function StickersContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const priceGuide = [
    { type: "Standard Stickers", qty: "50 pcs", price: "TSh 300" },
    { type: "Standard Stickers", qty: "100 pcs", price: "TSh 500" },
    { type: "Die-cut Stickers", qty: "50 pcs", price: "TSh 500" },
    { type: "Die-cut Stickers", qty: "100 pcs", price: "TSh 800" },
    { type: "Transparent Stickers", qty: "50 pcs", price: "TSh 400" },
    { type: "Holographic Stickers", qty: "50 pcs", price: "TSh 600" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/pricing" className="hover:text-promo-400 transition-colors">Pricing</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">Stickers</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Sticker Printing Price Tanzania
          </h1>
          <p className="text-silver-300 text-lg max-w-3xl mb-6">
            From TSh 300 for 50 pieces. Custom shapes, die-cut, transparent options. Branding labels & packaging stickers with nationwide delivery.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "stickers_hero" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm">Get Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "stickers_hero" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm">WhatsApp Us</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "stickers_hero" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Price Guide</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sticker Pricing</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] glass-card rounded-2xl overflow-hidden">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-left text-white font-semibold text-sm">Type</th>
                  <th className="px-5 py-4 text-left text-white font-semibold text-sm">Quantity</th>
                  <th className="px-5 py-4 text-left text-white font-semibold text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceGuide.map((row) => (
                  <tr key={`${row.type}-${row.qty}`} className="border-t border-white/10">
                    <td className="px-5 py-4 text-silver-300 text-sm">{row.type}</td>
                    <td className="px-5 py-4 text-silver-300 text-sm">{row.qty}</td>
                    <td className="px-5 py-4 text-promo-400 font-semibold text-sm">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Bei ya sticker printing ni ngapi?", a: "Sticker inapatikana kutoka TSh 300 kwa 50 pieces. Bei inategemea kikomo na ubora." },
              { q: "What sticker materials do you offer?", a: "White vinyl, transparent, reflective, holographic, paper. All weatherproof for outdoor use." },
              { q: "Can I get custom shaped stickers?", a: "Yes. Die-cut stickers from TSh 500/50 pcs. Provide vector artwork or request design." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5">
                <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-silver-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Related Pages</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">More Pricing & Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-3">Related Pricing</h3>
              <div className="flex flex-col gap-2">
                <Link href="/pricing/business-cards" className="text-promo-400 hover:text-promo-300 text-sm">Business Card Pricing</Link>
                <Link href="/pricing/flyers" className="text-promo-400 hover:text-promo-300 text-sm">Flyer Pricing</Link>
                <Link href="/pricing/banners" className="text-promo-400 hover:text-promo-300 text-sm">Banner Pricing</Link>
                <Link href="/pricing/vehicle-branding" className="text-promo-400 hover:text-promo-300 text-sm">Vehicle Branding Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Related Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/digital-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Digital Printing Service</Link>
                <Link href="/services/large-format-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Large Format Service</Link>
                <Link href="/same-day-printing-dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Same-Day Printing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Order Your Stickers</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "stickers_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm">Get Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "stickers_bottom" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm">Chat on WhatsApp</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "stickers_bottom" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm">Call Now</a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Sticker Quote</h3>
            <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">Sticker Type</option>
                <option className="bg-packard-900">Standard</option>
                <option className="bg-packard-900">Die-cut</option>
                <option className="bg-packard-900">Transparent</option>
                <option className="bg-packard-900">Holographic</option>
              </select>
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}