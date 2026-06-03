"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="section-padding relative" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-900/30 via-packard-950 to-packard-900/30" />
      <div className="relative z-10 container-wide">
        <SectionHeading
          eyebrow="9 Service Categories"
          title="Everything Your Business Needs to Print, Brand & Promote"
          subtitle="From a single business card to a nationwide fleet rebrand, Packard Promo is your single partner for all printing, signage, packaging and promotional products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              slug={service.slug}
              title={service.title}
              shortDescription={service.shortDescription}
              icon={service.icon}
              productCount={service.products.length}
              index={index}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
