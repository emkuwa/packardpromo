"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tools = [
  {
    id: "quote-generator",
    title: "AI Quote Generator",
    description: "Get instant price estimates for 30+ products. Enter your specs, get a transparent price range in 30 seconds.",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
    href: "/ai-tools/quote-generator",
    color: "from-promo-500/20 to-pink-500/10",
    accent: "text-promo-400",
    badge: "Most Popular",
  },
  {
    id: "print-consultant",
    title: "AI Print Consultant",
    description: "Describe what you need in plain language. Our AI recommends product, branding method, quantity and budget.",
    icon: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    href: "/ai-tools/print-consultant",
    color: "from-packard-500/20 to-cyan-500/10",
    accent: "text-packard-300",
    badge: "Smartest",
  },
  {
    id: "packaging-advisor",
    title: "AI Packaging Advisor",
    description: "Tell us your industry, product and volume. We'll recommend format, material, finish and print method.",
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    href: "/ai-tools/packaging-advisor",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-300",
  },
  {
    id: "signage-planner",
    title: "AI Signage Planner",
    description: "Tell us your venue (shop, hotel, office, school, hospital) and we'll recommend a complete signage package with budget.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    href: "/ai-tools/signage-planner",
    color: "from-rose-500/20 to-red-500/10",
    accent: "text-rose-300",
  },
];

export default function AiTools() {
  return (
    <section className="section-padding relative overflow-hidden" id="ai-tools">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-promo-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-packard-500/10 rounded-full blur-[160px]" />

      <div className="relative z-10 container-wide">
        <SectionHeading
          eyebrow="AI-Powered Tools"
          title="Smart Tools That Save You Time and Money"
          subtitle="Our AI tools do the heavy lifting — instantly generate quotes, get personalized product recommendations, plan your signage, and choose the right packaging."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={tool.href}
                className="group block glass-card rounded-2xl p-6 md:p-8 hover:border-promo-500/30 h-full relative overflow-hidden"
              >
                {tool.badge && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-promo-500/20 border border-promo-500/30 text-promo-300 text-[9px] uppercase tracking-wider font-bold">
                    {tool.badge}
                  </div>
                )}
                <div className={cn(`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`)}>
                  <svg className={cn("w-7 h-7", tool.accent)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tool.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-promo-300 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-silver-400 leading-relaxed mb-4 text-sm">
                  {tool.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto pointer-events-none">
                  <span
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white text-xs font-bold"
                  >
                    Launch Tool
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold"
                  >
                    Get Official Quote
                  </span>
                </div>

                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-promo-500/0 to-promo-500/15 rounded-full blur-3xl group-hover:from-promo-500/25 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
