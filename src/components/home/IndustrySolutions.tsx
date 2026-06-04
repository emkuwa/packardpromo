"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/lib/industries";

export default function IndustrySolutions() {
  return (
    <section className="section-tight relative" id="industries">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Solutions by Industry</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">Industry-Specific Expertise</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 md:gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group block glass-card rounded-xl overflow-hidden h-full hover:border-promo-500/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-packard-800">
                  {ind.heroImage ? (
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${ind.color}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-packard-950 via-packard-950/30 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-white font-bold text-xs mb-0.5 group-hover:text-promo-300 transition-colors leading-tight">{ind.name}</h3>
                  <div className="text-[9px] text-promo-400 font-semibold uppercase tracking-wider">
                    {ind.stats[0]?.value} {ind.stats[0]?.label} →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
