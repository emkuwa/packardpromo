"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trustStats } from "@/lib/data";

const values = [
  { title: "Quality First", description: "Premium materials, premium equipment, premium finishes. We never compromise on quality.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { title: "On-Time Delivery", description: "99% on-time delivery. We respect your deadlines because we know time is business.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Customer Obsession", description: "Every project gets a dedicated account manager. Single point of contact, every time.", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { title: "Innovation", description: "AI tools, modern equipment, and continuous learning. We invest in the future of print.", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
];

export default function AboutContent() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">About Packard Promo</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            A Division of <span className="text-gradient-promo">Packard Limited</span> — Built for Print, Signage & Branding
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-3xl leading-relaxed">
            For 14+ years, Packard Limited has been Tanzania's leading corporate branding agency, helping banks, telecoms, hotels and government institutions build powerful brands. Packard Promo is our dedicated production arm — purpose-built for printing, signage, packaging, vehicle branding and promotional products.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-promo mb-1">{stat.value.toLocaleString()}{stat.suffix}</div>
                <div className="text-silver-400 text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">From a Print Shop to a National Production Platform</h2>
              <div className="space-y-4 text-silver-300 leading-relaxed">
                <p>
                  What started in 2010 as a small print shop in Dar es Salaam has grown into Tanzania's most complete printing, signage, packaging and branding platform. Over 14+ years, we've invested in state-of-the-art equipment, built an in-house design studio, assembled a production team of 50+ specialists, and earned the trust of Tanzania's most demanding brands.
                </p>
                <p>
                  Today, Packard Promo operates from a modern production facility in Dar es Salaam with Heidelberg offset presses, HP Indigo digital presses, large-format printers, a signage fabrication workshop, a vehicle branding bay, and a packaging design studio — all under one roof.
                </p>
                <p>
                  In 2026, we launched AI-powered tools to make it even easier for businesses to plan, quote and order — instant estimates, smart recommendations, and a chatbot that knows our entire catalog.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2010" },
                { label: "Production Facility", value: "12,000 sqm" },
                { label: "Team", value: "50+ specialists" },
                { label: "Cities Served", value: "8+" },
                { label: "Presses", value: "Heidelberg · HP · Konica" },
                { label: "Sister Company", value: "Packard Limited" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-5">
                  <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">{item.label}</div>
                  <div className="text-white font-bold text-base">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-promo-500/10 border border-promo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-promo-500/20 transition-all">
                  <svg className="w-6 h-6 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-promo-300 transition-colors">{v.title}</h3>
                <p className="text-silver-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Work With Us?</h2>
              <p className="text-silver-300 text-lg mb-7 max-w-xl mx-auto">Whether you need a single business card or a national fleet rebrand — we'd love to help.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quote" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Free Quote</Link>
                <Link href="/portfolio" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">View Our Work</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
