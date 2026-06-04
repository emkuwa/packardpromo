"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/business card2.jpg", alt: "Business cards", caption: "Business Cards" },
  { src: "/images/packaging.jpg", alt: "Custom packaging", caption: "Packaging" },
  { src: "/images/luxury-hotel-branding.jpg", alt: "Luxury signage", caption: "Luxury Signage" },
  { src: "/images/vodacom-billboard.jpg", alt: "Billboard printing", caption: "Billboards" },
  { src: "/images/vehicle branding.jpg", alt: "Vehicle branding", caption: "Vehicle Wraps" },
  { src: "/images/illuminated signage.jpg", alt: "LED signs", caption: "LED Signs" },
  { src: "/images/round neck t-shirt.jpg", alt: "Apparel", caption: "Apparel" },
  { src: "/images/award.jpg", alt: "Awards", caption: "Awards" },
];

export default function QualityShowcase() {
  return (
    <section className="section-tight relative bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <span className="text-packard-400 text-[10px] uppercase tracking-widest font-semibold">Quality You Can Trust</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">Close-Up on Excellence</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 md:gap-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-2 left-2 text-white text-xs font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
