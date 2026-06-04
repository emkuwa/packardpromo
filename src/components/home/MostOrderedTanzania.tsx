"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const mostOrdered = [
  {
    slug: "business-cards",
    name: "Business Cards",
    image: "/images/business card2.jpg",
    price: 18000,
    badge: "#1",
    badgeColor: "from-amber-500 to-orange-500",
    href: "/services/digital-printing",
  },
  {
    slug: "tshirts",
    name: "Branded T-Shirts",
    image: "/images/round neck t-shirt.jpg",
    price: 8500,
    badge: "#2",
    badgeColor: "from-promo-500 to-pink-500",
    href: "/services/promotional-products",
  },
  {
    slug: "caps",
    name: "Branded Caps",
    image: "/images/cap.jpg",
    price: 6500,
    badge: "#3",
    badgeColor: "from-cyan-500 to-blue-500",
    href: "/services/promotional-products",
  },
  {
    slug: "pvc-banners",
    name: "PVC Banners",
    image: "/images/large format printing.jpg",
    price: 12000,
    badge: "#4",
    badgeColor: "from-emerald-500 to-teal-500",
    href: "/services/large-format-printing",
  },
  {
    slug: "packaging",
    name: "Packaging Boxes",
    image: "/images/packaging.jpg",
    price: 250,
    badge: "#5",
    badgeColor: "from-purple-500 to-violet-500",
    href: "/services/packaging-printing",
  },
  {
    slug: "shop-sign",
    name: "Shop Signboards",
    image: "/images/illuminated signage.jpg",
    price: 180000,
    badge: "#6",
    badgeColor: "from-amber-500 to-yellow-500",
    href: "/services/signage-solutions",
  },
  {
    slug: "stickers",
    name: "Custom Stickers",
    image: "/images/stickers.jpg",
    price: 15000,
    badge: "#7",
    badgeColor: "from-rose-500 to-red-500",
    href: "/services/digital-printing",
  },
  {
    slug: "promo-mugs",
    name: "Promo Gifts & Mugs",
    image: "/images/coffee mug.jpg",
    price: 4500,
    badge: "#8",
    badgeColor: "from-amber-500 to-amber-600",
    href: "/services/promotional-products",
  },
];

export default function MostOrderedTanzania() {
  return (
    <section className="section-tight relative" id="most-ordered">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Trending in Tanzania · June 2026</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white max-w-2xl">
              Most Ordered Products in <span className="text-gradient-promo">Tanzania</span>
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-1.5 text-promo-400 hover:text-promo-300 text-xs font-semibold">
            View all 100+ products
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
          {mostOrdered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group"
            >
              <Link
                href={p.href}
                className="block glass-card rounded-2xl overflow-hidden h-full relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-packard-800">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-packard-950/80 via-packard-950/10 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className={`text-[10px] uppercase tracking-wider text-white font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${p.badgeColor} shadow-lg`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-promo-300 text-xs font-bold">From TZS {p.price.toLocaleString()}</div>
                  </div>
                </div>
                <div className="p-3.5">
                  <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors leading-tight">{p.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
