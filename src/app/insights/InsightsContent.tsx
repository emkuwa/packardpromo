"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    title: "How to Choose the Right Business Card Finish for Your Brand",
    excerpt: "Matte, gloss, soft-touch, foil, spot UV — discover which finish conveys the right brand message for your industry and budget.",
    category: "Printing",
    author: "Packard Promo Team",
    date: "2026-05-15",
    readTime: "5 min",
    image: "/images/insights/business-card-finishes.jpg",
  },
  {
    title: "Vehicle Branding ROI: Why Your Fleet is Your Best Billboard",
    excerpt: "A single branded vehicle generates 30,000–70,000 daily impressions. Here's how to maximize your fleet's marketing impact.",
    category: "Vehicle Branding",
    author: "Packard Promo Team",
    date: "2026-05-10",
    readTime: "6 min",
    image: "/images/insights/vehicle-roi.jpg",
  },
  {
    title: "Signage Permits in Tanzania: What You Need to Know",
    excerpt: "Municipal signage regulations vary by city. Here's a complete guide to getting your signage approved in Dar, Arusha, Mwanza, and beyond.",
    category: "Signage",
    author: "Packard Promo Team",
    date: "2026-05-05",
    readTime: "8 min",
    image: "/images/insights/signage-permits.jpg",
  },
  {
    title: "Offset vs Digital Printing: When to Use Each",
    excerpt: "Both are essential — but choosing the wrong one wastes money. Here's how to decide based on quantity, quality and budget.",
    category: "Printing",
    author: "Packard Promo Team",
    date: "2026-04-28",
    readTime: "7 min",
    image: "/images/insights/offset-vs-digital.jpg",
  },
  {
    title: "The Complete Guide to Promotional Products for Events",
    excerpt: "T-shirts, caps, mugs, bottles, USBs — the best event merch is the kind people actually use. Here's what works in 2026.",
    category: "Promotional Products",
    author: "Packard Promo Team",
    date: "2026-04-20",
    readTime: "9 min",
    image: "/images/insights/promo-products.jpg",
  },
  {
    title: "Packaging Design Trends That Sell in East Africa",
    excerpt: "Local consumer behavior, retail trends and cultural preferences that drive packaging design success in Tanzania and Kenya.",
    category: "Packaging",
    author: "Packard Promo Team",
    date: "2026-04-12",
    readTime: "8 min",
    image: "/images/insights/packaging-trends.jpg",
  },
];

export default function InsightsContent() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Insights & Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Expert Insights on <span className="text-gradient-promo">Print, Signage & Branding</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Practical guides, industry trends, and behind-the-scenes tips from our team of designers, print specialists and brand strategists.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {insights.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group"
              >
                <Link href="#" className="block glass-card rounded-2xl overflow-hidden h-full">
                  <div className="aspect-[16/10] bg-gradient-to-br from-packard-800/50 to-packard-900/50 relative grid-lines">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-promo-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] uppercase tracking-wider text-white font-semibold px-2.5 py-1 rounded-full bg-promo-500/80 border border-promo-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-silver-500 text-[10px] mb-2 flex items-center gap-2">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-promo-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-silver-400 text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="text-promo-400 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more →
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
