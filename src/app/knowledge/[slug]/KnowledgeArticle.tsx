"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
}

interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
}

export default function KnowledgeArticle({ article, related, category }: { article: Article; related: RelatedArticle[]; category?: Category }) {
  return (
    <>
      <article className="relative pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/30 via-packard-950 to-packard-950" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/knowledge" className="hover:text-promo-400 transition-colors">Knowledge Center</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold line-clamp-1">{article.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            {category && (
              <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-promo-500/20 border border-promo-500/30 text-promo-300">
                {category.label}
              </span>
            )}
            <span className="text-[10px] text-silver-500">{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="text-[10px] text-silver-500">· {article.readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white mb-5">
            {article.title}
          </h1>
          <p className="text-silver-300 text-lg leading-relaxed mb-8">{article.excerpt}</p>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-promo-500 to-packard-500 flex items-center justify-center text-white font-bold text-sm">
              {article.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{article.author}</div>
              <div className="text-silver-500 text-xs">Packard Promo Editorial Team</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-silver-200 text-base leading-relaxed mb-6">
              {article.content}
            </p>
            <p className="text-silver-300 text-sm leading-relaxed mb-6">
              This is a sample article. The full content includes expert analysis, case studies, data-backed recommendations, and step-by-step guides from our senior designers, print specialists, and production team.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-silver-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-promo-400 mt-2 shrink-0" />
                Strategic approach tailored to your industry and budget
              </li>
              <li className="flex items-start gap-3 text-silver-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-promo-400 mt-2 shrink-0" />
                Material and finish selection for maximum impact
              </li>
              <li className="flex items-start gap-3 text-silver-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-promo-400 mt-2 shrink-0" />
                Production timeline optimization and best practices
              </li>
              <li className="flex items-start gap-3 text-silver-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-promo-400 mt-2 shrink-0" />
                Cost-saving strategies without quality compromise
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Get Expert Help</h2>
            <p className="text-silver-300 text-sm leading-relaxed mb-6">
              Ready to put these insights into action? Our team can help you scope, design, and produce a project that delivers results. Get a free quote or schedule a consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="px-6 py-3 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 text-center">
                Get Free Quote
              </Link>
              <Link href="/ai-tools/quote-generator" className="px-6 py-3 rounded-full bg-packard-500/20 border border-packard-500/30 text-packard-300 font-bold text-sm hover:bg-packard-500/30 text-center">
                Try AI Quote Generator
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-3xl mx-auto">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Related Articles</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Continue Reading</h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link key={r.id} href={`/knowledge/${r.slug}`} className="block glass-card rounded-2xl p-4 group hover:border-promo-500/30">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-promo-500/10 text-promo-300">{r.category}</span>
                    <span className="text-[10px] text-silver-500">{r.readTime} read</span>
                  </div>
                  <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{r.title}</h3>
                  <p className="text-silver-400 text-xs line-clamp-1 mt-1">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
