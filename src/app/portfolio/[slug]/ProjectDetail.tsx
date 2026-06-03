"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { PortfolioProject } from "@/types";

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-promo-400 transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold line-clamp-1">{project.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-wider text-white font-semibold px-2.5 py-1 rounded-full bg-promo-500/80 border border-promo-500/30">
              {project.category}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-silver-300 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              {project.industry}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-silver-300 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              {project.year}
            </span>
            {project.duration && (
              <span className="text-[10px] uppercase tracking-wider text-silver-300 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                {project.duration}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-4 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl">{project.description}</p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden aspect-video bg-packard-800 relative">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="absolute inset-0 grid-lines" />
              )}
            </div>

            <div className="space-y-3">
              <div className="glass-card rounded-2xl p-4">
                <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Client</div>
                <div className="text-white font-bold text-sm">{project.client}</div>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Industry</div>
                <div className="text-white font-bold text-sm">{project.industry}</div>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Location</div>
                <div className="text-white font-bold text-sm">{project.location}</div>
              </div>
              {project.teamSize && (
                <div className="glass-card rounded-2xl p-4">
                  <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Team</div>
                  <div className="text-white font-bold text-sm">{project.teamSize}</div>
                </div>
              )}
              <div className="glass-card rounded-2xl p-4">
                <div className="text-promo-400 text-[10px] uppercase tracking-wider font-semibold mb-2">Services Delivered</div>
                <ul className="space-y-1">
                  {project.services.slice(0, 5).map((s) => (
                    <li key={s} className="flex items-start gap-1.5 text-xs text-silver-300">
                      <svg className="w-3.5 h-3.5 text-promo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.challenge && project.solution && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-rose-300">The Challenge</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">The Brief</h3>
                  <p className="text-silver-300 text-sm leading-relaxed">{project.challenge}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-promo-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-promo-500/20 border border-promo-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-promo-300">Our Solution</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">How We Solved It</h3>
                  <p className="text-silver-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {project.deliverables && project.deliverables.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-2xl p-7">
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">Deliverables</div>
              <h3 className="text-2xl font-bold text-white mb-5">What We Produced</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.deliverables.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-packard-500/5 border border-packard-500/15"
                  >
                    <div className="w-6 h-6 rounded-md bg-promo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-silver-200 text-sm">{d}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {project.outcome && project.metrics && project.metrics.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Results</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">The Outcome</h3>
            <p className="text-silver-300 text-base leading-relaxed mb-7 max-w-3xl">{project.outcome}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              {project.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient-promo mb-1">{m.value}</div>
                  <div className="text-silver-400 text-xs uppercase tracking-wider">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="section-padding pt-0">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-promo-500/15 to-packard-900" />
              <div className="relative z-10 p-8 md:p-10">
                <svg className="w-10 h-10 text-promo-400/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white text-lg md:text-xl leading-relaxed font-medium mb-5 italic">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-promo-500 to-packard-500 flex items-center justify-center text-white font-bold text-sm">
                    {project.testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{project.testimonial.author}</div>
                    <div className="text-silver-400 text-xs">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Want a Project Like This?</h2>
              <p className="text-silver-300 text-lg mb-7 max-w-xl mx-auto">Whether it&apos;s a 12-branch signage rollout, 50,000 branded notebooks, or 65-vehicle fleet rebrand — we have the capacity to deliver at scale.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quote" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Free Quote</Link>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Chat on WhatsApp</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
