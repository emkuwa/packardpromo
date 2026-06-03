"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/lib/data";

const industries = [
  { name: "Banking", icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25" },
  { name: "Telecom", icon: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" },
  { name: "Government", icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6" },
  { name: "NGOs", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747" },
  { name: "Hospitality", icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21" },
  { name: "Education", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347" },
  { name: "Healthcare", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5" },
  { name: "Construction", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18" },
  { name: "Real Estate", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21" },
];

export default function TrustedByLogos() {
  const doubled = [...trustedBy, ...trustedBy];
  return (
    <section className="section-padding relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.3em] font-semibold">Trusted By Businesses Across Tanzania</span>
            <span className="h-px w-8 bg-promo-500/60" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Powering the Visual Presence of Leading Brands</h2>
          <p className="text-silver-400 text-sm">250+ organizations trust us for their printing, signage and branding needs.</p>
        </motion.div>

        <div className="relative overflow-hidden mb-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-packard-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-packard-950 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 md:gap-16 animate-marquee">
            {doubled.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="shrink-0 text-silver-400 font-bold text-base md:text-lg uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-white transition-all whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <div className="w-9 h-9 rounded-lg bg-promo-500/10 border border-promo-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                </svg>
              </div>
              <div className="text-[10px] text-silver-300 uppercase tracking-wider font-semibold text-center">{ind.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
