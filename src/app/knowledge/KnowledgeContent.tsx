"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

interface Category {
  id: string;
  label: string;
}

export default function KnowledgeContent({ articles, categories }: { articles: Article[]; categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = articles;
    if (activeCategory !== "all") {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q)));
    }
    return result;
  }, [articles, activeCategory, search]);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Knowledge Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Insights & <span className="text-gradient-promo">Expert Guides</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Practical guides, industry trends, and behind-the-scenes expertise from our team of designers, print specialists and brand strategists.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0 sticky top-20 z-30 bg-packard-950/80 backdrop-blur-md border-b border-white/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 mb-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button onClick={() => setActiveCategory("all")} className={cn("shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all", activeCategory === "all" ? "bg-promo-500/20 border border-promo-500/40 text-promo-300" : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10")}>
              All ({articles.length})
            </button>
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)} className={cn("shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all", activeCategory === c.id ? "bg-promo-500/20 border border-promo-500/40 text-promo-300" : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10")}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-silver-400 text-base">No articles found.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <Link href={`/knowledge/${article.slug}`} className="block glass-card rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[16/10] bg-gradient-to-br from-packard-800/50 to-packard-900/50 relative">
                      <div className="absolute inset-0 grid-lines" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-promo-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] uppercase tracking-wider text-white font-bold px-2.5 py-1 rounded-full bg-promo-500/90 backdrop-blur-sm">
                          {categories.find((c) => c.id === article.category)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-silver-500 text-[10px] mb-2 flex items-center gap-2">
                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{article.readTime} read</span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-promo-300 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-silver-400 text-xs leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
                      <div className="text-promo-400 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more →
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
