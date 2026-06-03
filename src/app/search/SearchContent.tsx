"use client";

import { useState, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Searchable {
  type: string;
  title: string;
  description: string;
  href: string;
  category: string;
  image?: string;
}

export default function SearchContent({ services, products, portfolio, industries, knowledge, cities }: { services: any[]; products: any[]; portfolio: any[]; industries: any[]; knowledge: any[]; cities: any[] }) {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32" />}>
      <SearchInner services={services} products={products} portfolio={portfolio} industries={industries} knowledge={knowledge} cities={cities} />
    </Suspense>
  );
}

function SearchInner({ services, products, portfolio, industries, knowledge, cities }: { services: any[]; products: any[]; portfolio: any[]; industries: any[]; knowledge: any[]; cities: any[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") || searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) {
      return {
        services: services.slice(0, 4),
        products: products.slice(0, 4),
        portfolio: portfolio.slice(0, 4),
        industries: industries.slice(0, 4),
        knowledge: knowledge.slice(0, 4),
        cities: cities.slice(0, 4),
      };
    }
    const q = query.toLowerCase();
    return {
      services: services.filter((s) => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)),
      products: products.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)),
      portfolio: portfolio.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.industry.toLowerCase().includes(q)),
      industries: industries.filter((i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)),
      knowledge: knowledge.filter((k) => k.title.toLowerCase().includes(q) || k.excerpt.toLowerCase().includes(q) || k.tags.some((t: string) => t.toLowerCase().includes(q))),
      cities: cities.filter((c) => c.name.toLowerCase().includes(q)),
    };
  }, [query, services, products, portfolio, industries, knowledge, cities]);

  const totalResults = results.services.length + results.products.length + results.portfolio.length + results.industries.length + results.knowledge.length + results.cities.length;

  return (
    <>
      <section className="relative pt-32 pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Search Packard Promo</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-5">What are you looking for?</h1>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-silver-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, services, industries, locations..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-base placeholder-silver-500 focus:outline-none focus:border-promo-500/50"
              autoFocus
            />
          </div>
          {query && (
            <p className="mt-3 text-silver-500 text-sm">{totalResults} results for &ldquo;{query}&rdquo;</p>
          )}
        </div>
      </section>

      <section className="section-padding pt-0 pb-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {results.services.length > 0 && (
            <ResultGroup
              title="Services"
              count={results.services.length}
              items={results.services.map((s: any) => ({
                type: "service",
                title: s.title,
                description: s.shortDescription,
                href: `/services/${s.slug}`,
                category: s.title,
                image: s.image,
              }))}
            />
          )}
          {results.products.length > 0 && (
            <ResultGroup
              title="Products"
              count={results.products.length}
              items={results.products.map((p: any) => ({
                type: "product",
                title: p.name,
                description: p.description,
                href: `/products/${p.slug}`,
                category: p.category,
              }))}
            />
          )}
          {results.industries.length > 0 && (
            <ResultGroup
              title="Industries"
              count={results.industries.length}
              items={results.industries.map((i: any) => ({
                type: "industry",
                title: i.name,
                description: i.description,
                href: `/industries/${i.slug}`,
                category: i.name,
              }))}
            />
          )}
          {results.cities.length > 0 && (
            <ResultGroup
              title="Locations"
              count={results.cities.length}
              items={results.cities.map((c: any) => ({
                type: "location",
                title: c.name,
                description: c.description,
                href: `/locations/${c.slug}`,
                category: c.region,
              }))}
            />
          )}
          {results.portfolio.length > 0 && (
            <ResultGroup
              title="Portfolio"
              count={results.portfolio.length}
              items={results.portfolio.map((p: any) => ({
                type: "portfolio",
                title: p.title,
                description: p.description,
                href: `/portfolio/${p.slug}`,
                category: p.industry,
                image: p.image,
              }))}
            />
          )}
          {results.knowledge.length > 0 && (
            <ResultGroup
              title="Knowledge Center"
              count={results.knowledge.length}
              items={results.knowledge.map((k: any) => ({
                type: "article",
                title: k.title,
                description: k.excerpt,
                href: `/knowledge/${k.slug}`,
                category: k.category,
              }))}
            />
          )}
          {totalResults === 0 && (
            <div className="text-center py-16">
              <div className="text-silver-400 text-base mb-3">No results found for &ldquo;{query}&rdquo;</div>
              <p className="text-silver-500 text-sm">Try a different search term, or browse our <Link href="/products" className="text-promo-400 hover:text-promo-300">products</Link>, <Link href="/services" className="text-promo-400 hover:text-promo-300">services</Link>, or <Link href="/contact" className="text-promo-400 hover:text-promo-300">contact us</Link>.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ResultGroup({ title, count, items }: { title: string; count: number; items: Searchable[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <span className="text-silver-500 text-xs">({count})</span>
      </div>
      <div className="space-y-2">
        {items.slice(0, 6).map((item, i) => (
          <motion.div key={item.href} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Link href={item.href} className="flex items-start gap-3 p-3 rounded-xl glass-card hover:border-promo-500/30 group">
              {item.image && <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-promo-500/15 text-promo-300">{item.category}</span>
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-promo-300 transition-colors">{item.title}</div>
                <div className="text-silver-400 text-xs line-clamp-1">{item.description}</div>
              </div>
              <svg className="w-4 h-4 text-silver-500 mt-2 group-hover:text-promo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
