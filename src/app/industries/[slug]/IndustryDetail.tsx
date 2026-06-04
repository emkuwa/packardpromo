"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Industry } from "@/lib/industries";
import type { PortfolioProject } from "@/types";
import { services } from "@/lib/services";

export default function IndustryDetail({ industry, caseStudies }: { industry: Industry; caseStudies: PortfolioProject[] }) {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          {industry.heroImage ? (
            <img
              src={industry.heroImage}
              alt={industry.name}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              loading="eager"
            />
          ) : null}
          <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-40`} />
          <div className="absolute inset-0 bg-gradient-to-b from-packard-950/40 via-packard-950/60 to-packard-950" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-promo-400 transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">{industry.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} border border-white/10 flex items-center justify-center`}>
              <svg className="w-7 h-7 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
              </svg>
            </div>
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">{industry.shortName} Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl mb-4">
            Printing & Branding for <span className="text-gradient-promo">{industry.name}</span>
          </h1>
          <p className="text-silver-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-3">{industry.description}</p>
          <p className="text-silver-400 text-base leading-relaxed max-w-3xl italic">{industry.hero}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quote" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">
              Get Industry Quote
            </Link>
            <Link href="/ai-tools/quote-generator" className="px-7 py-3.5 rounded-full bg-packard-500/20 border border-packard-500/30 text-packard-300 font-semibold text-sm hover:bg-packard-500/30">
              AI Quote Generator
            </Link>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {industry.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-promo mb-1">{s.value}</div>
                <div className="text-silver-400 text-xs uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">The Challenges You Face</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Industry-Specific Challenges We Solve</h2>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-2xl glass-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-promo-500/10 border border-promo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <span className="text-silver-300 text-sm leading-relaxed">{c}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Solutions</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How We Deliver</h2>
              <div className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-2xl glass-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-promo-500/20 border border-promo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-silver-200 text-sm leading-relaxed font-medium">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Products We Provide</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Recommended Products for {industry.name}</h2>
          <div className="flex flex-wrap gap-2">
            {industry.products.map((p) => (
              <Link
                key={p}
                href="/products"
                className="px-4 py-2.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 text-sm font-semibold hover:bg-promo-500/20 transition-colors"
              >
                {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Case Studies</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{industry.name} Projects We've Delivered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudies.map((cs) => (
                <Link
                  key={cs!.id}
                  href={`/portfolio/${cs!.slug}`}
                  className="group block glass-card rounded-2xl overflow-hidden"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img src={cs!.image} alt={cs!.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-packard-950 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] text-promo-400 uppercase tracking-wider font-semibold mb-1">{cs!.client} · {cs!.year}</div>
                    <h3 className="text-white font-bold text-base group-hover:text-promo-300 transition-colors">{cs!.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Discuss Your {industry.name} Project?</h2>
              <p className="text-silver-300 text-lg mb-7">Get a free quote and consultation with our {industry.shortName.toLowerCase()} specialists.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quote" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Free Quote</Link>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
