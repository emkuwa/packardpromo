"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  highlight?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  highlight,
}: SectionHeadingProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl mb-10 md:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-promo-500/60" />
          <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-promo-500/60" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="text-gradient-promo">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl text-silver-400",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
