"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trustStats } from "@/lib/data";
import Script from "next/script";

const values = [
  { title: "Quality First", description: "Packard Promo uses premium materials and state-of-the-art equipment including HP Indigo, Heidelberg Speedmaster and Konica Minolta presses. Every product undergoes quality inspection before dispatch.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { title: "On-Time Delivery", description: "Packard Promo maintains a 99% on-time delivery rate across 4,500+ projects. Same-day printing available in Dar es Salaam for business cards, flyers and posters when artwork is ready.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Customer Obsession", description: "Every project at Packard Promo gets a dedicated account manager — a single point of contact from quote to delivery. The team responds within 2 hours during business hours.", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { title: "Innovation", description: "Packard Promo launched AI-powered tools in 2026 for instant quotes, print consulting, packaging advice and signage planning. The production facility runs Heidelberg, HP Indigo and Konica Minolta presses.", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
];

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Packard Promo and what services does it offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packard Promo is a division of Packard Limited, Tanzania's leading corporate branding agency established in 2010. It offers 9 service categories: digital printing, offset printing, large format printing, packaging printing, signage solutions, vehicle branding, promotional products, exhibition & events, and design studio. The catalog includes 82+ products from business cards to full vehicle wraps.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Packard Promo been operating in Tanzania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packard Promo has been operating in Tanzania since 2010 — over 14 years. During this time, the company has delivered 4,500+ projects, completed 1,200+ signage installations, and served 250+ organizations including CRDB Bank, Vodacom, UNICEF and Serena Hotels.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Packard Promo's production facility located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packard Promo operates from a 12,000 sqm production facility at Fire Area, Dar es Salaam, Tanzania. The facility houses Heidelberg offset presses, HP Indigo digital presses, Konica Minolta presses, large-format printers, a signage fabrication workshop, a vehicle branding bay, and a packaging design studio.",
      },
    },
    {
      "@type": "Question",
      name: "How many employees does Packard Promo have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packard Promo employs a production team of 50+ specialists including in-house designers, print operators, signage fabricators, vehicle branding installers, packaging engineers, and project managers.",
      },
    },
  ],
};

export default function AboutContent() {
  return (
    <>
      <Script
        id="about-faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />

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
            What is Packard Promo and why do 250+ organizations in Tanzania trust it for printing and branding?
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-3xl leading-relaxed">
            Packard Promo is a division of Packard Limited, established in 2010 as Tanzania&apos;s leading corporate branding agency. Over 14+ years, Packard Limited has helped banks, telecoms, hotels and government institutions build powerful brands. Packard Promo is the dedicated production arm — purpose-built for printing, signage, packaging, vehicle branding and promotional products across 8+ Tanzanian cities.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">How did Packard Promo grow from a small print shop to Tanzania&apos;s largest printing platform?</h2>
              <div className="space-y-4 text-silver-300 leading-relaxed">
                <p>
                  Packard Promo started in 2010 as a small print shop in Dar es Salaam and has grown into Tanzania&apos;s most complete printing, signage, packaging and branding platform. Over 14+ years, the company invested in state-of-the-art equipment, built an in-house design studio, assembled a production team of 50+ specialists, and earned the trust of Tanzania&apos;s most demanding brands including CRDB Bank, Vodacom, UNICEF and Serena Hotels.
                </p>
                <p>
                  Today, Packard Promo operates from a modern 12,000 sqm production facility in Dar es Salaam with Heidelberg offset presses, HP Indigo digital presses, Konica Minolta presses, large-format printers, a signage fabrication workshop, a vehicle branding bay, and a packaging design studio — all under one roof. The facility supports 9 service divisions and 82+ products.
                </p>
                <p>
                  In 2026, Packard Promo launched AI-powered tools including an instant quote generator, print consultant chatbot, packaging advisor and signage planner — making it easier for businesses to plan, quote and order printing services 24/7. The tools provide instant estimates and smart recommendations based on the full product catalog.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-packard-800 border border-white/10">
                <img
                  src="/images/quality inspection scene printing.jpg"
                  alt="Packard Promo production facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Our 12,000 sqm Production Facility</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Founded", value: "2010" },
                  { label: "Production Facility", value: "12,000 sqm" },
                  { label: "Team", value: "50+ specialists" },
                  { label: "Cities Served", value: "8+" },
                  { label: "Presses", value: "Heidelberg · HP · Konica" },
                  { label: "Sister Company", value: "Packard Limited" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-2xl p-4">
                    <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">{item.label}</div>
                    <div className="text-white font-bold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What makes Packard Promo the top-rated printing company in Tanzania?</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How do I get a quote from Packard Promo?</h2>
              <p className="text-silver-300 text-lg mb-7 max-w-xl mx-auto">Request a free quote through the online form, WhatsApp at +255716002790, or use the AI quote tool for instant estimates. Whether you need a single business card or a national fleet rebrand — Packard Promo handles projects of any size.</p>
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
