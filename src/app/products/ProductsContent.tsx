"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

export default function ProductsContent({ services }: { services: Service[] }) {
  const allProducts = useMemo(() => services.flatMap((s) => s.products.map((p) => ({ ...p, serviceSlug: s.slug, serviceTitle: s.title }))), [services]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const catMatch = activeCategory === "all" || p.serviceSlug === activeCategory;
      const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [allProducts, activeCategory, search]);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Product Catalog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            50+ Products. <span className="text-gradient-promo">Transparent Pricing.</span> Fast Delivery.
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Browse our full catalog of printing, signage, packaging and promotional products. Filter by category, see prices instantly, and request quotes in seconds.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0 sticky top-20 z-30 bg-packard-950/80 backdrop-blur-md border-b border-white/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="flex-1 relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50"
              />
            </div>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                activeCategory === "all"
                  ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                  : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
              )}
            >
              All Products ({allProducts.length})
            </button>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.slug)}
                className={cn(
                  "shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                  activeCategory === s.slug
                    ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                    : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                )}
              >
                {s.title} ({s.products.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-silver-400 text-base">No products match your search.</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  slug={product.slug}
                  name={product.name}
                  description={product.description}
                  startingPrice={product.startingPrice}
                  minQty={product.minQty}
                  leadTime={product.leadTime}
                  index={i}
                  category={product.serviceTitle}
                  image={product.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
