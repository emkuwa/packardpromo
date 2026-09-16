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
  "executive-business-cards": "/images/corporate business card.jpg",
  "flyers": "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp",
  "brochures": "/images/brochure.jpg",
  "corporate-brochures": "/images/brochure3.jpg",
  "posters": "/images/packard-2026/custom-poster-printing-tanzania.webp",
  "stickers-labels": "/images/stickers.jpg",
  "laptop-stickers": "/images/laptop stickers.jpg",
  "certificates": "/images/recognition certificate.jpg",
  "letterheads": "/images/letter head.jpg",
  "envelopes": "/images/envelop.jpg",
  "staff-ids": "/images/id card with lanyard.jpg",
  "books": "/images/note book.jpg",
  "magazines": "/images/product catalogue.jpg",
  "annual-reports": "/images/annual report.jpg",
  "bulk-brochures": "/images/brochure3.jpg",
  "company-profiles": "/images/company profile.jpg",
  "premium-company-profiles": "/images/company profile2.jpg",
  "product-catalogues": "/images/product catalogue.jpg",
  "educational-materials": "/images/note book.jpg",
  "ncr-books": "/images/ncr book.jpg",
  "pvc-banners": "/images/packard-2026/pvc-banner-printing-tanzania.webp",
  "rollup-banners": "/images/x-banner.jpg",
  "teardrop-banners": "/images/teardrop banner.jpg",
  "backdrops": "/images/backdrop banner.jpg",
  "billboards": "/images/packard-2026/billboard-printing-tanzania.webp",
  "folding-cartons": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "product-packaging": "/images/product package.jpg",
  "food-packaging": "/images/packard-2026/custom-food-packaging-printing-tanzania.webp",
  "retail-packaging": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "gift-boxes": "/images/packard-2026/luxury-gift-box-packaging-tanzania.webp",
  "shopping-bags": "/images/shopping bag.jpg",
  "packaging-labels": "/images/packaging labels.jpg",
  "shop-signboards": "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp",
  "3d-signs": "/images/3d sign.jpg",
  "premium-3d-signs": "/images/3d sign2.jpg",
  "outdoor-signage": "/images/outdoor signage.jpg",
  "reception-signs": "/images/reception  wall sign.jpg",
  "safety-signage": "/images/safety signage.jpg",
  "wayfinding": "/images/wayfinder sign.jpg",
  "lightboxes": "/images/illuminated light box.jpg",
  "glass-branding": "/images/glass branding frost.jpg",
  "retail-storefront": "/images/retail storefront.jpg",
  "car-branding": "/images/vehicle branding.jpg",
  "wheel-covers": "/images/wheel cover.jpg",
  "tshirts": "/images/round neck t-shirt.jpg",
  "polo-shirts": "/images/packard-2026/custom-embroidered-polo-shirts-tanzania.webp",
  "caps": "/images/cap.jpg",
  "uniforms": "/images/uniform.jpg",
  "security-uniforms": "/images/security uniform.jpg",
  "reflector-jackets": "/images/reflector jacket.jpg",
  "mugs": "/images/coffee mug.jpg",
  "pens": "/images/branded pen.jpg",
  "executive-pens": "/images/executive pen.jpg",
  "diaries": "/images/executive diary.jpg",
  "key-holders": "/images/keyholder.jpg",
  "gift-sets": "/images/packard-2026/luxury-gift-box-packaging-tanzania.webp",
  "water-bottles": "/images/water bottle.jpg",
  "vacuum-flasks": "/images/vacuum flask.jpg",
  "umbrellas": "/images/umbrellar.jpg",
  "laptop-bags": "/images/laptop bag.jpg",
  "branded-backpacks": "/images/backpack.jpg",
  "usb-flash-drives": "/images/usb flash drive.jpg",
  "power-banks": "/images/power bank.jpg",
  "wireless-chargers": "/images/wireless charger.jpg",
  "branded-mouse-pads": "/images/mouse pad.jpg",
  "table-calendars": "/images/desktop calendar.jpg",
  "desktop-calendars": "/images/table calendar2.jpg",
  "table-organisers": "/images/table organiser.jpg",
  "exhibition-stands": "/images/exhibition stand.jpg",
  "popup-displays": "/images/backdrop banner.jpg",
  "registration-counters": "/images/promotional table.jpg",
  "event-materials": "/images/conference folder.jpg",
  "conference-bags": "/images/conference bag.jpg",
  "conference-folders": "/images/conference folder.jpg",
  "paper-wristbands": "/images/paper wristband.jpg",
  "silicone-wristbands": "/images/silicone wristbands.jpg",
  "table-talkers": "/images/table talker display.jpg",
  "promotional-tables": "/images/promotional table.jpg",
  "logo-design": "/images/logo designing.jpg",
  "packaging-design": "/images/packard-2026/custom-retail-packaging-tanzania.webp",
  "graphics-designing": "/images/graphics design service.jpg",
};

export function appProductImage(product: { slug?: string; name?: string; category?: string }, fallback?: string) {
  const slug = product.slug ?? "";
  if (productImageMap[slug]) return productImageMap[slug];

  const value = `${slug} ${product.name ?? ""} ${product.category ?? ""}`.toLowerCase();
  if (/business.?card|stationery|receipt|letterhead/.test(value)) return "/images/business card2.jpg";
  if (/flyer|leaflet/.test(value)) return "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp";
  if (/brochure|profile|catalogue/.test(value)) return "/images/brochure.jpg";
  if (/t.?shirt|apparel|hoodie/.test(value)) return "/images/round neck t-shirt.jpg";
  if (/polo/.test(value)) return "/images/packard-2026/custom-embroidered-polo-shirts-tanzania.webp";
  if (/cap|headwear|hat/.test(value)) return "/images/cap.jpg";
  if (/vehicle|car.?wrap|fleet/.test(value)) return "/images/vehicle branding.jpg";
  if (/roll.?up/.test(value)) return "/images/x-banner.jpg";
  if (/banner|billboard|backdrop|flag/.test(value)) return "/images/packard-2026/pvc-banner-printing-tanzania.webp";
  if (/sign|signboard|lightbox|led|3d.?sign|wayfinding/.test(value)) return "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp";
  if (/packag|box|carton/.test(value)) return "/images/packard-2026/custom-retail-packaging-tanzania.webp";
  if (/mug|tumbler/.test(value)) return "/images/coffee mug.jpg";
  if (/bottle|flask/.test(value)) return "/images/water bottle.jpg";
  if (/gift|promo|promotional/.test(value)) return "/images/packard-2026/luxury-gift-box-packaging-tanzania.webp";
  if (/diary|notebook/.test(value)) return "/images/executive diary.jpg";
  if (/pen/.test(value)) return "/images/branded pen.jpg";
  if (/calendar/.test(value)) return "/images/desktop calendar.jpg";
  if (/umbrella/.test(value)) return "/images/umbrellar.jpg";
  if (/sticker|label/.test(value)) return "/images/stickers.jpg";
  if (/uniform|workwear/.test(value)) return "/images/uniform.jpg";
  if (/exhibition|stand|display/.test(value)) return "/images/exhibition stand.jpg";
  if (/conference|event/.test(value)) return "/images/conference folder.jpg";
  if (/id.?card|badge|lanyard/.test(value)) return "/images/id card with lanyard.jpg";
  if (/design|logo|graphic/.test(value)) return "/images/graphics design service.jpg";
  if (/bag|tote|backpack/.test(value)) return "/images/backpack.jpg";
  return fallback ?? "/images/business card2.jpg";
}
