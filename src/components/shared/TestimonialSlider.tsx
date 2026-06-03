"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialSliderProps {
  testimonials: { id: string; name: string; role: string; company: string; content: string }[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card rounded-2xl p-6 md:p-7 relative"
        >
          <svg className="absolute top-5 right-5 w-10 h-10 text-promo-500/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-silver-300 text-sm md:text-base leading-relaxed mb-5 pr-10">
            {t.content}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-promo-500 to-packard-500 flex items-center justify-center text-white font-bold text-sm">
              {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{t.name}</div>
              <div className="text-silver-500 text-xs">{t.role} · {t.company}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
