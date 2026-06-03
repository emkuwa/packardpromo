"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  gradientBorder?: boolean;
}

export default function GlassCard({ children, className, hover = true, delay = 0, gradientBorder = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card rounded-2xl p-8",
        hover && "hover-lift",
        gradientBorder && "gradient-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
