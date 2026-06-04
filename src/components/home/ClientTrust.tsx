"use client";

import { motion } from "framer-motion";

export default function ClientTrust() {
  return (
    <section className="relative py-8 md:py-10" id="client-trust">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl px-6 py-6 md:px-10 md:py-7 text-center border-promo-500/20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-promo-500/60" />
            <span className="text-promo-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Trusted by 250+ Organizations</span>
            <span className="h-px w-8 bg-promo-500/60" />
          </div>
          <p className="text-white text-base md:text-lg font-medium leading-relaxed">
            Trusted by businesses, NGOs, schools, hotels and institutions across Tanzania.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
