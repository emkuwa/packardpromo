"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

function AnimatedStat({ value, suffix, label, delay, variant }: { value: number; suffix: string; label: string; delay: number; variant: "gradient" | "light" }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = value / 60;
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }} className="text-center">
      <div className={cn("text-3xl md:text-5xl font-bold", variant === "gradient" ? "text-gradient-promo" : "text-white")}>
        {count}{suffix}
      </div>
      <div className="text-silver-500 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

const trustIndicators = [
  { label: "50+", sublabel: "Product Categories", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" },
  { label: "9", sublabel: "Service Divisions", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { label: "Nationwide", sublabel: "Delivery", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { label: "Fast", sublabel: "Turnaround", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Instant", sublabel: "Quotes", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
];

const productionCapabilities = [
  "Digital Printing",
  "Offset Printing",
  "Packaging",
  "Signage",
  "Vehicle Branding",
  "Promotional Products",
];

export default function HeroSection({ stats }: { stats: { value: number; suffix: string; label: string }[] }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950/60 to-packard-950" />
          <img
            src="/images/hero-printing-branding.jpg"
            alt="Packard Promo printing and branding services in Tanzania"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-packard-950/40 via-packard-950/20 to-packard-950/85" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-packard-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-promo-400/60" />
            <span className="text-promo-300 text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
              Tanzania&apos;s Leading Printing & Branding Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold leading-[0.95] sm:leading-[0.9] tracking-tight text-white hero-text-shadow"
          >
            Print.
            <br />
            <span className="text-gradient-promo">Promote.</span>
            <br />
            Perform.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            <div className="text-silver-400 text-xs uppercase tracking-wider font-semibold mr-2">Industrial-Scale Production</div>
            {productionCapabilities.map((cap) => (
              <span key={cap} className="px-2.5 py-1 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 text-xs font-semibold">
                {cap}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl text-silver-300 max-w-3xl leading-relaxed"
          >
            Professional Printing, Signage, Packaging, Promotional Products and Branding Solutions for Businesses Across Tanzania.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white shadow-xl shadow-promo-500/30 hover:shadow-promo-500/50 hover:from-promo-400 transition-all"
            >
              Get Quote
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              Browse Products
            </Link>
            <Link
              href="/ai-tools"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold rounded-full bg-packard-500/20 text-packard-200 backdrop-blur-sm border border-packard-400/30 hover:bg-packard-500/30 transition-all"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              AI Advisor
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl"
          >
            {stats.map((stat, i) => (
              <AnimatedStat key={stat.label} {...stat} delay={0.7 + i * 0.1} variant="gradient" />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 md:mt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {trustIndicators.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.06 }}
                className="glass-card rounded-xl p-3 md:p-4 flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-promo-500/15 border border-promo-500/25 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-sm leading-tight">{ind.label}</div>
                  <div className="text-silver-500 text-[10px] leading-tight truncate">{ind.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-silver-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
