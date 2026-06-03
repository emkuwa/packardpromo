"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { portfolioProjects } from "@/lib/portfolio";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = portfolioProjects.slice(0, 6);
  return (
    <section className="section-padding relative" id="portfolio">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-promo-500/60" />
              <span className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold">Recently Completed</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-2xl">
              Real projects. <span className="text-gradient-promo">Real results.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-promo-400 hover:text-promo-300 text-sm font-semibold">
            View all 1,000+ projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
