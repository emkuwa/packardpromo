"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function DigitalPrintingDarContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex items-center gap-2">
            <Link href="/" className="hover:text-promo-400">Home</Link>
            <span>/</span>
            <Link href="/services/digital-printing" className="hover:text-promo-400">Digital Printing</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">Dar es Salaam</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Digital Printing in Dar es Salaam</h1>
          <p className="text-silver-300 text-lg max-w-3xl mb-6">Fast turnaround digital printing. Business cards, flyers, posters. Same-day service available.</p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "digital_printing_dar" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold">Get Quote</button>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "digital_printing_dar" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold">WhatsApp</a>
            <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "digital_printing_dar" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold">Call 0716 002 790</a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Digital Printing Pricing</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] glass-card rounded-2xl overflow-hidden">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-left text-white font-semibold">Product</th>
                  <th className="px-5 py-4 text-left text-white font-semibold">Min Qty</th>
                  <th className="px-5 py-4 text-left text-white font-semibold">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-5 py-4 text-silver-300">Business Cards</td>
                  <td className="px-5 py-4 text-silver-300">100 pcs</td>
                  <td className="px-5 py-4 text-promo-400 font-semibold">TSh 15,000</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-5 py-4 text-silver-300">Flyers</td>
                  <td className="px-5 py-4 text-silver-300">100 pcs</td>
                  <td className="px-5 py-4 text-promo-400 font-semibold">TSh 500</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-5 py-4 text-silver-300">Posters</td>
                  <td className="px-5 py-4 text-silver-300">10 pcs</td>
                  <td className="px-5 py-4 text-promo-400 font-semibold">TSh 8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Related Pages</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">More Services & Pricing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-3">Related Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/vehicle-branding/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Vehicle Branding</Link>
                <Link href="/services/signage-solutions/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Signage Solutions</Link>
                <Link href="/services/large-format-printing/dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Large Format Printing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Pricing</h3>
              <div className="flex flex-col gap-2">
                <Link href="/pricing/business-cards" className="text-promo-400 hover:text-promo-300 text-sm">Business Card Pricing</Link>
                <Link href="/pricing/flyers" className="text-promo-400 hover:text-promo-300 text-sm">Flyer Pricing</Link>
                <Link href="/same-day-printing-dar-es-salaam" className="text-promo-400 hover:text-promo-300 text-sm">Same-Day Printing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}