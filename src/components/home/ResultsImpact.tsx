"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: 4500, suffix: "+", label: "Projects Delivered" },
  { value: 250, suffix: "+", label: "Organizations Served" },
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Cities Nationwide" },
  { value: 50, suffix: "+", label: "Product Categories" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedNumber({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
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
          const increment = value / 80;
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
      >
        <span className="text-gradient-promo">{count.toLocaleString()}</span>
        <span className="text-gradient-promo">{suffix}</span>
      </motion.div>
    </div>
  );
}

export default function ResultsImpact() {
  return (
    <section className="section-padding relative" id="results">
      <div className="absolute inset-0 bg-gradient-to-br from-packard-900/50 via-packard-950 to-packard-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-promo-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-promo-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">The Packard Promo Track Record</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Trusted Across <span className="text-gradient-promo">Tanzania</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={i * 0.08} />
              <div className="text-silver-400 text-xs md:text-sm uppercase tracking-widest mt-3 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
