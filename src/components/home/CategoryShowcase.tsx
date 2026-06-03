"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/lib/services";

export default function CategoryShowcase() {
  return (
    <section className="section-padding relative" id="categories">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="9 Service Divisions"
          title="Explore Tanzania's Largest Production Platform"
          subtitle="From a single business card to a nationwide fleet rebrand, signage rollout, or packaging line — we are your single partner for every printing, branding, packaging and promotional product need."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[4/5] bg-packard-800"
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 grid-lines" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950/95 via-packard-950/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-promo-500/90 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-white bg-promo-500/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    0{i + 1}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-1.5 group-hover:text-promo-300 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-silver-300 text-xs leading-relaxed line-clamp-2 mb-3">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-silver-400 uppercase tracking-wider font-semibold">
                      {service.products.length} products
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-promo-300 text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Explore
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
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
