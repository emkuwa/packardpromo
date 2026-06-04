"use client";

import { motion } from "framer-motion";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function LocationsSection() {
  return (
    <section className="section-tight relative" id="locations">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Nationwide Coverage</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">Proudly Serving All Major Cities in Tanzania</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={`/locations/${city.slug}`}
                className="group block glass-card rounded-xl p-4 h-full hover:border-promo-500/30"
              >
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="text-white font-bold text-base group-hover:text-promo-300 transition-colors">{city.name}</h3>
                  <span className="text-[9px] text-silver-500 uppercase tracking-wider font-semibold">{city.population}</span>
                </div>
                <p className="text-silver-400 text-[11px] leading-relaxed line-clamp-2 mb-1.5">{city.description}</p>
                <div className="text-[9px] text-promo-400 font-semibold uppercase tracking-wider">
                  {city.industries.length} industries served →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
