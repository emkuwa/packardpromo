"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  productCount: number;
  index: number;
  color: string;
}

const iconBackgrounds: Record<string, string> = {
  "from-blue-500/20 to-cyan-600/10": "from-blue-500/20 to-cyan-600/10",
  "from-emerald-500/20 to-teal-600/10": "from-emerald-500/20 to-teal-600/10",
  "from-violet-500/20 to-purple-600/10": "from-violet-500/20 to-purple-600/10",
  "from-amber-500/20 to-orange-600/10": "from-amber-500/20 to-orange-600/10",
  "from-rose-500/20 to-pink-600/10": "from-rose-500/20 to-pink-600/10",
  "from-red-500/20 to-rose-600/10": "from-red-500/20 to-rose-600/10",
  "from-cyan-500/20 to-blue-600/10": "from-cyan-500/20 to-blue-600/10",
  "from-indigo-500/20 to-blue-600/10": "from-indigo-500/20 to-blue-600/10",
  "from-fuchsia-500/20 to-pink-600/10": "from-fuchsia-500/20 to-pink-600/10",
};

const accentColors: Record<string, string> = {
  "from-blue-500/20 to-cyan-600/10": "text-cyan-300",
  "from-emerald-500/20 to-teal-600/10": "text-emerald-300",
  "from-violet-500/20 to-purple-600/10": "text-violet-300",
  "from-amber-500/20 to-orange-600/10": "text-amber-300",
  "from-rose-500/20 to-pink-600/10": "text-rose-300",
  "from-red-500/20 to-rose-600/10": "text-red-300",
  "from-cyan-500/20 to-blue-600/10": "text-cyan-300",
  "from-indigo-500/20 to-blue-600/10": "text-indigo-300",
  "from-fuchsia-500/20 to-pink-600/10": "text-fuchsia-300",
};

export default function ServiceCard({ slug, title, shortDescription, icon, productCount, index, color }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = accentColors[color] || "text-packard-300";
  const bg = iconBackgrounds[color] || "from-packard-500/20 to-packard-600/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <a
        href={`/services/${slug}`}
        className="block glass-card rounded-2xl p-6 md:p-7 h-full relative overflow-hidden"
      >
        <div className={cn(
          "w-14 h-14 rounded-2xl bg-gradient-to-br border border-white/10 flex items-center justify-center mb-5 transition-transform duration-300",
          bg,
          hovered && "scale-110"
        )}>
          <svg className={cn("w-7 h-7", accent)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-promo-300 transition-colors">
          {title}
        </h3>

        <p className="text-silver-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className={cn("text-xs uppercase tracking-wider font-semibold", accent)}>
            {productCount} products
          </span>
          <span className="inline-flex items-center gap-1.5 text-promo-400 text-sm font-medium group-hover:gap-2.5 transition-all">
            Explore
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-promo-500/0 to-promo-500/10 rounded-full blur-3xl group-hover:from-promo-500/20 transition-all duration-500" />
      </a>
    </motion.div>
  );
}
