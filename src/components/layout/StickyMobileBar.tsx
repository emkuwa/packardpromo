"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-packard-950/95 backdrop-blur-xl border-t border-white/10 px-2 py-2 safe-area-bottom">
            <div className="flex items-center justify-around">
              <Link
                href="/search"
                className="flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl hover:bg-white/5 transition-colors active:scale-95"
                aria-label="Search products"
              >
                <svg className="w-5 h-5 text-packard-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span className="text-[9px] text-silver-400 font-medium">Search</span>
              </Link>

              <Link
                href="/ai-tools"
                className="flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl hover:bg-white/5 transition-colors active:scale-95"
                aria-label="AI Advisor"
              >
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <span className="text-[9px] text-silver-400 font-medium">AI Advisor</span>
              </Link>

              <Link
                href="/quote"
                onClick={() => trackEvent("quote_click", { label: "sticky_mobile_bar" })}
                className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white shadow-lg shadow-promo-500/30 active:scale-95 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[9px] font-bold">GET QUOTE</span>
              </Link>

              <a
                href="https://wa.me/+255716002790?text=Hello%20Packard%20Promo%2C%20I%27d%20like%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { label: "sticky_mobile_bar" })}
                className="flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl hover:bg-white/5 transition-colors active:scale-95"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                <span className="text-[9px] text-silver-400 font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
