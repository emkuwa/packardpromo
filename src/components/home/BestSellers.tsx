"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

const bestSellers = [
  {
    rank: 1,
    slug: "business-cards",
    name: "Premium Business Cards",
    category: "Digital Printing",
    image: "/images/business card2.jpg",
    price: 18000,
    orders: "20K+",
    rating: 4.9,
    reviewCount: 348,
  },
  {
    rank: 2,
    slug: "tshirts",
    name: "Custom Branded T-Shirts",
    category: "Promotional Products",
    image: "/images/round neck t-shirt.jpg",
    price: 8500,
    orders: "15K+",
    rating: 4.8,
    reviewCount: 256,
  },
  {
    rank: 3,
    slug: "rollup",
    name: "Roll-up Banners",
    category: "Large Format",
    image: "/images/x-banner.jpg",
    price: 55000,
    orders: "8K+",
    rating: 4.9,
    reviewCount: 189,
  },
  {
    rank: 4,
    slug: "shop-sign",
    name: "Illuminated Shop Signboards",
    category: "Signage",
    image: "/images/illuminated signage.jpg",
    price: 180000,
    orders: "5K+",
    rating: 5.0,
    reviewCount: 142,
  },
  {
    rank: 5,
    slug: "car-wrap",
    name: "Vehicle Wrap Branding",
    category: "Vehicle Branding",
    image: "/images/vehicle branding.jpg",
    price: 350000,
    orders: "2K+",
    rating: 4.9,
    reviewCount: 98,
  },
  {
    rank: 6,
    slug: "packaging",
    name: "Custom Packaging",
    category: "Packaging",
    image: "/images/packaging.jpg",
    price: 250,
    orders: "10K+",
    rating: 4.8,
    reviewCount: 167,
  },
  {
    rank: 7,
    slug: "mug",
    name: "Branded Ceramic Mugs",
    category: "Promotional Products",
    image: "/images/coffee mug.jpg",
    price: 4500,
    orders: "12K+",
    rating: 4.7,
    reviewCount: 203,
  },
  {
    rank: 8,
    slug: "flyers",
    name: "Full Color Flyers",
    category: "Digital Printing",
    image: "/images/poster.jpg",
    price: 25000,
    orders: "18K+",
    rating: 4.8,
    reviewCount: 412,
  },
  {
    rank: 9,
    slug: "caps",
    name: "Branded Caps",
    category: "Promotional Products",
    image: "/images/cap.jpg",
    price: 6500,
    orders: "9K+",
    rating: 4.8,
    reviewCount: 178,
  },
  {
    rank: 10,
    slug: "brochures",
    name: "Multi-Page Brochures",
    category: "Digital Printing",
    image: "/images/brochure.jpg",
    price: 75000,
    orders: "6K+",
    rating: 4.7,
    reviewCount: 132,
  },
  {
    rank: 11,
    slug: "stickers",
    name: "Custom Stickers & Labels",
    category: "Digital Printing",
    image: "/images/stickers.jpg",
    price: 15000,
    orders: "14K+",
    rating: 4.7,
    reviewCount: 245,
  },
  {
    rank: 12,
    slug: "diary",
    name: "Executive Diaries",
    category: "Promotional Products",
    image: "/images/executive diary.jpg",
    price: 12500,
    orders: "4K+",
    rating: 4.9,
    reviewCount: 87,
  },
];

const trendingCategories = [
  { name: "Wedding Printing", orders: "+180% this month", icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
  { name: "Back-to-School Bundles", orders: "+240% this month", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347" },
  { name: "Vehicle Fleet Re-brand", orders: "+95% this month", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" },
  { name: "Eco Packaging", orders: "+150% this month", icon: "M21 7.5l-2.25-1.313" },
];

export default function BestSellers() {
  return (
    <section className="section-padding relative" id="best-sellers">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/40 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-promo-500/60" />
              <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-promo-400 animate-pulse" />
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-2xl">
              Tanzania's <span className="text-gradient-promo">Best-Selling</span> Print Products
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-full bg-promo-500/20 border border-promo-500/40 text-promo-300 text-xs font-semibold">
              Best Sellers
            </button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-400 text-xs font-semibold hover:bg-white/10">
              New Arrivals
            </button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-400 text-xs font-semibold hover:bg-white/10">
              Top Rated
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:row-span-2 glass-card rounded-2xl overflow-hidden group"
          >
            <Link href={`/products/${bestSellers[0].slug}`} className="block h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-packard-800">
                <img
                  src={bestSellers[0].image}
                  alt={bestSellers[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950 via-packard-950/30 to-transparent" />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-white font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg inline-flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    #1 Best Seller
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-promo-300 text-[10px] uppercase tracking-wider font-semibold mb-1">{bestSellers[0].category}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{bestSellers[0].name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <span className="text-silver-300 text-xs ml-1">{bestSellers[0].rating} ({bestSellers[0].reviewCount})</span>
                    </div>
                    <span className="text-silver-500 text-xs">· {bestSellers[0].orders} orders</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-promo-300 font-bold text-lg">From TZS {bestSellers[0].price.toLocaleString()}</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white text-xs font-bold">
                      Get Quote
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {bestSellers.slice(1, 12).map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <Link href={`/products/${product.slug}`} className="block glass-card rounded-2xl overflow-hidden">
                <div className="flex gap-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden bg-packard-800">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }} />
                    <div className="absolute top-1 left-1">
                      <span className="text-[8px] font-bold text-white bg-amber-500/90 px-1.5 py-0.5 rounded">
                        #{product.rank}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-3 md:p-4 min-w-0">
                    <div className="text-promo-300 text-[9px] uppercase tracking-wider font-semibold mb-1">{product.category}</div>
                    <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-1.5 group-hover:text-promo-300 transition-colors line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-1.5">
                      <svg className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-silver-300 text-[10px]">{product.rating} ({product.reviewCount})</span>
                      <span className="text-silver-500 text-[10px]">· {product.orders}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-promo-400 text-xs font-bold">TZS {product.price.toLocaleString()}+</span>
                      <span className="text-promo-300 text-[10px] font-semibold">Quote →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card rounded-2xl p-5"
        >
          <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 text-center">Trending Categories This Month</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trendingCategories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-3 p-3 rounded-xl bg-packard-500/5 border border-packard-500/15">
                <div className="w-10 h-10 rounded-lg bg-promo-500/15 border border-promo-500/25 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-promo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold leading-tight">{cat.name}</div>
                  <div className="text-emerald-400 text-[10px] font-semibold">{cat.orders}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
