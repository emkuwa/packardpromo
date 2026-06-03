"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

interface SearchItem {
  type: "product" | "service";
  title: string;
  description: string;
  href: string;
  price?: number;
  image?: string;
}

const popularSuggestions = [
  "Business Cards",
  "Flyers",
  "T-Shirts",
  "Polo Shirts",
  "Packaging",
  "Signboards",
  "Rollups",
  "Banners",
  "Vehicle Branding",
  "Promotional Products",
];

export default function ProductSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];
    services.forEach((s) => {
      items.push({
        type: "service",
        title: s.title,
        description: s.shortDescription,
        href: `/services/${s.slug}`,
        image: s.image,
      });
      s.products.forEach((p) => {
        items.push({
          type: "product",
          title: p.name,
          description: p.description,
          href: `/products/${p.slug}`,
          price: p.startingPrice,
        });
      });
    });
    return items;
  }, []);

  const results = useMemo(() => {
    let filtered = allItems;
    if (selectedCategory) {
      filtered = filtered.filter((item) => {
        if (item.type === "service") {
          return services.find((s) => s.title === item.title)?.slug === selectedCategory;
        }
        return services.find((s) => s.products.find((p) => p.name === item.title))?.slug === selectedCategory;
      });
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
      );
    }
    return filtered.slice(0, 6);
  }, [query, selectedCategory, allItems]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const slug = query.toLowerCase().replace(/\s+/g, "-");
      router.push(`/products?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <section className="relative py-10 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Find What You Need</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What would you like to print today?</h2>
          <p className="text-silver-400 text-base">Search 50+ products and 9 service categories. Get instant quotes in seconds.</p>
        </motion.div>

        <div className="glass-card rounded-2xl p-4 md:p-6 relative">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-silver-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setTimeout(() => setFocused(false), 200)}
                  placeholder="Search products, services, or industries..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-packard-900/50 border border-white/10 text-white text-base placeholder-silver-500 focus:outline-none focus:border-promo-500/50"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-silver-400"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 whitespace-nowrap"
              >
                Search
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-silver-500 self-center">Popular:</span>
              {popularSuggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setQuery(s); router.push(`/products?search=${encodeURIComponent(s)}`); }}
                  className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-silver-300 hover:bg-promo-500/10 hover:border-promo-500/30 hover:text-white transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>

          <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "text-[10px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider transition-all",
                selectedCategory === null
                  ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                  : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
              )}
            >
              All
            </button>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedCategory(s.slug)}
                className={cn(
                  "text-[10px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider transition-all",
                  selectedCategory === s.slug
                    ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                    : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                )}
              >
                {s.title}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {focused && (query.trim() || selectedCategory) && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-packard-900/98 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 z-30 max-h-96 overflow-y-auto"
              >
                {results.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 p-3 hover:bg-white/5 border-b border-white/5 last:border-0"
                  >
                    {item.image && (
                      <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-promo-500/15 text-promo-300">
                          {item.type}
                        </span>
                        <div className="text-white font-semibold text-sm truncate">{item.title}</div>
                      </div>
                      <div className="text-silver-500 text-xs line-clamp-1">{item.description}</div>
                    </div>
                    {item.price && (
                      <div className="text-promo-400 text-xs font-semibold whitespace-nowrap">From TZS {item.price.toLocaleString()}</div>
                    )}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
