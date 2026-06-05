"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCategory {
  name: string;
  image: string;
  color: string;
  count: number;
  href: string;
}

const productCategories: ProductCategory[] = [
  { name: "Business Cards", image: "/images/business card2.jpg", color: "from-blue-500/30 to-cyan-500/20", count: 3, href: "/services/digital-printing" },
  { name: "T-Shirts & Apparel", image: "/images/round neck t-shirt.jpg", color: "from-purple-500/30 to-pink-500/20", count: 8, href: "/services/promotional-products" },
  { name: "Signage & Displays", image: "/images/illuminated signage.jpg", color: "from-orange-500/30 to-red-500/20", count: 12, href: "/services/signage-solutions" },
  { name: "Packaging", image: "/images/packaging.jpg", color: "from-green-500/30 to-emerald-500/20", count: 9, href: "/services/packaging-printing" },
  { name: "Promo Products", image: "/images/coffee mug.jpg", color: "from-pink-500/30 to-rose-500/20", count: 15, href: "/services/promotional-products" },
  { name: "Large Format", image: "/images/large format printing.jpg", color: "from-indigo-500/30 to-blue-500/20", count: 7, href: "/services/large-format-printing" },
  { name: "Vehicle Branding", image: "/images/vehicle branding.jpg", color: "from-teal-500/30 to-cyan-500/20", count: 5, href: "/services/vehicle-branding" },
  { name: "Event Branding", image: "/images/exhibition stand.jpg", color: "from-rose-500/30 to-orange-500/20", count: 11, href: "/services/exhibition-events" },
];

export default function VisualProductCategories() {
  return (
    <section className="section-tight relative overflow-hidden" id="categories">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900 to-packard-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-promo-500/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3 mb-5">
          <div>
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">100+ Product Categories</span>
            <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">Browse Our Full Range</h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-promo-400 hover:text-promo-300 text-xs font-semibold">
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 md:gap-3">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Link
                href={category.href}
                className="group relative block rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-promo-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-packard-800">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-packard-950 via-packard-950/40 to-transparent`} />
                </div>
                <div className="absolute inset-0 p-3 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-sm leading-tight mb-0.5 group-hover:text-promo-300 transition-colors">{category.name}</h3>
                  <p className="text-silver-300 text-[10px]">{category.count}+ products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
