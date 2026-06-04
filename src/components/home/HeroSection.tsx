"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
      <div className={cn("text-2xl md:text-4xl font-bold", variant === "gradient" ? "text-gradient-promo" : "text-white")}>
        {count}{suffix}
      </div>
      <div className="text-silver-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

const trustIndicators = [
  { label: "Same Day Printing", sublabel: "Available" },
  { label: "Dar es Salaam", sublabel: "Delivery" },
  { label: "Nationwide", sublabel: "Tanzania Delivery" },
  { label: "Fast Quote", sublabel: "Response" },
];

const deliveryLine = "Delivery Across Dar es Salaam & Nationwide Tanzania";
const trustLine = "Trusted by businesses, NGOs, schools, hotels and institutions across Tanzania.";

const productionCapabilities = [
  "Digital Printing",
  "Offset Printing",
  "Packaging",
  "Signage",
  "Vehicle Branding",
  "Promotional Products",
];

const heroBanners = [
  "/images/hero-mobile.jpg",
];

const heroCollage = [
  { src: "/images/hero-tanzania.jpg", alt: "Packard Promo Tanzania", className: "col-span-2 row-span-2", priority: true },
  { src: "/images/hero image for promo packard.jpg", alt: "Promo packaging", className: "" },
  { src: "/images/hero2.jpg", alt: "Print production", className: "" },
  { src: "/images/hero-east-african.jpg", alt: "East African printing", className: "col-span-2" },
];

const floatingProducts = [
  { src: "/images/business card2.jpg", alt: "Business Cards", top: "6%", right: "3%", size: "w-20 h-20 md:w-24 md:h-24", delay: 0, rotate: -8 },
  { src: "/images/round neck t-shirt.jpg", alt: "T-Shirts", top: "30%", right: "1%", size: "w-24 h-24 md:w-28 md:h-28", delay: 0.2, rotate: 6 },
  { src: "/images/cap.jpg", alt: "Caps", top: "58%", right: "4%", size: "w-20 h-20 md:w-24 md:h-24", delay: 0.4, rotate: -10 },
  { src: "/images/packaging.jpg", alt: "Packaging", top: "10%", left: "1%", size: "w-24 h-24 md:w-28 md:h-28", delay: 0.3, rotate: 8 },
  { src: "/images/illuminated signage.jpg", alt: "Signboards", top: "45%", left: "0%", size: "w-24 h-24 md:w-28 md:h-28", delay: 0.5, rotate: -6 },
  { src: "/images/large format printing.jpg", alt: "Banners", top: "72%", left: "4%", size: "w-20 h-20 md:w-24 md:h-24", delay: 0.15, rotate: 10 },
];

export default function HeroSection({ stats }: { stats: { value: number; suffix: string; label: string }[] }) {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden pt-[7.25rem] md:pt-20 pb-6">
      <div className="absolute inset-0">
        <Image
          src={heroBanners[0]}
          alt="Packard Promo printing and branding services in Tanzania"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-packard-950/40 via-packard-950/20 to-packard-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-packard-950/60 via-packard-950/20 to-packard-950/60" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-packard-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-promo-500/15 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-promo-500/15 border border-promo-400/30"
            >
              <span aria-hidden="true">⚡</span>
              <span className="text-promo-200 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                Same-Day Printing Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white hero-text-shadow"
            >
              PRINT.
              <br />
              <span className="text-gradient-promo">BRAND.</span>
              <br />
              DELIVER.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-sm sm:text-base md:text-lg text-silver-300 max-w-xl leading-relaxed"
            >
              Same-Day Printing, Branding &amp; Signage Solutions in Tanzania.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-xs sm:text-sm text-silver-400 max-w-xl leading-relaxed"
            >
              Business Cards &bull; Flyers &bull; Stickers &bull; Banners &bull; Signboards &bull; Corporate Gifts
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap gap-2"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white shadow-xl shadow-promo-500/30 hover:shadow-promo-500/50 hover:from-promo-400 transition-all"
              >
                Get a Quote
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/+255716002790?text=Hi%20Packard%20Promo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm md:text-base font-semibold rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 hover:bg-green-400 transition-all"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Chat on WhatsApp
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-[11px] sm:text-xs text-silver-400 max-w-xl leading-relaxed"
            >
              {trustLine}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-packard-300 font-medium"
            >
              <svg className="w-3.5 h-3.5 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{deliveryLine}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 grid grid-cols-4 gap-3 max-w-md"
            >
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={0.7 + i * 0.1} variant="gradient" />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative h-[600px]"
          >
            {floatingProducts.map((p) => (
              <motion.div
                key={p.src}
                initial={{ opacity: 0, scale: 0.7, rotate: p.rotate }}
                animate={{ opacity: 1, scale: 1, rotate: p.rotate }}
                transition={{ duration: 0.6, delay: 0.5 + p.delay }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                className={cn(
                  "absolute rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-black/50",
                  p.size
                )}
                style={{ top: p.top, right: p.right, left: p.left }}
              >
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950/40 to-transparent" />
              </motion.div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-promo-500/20 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:hidden grid grid-cols-3 gap-2 mt-4"
          >
            {floatingProducts.slice(0, 6).map((p) => (
              <div key={p.src} className="aspect-square rounded-lg overflow-hidden border border-white/20">
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl">
            {trustIndicators.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.06 }}
                className="glass-card rounded-lg p-2 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] leading-tight">{ind.label}</div>
                  <div className="text-silver-500 text-[9px] leading-tight">{ind.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
