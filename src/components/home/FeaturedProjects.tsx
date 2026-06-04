"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { portfolioProjects } from "@/lib/portfolio";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = portfolioProjects.slice(0, 6);
  return (
    <section className="section-tight relative" id="portfolio">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-3 mb-5">
          <div>
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Recently Completed</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Real projects. <span className="text-gradient-promo">Real results.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="hidden sm:inline-flex items-center gap-1.5 text-promo-400 hover:text-promo-300 text-xs font-semibold">
            View all 1,000+ projects
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {featured.map((project, i) => (
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
  );
}
