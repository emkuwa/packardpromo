"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function ContactContent() {
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
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Contact Packard Promo</span>
            <span className="h-px w-8 bg-promo-500/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl mx-auto">
            Let's <span className="text-gradient-promo">Talk About Your Project</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            We respond to all inquiries within 2 hours during business hours. For urgent requests, call or WhatsApp us directly.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-3">
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-green-500/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-silver-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Call / WhatsApp</div>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-white font-bold text-lg hover:text-promo-300">{siteConfig.phone}</a>
                      <div className="text-silver-500 text-xs mt-1">Same number for calls & WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-packard-500/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-packard-500/20 border border-packard-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-packard-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-silver-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-white font-bold text-base hover:text-promo-300 break-all">{siteConfig.email}</a>
                      <div className="text-silver-500 text-xs mt-1">Replies within 2 business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-promo-500/20 border border-promo-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-silver-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Visit Our Office</div>
                    <div className="text-white font-bold text-base">Fire Area, Dar es Salaam</div>
                    <div className="text-silver-500 text-xs mt-1">By appointment preferred</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-silver-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-silver-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Business Hours</div>
                    <div className="text-white text-sm font-semibold leading-relaxed">
                      Mon – Fri: 8:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 2:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-7 md:p-9 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-promo-500/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  {!submitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-1">Send us a message</h2>
                      <p className="text-silver-400 text-sm mb-6">We'll respond within 2 hours during business hours.</p>
                      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                          <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                          <input required type="tel" placeholder="Phone / WhatsApp" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                        <textarea required rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
                        <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Message →</button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-5">
                        <svg className="w-10 h-10 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                      <p className="text-silver-300 text-base mb-7">We'll respond within 2 hours during business hours.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
