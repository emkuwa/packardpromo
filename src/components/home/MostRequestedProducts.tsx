"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const requestedProducts = [
  { slug: "tshirts", name: "Branded T-Shirts", image: "/images/round neck t-shirt.jpg", price: 8500, originalPrice: 12000, badge: "Top Seller", badgeColor: "from-promo-500 to-pink-500", serviceSlug: "promotional-products" },
  { slug: "business-cards", name: "Business Cards", image: "/images/business card2.jpg", price: 18000, originalPrice: 25000, badge: "Top Seller", badgeColor: "from-promo-500 to-pink-500", serviceSlug: "digital-printing" },
  { slug: "caps", name: "Branded Caps", image: "/images/cap.jpg", price: 6500, originalPrice: 9500, badge: "Trending", badgeColor: "from-cyan-500 to-blue-500", serviceSlug: "promotional-products" },
  { slug: "rollup", name: "Roll-up Banners", image: "/images/x-banner.jpg", price: 55000, originalPrice: 85000, badge: "Best Value", badgeColor: "from-emerald-500 to-teal-500", serviceSlug: "large-format-printing" },
  { slug: "mugs", name: "Branded Mugs", image: "/images/coffee mug.jpg", price: 4500, originalPrice: 7500, badge: "Top Seller", badgeColor: "from-promo-500 to-pink-500", serviceSlug: "promotional-products" },
  { slug: "flyers", name: "Flyers & Leaflets", image: "/images/poster.jpg", price: 25000, originalPrice: 35000, badge: "Trending", badgeColor: "from-cyan-500 to-blue-500", serviceSlug: "digital-printing" },
  { slug: "pvc-banner", name: "PVC Banners", image: "/images/large format printing.jpg", price: 12000, originalPrice: 18000, badge: "Trending", badgeColor: "from-cyan-500 to-blue-500", serviceSlug: "large-format-printing" },
  { slug: "shop-sign", name: "Shop Signboards", image: "/images/illuminated signage.jpg", price: 180000, originalPrice: 280000, badge: "Premium", badgeColor: "from-gold-500 to-amber-500", serviceSlug: "signage-solutions" },
  { slug: "car-wrap", name: "Vehicle Branding", image: "/images/vehicle branding.jpg", price: 350000, originalPrice: 500000, badge: "Premium", badgeColor: "from-gold-500 to-amber-500", serviceSlug: "vehicle-branding" },
  { slug: "stickers", name: "Stickers & Labels", image: "/images/stickers.jpg", price: 15000, originalPrice: 22000, badge: "Hot", badgeColor: "from-rose-500 to-red-500", serviceSlug: "digital-printing" },
  { slug: "packaging", name: "Custom Packaging", image: "/images/packaging.jpg", price: 250, originalPrice: 380, badge: "Best Value", badgeColor: "from-emerald-500 to-teal-500", serviceSlug: "packaging-printing" },
  { slug: "brochures", name: "Brochures", image: "/images/brochure.jpg", price: 75000, originalPrice: 110000, badge: "Top Seller", badgeColor: "from-promo-500 to-pink-500", serviceSlug: "digital-printing" },
];

export default function MostRequestedProducts() {
  return (
    <section className="section-tight relative" id="most-requested">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-3 mb-5">
          <div>
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Most Requested</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              What businesses are <span className="text-gradient-promo">ordering right now</span>
            </h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-promo-400 hover:text-promo-300 text-xs font-semibold">
            View all 100+ products
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">
          {requestedProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.025, 0.3) }}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col relative">
                <div className="relative aspect-square overflow-hidden bg-packard-800">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className="absolute top-1.5 left-1.5">
                    <span className={`text-[8px] uppercase tracking-wider text-white font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${p.badgeColor} shadow-lg`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-packard-950/95 to-transparent">
                    <div className="flex items-baseline gap-1">
                      <span className="text-promo-300 text-xs font-bold">TZS {p.price.toLocaleString()}</span>
                      <span className="text-silver-500 text-[9px] line-through">{p.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-xs leading-tight group-hover:text-promo-300 transition-colors line-clamp-2 mb-1.5">{p.name}</h3>
                  <Link
                    href="/quote"
                    className="mt-auto w-full text-center px-2 py-1.5 rounded-md bg-gradient-to-r from-promo-500 to-promo-400 text-white text-[10px] font-bold hover:from-promo-400 transition-all"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
