"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function BusinessCardsContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const pricingTiers = [
    { qty: "100 pcs", price: "TSh 250/pcs", total: "TSh 25,000" },
    { qty: "250 pcs", price: "TSh 200/pcs", total: "TSh 50,000" },
    { qty: "500 pcs", price: "TSh 150/pcs", total: "TSh 75,000" },
    { qty: "1000 pcs", price: "TSh 120/pcs", total: "TSh 120,000" },
    { qty: "2000 pcs", price: "TSh 100/pcs", total: "TSh 200,000" },
    { qty: "5000 pcs", price: "TSh 80/pcs", total: "TSh 400,000" },
  ];

  const finishPrices = [
    { finish: "Standard 350gsm", price: "+TSh 0" },
    { finish: "Spot UV", price: "+TSh 50/pcs" },
    { finish: "Embossed", price: "+TSh 80/pcs" },
    { finish: "Foil Stamping", price: "+TSh 100/pcs" },
    { finish: "Rounded Corners", price: "+TSh 30/pcs" },
    { finish: "Plastic Coating", price: "+TSh 40/pcs" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/pricing" className="hover:text-promo-400 transition-colors">Pricing</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">Business Cards</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4 max-w-3xl">
            Business Card Printing Price Tanzania
          </h1>

          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl mb-6">
            Professional business cards from TSh 150/pcs. Digital printing, spot UV, embossed, foil stamping options available. Free delivery in Dar es Salaam.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "business_cards_hero" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "business_cards_hero" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Us</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "business_cards_hero" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
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
                <Link href="/pricing/flyers" className="text-promo-400 hover:text-promo-300 text-sm">Flyer Pricing</Link>
                <Link href="/pricing/stickers" className="text-promo-400 hover:text-promo-300 text-sm">Sticker Pricing</Link>
                <Link href="/pricing/banners" className="text-promo-400 hover:text-promo-300 text-sm">Banner Pricing</Link>
                <Link href="/pricing/vehicle-branding" className="text-promo-400 hover:text-promo-300 text-sm">Vehicle Branding Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Related Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/digital-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Digital Printing Service</Link>
                <Link href="/services/offset-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Offset Printing Service</Link>
                <Link href="/same-day-printing-dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Same-Day Printing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Delivery</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Delivery Information</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">Same-Day</div>
              <div className="text-silver-300 text-sm">Orders before noon (Dar es Salaam only)</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">1-2 Days</div>
              <div className="text-silver-300 text-sm">Standard production time</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">Free</div>
              <div className="text-silver-300 text-sm">Delivery in Dar es Salaam (50K+ orders)</div>
            </div>
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
              { q: "How much does business card printing cost in Tanzania?", a: "Business cards start at TSh 150/pcs for standard 350gsm full-color printing. Prices vary by quantity and finish options." },
              { q: "What is the minimum order for business cards?", a: "Minimum order is 100 pieces. We recommend 500+ pcs for better unit pricing." },
              { q: "How long does business card printing take?", a: "Standard production is 1-2 business days. Same-day service available for orders placed before noon in Dar es Salaam." },
              { q: "Can I see a proof before printing?", a: "Yes. We provide digital proofs for approval before production starts. Physical proofs available upon request." },
              { q: "What file formats do you accept for business cards?", a: "We accept PDF, AI, EPS, PNG, JPG. PDF with CMYK colors is preferred for best results." },
              { q: "Bei ya business card ni ngapi?", a: "Bei ya business card inapatikana kutoka TSh 150 kwa piece. Bei hufanya kwa wingi na ubora wa card." }
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5">
                <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-silver-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Order Business Cards?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "business_cards_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Your Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "business_cards_bottom" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">Chat on WhatsApp</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "business_cards_bottom" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Business Card Quote</h3>
            <p className="text-silver-400 text-sm mb-5">Get pricing for your business card order.</p>
            <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">Quantity</option>
                <option className="bg-packard-900">100 pcs</option>
                <option className="bg-packard-900">250 pcs</option>
                <option className="bg-packard-900">500 pcs</option>
                <option className="bg-packard-900">1000 pcs</option>
                <option className="bg-packard-900">2000+ pcs</option>
              </select>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">Finish Options</option>
                <option className="bg-packard-900">Standard</option>
                <option className="bg-packard-900">Spot UV</option>
                <option className="bg-packard-900">Embossed</option>
                <option className="bg-packard-900">Foil Stamping</option>
                <option className="bg-packard-900">Rounded Corners</option>
              </select>
              <textarea placeholder="Artwork ready? Notes..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}