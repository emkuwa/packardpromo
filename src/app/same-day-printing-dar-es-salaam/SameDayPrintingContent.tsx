"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function SameDayPrintingContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const products = [
    "Business Cards", "Flyers", "Stickers", "Brochures", "Banners", "Roll-Up Banners", "Certificates", "Event Materials"
  ];

  const industries = [
    "Businesses", "NGOs", "Schools", "Hotels", "Event Organizers", "Government Institutions"
  ];

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
            <span className="text-promo-400 font-semibold">Same-Day Printing</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4 max-w-3xl">
            Same-Day Printing in Dar es Salaam
          </h1>

          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl mb-6">
            Order before noon, collect the same day. Business cards, flyers, banners, certificates and event materials with free delivery in Dar es Salaam.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["✓ Same-Day Printing", "✓ Free Delivery in Dar es Salaam", "✓ Nationwide Delivery", "✓ Fast WhatsApp Response"].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 text-xs font-semibold">{b}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "same_day_hero" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Same-Day Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "same_day_hero" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Us</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "same_day_hero" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Popular Same-Day Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {products.map((p) => (
                  <div key={p} className="glass-card rounded-xl p-3 text-center hover:border-promo-500/30">
                    <span className="text-silver-300 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Who Uses This Service?</h2>
              <div className="grid grid-cols-2 gap-2.5">
                {industries.map((i) => (
                  <div key={i} className="p-3 rounded-xl bg-promo-500/5 border border-promo-500/15 text-promo-300 text-sm font-semibold">
                    {i}
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
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Pricing Guide</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Starting Prices</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Business Cards", price: "TSh 150/pcs" },
              { name: "Flyers", price: "TSh 500/100 pcs" },
              { name: "Banners", price: "TSh 8,000" },
              { name: "Stickers", price: "TSh 300/50 pcs" },
            ].map((item) => (
              <div key={item.name} className="glass-card rounded-2xl p-5 text-center hover:border-promo-500/30">
                <div className="text-white font-bold text-lg mb-1">{item.name}</div>
                <div className="text-promo-400 text-sm font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Order & Upload", desc: "Send artwork via WhatsApp or upload in the quote form." },
              { step: "2", title: "Confirm & Print", desc: "We confirm details and begin production immediately." },
              { step: "3", title: "Pickup / Delivery", desc: "Collect same day or get free delivery in Dar es Salaam." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-lg flex items-center justify-center mb-4">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-silver-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Emergency Printing?</h2>
              <p className="text-silver-300 text-lg mb-7">Need printing today? Call now for urgent same-day service.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "emergency_section" })} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm">Call 0716002790</a>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "emergency_section" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is same-day printing?", a: "Same-day printing means your order is ready for pickup the same business day. Place your order before noon with ready artwork for same-day service." },
              { q: "How much does same-day printing cost?", a: "Pricing varies by product. Business cards start at TSh 150/pcs, flyers from TSh 500/100 pcs, banners from TSh 8,000, stickers from TSh 300/50 pcs. Use our instant quote tool for exact pricing." },
              { q: "Can I pay by M-Pesa or bank transfer?", a: "Yes. We accept M-Pesa, bank transfer, and cash payments. Mobile money is our preferred payment method for quick transactions." },
              { q: "Can I order from outside Dar es Salaam?", a: "Yes. Orders from outside Dar es Salaam qualify for next-day delivery to major cities including Arusha, Mwanza, Mbeya, Zanzibar and Dodoma." },
              { q: "What file formats do you accept?", a: "We accept PDF, AI, EPS, PNG, JPG formats. PDF is preferred for best quality and color accuracy." },
              { q: "Can I get same-day service if I miss the noon cutoff?", a: "Orders placed after noon qualify for 24-hour express service. Contact us for urgent requests - we often accommodate same-day for critical jobs." },
              { q: "Do you deliver for same-day orders?", a: "Free delivery is available within Dar es Salaam for orders over TSh 50,000. Place your order before 10am for same-day delivery eligibility." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5">
                <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-silver-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready for Same-Day Printing?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "same_day_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Your Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "same_day_bottom" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Get Same-Day Quote</h3>
            <p className="text-silver-400 text-sm mb-5">We'll confirm your same-day printing request.</p>
            <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">What do you need?</option>
                <option className="bg-packard-900">Business Cards</option>
                <option className="bg-packard-900">Flyers</option>
                <option className="bg-packard-900">Banners</option>
                <option className="bg-packard-900">Stickers</option>
                <option className="bg-packard-900">Brochures</option>
                <option className="bg-packard-900">Certificates</option>
                <option className="bg-packard-900">Event Materials</option>
                <option className="bg-packard-900">Other / Not Sure</option>
              </select>
              <textarea placeholder="Details / Artwork ready?" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </motion.div>
        </div>
      )}

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Quick Links</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Related Pricing</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/pricing/business-cards" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Business Cards</span>
            </Link>
            <Link href="/pricing/flyers" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Flyers</span>
            </Link>
            <Link href="/pricing/banners" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Banners</span>
            </Link>
            <Link href="/pricing/stickers" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Stickers</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}