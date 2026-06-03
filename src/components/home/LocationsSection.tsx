"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function LocationsSection() {
  return (
    <section className="section-padding relative" id="locations">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-900/30 via-packard-950 to-packard-950" />
      <div className="relative z-10 container-wide">
        <SectionHeading
          eyebrow="Nationwide Coverage"
          title="Proudly Serving All Major Cities in Tanzania"
          subtitle="From our Dar es Salaam headquarters, we deliver printing, signage and branding services to all major cities across the country."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-promo-300 transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-[10px] text-silver-500 uppercase tracking-wider font-semibold">{city.population}</span>
                </div>
                <p className="text-silver-400 text-xs leading-relaxed mb-3 line-clamp-2">{city.description}</p>
                <div className="text-[10px] text-promo-400 font-semibold uppercase tracking-wider">
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
