"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/50 to-packard-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-promo-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 container-wide">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted by Tanzania's Leading Brands"
          subtitle="From multinational corporates to local SMEs, schools and NGOs — here's what they say about working with Packard Promo."
        />

        <TestimonialSlider testimonials={testimonials.slice(0, 4)} />
      </div>
    </section>
  );
}
