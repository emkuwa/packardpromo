export const appImages = {
  hero: "/images/packard-app/hero-print-brand-deliver.png",
  cards: "/images/packard-app/business-cards.png",
  tshirt: "/images/packard-app/branded-tshirt.png",
  cap: "/images/packard-app/branded-cap.png",
  packaging: "/images/packard-app/packaging-boxes.png",
  banner: "/images/packard-app/rollup-banner.png",
  vehicle: "/images/packard-app/vehicle-branding.png",
  gift: "/images/packard-app/corporate-gift.png",
  signage: "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp",
} as const;

const productImageMap: Record<string, string> = {
  "business-cards": "/images/business card2.jpg",
  "executive-business-cards": "/images/business card2.jpg",
  "flyers": "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp",
  "brochures": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "corporate-brochures": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "posters": "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp",
  "stickers-labels": "/images/packard-2026/custom-stickers-labels-printing-tanzania.webp",
  "laptop-stickers": "/images/packard-2026/custom-stickers-labels-printing-tanzania.webp",
  "certificates": "/images/packard-app/business-cards.png",
  "letterheads": "/images/packard-app/business-cards.png",
  "envelopes": "/images/packard-app/business-cards.png",
  "staff-ids": "/images/packard-app/business-cards.png",
  "books": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "magazines": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "annual-reports": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "bulk-brochures": "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp",
  "company-profiles": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "premium-company-profiles": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "product-catalogues": "/images/packard-2026/brochure-company-profile-printing-tanzania.webp",
  "educational-materials": "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp",
  "ncr-books": "/images/packard-app/business-cards.png",
  "pvc-banners": "/images/packard-2026/pvc-banner-printing-tanzania.webp",
  "rollup-banners": "/images/x-banner.jpg",
  "teardrop-banners": "/images/x-banner.jpg",
  "backdrops": "/images/packard-2026/event-backdrop-branding-tanzania.webp",
  "billboards": "/images/packard-2026/pvc-banner-printing-tanzania.webp",
  "folding-cartons": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "product-packaging": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "food-packaging": "/images/packard-2026/food-packaging-printing-tanzania.webp",
  "retail-packaging": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "gift-boxes": "/images/packard-2026/luxury-gift-boxes-tanzania.webp",
  "shopping-bags": "/images/packard-2026/paper-shopping-bags-tanzania.webp",
  "packaging-labels": "/images/packard-2026/custom-stickers-labels-printing-tanzania.webp",
  "shop-signboards": "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp",
  "3d-signs": "/images/packard-2026/3d-letter-signage-tanzania.webp",
  "premium-3d-signs": "/images/packard-2026/3d-letter-signage-tanzania.webp",
  "outdoor-signage": "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp",
  "reception-signs": "/images/packard-2026/reception-wall-sign-tanzania.webp",
  "safety-signage": "/images/safety signage.jpg",
  "wayfinding": "/images/packard-2026/directional-signage-tanzania.webp",
  "lightboxes": "/images/packard-2026/led-illuminated-signage-tanzania.webp",
  "glass-branding": "/images/packard-2026/window-graphics-branding-tanzania.webp",
  "retail-storefront": "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp",
  "car-branding": "/images/packard-2026/fleet-vehicle-branding-tanzania.webp",
  "wheel-covers": "/images/packard-2026/fleet-vehicle-branding-tanzania.webp",
  "tshirts": "/images/round neck t-shirt.jpg",
  "polo-shirts": "/images/screen printing.jpg",
  "caps": "/images/cap.jpg",
  "uniforms": "/images/packard-2026/branded-workwear-safety-vests-tanzania.webp",
  "security-uniforms": "/images/packard-2026/branded-workwear-safety-vests-tanzania.webp",
  "reflector-jackets": "/images/packard-2026/branded-workwear-safety-vests-tanzania.webp",
  "mugs": "/images/packard-2026/custom-branded-mug-printing-tanzania.webp",
  "pens": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "executive-pens": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "diaries": "/images/packard-2026/custom-branded-notebooks-tanzania.webp",
  "key-holders": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "gift-sets": "/images/packard-2026/luxury-gift-boxes-tanzania.webp",
  "water-bottles": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "vacuum-flasks": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "umbrellas": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "laptop-bags": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "branded-backpacks": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "usb-flash-drives": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "power-banks": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "wireless-chargers": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "branded-mouse-pads": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "table-calendars": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "desktop-calendars": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "table-organisers": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "exhibition-stands": "/images/packard-2026/exhibition-stands-tanzania.webp",
  "popup-displays": "/images/packard-2026/exhibition-stands-tanzania.webp",
  "registration-counters": "/images/packard-2026/exhibition-stands-tanzania.webp",
  "event-materials": "/images/packard-2026/event-backdrop-branding-tanzania.webp",
  "conference-bags": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "conference-folders": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "paper-wristbands": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "silicone-wristbands": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "table-talkers": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "promotional-tables": "/images/packard-2026/corporate-stationery-tanzania.webp",
  "logo-design": "/images/packard-2026/graphic-design-studio-tanzania.webp",
  "packaging-design": "/images/packard-2026/graphic-design-studio-tanzania.webp",
  "graphics-designing": "/images/packard-2026/graphic-design-studio-tanzania.webp",
};

export function appProductImage(product: { slug?: string; name?: string; category?: string }, fallback?: string) {
  const slug = product.slug ?? "";
  if (productImageMap[slug]) return productImageMap[slug];

  const value = `${slug} ${product.name ?? ""} ${product.category ?? ""}`.toLowerCase();
  if (/business.?card|flyer|brochure|stationery|receipt|letterhead/.test(value)) return appImages.cards;
  if (/t.?shirt|polo|uniform|apparel|hoodie/.test(value)) return appImages.tshirt;
  if (/cap|headwear|hat/.test(value)) return appImages.cap;
  if (/vehicle|car.?wrap|fleet/.test(value)) return appImages.vehicle;
  if (/roll.?up|banner|billboard|backdrop|flag/.test(value)) return appImages.banner;
  if (/sign|signboard|lightbox|led|3d.?sign|wayfinding/.test(value)) return appImages.signage;
  if (/packag|box|carton|label|bag/.test(value)) return appImages.packaging;
  if (/mug|tumbler|bottle|flask/.test(value)) return "/images/packard-2026/custom-branded-mug-printing-tanzania.webp";
  if (/gift|promo|promotional|diary|notebook|pen|calendar|umbrella/.test(value)) return appImages.gift;
  return fallback ?? appImages.cards;
}
