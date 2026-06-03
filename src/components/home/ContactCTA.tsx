"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/50 via-packard-950 to-promo-900/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-packard-500/20 rounded-full blur-[200px]" />
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-promo-500/60" />
              <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
              Ready to <span className="text-gradient-promo">Print, Promote & Perform?</span>
            </h2>
            <p className="text-silver-300 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
              Share your project with us. We respond within 2 hours during business hours, and our AI tools give you instant price estimates 24/7.
            </p>

            <div className="space-y-3 mb-8">
              <a href="tel:+255716002790" className="group flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-green-500/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-silver-500 text-[10px] uppercase tracking-wider">Call / WhatsApp</div>
                  <div className="text-white font-bold text-base">+255 716 002 790</div>
                </div>
              </a>

              <a href="mailto:promo@packardltd.co.tz" className="group flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-packard-500/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-packard-500/10 border border-packard-500/20 flex items-center justify-center shrink-0 group-hover:bg-packard-500/20 transition-colors">
                  <svg className="w-5 h-5 text-packard-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-silver-500 text-[10px] uppercase tracking-wider">Email</div>
                  <div className="text-white font-bold text-base">promo@packardltd.co.tz</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-11 h-11 rounded-xl bg-promo-500/10 border border-promo-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-silver-500 text-[10px] uppercase tracking-wider">Visit Our Office</div>
                  <div className="text-white font-bold text-base">Fire Area, Dar es Salaam</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-7 md:p-8"
          >
            {!submitted ? (
              <>
                <h3 className="text-white text-xl font-bold mb-2">Send us a message</h3>
                <p className="text-silver-400 text-sm mb-6">We respond within 2 hours during business hours.</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" required placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                    <input type="text" required placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                  </div>
                  <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                  <input type="tel" required placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
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
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 hover:to-promo-300 shadow-lg shadow-promo-500/30 transition-all"
                  >
                    Send Inquiry →
                  </button>
                  <p className="text-[10px] text-silver-600 text-center">By submitting you agree to our privacy policy. We never share your data.</p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-silver-400 text-sm">We&apos;ll respond within 2 hours during business hours. For urgent requests, call +255 716 002 790.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
