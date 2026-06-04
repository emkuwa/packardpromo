"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

interface FeaturedProduct {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: number;
  minQty: number;
  serviceSlug: string;
  serviceTitle: string;
}

const featured: FeaturedProduct[] = [
  { slug: "business-cards", name: "Business Cards", category: "Digital", image: "/images/business card2.jpg", price: 18000, minQty: 100, serviceSlug: "digital-printing", serviceTitle: "Digital Printing" },
  { slug: "flyers", name: "Flyers & Leaflets", category: "Digital", image: "/images/poster.jpg", price: 25000, minQty: 100, serviceSlug: "digital-printing", serviceTitle: "Digital Printing" },
  { slug: "rollup", name: "Roll-up Banners", category: "Large Format", image: "/images/x-banner.jpg", price: 55000, minQty: 1, serviceSlug: "large-format-printing", serviceTitle: "Large Format" },
  { slug: "pvc-banner", name: "PVC Banners", category: "Large Format", image: "/images/large format printing.jpg", price: 12000, minQty: 1, serviceSlug: "large-format-printing", serviceTitle: "Large Format" },
  { slug: "shop-sign", name: "Shop Signboards", category: "Signage", image: "/images/illuminated signage.jpg", price: 180000, minQty: 1, serviceSlug: "signage-solutions", serviceTitle: "Signage" },
  { slug: "led-sign", name: "LED Channel Letters", category: "Signage", image: "/images/illuminated light box.jpg", price: 85000, minQty: 1, serviceSlug: "signage-solutions", serviceTitle: "Signage" },
  { slug: "tshirt", name: "Branded T-Shirts", category: "Promo", image: "/images/round neck t-shirt.jpg", price: 8500, minQty: 25, serviceSlug: "promotional-products", serviceTitle: "Promotional Products" },
  { slug: "polo", name: "Branded Polos", category: "Promo", image: "/images/screen printing.jpg", price: 14000, minQty: 25, serviceSlug: "promotional-products", serviceTitle: "Promotional Products" },
  { slug: "mug", name: "Branded Mugs", category: "Promo", image: "/images/coffee mug.jpg", price: 4500, minQty: 25, serviceSlug: "promotional-products", serviceTitle: "Promotional Products" },
  { slug: "car-wrap", name: "Vehicle Wraps", category: "Vehicle", image: "/images/vehicle branding.jpg", price: 350000, minQty: 1, serviceSlug: "vehicle-branding", serviceTitle: "Vehicle Branding" },
  { slug: "cartons", name: "Folding Cartons", category: "Packaging", image: "/images/packaging.jpg", price: 250, minQty: 1000, serviceSlug: "packaging-printing", serviceTitle: "Packaging" },
  { slug: "diary", name: "Branded Diaries", category: "Promo", image: "/images/executive diary.jpg", price: 12500, minQty: 50, serviceSlug: "promotional-products", serviceTitle: "Promotional Products" },
];

export default function PopularProducts() {
  return (
    <section className="section-padding relative" id="popular-products">
      <div className="absolute inset-0 bg-gradient-to-b from-packard-950 via-packard-900/40 to-packard-950" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Popular Products"
          title="Transparent Pricing. Fast Delivery."
          subtitle="Our most-ordered products with clear starting prices. Every product includes a free design quote and 24-hour response."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.jpg"; }}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] uppercase tracking-wider text-white font-bold px-2 py-0.5 rounded-full bg-promo-500/90 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-packard-950/85 to-transparent">
                    <div className="text-promo-300 text-xs font-bold">From TZS {p.price.toLocaleString()}</div>
                    <div className="text-silver-400 text-[9px]">MOQ: {p.minQty}+</div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug group-hover:text-promo-300 transition-colors line-clamp-2 min-h-[2.5rem]">
                    {p.name}
                  </h3>
                  <div className="text-[10px] text-silver-500 uppercase tracking-wider mb-3">{p.serviceTitle}</div>
                  <div className="mt-auto flex gap-1.5">
                    <Link
                      href={`/products/${p.slug}`}
                      className="flex-1 text-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] font-semibold hover:bg-white/10"
                    >
                      View
                    </Link>
                    <Link
                      href="/quote"
                      className="flex-1 text-center px-3 py-2 rounded-lg bg-gradient-to-r from-promo-500 to-promo-400 text-white text-[11px] font-bold hover:from-promo-400"
                    >
                      Quick Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
