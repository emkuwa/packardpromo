"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const packardLimitedUrl = "https://packardlimited.co.tz";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPhoneOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!phoneOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [phoneOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-packard-950/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="md:hidden bg-packard-950/95 border-b border-white/5 backdrop-blur-md">
          <a
            href="tel:+255716002790"
            className="flex items-center justify-center gap-2 h-8 text-white text-xs font-semibold tracking-wide hover:text-promo-300 active:text-promo-400 transition-colors"
            aria-label="Call Packard Promo at +255 716 002 790"
          >
            <svg className="w-3.5 h-3.5 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>+255 716 002 790</span>
          </a>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-promo-500/40 transition-all">
                <img src="/logo.png" alt="Packard Promo" className="w-full h-full object-cover" />
              </div>
              <div className="block">
                <div className="text-white font-bold text-lg leading-tight group-hover:text-promo-300 transition-colors">Packard</div>
                <div className="text-[10px] text-promo-400 uppercase tracking-[0.22em] font-semibold">Promo</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-1.5",
                          pathname.startsWith(item.href)
                            ? "text-promo-400 bg-promo-500/10"
                            : "text-silver-400 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.label}
                        <svg className={cn("w-3 h-3 transition-transform", megaOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </Link>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                      pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                        ? "text-promo-400 bg-promo-500/10"
                        : "text-silver-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={packardLimitedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 text-xs text-packard-300 hover:text-packard-200 transition-colors border border-packard-500/20 hover:border-packard-400/40 rounded-full px-3 py-1.5"
                title="Visit Packard Limited — Corporate Branding, Communications, PR"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Packard Limited
              </a>

              <div className="relative" ref={phoneRef}>
                <button
                  onClick={() => setPhoneOpen(!phoneOpen)}
                  className="hidden sm:flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0716 002 790
                </button>

                <AnimatePresence>
                  {phoneOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-packard-800 border border-white/10 shadow-xl shadow-black/50 overflow-hidden"
                    >
                      <a
                        href="tel:+255716002790"
                        onClick={() => setPhoneOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-silver-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Call
                      </a>
                      <a
                        href="https://wa.me/+255716002790"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPhoneOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-silver-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                      <button
                        onClick={() => { navigator.clipboard.writeText("+255716002790"); setPhoneOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-silver-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-packard-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                        Copy Number
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/quote"
                className="hidden md:inline-flex px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white hover:from-promo-400 hover:to-promo-300 shadow-lg shadow-promo-500/30 hover:shadow-promo-500/50 transition-all duration-300"
              >
                Get Instant Quote
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 group"
                aria-label="Toggle menu"
              >
                <span className={cn("block w-5 h-0.5 rounded-full bg-silver-400 transition-all duration-300", mobileOpen && "rotate-45 translate-y-1")} />
                <span className={cn("block w-5 h-0.5 rounded-full bg-silver-400 transition-all duration-300", mobileOpen && "opacity-0")} />
                <span className={cn("block w-5 h-0.5 rounded-full bg-silver-400 transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-1")} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-packard-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="grid grid-cols-3 gap-6">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-promo-500/10 border border-promo-500/20 flex items-center justify-center shrink-0 group-hover:bg-promo-500/20 transition-colors">
                        <svg className="w-5 h-5 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-semibold group-hover:text-promo-300 transition-colors">{s.title}</div>
                        <div className="text-silver-500 text-xs mt-0.5 line-clamp-1">{s.shortDescription}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-silver-500 text-xs">
                    Can&apos;t decide? Use our <span className="text-promo-400 font-semibold">AI Print Consultant</span> for personalized recommendations.
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-promo-400 hover:text-promo-300 text-sm font-semibold transition-colors"
                  >
                    View All Services
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu items={navItems} onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
