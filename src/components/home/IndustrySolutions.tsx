"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { industries } from "@/lib/industries";

export default function IndustrySolutions() {
  return (
    <section className="section-padding relative" id="industries">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Solutions By Industry"
          title="Industry-Specific Printing & Branding Expertise"
          subtitle="10 industries. 14+ years. Deep understanding of the unique print, signage and branding needs of every sector we serve."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group block glass-card rounded-2xl p-5 h-full hover:border-promo-500/30"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-promo-300 transition-colors leading-tight">{ind.name}</h3>
                <p className="text-silver-500 text-[11px] line-clamp-2 leading-relaxed">{ind.description.slice(0, 80)}...</p>
                <div className="mt-3 text-[10px] text-promo-400 font-semibold uppercase tracking-wider">
                  {ind.stats[0]?.value} {ind.stats[0]?.label} →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
