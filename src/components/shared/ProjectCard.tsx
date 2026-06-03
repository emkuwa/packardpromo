"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  year: string;
  location: string;
  index: number;
  image?: string;
}

export default function ProjectCard({ slug, title, client, category, industry, description, year, location, index, image }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <a href={`/portfolio/${slug}`} className="block relative overflow-hidden rounded-2xl aspect-[4/3] bg-packard-800">
        {image && !imgError ? (
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.6 }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 grid-lines flex items-center justify-center">
            <svg className="w-16 h-16 text-promo-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        )}

        {/* Light bottom gradient for text legibility — image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-packard-950/90 via-packard-950/40 to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="text-[9px] uppercase tracking-wider text-white font-semibold px-2.5 py-1 rounded-full bg-promo-500/90 border border-promo-500/30 shadow-lg">
            {category}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-white/95 font-medium px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm">
            {industry}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="text-[10px] text-silver-300 uppercase tracking-wider mb-1 font-medium">{client} · {year}</div>
          <h3 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-promo-300 transition-colors drop-shadow-lg">
            {title}
          </h3>
          <p className="text-silver-200 text-xs mt-1.5 line-clamp-2 leading-relaxed drop-shadow-md">{description}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-promo-300 text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
            View Case Study
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
