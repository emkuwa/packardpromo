"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function ServicesContent({ services }: { services: Service[] }) {
  return (
    <>
      <Script
        id="services-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Packard Promo Services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteConfig.url}/services/${s.slug}`,
              name: s.title,
            })),
          }),
        }}
      />

      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-promo-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white max-w-4xl">
            Tanzania's Most <span className="text-gradient-promo">Complete</span> Print & Branding Services
          </h1>
          <p className="text-silver-400 text-lg md:text-xl mt-5 max-w-3xl leading-relaxed">
            Nine integrated service categories. From a single business card to a nationwide fleet rebrand, signage rollout, or packaging line — we're your single partner.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-silver-400">
            <span className="px-3 py-1.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 font-semibold text-xs uppercase tracking-wider">{services.length} service categories</span>
            <span className="px-3 py-1.5 rounded-full bg-packard-500/10 border border-packard-500/20 text-packard-300 font-semibold text-xs uppercase tracking-wider">{services.reduce((acc, s) => acc + s.products.length, 0)}+ products</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-300 font-semibold text-xs uppercase tracking-wider">14+ years experience</span>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => (
              <div key={service.id} className="scroll-mt-32" id={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                    idx % 2 === 1 && "lg:flex-row-reverse"
                  )}
                >
                  <div className={cn(idx % 2 === 1 && "lg:order-2")}>
                    <div className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">Service 0{idx + 1}</div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-silver-400 text-base leading-relaxed mb-5">{service.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {service.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-silver-300">
                          <svg className="w-4 h-4 text-promo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400 transition-all"
                      >
                        Explore {service.title}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/quote"
                        onClick={() => trackEvent("quote_click", { label: "services_listing" })}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  <div className={cn(idx % 2 === 1 && "lg:order-1")}>
                    <div className="glass-card rounded-2xl p-2 relative overflow-hidden">
                      {service.image ? (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-packard-950/80 to-transparent">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] uppercase tracking-wider text-white font-semibold px-2.5 py-1 rounded-full bg-promo-500/90">
                                {service.title}
                              </span>
                              <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-1.5 text-promo-300 text-xs font-semibold hover:gap-2.5 transition-all"
                              >
                                Explore
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          {service.products.slice(0, 4).map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="block p-4 rounded-xl bg-packard-900/40 hover:bg-packard-900/60 border border-white/5 hover:border-promo-500/30 transition-all group"
                            >
                              <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Product</div>
                              <div className="text-white font-semibold text-sm mb-1 group-hover:text-promo-300 transition-colors">{product.name}</div>
                              <div className="text-silver-500 text-[10px]">From TZS {product.startingPrice.toLocaleString()}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                      <div className={cn("absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br to-transparent rounded-full blur-3xl", service.color)} />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
