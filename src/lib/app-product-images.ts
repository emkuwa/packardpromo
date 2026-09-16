export const appImages = {
  hero: "/images/packard-app/hero-print-brand-deliver.png",
  cards: "/images/packard-app/business-cards.png",
  tshirt: "/images/packard-app/branded-tshirt.png",
  cap: "/images/packard-app/branded-cap.png",
  packaging: "/images/packard-app/packaging-boxes.png",
  banner: "/images/packard-app/rollup-banner.png",
  vehicle: "/images/packard-app/vehicle-branding.png",
  gift: "/images/packard-app/corporate-gift.png",
} as const;

export function appProductImage(product: { slug?: string; name?: string; category?: string }, fallback?: string) {
  const value = `${product.slug ?? ""} ${product.name ?? ""} ${product.category ?? ""}`.toLowerCase();
  if (/business.?card|flyer|brochure|stationery|receipt|letterhead/.test(value)) return appImages.cards;
  if (/t.?shirt|polo|uniform|apparel|hoodie/.test(value)) return appImages.tshirt;
  if (/cap|headwear|hat/.test(value)) return appImages.cap;
  if (/vehicle|car.?wrap|fleet/.test(value)) return appImages.vehicle;
  if (/roll.?up|banner|sign|billboard|backdrop|flag/.test(value)) return appImages.banner;
  if (/packag|box|carton|label|bag/.test(value)) return appImages.packaging;
  if (/mug|tumbler|gift|bottle|flask|promotional/.test(value)) return appImages.gift;
  return fallback ?? appImages.cards;
}
