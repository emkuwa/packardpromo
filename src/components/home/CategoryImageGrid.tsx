"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productCatalog } from "@/lib/product-catalog";

const categoryFeatures = [
  { name: "Business Cards", color: "from-blue-500/30 to-cyan-500/20", link: "/services/digital-printing", products: productCatalog.filter((p) => p.category === "Business Cards").slice(0, 3) },
  { name: "Apparel & Uniforms", color: "from-indigo-500/30 to-blue-500/20", link: "/services/promotional-products", products: productCatalog.filter((p) => p.category === "Apparel & Uniforms").slice(0, 3) },
  { name: "Signage", color: "from-orange-500/30 to-red-500/20", link: "/services/signage-solutions", products: productCatalog.filter((p) => p.category === "Signage").slice(0, 3) },
  { name: "Promotional Products", color: "from-pink-500/30 to-rose-500/20", link: "/services/promotional-products", products: productCatalog.filter((p) => p.category === "Promotional Products").slice(0, 3) },
];

export default function CategoryImageGrid() {
  return (
    <section className="section-tight relative" id="category-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Shop by Category</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Browse by <span className="text-gradient-promo">Product Category</span>
          </h2>
        </div>

        <div className="space-y-5">
          {categoryFeatures.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <div className="flex items-end justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold text-white">{category.name}</h3>
                <Link href={category.link} className="text-promo-400 hover:text-promo-300 text-xs font-semibold inline-flex items-center gap-1">
                  See all →
                </Link>
              </div>

              <div className={`grid grid-cols-3 gap-2.5 p-2.5 md:p-3 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10`}>
                {category.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={product.serviceSlug ? `/services/${product.serviceSlug}` : "/products"}
                    className="block bg-packard-950/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-promo-500/50 transition-all group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-packard-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-packard-950/90 to-transparent" />
                      {product.startingPrice ? (
                        <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-promo-500/95 backdrop-blur-sm">
                          <span className="text-white text-[9px] font-bold">TZS {product.startingPrice.toLocaleString()}</span>
                        </div>
                      ) : null}
                    </div>
                    <div className="p-2">
                      <h4 className="text-white font-bold text-[11px] leading-tight group-hover:text-promo-300 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
