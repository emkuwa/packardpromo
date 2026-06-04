"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-tight relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/50 via-packard-950 to-promo-900/30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-promo-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-packard-500/20 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-promo-500/60" />
              <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Get Started Today</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-3">
              Ready to <span className="text-gradient-promo">Print, Promote & Perform?</span>
            </h2>
            <p className="text-silver-300 text-sm md:text-base leading-relaxed mb-5 max-w-md">
              Share your project. We respond within 2 hours during business hours, and our AI tools give you instant estimates 24/7.
            </p>

            <div className="space-y-2 mb-6">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="group flex items-center gap-3 p-3 rounded-xl glass-card hover:border-green-500/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-silver-500 text-[9px] uppercase tracking-wider">Call / WhatsApp</div>
                  <div className="text-white font-bold text-sm">{siteConfig.phone}</div>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 p-3 rounded-xl glass-card hover:border-packard-500/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-packard-500/10 border border-packard-500/20 flex items-center justify-center shrink-0 group-hover:bg-packard-500/20 transition-colors">
                  <svg className="w-4 h-4 text-packard-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-silver-500 text-[9px] uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold text-xs">{siteConfig.email}</div>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-5 md:p-6"
          >
            {!submitted ? (
              <>
                <h3 className="text-white text-lg font-bold mb-1">Send us a message</h3>
                <p className="text-silver-400 text-xs mb-4">We respond within 2 hours during business hours.</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" required placeholder="First Name" className="px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                    <input type="text" required placeholder="Last Name" className="px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                  </div>
                  <input type="email" required placeholder="Email" className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                  <input type="tel" required placeholder="Phone / WhatsApp" className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                  <select className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-promo-500/50">
                    <option className="bg-packard-900">What do you need?</option>
                    <option className="bg-packard-900">Business Cards</option>
                    <option className="bg-packard-900">T-Shirts / Caps</option>
                    <option className="bg-packard-900">Banners / Signage</option>
                    <option className="bg-packard-900">Packaging</option>
                    <option className="bg-packard-900">Vehicle Branding</option>
                    <option className="bg-packard-900">Multiple / Other</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 transition-all"
                  >
                    Send Inquiry →
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold mb-1">Message Sent!</h3>
                <p className="text-silver-400 text-xs">We&apos;ll respond within 2 hours during business hours.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
