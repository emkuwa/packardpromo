"use client";

import Link from "next/link";
import { siteConfig, trustedBy, cities } from "@/lib/data";
import { services } from "@/lib/services";
import { trackEvent } from "@/lib/analytics";
import { industries } from "@/lib/industries";
import { productCatalog } from "@/lib/product-catalog";

const topProducts = [
  { name: "Business Cards", slug: "business-cards", image: "/images/business card2.jpg" },
  { name: "T-Shirts", slug: "tshirts", image: "/images/round neck t-shirt.jpg" },
  { name: "Caps", slug: "caps", image: "/images/cap.jpg" },
  { name: "PVC Banners", slug: "pvc-banners", image: "/images/large format printing.jpg" },
  { name: "Packaging Boxes", slug: "folding-cartons", image: "/images/packaging.jpg" },
  { name: "Shop Signboards", slug: "shop-signboards", image: "/images/illuminated signage.jpg" },
  { name: "Stickers", slug: "stickers-labels", image: "/images/stickers.jpg" },
  { name: "Promotional Gifts", slug: "gift-sets", image: "/images/executive diary.jpg" },
];

const packardPromoServices = [
  "Printing",
  "Signage",
  "Packaging",
  "Apparel Branding",
  "Promotional Products",
];

const packardMainServices = [
  "Corporate Branding",
  "Communications",
  "PR",
  "Government Solutions",
  "NGO Solutions",
  "Enterprise Solutions",
];

const topServices = [
  { name: "Digital Printing", href: "/services/digital-printing" },
  { name: "Offset Printing", href: "/services/offset-printing" },
  { name: "Large Format", href: "/services/large-format-printing" },
  { name: "Packaging", href: "/services/packaging-printing" },
  { name: "Signage", href: "/services/signage-solutions" },
  { name: "Vehicle Branding", href: "/services/vehicle-branding" },
  { name: "Promo Products", href: "/services/promotional-products" },
  { name: "Exhibitions", href: "/services/exhibition-events" },
  { name: "Design Studio", href: "/services/design-studio" },
];

const popularSearches = [
  { label: "Printing services Tanzania", href: "/services/digital-printing" },
  { label: "Signboards Dar es Salaam", href: "/services/signage-solutions" },
  { label: "Vehicle branding", href: "/services/vehicle-branding" },
  { label: "Banner printing", href: "/services/large-format-printing" },
  { label: "Business card printing", href: "/products/business-cards" },
  { label: "T-shirt printing", href: "/products/tshirts" },
  { label: "Packaging printing", href: "/services/packaging-printing" },
  { label: "Promotional products", href: "/services/promotional-products" },
  { label: "Corporate gifts", href: "/services/promotional-products" },
  { label: "LED signs", href: "/services/signage-solutions" },
  { label: "Sticker printing", href: "/products/stickers-labels" },
  { label: "Magazine printing", href: "/services/offset-printing" },
];

