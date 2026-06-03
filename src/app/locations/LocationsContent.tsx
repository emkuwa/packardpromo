"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { City } from "@/types";

export default function LocationsContent({ cities }: { cities: City[] }) {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Locations We Serve</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Tanzania-Wide <span className="text-gradient-promo">Coverage</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            From our Dar es Salaam headquarters, we deliver printing, signage, packaging and branding services to all major cities across the country.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {cities.map((city, i) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className="group block glass-card rounded-2xl p-5 md:p-6 h-full hover:border-promo-500/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-lg group-hover:text-promo-300 transition-colors">{city.name}</h3>
                    <span className="text-[10px] text-silver-500 uppercase tracking-wider font-semibold">{city.population}</span>
                  </div>
                  <p className="text-silver-400 text-xs leading-relaxed mb-3 line-clamp-2">{city.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {city.industries.slice(0, 3).map((ind) => (
                      <span key={ind} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-silver-400">{ind}</span>
                    ))}
                  </div>
                  <div className="text-[10px] text-promo-400 font-semibold uppercase tracking-wider">
                    {city.industries.length} industries · View services →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
