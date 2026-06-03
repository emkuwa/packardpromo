"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  target,
  rel,
  icon,
  iconRight,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-packard-500 to-promo-500 text-white hover:from-packard-400 hover:to-promo-400 shadow-lg shadow-promo-500/20 hover:shadow-promo-500/40",
    secondary:
      "bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20",
    outline:
      "border border-packard-500/30 text-packard-300 hover:bg-packard-500/10 hover:border-packard-500/50",
    ghost: "text-packard-300 hover:bg-white/5",
    whatsapp:
      "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400 shadow-lg shadow-green-500/20",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], "rounded-full", className);

  const content = (
    <>
      {icon && <span className="mr-2 -ml-1">{icon}</span>}
      {children}
      {iconRight && <span className="ml-2 -mr-1">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
