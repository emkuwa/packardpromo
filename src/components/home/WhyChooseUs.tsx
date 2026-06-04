"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  {
    title: "Same-Day Printing",
    description: "Place your order before noon and collect in Dar es Salaam the same day. Rush services available nationwide.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Nationwide Delivery",
    description: "Same-day in Dar. Next-day to Zanzibar, Arusha, Dodoma. 2-3 days to all major Tanzanian cities.",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Professional Design Support",
    description: "Senior in-house designers handle logos, packaging, marketing collateral and signage — all under one roof.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    title: "Fast Quote Response",
    description: "Get an instant estimate in 30 seconds with our AI quote tool. Formal quotes within 2 hours during business hours.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative" id="why-choose-us">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Fast, Reliable, Professional"
          subtitle="Four reasons businesses across Tanzania trust us with their printing, branding and signage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 group hover:border-promo-500/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-promo-500/10 border border-promo-500/20 flex items-center justify-center mb-4 group-hover:bg-promo-500/20 group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={r.icon} />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-bold text-base group-hover:text-promo-300 transition-colors">{r.title}</h3>
              </div>
              <p className="text-silver-400 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
