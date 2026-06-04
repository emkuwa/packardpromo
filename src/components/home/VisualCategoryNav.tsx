"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Business Cards",
    image: "/images/business card2.jpg",
    href: "/services/digital-printing",
    count: "3+",
  },
  {
    name: "T-Shirts",
    image: "/images/round neck t-shirt.jpg",
    href: "/services/promotional-products",
    count: "8+",
  },
  {
    name: "Caps",
    image: "/images/cap.jpg",
    href: "/services/promotional-products",
    count: "5+",
  },
  {
    name: "Packaging",
    image: "/images/packaging.jpg",
    href: "/services/packaging-printing",
    count: "9+",
  },
  {
    name: "Signage",
    image: "/images/illuminated signage.jpg",
    href: "/services/signage-solutions",
    count: "12+",
  },
  {
    name: "Banners",
    image: "/images/x-banner.jpg",
    href: "/services/large-format-printing",
    count: "7+",
  },
  {
    name: "Corporate Gifts",
    image: "/images/executive diary.jpg",
    href: "/services/promotional-products",
    count: "10+",
  },
  {
    name: "Vehicle Branding",
    image: "/images/vehicle branding.jpg",
    href: "/services/vehicle-branding",
    count: "5+",
  },
];

export default function VisualCategoryNav() {
  return (
    <section className="section-tight relative" id="category-nav">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/20 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Shop by Category</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">
            What do you want to <span className="text-gradient-promo">print today</span>?
          </h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-packard-800 border border-white/10 group-hover:border-promo-500/50 transition-all">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-packard-950/70 via-transparent to-transparent" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-white font-semibold text-xs leading-tight group-hover:text-promo-300 transition-colors">{cat.name}</div>
                  <div className="text-silver-500 text-[10px]">{cat.count} products</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
