"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function SignboardsContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const priceGuide = [
    { type: "Banner (3x1m)", size: "3x1m", price: "TSh 8,000" },
    { type: "Roll-up Banner", size: "60x180cm", price: "TSh 15,000" },
    { type: "Shop Signboard", size: "60x30cm", price: "TSh 25,000" },
    { type: "Illuminated Sign", size: "60x30cm", price: "TSh 200,000+" },
    { type: "Directional Sign", size: "40x20cm", price: "TSh 12,000" },
    { type: "Safety Sign", size: "A3", price: "TSh 5,000" },
    { type: "Menu Board", size: "Custom", price: "TSh 35,000" },
  ];

  const materials = [
    { material: "Vinyl", indoor: true, outdoor: true, durability: "2-3 years" },
    { material: "PVC", indoor: true, outdoor: true, durability: "3-5 years" },
    { material: "Acrylic", indoor: true, outdoor: true, durability: "5+ years" },
    { material: "ACP (Aluminum)", indoor: true, outdoor: true, durability: "10+ years" },
    { material: "Wood", indoor: true, outdoor: false, durability: "2-3 years" },
    { material: "Corrugated Plastic", indoor: true, outdoor: true, durability: "1-2 years" },
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
            <span className="text-promo-400 font-semibold">Signboards</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4 max-w-3xl">
            Signboard Price Tanzania
          </h1>

          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl mb-6">
            Signboard makers Dar es Salaam. From TSh 8,000 for banners to TSh 200,000+ for illuminated signs. Indoor & outdoor signage with free delivery.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "signboards_hero" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "signboards_hero" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Us</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "signboards_hero" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
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
                <Link href="/pricing/banners" className="text-promo-400 hover:text-promo-300 text-sm">Banner Pricing</Link>
                <Link href="/pricing/vehicle-branding" className="text-promo-400 hover:text-promo-300 text-sm">Vehicle Branding Pricing</Link>
                <Link href="/pricing/stickers" className="text-promo-400 hover:text-promo-300 text-sm">Sticker Pricing</Link>
                <Link href="/pricing/business-cards" className="text-promo-400 hover:text-promo-300 text-sm">Business Card Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Related Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/signage-solutions/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Signage Service</Link>
                <Link href="/services/large-format-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Large Format Service</Link>
                <Link href="/same-day-printing-dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Same-Day Printing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Materials</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Materials Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] glass-card rounded-2xl overflow-hidden">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-left text-white font-semibold text-sm">Material</th>
                  <th className="px-5 py-4 text-center text-white font-semibold text-sm">Indoor</th>
                  <th className="px-5 py-4 text-center text-white font-semibold text-sm">Outdoor</th>
                  <th className="px-5 py-4 text-left text-white font-semibold text-sm">Durability</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr key={m.material} className="border-t border-white/10">
                    <td className="px-5 py-4 text-silver-300 text-sm font-medium">{m.material}</td>
                    <td className="px-5 py-4 text-center">{m.indoor ? "✓" : ""}</td>
                    <td className="px-5 py-4 text-center">{m.outdoor ? "✓" : ""}</td>
                    <td className="px-5 py-4 text-silver-300 text-sm">{m.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Indoor vs Outdoor</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Signboards for Every Need</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-3">Indoor Signs</h3>
              <ul className="space-y-2 text-silver-300 text-sm">
                <li>• Menu boards & directional signs</li>
                <li>• Office branding & nameplates</li>
                <li>• Event signage & displays</li>
                <li>• Lobby & reception signs</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-3">Outdoor Signs</h3>
              <ul className="space-y-2 text-silver-300 text-sm">
                <li>• Shop signboards & fascia</li>
                <li>• Illuminated signs & lightboxes</li>
                <li>• Banners & billboards</li>
                <li>• Safety & compliance signs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Delivery</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Delivery Information</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">Dar es Salaam</div>
              <div className="text-silver-300 text-sm">Same-day / Next-day delivery</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">Major Cities</div>
              <div className="text-silver-300 text-sm">2-3 day delivery (Arusha, Mwanza, etc.)</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-promo-400 mb-2">Installation</div>
              <div className="text-silver-300 text-sm">Full installation service included</div>
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
              { q: "Bei ya signboard ni ngapi Tanzania?", a: "Bei ya signboard hutoa TSh 8,000 kwa banner, TSh 25,000 kwa shop signboard ya kioo, na TSh 200,000+ kwa signboard iliyo na mwali. Bei inategemea ubora, ukubwa na muda wa uatoleaji." },
              { q: "Signboard makers Dar es Salaam - where are you located?", a: "Tunafanya signboard Dar es Salaam na maeneo yote Tanzania. Ofisi yetu ipo Dar es Salaam, Fire Area." },
              { q: "What materials are used for signboards?", a: "Vinyl, PVC, acrylic, corrugated plastic, aluminum composite panel, and wood depending on indoor/outdoor use and budget." },
              { q: "How long does signboard production take?", a: "Standard 2-3 days. Rush service available. Illuminated signs need 5-7 days due to electrical work." },
              { q: "Do you install signboards?", a: "Yes. We provide full installation service for shop signs, billboards, and vehicle branding across Dar es Salaam and major Tanzanian cities." }
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready for Signboards?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "signboards_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Your Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "signboards_bottom" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">Chat on WhatsApp</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "signboards_bottom" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Signboard Quote</h3>
            <p className="text-silver-400 text-sm mb-5">Get pricing for your signboard project.</p>
            <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">Sign Type</option>
                <option className="bg-packard-900">Banner</option>
                <option className="bg-packard-900">Shop Signboard</option>
                <option className="bg-packard-900">Illuminated Sign</option>
                <option className="bg-packard-900">Directional Sign</option>
                <option className="bg-packard-900">Safety Sign</option>
                <option className="bg-packard-900">Menu Board</option>
              </select>
              <textarea placeholder="Location, size, & notes..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}