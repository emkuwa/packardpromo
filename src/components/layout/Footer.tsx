"use client";

import Link from "next/link";
import { siteConfig, trustedBy, cities } from "@/lib/data";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

const popularProducts = ["Business Cards", "Flyers", "T-Shirts", "Polo Shirts", "Mugs", "Pens", "Diaries", "Banners", "Rollup Banners", "Signboards", "Stickers", "Packaging Boxes"];

const popularSearches = ["Printing services Tanzania", "Signboards Dar es Salaam", "Vehicle branding", "Banner printing", "Business card printing", "T-shirt printing", "Packaging printing", "Promotional products Tanzania", "Corporate gifts", "LED signs", "Sticker printing", "Magazine printing"];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-packard-950">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-3">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src="/logo.png" alt="Packard Promo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Packard</div>
                  <div className="text-[10px] text-promo-400 uppercase tracking-[0.22em] font-semibold">Promo</div>
                </div>
              </Link>

              <p className="text-silver-400 text-sm leading-relaxed mb-3 max-w-sm">
                Tanzania&apos;s leading printing, signage, packaging &amp; promotional products platform.
              </p>
              <div className="text-promo-400 text-xs font-medium italic mb-5">
                Print. Promote. Perform.
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {["ISO Certified", "TBS Registered", "FSC Member", "14+ Years"].map((cert) => (
                  <span key={cert} className="text-[9px] px-2 py-1 rounded-full bg-promo-500/10 text-promo-300 border border-promo-500/20">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {["linkedin", "twitter", "instagram", "facebook", "tiktok"].map((social) => (
                  <a
                    key={social}
                    href={siteConfig.social[social as keyof typeof siteConfig.social]}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-promo-500/20 border border-white/10 hover:border-promo-500/30 flex items-center justify-center text-silver-400 hover:text-promo-300 transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-[10px] uppercase font-bold">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Top Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.slug}`} className="text-silver-500 hover:text-promo-400 text-xs transition-colors duration-200">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Popular Products</h4>
              <ul className="space-y-2">
                {popularProducts.slice(0, 6).map((p) => (
                  <li key={p}>
                    <Link href="/products" className="text-silver-500 hover:text-promo-400 text-xs transition-colors duration-200">
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Industries</h4>
              <ul className="space-y-2">
                {industries.slice(0, 6).map((i) => (
                  <li key={i.id}>
                    <Link href={`/industries/${i.slug}`} className="text-silver-500 hover:text-promo-400 text-xs transition-colors duration-200">
                      {i.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Locations</h4>
              <ul className="space-y-2">
                {cities.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/locations/${c.slug}`} className="text-silver-500 hover:text-promo-400 text-xs transition-colors duration-200">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Quick Quote</h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="block text-silver-600 text-[10px] uppercase tracking-wider mb-0.5">Call / WhatsApp</span>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-white hover:text-promo-400 text-sm font-semibold transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-silver-600 text-[10px] uppercase tracking-wider mb-0.5">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-silver-300 hover:text-promo-400 text-xs transition-colors break-all">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-silver-600 text-[10px] uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-silver-300 text-xs">Fire Area, Dar es Salaam</span>
                </li>
                <li>
                  <span className="block text-silver-600 text-[10px] uppercase tracking-wider mb-0.5">Hours</span>
                  <span className="text-silver-300 text-xs">{siteConfig.hours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 pb-6">
          <div className="text-silver-600 text-[10px] uppercase tracking-wider font-semibold mb-3">Popular Searches</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {popularSearches.map((s) => (
              <Link
                key={s}
                href="/search"
                className="text-silver-500 hover:text-promo-400 text-xs transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-silver-600 text-[10px] md:text-xs order-2 md:order-1">
              &copy; {new Date().getFullYear()} Packard Promo, a division of{" "}
              <a href={siteConfig.parentUrl} className="text-packard-400 hover:text-packard-300 transition-colors">
                {siteConfig.parentBrand}
              </a>
              . All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-5 order-1 md:order-2">
              <span className="text-[10px] text-silver-600 uppercase tracking-wider font-semibold">Trusted by:</span>
              {trustedBy.slice(0, 6).map((brand) => (
                <span key={brand} className="text-silver-600/50 font-semibold text-[9px] md:text-[10px] uppercase tracking-widest hover:text-silver-500/80 transition-colors">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
