"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/services";

export default function QuoteContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Get a Free Quote</span>
            <span className="h-px w-8 bg-promo-500/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl mx-auto">
            Tell Us About Your Project. <span className="text-gradient-promo">Get a Quote in 2 Hours.</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will respond within 2 hours during business hours. For instant estimates, try our{" "}
            <a href="/ai-tools/quote-generator" className="text-promo-400 hover:text-promo-300 underline">AI Quote Generator</a>.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-7 md:p-9 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-promo-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Your Details</h2>
                    <p className="text-silver-400 text-xs">So we can respond to you.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">First Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="First name" />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Last Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Phone / WhatsApp *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="+255 ..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Company / Organization</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="Company name (optional)" />
                  </div>

                  <div className="pt-3">
                    <h2 className="text-xl font-bold text-white mb-1">Your Project</h2>
                    <p className="text-silver-400 text-xs">Tell us what you need — the more detail, the more accurate our quote.</p>
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Service Category *</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                      <option className="bg-packard-900">Select a service category</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id} className="bg-packard-900">{s.title}</option>
                      ))}
                      <option className="bg-packard-900">Multiple / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Specific Product / Description</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="e.g. Premium business cards, Foil-stamped" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Quantity</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="e.g. 500 units" />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Deadline / Delivery Date</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Delivery City *</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                      <option className="bg-packard-900">Dar es Salaam</option>
                      <option className="bg-packard-900">Zanzibar</option>
                      <option className="bg-packard-900">Arusha</option>
                      <option className="bg-packard-900">Mwanza</option>
                      <option className="bg-packard-900">Dodoma</option>
                      <option className="bg-packard-900">Mbeya</option>
                      <option className="bg-packard-900">Morogoro</option>
                      <option className="bg-packard-900">Tanga</option>
                      <option className="bg-packard-900">Other Tanzania</option>
                      <option className="bg-packard-900">Outside Tanzania</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Additional Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" placeholder="Sizes, materials, finishes, file formats you have ready, special requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-base hover:from-promo-400 shadow-lg shadow-promo-500/30">
                    Send Quote Request →
                  </button>
                  <p className="text-[10px] text-silver-600 text-center">By submitting you agree to our privacy policy. We never share your data.</p>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-20 h-20 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Quote Request Sent!</h2>
                  <p className="text-silver-300 text-base mb-7 max-w-md mx-auto">Thank you. Our team will review your project and respond within 2 hours during business hours.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm hover:from-green-500">
                      💬 Chat on WhatsApp Now
                    </a>
                    <a href="tel:+255716002790" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">
                      Call 0716 002 790
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
