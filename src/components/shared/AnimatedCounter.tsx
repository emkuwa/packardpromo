"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

export default function AnimatedCounter({
  stats,
  className,
  columns = 4,
  variant = "gradient",
}: {
  stats: Stat[];
  className?: string;
  columns?: 2 | 3 | 4;
  variant?: "gradient" | "promo" | "light";
}) {
  return (
    <div
      className={cn(
        "grid gap-3 md:gap-6",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {stats.map((stat, i) => (
        <AnimatedStat key={stat.label} stat={stat} delay={i * 0.1} variant={variant} />
      ))}
    </div>
  );
}

function AnimatedStat({ stat, delay, variant }: { stat: Stat; delay: number; variant: "gradient" | "promo" | "light" }) {
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
          const increment = stat.value / 60;
          const timer = setInterval(() => {
            start += increment;
            if (start >= stat.value) {
              setCount(stat.value);
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
  }, [stat.value, hasAnimated]);

  const colorClass = {
    gradient: "text-gradient",
    promo: "text-gradient-promo",
    light: "text-packard-300",
  }[variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className={cn("text-3xl md:text-5xl font-bold", colorClass)}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-silver-500 text-xs uppercase tracking-widest mt-2 font-medium">{stat.label}</div>
    </motion.div>
  );
}
