"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

interface PricingProduct {
  slug: string;
  name: string;
  image: string;
  startingPrice?: number;
  minQty?: number;
  leadTime?: string;
  description?: string;
  serviceTitle: string;
  serviceSlug: string;
}

const categories = [
  "All",
  "Digital Printing",
  "Offset Printing",
  "Large Format",
  "Packaging",
  "Signage",
  "Vehicle Branding",
  "Promotional Products",
  "Event Branding",
  "Design Studio",
];

export default function PricingContent({ products }: { products: PricingProduct[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("price-asc");

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.serviceTitle === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return (a.startingPrice || 0) - (b.startingPrice || 0);
    if (sortBy === "price-desc") return (b.startingPrice || 0) - (a.startingPrice || 0);
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Printing Prices in <span className="text-emerald-400">Tanzania</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            {products.length}+ products with transparent starting prices. All prices in TZS. Minimum order quantities and lead times shown for every product.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <span>📍 Dar es Salaam</span>
            <span>·</span>
            <span>⚡ Same-day available</span>
            <span>·</span>
            <span>🚚 Nationwide delivery</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-slate-800/50 text-slate-300 text-sm rounded-lg px-3 py-1.5 border border-slate-700/50"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-sm text-slate-500">
            Showing {sorted.length} products
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Product</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Category</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">Starting Price</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">Min Qty</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Lead Time</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((product) => (
                  <tr
                    key={product.slug}
                    className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <Link href={`/products/${product.slug}`} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                            {product.name}
                          </span>
                          {product.description && (
                            <p className="text-slate-500 text-xs mt-0.5 line-clamp-1 max-w-xs">
                              {product.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        href={`/services/${product.serviceSlug}`}
                        className="text-xs px-2 py-1 rounded bg-slate-800/50 text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        {product.serviceTitle}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-emerald-400 font-semibold">
                        TZS {(product.startingPrice || 0).toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-slate-400 text-sm">
                      {product.minQty ? `${product.minQty.toLocaleString()}+` : "—"}
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-sm">
                      {product.leadTime || "—"}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Link
                        href={`/quote?product=${product.slug}`}
                        className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50">
              <h3 className="text-xl font-bold text-white mb-3">
                Need a Custom Quote?
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Use our AI Quote Generator for instant estimates, or chat with us on WhatsApp for personalized pricing.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="/ai-tools/quote-generator"
                  className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
                >
                  AI Quote Generator
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Packard%20Promo%2C%20I%27d%20like%20a%20quote`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
