"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productCatalog } from "@/lib/product-catalog";

export default function ProductGallery() {
  const displayProducts = productCatalog.slice(0, 40);

  return (
    <section className="section-tight relative" id="product-gallery">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Complete Product Catalog</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Tanzania's Largest <span className="text-gradient-promo">Print Marketplace</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-2.5 md:gap-3">
          {displayProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.4) }}
              className="group"
            >
              <Link
                href={product.serviceSlug ? `/services/${product.serviceSlug}` : "/products"}
                className="block glass-card rounded-xl overflow-hidden h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-packard-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-packard-950/80 via-packard-950/15 to-transparent" />
                  {product.startingPrice ? (
                    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-promo-500/95 backdrop-blur-sm">
                      <span className="text-white text-[9px] font-bold">TZS {product.startingPrice.toLocaleString()}</span>
                    </div>
                  ) : null}
                </div>
                <div className="p-2.5">
                  <div className="text-promo-400 text-[8px] uppercase tracking-wider font-semibold mb-0.5 truncate">{product.category}</div>
                  <h3 className="text-white font-bold text-[11px] leading-tight group-hover:text-promo-300 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 shadow-lg shadow-promo-500/30 transition-all"
          >
            View All 100+ Products
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
