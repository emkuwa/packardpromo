"use client";

import { motion } from "framer-motion";

const qualityFeatures = [
  {
    title: "Premium Materials",
    description: "We source only the finest papers, inks, and substrates for exceptional results",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Precision Printing",
    description: "State-of-the-art offset and digital printers deliver flawless color accuracy",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    title: "Expert Finishers",
    description: "Skilled craftspeople apply lamination, foil, embossing with meticulous care",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  },
  {
    title: "Quality Control",
    description: "Every order undergoes rigorous inspection before it leaves our facility",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }
];

const galleryImages = [
  { src: "/images/corporate-portfolio-showcase.jpg", alt: "Premium business cards with foil stamping", caption: "Foil Stamping" },
  { src: "/images/service-packaging-printing.jpg", alt: "High-quality packaging with vibrant colors", caption: "Packaging Print" },
  { src: "/images/luxury-hotel-branding.jpg", alt: "Elegant signage solutions", caption: "Luxury Signage" },
  { src: "/images/vodacom-billboard.jpg", alt: "Large format printing excellence", caption: "Large Format" }
];

export default function QualityShowcase() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-promo-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-packard-400 text-sm uppercase tracking-widest font-semibold">Quality You Can Trust</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">Close-Up on Excellence</h2>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto text-base md:text-lg">See the details that set us apart - premium materials, precise printing, perfect finishes</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-6 rounded-xl border border-white/10 hover:border-promo-500/30 bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-promo-500 to-accent-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-silver-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}