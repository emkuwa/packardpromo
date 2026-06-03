"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  slug: string;
  name: string;
  description: string;
  startingPrice: number;
  minQty: number;
  leadTime: string;
  index: number;
  category: string;
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-TZ", { maximumFractionDigits: 0 }).format(n);
}

export default function ProductCard({ slug, name, description, startingPrice, minQty, leadTime, index, category }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <a
        href={`/products/${slug}`}
        className="block glass-card rounded-2xl p-5 h-full relative overflow-hidden"
      >
        <div className="flex items-start justify-between mb-3">
          <span className="text-[10px] uppercase tracking-wider text-promo-400 font-semibold px-2 py-1 rounded-full bg-promo-500/10 border border-promo-500/20">
            {category}
          </span>
          <div className="text-right">
            <div className="text-[10px] text-silver-500 uppercase">From</div>
            <div className="text-white font-bold text-sm">TZS {formatPrice(startingPrice)}</div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-promo-300 transition-colors">
          {name}
        </h3>

        <p className="text-silver-400 text-xs leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-[10px] text-silver-500 pt-3 border-t border-white/5">
          <div>
            <span className="text-silver-600">MOQ: </span>
            <span className="text-silver-300 font-medium">{minQty}+</span>
          </div>
          <div>
            <span className="text-silver-600">Lead: </span>
            <span className="text-silver-300 font-medium">{leadTime}</span>
          </div>
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 text-promo-400 text-xs font-medium group-hover:gap-2.5 transition-all">
          View Product
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <div className={cn(
          "absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500",
          hovered ? "bg-promo-500/20" : "bg-promo-500/5"
        )} />
      </a>
    </motion.div>
  );
}
