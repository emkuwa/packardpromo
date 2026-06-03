"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/shared/ProductCard";
import { services } from "@/lib/services";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = services.flatMap((s) =>
    s.products.slice(0, 2).map((p) => ({
      ...p,
      category: s.title,
      serviceSlug: s.slug,
    }))
  ).slice(0, 12);

  return (
    <section className="section-padding relative" id="products">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-900/30 via-packard-950 to-packard-950" />
      <div className="relative z-10 container-wide">
        <SectionHeading
          eyebrow="Featured Products"
          title="Popular Products. Premium Quality."
          subtitle="A curated selection of our most-ordered products — all backed by our quality guarantee, fast turnaround, and Nairobi-grade production."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              description={product.description}
              startingPrice={product.startingPrice}
              minQty={product.minQty}
              leadTime={product.leadTime}
              index={index}
              category={product.category}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-promo-500/30 transition-all"
          >
            View All 50+ Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
