"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types";

export default function PortfolioContent({
  projects,
  categories,
}: {
  projects: PortfolioProject[];
  categories: { id: string; label: string; icon: string }[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === activeCategory);
  }, [projects, activeCategory]);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            1,000+ Projects. <span className="text-gradient-promo">Trusted by Tanzania's Best.</span>
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            From CRDB Bank to Vodacom, UNICEF to Dangote Cement — explore how we've helped leading organizations print, brand and promote across Tanzania.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0 sticky top-20 z-30 bg-packard-950/80 backdrop-blur-md border-b border-white/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                activeCategory === "all"
                  ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                  : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
              )}
            >
              All Work ({projects.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={cn(
                  "shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                  activeCategory === c.id
                    ? "bg-promo-500/20 border border-promo-500/40 text-promo-300"
                    : "bg-white/5 border border-white/10 text-silver-400 hover:bg-white/10"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                client={project.client}
                category={project.category}
                industry={project.industry}
                description={project.description}
                year={project.year}
                location={project.location}
                image={project.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
