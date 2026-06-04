"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section-tight relative overflow-hidden" id="final-cta">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/50 via-packard-950 to-promo-900/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-promo-500/15 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Get Started</span>
            <span className="h-px w-8 bg-promo-500/60" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-3">
            Need Printing, Branding or Signage?
          </h2>
          <p className="text-silver-300 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Request a formal quote or chat with us on WhatsApp. We respond within 2 hours during business hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white shadow-xl shadow-promo-500/30 hover:shadow-promo-500/50 hover:from-promo-400 transition-all"
            >
              Request a Quote
              <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/+255716002790?text=Hi%20Packard%20Promo%2C%20I%27d%20like%20to%20discuss%20a%20print%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm md:text-base font-semibold rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 hover:bg-green-400 transition-all"
            >
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
