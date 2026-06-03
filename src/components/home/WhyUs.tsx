"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  {
    title: "Fast Turnaround",
    description: "Same-day printing in Dar. 2-3 days to all major cities. Rush services available.",
    stat: "24hr",
    statLabel: "avg turnaround",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Nationwide Delivery",
    description: "Same-day in Dar es Salaam. Next-day to Zanzibar, Arusha, Dodoma. 2-3 days nationwide.",
    stat: "8+",
    statLabel: "cities served",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Enterprise Production Capacity",
    description: "12,000 sqm facility. 4 Heidelberg offset presses. 6 digital presses. 3M certified vehicle bay.",
    stat: "12,000",
    statLabel: "sqm facility",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Professional Design Support",
    description: "Senior in-house designers. Logo, packaging, marketing materials, presentations — all under one roof.",
    stat: "12+",
    statLabel: "design specialists",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    title: "Quality Assurance",
    description: "ISO-aligned processes. Premium materials. 3-stage quality check. We re-print if you're not happy.",
    stat: "100%",
    statLabel: "quality guarantee",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Instant Quotes",
    description: "AI-powered quote generator. 30-second estimates. Formal quotes within 2 hours. No waiting.",
    stat: "30s",
    statLabel: "instant estimate",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    title: "Dedicated Project Management",
    description: "Single point of contact for every project. Real-time updates. Multi-site coordination handled.",
    stat: "1:1",
    statLabel: "account manager",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding relative" id="why">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Packard Promo"
          title="The 7 Reasons Businesses Choose Us"
          subtitle="From speed to scale, from quality to nationwide reach — here's what sets us apart."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 group hover:border-promo-500/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-promo-500/10 border border-promo-500/20 flex items-center justify-center group-hover:bg-promo-500/20 group-hover:scale-110 transition-all">
                  <svg className="w-7 h-7 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-promo">{v.stat}</div>
                  <div className="text-silver-500 text-[10px] uppercase tracking-wider">{v.statLabel}</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-promo-300 transition-colors">{v.title}</h3>
              <p className="text-silver-400 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
