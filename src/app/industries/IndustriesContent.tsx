"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Industry } from "@/lib/industries";
import { portfolioProjects } from "@/lib/portfolio";

export default function IndustriesContent({ industries }: { industries: Industry[] }) {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Solutions By Industry</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Deep <span className="text-gradient-promo">Industry Expertise</span> Across Tanzania
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            From banking to education, hospitality to manufacturing — we understand the unique printing, signage and branding needs of every sector we serve. Each industry gets its own dedicated solutions team.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {industries.map((ind, i) => {
              const caseStudy = ind.caseStudyIds[0] ? portfolioProjects.find((p) => p.id === ind.caseStudyIds[0]) : null;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass-card rounded-2xl p-6 group hover:border-promo-500/30"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.color} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-7 h-7 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-promo-300 transition-colors">{ind.name}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed mb-4">{ind.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-white/5">
                    {ind.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-promo-400 font-bold text-base">{s.value}</div>
                        <div className="text-silver-500 text-[10px] uppercase tracking-wider leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-[10px] text-silver-500 uppercase tracking-wider font-semibold">{ind.clients.length}+ clients</div>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-promo-400 text-xs font-semibold group-hover:gap-2.5 transition-all"
                    >
                      Explore
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
