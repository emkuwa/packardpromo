"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQProps {
  items: { q: string; a: string }[];
  className?: string;
}

export default function FAQ({ items, className }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-2xl border transition-all duration-300",
              isOpen
                ? "bg-white/[0.04] border-promo-500/30"
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-white font-medium text-base md:text-lg">{item.q}</span>
              <span
                className={cn(
                  "shrink-0 w-8 h-8 rounded-full grid place-items-center border transition-all duration-300",
                  isOpen
                    ? "border-promo-500 bg-promo-500/20 text-promo-300 rotate-45"
                    : "border-white/20 text-silver-400"
                )}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-silver-400 text-sm md:text-base leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
