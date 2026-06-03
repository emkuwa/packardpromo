"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCategory {
  name: string;
  icon: string;
  color: string;
  count: number;
}

const productCategories: ProductCategory[] = [
  { name: "Business Cards", icon: "M16 7H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2zM4 9h12v6H4V9z", color: "from-blue-500 to-cyan-500", count: 24 },
  { name: "Signage & Displays", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", color: "from-orange-500 to-red-500", count: 32 },
  { name: "Packaging Solutions", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", color: "from-green-500 to-emerald-500", count: 18 },
  { name: "Promotional Products", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-purple-500 to-pink-500", count: 45 },
  { name: "Large Format Printing", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12", color: "from-indigo-500 to-blue-500", count: 15 },
  { name: "Vehicle Branding", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", color: "from-teal-500 to-cyan-500", count: 12 },
  { name: "Corporate Stationery", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "from-slate-500 to-gray-500", count: 28 },
  { name: "Event Branding", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 2.064V3.5A2.5 2.5 0 0017.5 6h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2H21", color: "from-rose-500 to-orange-500", count: 20 },
];

export default function VisualProductCategories() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-packard-950 via-packard-900 to-packard-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-promo-500/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-packard-500/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-promo-400 text-sm uppercase tracking-widest font-semibold">50+ Product Categories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">Browse Our Full Range</h2>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto text-base md:text-lg">From business cards to billboards, we print everything your brand needs</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href="/products"
                className="group relative block aspect-square rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-promo-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight mb-1">{category.name}</h3>
                    <p className="text-silver-500 text-xs">{category.count} products</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-promo-500/10 border border-promo-500/30 text-promo-400 hover:bg-promo-500/20 transition-all font-semibold"
          >
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}