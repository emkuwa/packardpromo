"use client";

import { motion } from "framer-motion";

const facilities = [
  { name: "Digital Printing", image: "/images/digital printing.jpg", stat: "6 presses" },
  { name: "Offset Printing", image: "/images/offset printing.jpg", stat: "4 presses" },
  { name: "Packaging Production", image: "/images/packaging.jpg", stat: "In-house" },
  { name: "Signage Workshop", image: "/images/illuminated signage.jpg", stat: "12,000 sqm" },
  { name: "Vehicle Branding", image: "/images/vehicle branding.jpg", stat: "200+ vehicles" },
  { name: "Embroidery & DTF", image: "/images/embroidery service.jpg", stat: "12 heads" },
  { name: "Screen Printing", image: "/images/screen printing.jpg", stat: "Full color" },
  { name: "Quality Control", image: "/images/quality inspection scene printing.jpg", stat: "3-stage QC" },
];

export default function ProductionFacility() {
  return (
    <section className="section-tight relative" id="facility">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/30 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="text-promo-400 text-[10px] uppercase tracking-widest font-semibold">Inside Our Facility</span>
          <h2 className="mt-1.5 text-xl md:text-2xl lg:text-3xl font-bold text-white">Tanzania's Largest Production Facility</h2>
          <p className="mt-2 text-silver-400 max-w-2xl mx-auto text-xs md:text-sm">12,000 sqm of integrated production. Heidelberg, HP, Konica, 3M, Avery — all under one roof.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-packard-800"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packard-950 via-packard-950/30 to-transparent" />
                <div className="absolute top-2 right-2 text-[9px] font-bold text-promo-300 px-1.5 py-0.5 rounded-full bg-promo-500/15 border border-promo-500/30">
                  {f.stat}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-white font-bold text-xs group-hover:text-promo-300 transition-colors leading-tight">{f.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
