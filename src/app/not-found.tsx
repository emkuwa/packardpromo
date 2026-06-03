"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-promo-500/10 rounded-full blur-[200px]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4 sm:px-6 max-w-2xl">
        <div className="text-[8rem] md:text-[12rem] font-bold text-gradient-promo leading-none mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-silver-400 text-base md:text-lg mb-7">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Back to Home</Link>
          <Link href="/products" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Browse Products</Link>
          <Link href="/contact" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Contact Us</Link>
        </div>
      </motion.div>
    </div>
  );
}