const quickQuotes = [
  { name: "Business Cards", href: "/quote?product=business-cards" },
  { name: "T-Shirts", href: "/quote?product=tshirts" },
  { name: "Banners", href: "/quote?product=pvc-banners" },
  { name: "Packaging", href: "/quote?product=packaging" },
  { name: "Signage", href: "/quote?product=signage" },
  { name: "Vehicle Wrap", href: "/quote?product=vehicle" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-packard-950">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-6">
            <div className="col-span-2 md:col-span-3">
              <Link href="/" className="flex items-center gap-2.5 mb-3">
                <div className="w-11 h-11 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src="/logo.png" alt="Packard Promo" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-white font-bold text-base">Packard</div>
                  <div className="text-[10px] text-promo-400 uppercase tracking-[0.22em] font-semibold">Promo</div>
                </div>
              </Link>

              <p className="text-silver-400 text-xs leading-relaxed mb-2">
                Tanzania&apos;s leading printing, signage, packaging &amp; promotional products platform.
              </p>
              <div className="text-promo-400 text-[11px] font-medium italic mb-3">
                Print. Promote. Perform.
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {["ISO Certified", "TBS Registered", "FSC Member", "14+ Years"].map((cert) => (
                  <span key={cert} className="text-[8px] px-1.5 py-0.5 rounded-full bg-promo-500/10 text-promo-300 border border-promo-500/20">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex gap-1.5">
                {["linkedin", "twitter", "instagram", "facebook", "tiktok"].map((social) => (
                  <a
                    key={social}
                    href={siteConfig.social[social as keyof typeof siteConfig.social]}
                    className="w-7 h-7 rounded-md bg-white/5 hover:bg-promo-500/20 border border-white/10 hover:border-promo-500/30 flex items-center justify-center text-silver-400 hover:text-promo-300 transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-[9px] uppercase font-bold">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-3">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Top Products</h4>
              <ul className="space-y-1.5">
                {topProducts.map((p) => (
                  <li key={p.slug}>
                    <Link href="/products" className="text-silver-500 hover:text-promo-400 text-[11px] transition-colors duration-200 inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-silver-600" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Top Services</h4>
              <ul className="space-y-1.5">
                {topServices.map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} className="text-silver-500 hover:text-promo-400 text-[11px] transition-colors duration-200">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Industries</h4>
              <ul className="space-y-1.5">
                {industries.slice(0, 5).map((i) => (
                  <li key={i.id}>
                    <Link href={`/industries/${i.slug}`} className="text-silver-500 hover:text-promo-400 text-[11px] transition-colors duration-200">
                      {i.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Cities Served</h4>
              <ul className="space-y-1.5">
                {cities.map((c) => (
                  <li key={c.id}>
                    <Link href={`/locations/${c.slug}`} className="text-silver-500 hover:text-promo-400 text-[11px] transition-colors duration-200">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-6">
            <div className="col-span-2 md:col-span-4">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Popular Searches</h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {popularSearches.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-silver-500 hover:text-promo-400 text-[11px] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-4">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Quick Quote Links</h4>
              <div className="flex flex-wrap gap-1.5">
                {quickQuotes.map((q) => (
                  <Link
                    key={q.name}
                    href={q.href}
                    className="text-[10px] px-2 py-1 rounded-full bg-promo-500/10 text-promo-300 border border-promo-500/20 hover:bg-promo-500/20 transition-colors"
                  >
                    Quote {q.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Packard Promo</h4>
              <ul className="space-y-1">
                {packardPromoServices.map((s) => (
                  <li key={s} className="text-silver-500 text-[11px]">→ {s}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white font-semibold mb-3 text-[10px] uppercase tracking-wider">Packard Limited</h4>
              <ul className="space-y-1">
                {packardMainServices.map((s) => (
                  <li key={s}>
                    <a href={siteConfig.parentUrl} className="text-silver-500 hover:text-packard-300 text-[11px] transition-colors">
                      → {s}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer" className="text-packard-300 hover:text-packard-200 text-[10px] font-semibold uppercase tracking-wider transition-colors">
                    Visit Packard Limited →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-silver-600 text-[9px] uppercase tracking-wider font-semibold mb-1">Call / WhatsApp</div>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} onClick={() => trackEvent("phone_click", { label: "footer" })} className="text-white hover:text-promo-400 text-sm font-semibold transition-colors">{siteConfig.phone}</a>
            </div>
            <div>
              <div className="text-silver-600 text-[9px] uppercase tracking-wider font-semibold mb-1">Email</div>
              <a href={`mailto:${siteConfig.email}`} className="text-silver-300 hover:text-promo-400 text-xs transition-colors break-all">{siteConfig.email}</a>
            </div>
            <div>
              <div className="text-silver-600 text-[9px] uppercase tracking-wider font-semibold mb-1">Location · Hours</div>
              <span className="text-silver-300 text-xs">Fire Area, Dar es Salaam · {siteConfig.hours}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-silver-600 text-[10px] md:text-xs order-2 md:order-1">
              &copy; {new Date().getFullYear()} Packard Promo, a division of{" "}
              <a href={siteConfig.parentUrl} className="text-packard-400 hover:text-packard-300 transition-colors">
                {siteConfig.parentBrand}
              </a>
              . All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 order-1 md:order-2">
              <span className="text-[9px] text-silver-600 uppercase tracking-wider font-semibold">Trusted by:</span>
              {trustedBy.slice(0, 6).map((brand) => (
                <span key={brand} className="text-silver-600/50 font-semibold text-[9px] uppercase tracking-widest hover:text-silver-500/80 transition-colors">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-4">
          <p className="text-silver-400 text-xs md:text-sm text-center max-w-3xl mx-auto leading-relaxed">
            <span className="text-packard-300 font-semibold uppercase tracking-wider text-[10px] md:text-xs block mb-1">Powered by Packard Ltd</span>
            Promo Packard is the online print and branding division of <a href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer" className="text-packard-300 hover:text-packard-200 transition-colors font-medium">Packard Ltd</a>, providing fast printing, signage and promotional solutions across Tanzania.
          </p>
        </div>
      </div>
    </footer>
  );
}
