"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import { corporateSiteUrl } from "@/lib/domains";
import { trackEvent } from "@/lib/analytics";

interface MobileMenuProps {
  items: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 xl:hidden"
      >
        <div className="absolute inset-0 bg-packard-950/80 backdrop-blur-sm" onClick={onClose} />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-packard-900 border-l border-white/5 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src="/logo.png" alt="Packard Promo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold">Packard</div>
                  <div className="text-[10px] text-promo-400 uppercase tracking-widest font-semibold">Promo</div>
                </div>
              </Link>
            </div>

            <nav className="space-y-1 mb-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-silver-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/5 pt-6 mb-6">
              <div className="text-[10px] uppercase tracking-widest text-promo-400 font-semibold mb-3 px-4">Services</div>
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-silver-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/5 pt-6 space-y-3">
              <a
                href={corporateSiteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold rounded-full bg-packard-500/10 text-packard-200 border border-packard-400/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Packard Limited
              </a>
              <Link
                href="/quote"
                onClick={() => { onClose(); trackEvent("quote_click", { label: "mobile_menu" }); }}
                className="block w-full text-center px-6 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white"
              >
                Get Instant Quote
              </Link>
              <a
                href="tel:+255716002790"
                onClick={() => trackEvent("phone_click", { label: "mobile_menu" })}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium rounded-full bg-white/5 text-white border border-white/10"
              >
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call 0716 002 790
              </a>
              <a
                href="https://wa.me/+255716002790"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { label: "mobile_menu" })}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium rounded-full bg-green-500/10 text-green-300 border border-green-500/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
