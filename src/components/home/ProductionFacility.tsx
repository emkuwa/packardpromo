"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const facilities = [
  {
    name: "Digital Printing",
    description: "HP Indigo, Konica Minolta, Xerox. Short-run to mid-volume premium printing.",
    image: "/images/service-digital-printing.jpg",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
    stat: "6 presses",
  },
  {
    name: "Offset Printing",
    description: "Heidelberg Speedmaster 4-color + 2-color. Books, magazines, bulk runs.",
    image: "/images/service-offset-printing.jpg",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    stat: "4 presses",
  },
  {
    name: "Packaging Production",
    description: "Dieline design, structural mockups, folding cartons to rigid gift boxes.",
    image: "/images/service-packaging-printing.jpg",
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    stat: "In-house",
  },
  {
    name: "Signage Workshop",
    description: "ACP, acrylic, stainless steel fabrication. Channel letters, lightboxes, monoliths.",
    image: "/images/service-signage-solutions.jpg",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    stat: "12,000 sqm",
  },
  {
    name: "Vehicle Branding",
    description: "Climate-controlled bay. 3M and Avery certified. Mobile fleet teams.",
    image: "/images/service-vehicle-branding.jpg",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    stat: "200+ vehicles",
  },
  {
    name: "Promotional Products",
    description: "T-shirts, caps, mugs, pens, diaries, bottles, gift sets. Sourcing, branding, fulfillment.",
    image: "/images/service-promotional-products.jpg",
    icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    stat: "10+ categories",
  },
];

export default function ProductionFacility() {
  return (
    <section className="section-padding relative" id="facility">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Inside Packard Promo"
          title="Tanzania's Largest Production Facility"
          subtitle="12,000 sqm of integrated production. Heidelberg, HP, Konica, 3M, Avery — all under one roof. From design to delivery, we control every step."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-packard-800"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950 via-packard-950/30 to-transparent" />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-promo-500/90 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-promo-300 transition-colors leading-tight">{f.name}</h3>
                  {f.stat && (
                    <span className="text-[10px] font-bold text-promo-300 px-2 py-0.5 rounded-full bg-promo-500/10 border border-promo-500/20 shrink-0 ml-2">
                      {f.stat}
                    </span>
                  )}
                </div>
                <p className="text-silver-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-3 rounded-full glass-card">
            <span className="text-silver-400 text-xs uppercase tracking-wider font-semibold">In-house equipment:</span>
            <span className="text-white text-sm font-semibold">Heidelberg Speedmaster</span>
            <span className="text-silver-500">·</span>
            <span className="text-white text-sm font-semibold">HP Indigo</span>
            <span className="text-silver-500">·</span>
            <span className="text-white text-sm font-semibold">Konica Minolta</span>
            <span className="text-silver-500">·</span>
            <span className="text-white text-sm font-semibold">3M IJ180Cv3</span>
            <span className="text-silver-500">·</span>
            <span className="text-white text-sm font-semibold">Avery Dennison</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
