"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const requestedProducts = [
  {
    slug: "tshirts",
    name: "T-Shirts",
    description: "Custom branded T-shirts. Screen print, DTF, heat transfer. 25+ MOQ.",
    image: "/images/service-promotional-products.jpg",
    price: 8500,
    originalPrice: 12000,
    badge: "Top Seller",
    badgeColor: "from-promo-500 to-pink-500",
    serviceSlug: "promotional-products",
  },
  {
    slug: "caps",
    name: "Caps & Headwear",
    description: "Embroidered caps. Baseball, trucker, snapback, beanie. 25+ MOQ.",
    image: "/images/service-promotional-products.jpg",
    price: 6500,
    originalPrice: 9500,
    badge: "Trending",
    badgeColor: "from-cyan-500 to-blue-500",
    serviceSlug: "promotional-products",
  },
  {
    slug: "wheel-covers",
    name: "Wheel Covers",
    description: "Custom printed wheel covers for vehicle branding. Full color, durable.",
    image: "/images/service-promotional-products.jpg",
    price: 12000,
    originalPrice: 18000,
    badge: "Hot",
    badgeColor: "from-rose-500 to-red-500",
    serviceSlug: "promotional-products",
  },
  {
    slug: "mugs",
    name: "Branded Mugs",
    description: "Ceramic, travel, glass mugs. Sublimation and laser engraving. 25+ MOQ.",
    image: "/images/service-promotional-products.jpg",
    price: 4500,
    originalPrice: 7500,
    badge: "Top Seller",
    badgeColor: "from-promo-500 to-pink-500",
    serviceSlug: "promotional-products",
  },
  {
    slug: "pens",
    name: "Branded Pens",
    description: "Metal, plastic, bamboo pens. Pad print or laser engraved. 100+ MOQ.",
    image: "/images/service-promotional-products.jpg",
    price: 950,
    originalPrice: 1500,
    badge: "Best Value",
    badgeColor: "from-emerald-500 to-teal-500",
    serviceSlug: "promotional-products",
  },
  {
    slug: "business-cards",
    name: "Business Cards",
    description: "Premium 350gsm+ cards. Foil, spot UV, lamination. 100+ MOQ.",
    image: "/images/service-digital-printing.jpg",
    price: 18000,
    originalPrice: 25000,
    badge: "Top Seller",
    badgeColor: "from-promo-500 to-pink-500",
    serviceSlug: "digital-printing",
  },
  {
    slug: "flyers",
    name: "Flyers & Leaflets",
    description: "A4, A5, A6, DL flyers. Full color CMYK. 100+ MOQ.",
    image: "/images/service-digital-printing.jpg",
    price: 25000,
    originalPrice: 35000,
    badge: "Trending",
    badgeColor: "from-cyan-500 to-blue-500",
    serviceSlug: "digital-printing",
  },
  {
    slug: "rollup",
    name: "Roll-up Banners",
    description: "Retractable roll-up stands. 85×200cm. Carrying bag included.",
    image: "/images/service-large-format-printing.jpg",
    price: 55000,
    originalPrice: 85000,
    badge: "Best Value",
    badgeColor: "from-emerald-500 to-teal-500",
    serviceSlug: "large-format-printing",
  },
  {
    slug: "pvc-banner",
    name: "PVC Banners",
    description: "Heavy-duty 440gsm PVC. Hemmed with eyelets. 1+ MOQ.",
    image: "/images/service-large-format-printing.jpg",
    price: 12000,
    originalPrice: 18000,
    badge: "Trending",
    badgeColor: "from-cyan-500 to-blue-500",
    serviceSlug: "large-format-printing",
  },
  {
    slug: "shop-sign",
    name: "Shop Signboards",
    description: "Illuminated ACP, acrylic, 3D letters. Free site survey.",
    image: "/images/service-signage-solutions.jpg",
    price: 180000,
    originalPrice: 280000,
    badge: "Premium",
    badgeColor: "from-gold-500 to-amber-500",
    serviceSlug: "signage-solutions",
  },
  {
    slug: "car-wrap",
    name: "Vehicle Branding",
    description: "Full or partial wraps. 3M vinyl. Free site survey in Dar.",
    image: "/images/service-vehicle-branding.jpg",
    price: 350000,
    originalPrice: 500000,
    badge: "Premium",
    badgeColor: "from-gold-500 to-amber-500",
    serviceSlug: "vehicle-branding",
  },
];

const categoryFilters = [
  { id: "all", label: "All Products" },
  { id: "promotional-products", label: "Promo Products" },
  { id: "digital-printing", label: "Printing" },
  { id: "large-format-printing", label: "Large Format" },
  { id: "signage-solutions", label: "Signage" },
  { id: "vehicle-branding", label: "Vehicle Branding" },
];

export default function MostRequestedProducts() {
  return (
    <section className="section-padding relative" id="most-requested">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-promo-500/60" />
              <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Most Requested Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-2xl">
              What businesses are <span className="text-gradient-promo">ordering right now</span>
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-promo-400 hover:text-promo-300 text-sm font-semibold">
            View all 50+ products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {requestedProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative">
                <div className="relative aspect-square overflow-hidden bg-packard-800">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`text-[9px] uppercase tracking-wider text-white font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${p.badgeColor} shadow-lg`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-packard-950/95 via-packard-950/50 to-transparent">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-promo-300 text-base font-bold">TZS {p.price.toLocaleString()}</span>
                      <span className="text-silver-500 text-[10px] line-through">TZS {p.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-promo-300 transition-colors leading-tight">{p.name}</h3>
                  <p className="text-silver-400 text-xs leading-relaxed line-clamp-2 mb-3 flex-1">{p.description}</p>
                  <Link
                    href="/quote"
                    className="w-full text-center px-3 py-2.5 rounded-lg bg-gradient-to-r from-promo-500 to-promo-400 text-white text-xs font-bold hover:from-promo-400 transition-all"
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
