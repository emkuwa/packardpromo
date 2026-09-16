import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/products/t-shirts", destination: "/products/tshirts", permanent: true },
      { source: "/products/t-shirt", destination: "/products/tshirts", permanent: true },
      { source: "/products/tshirt", destination: "/products/tshirts", permanent: true },
      { source: "/products/rollup", destination: "/products/rollup-banners", permanent: true },
      { source: "/products/pvc-banner", destination: "/products/pvc-banners", permanent: true },
      { source: "/products/shop-sign", destination: "/products/shop-signboards", permanent: true },
      { source: "/products/car-wrap", destination: "/products/car-branding", permanent: true },
      { source: "/products/packaging", destination: "/products/folding-cartons", permanent: true },
      { source: "/products/cartons", destination: "/products/folding-cartons", permanent: true },
      { source: "/products/mug", destination: "/products/mugs", permanent: true },
      { source: "/products/polo", destination: "/products/polo-shirts", permanent: true },
      { source: "/products/stickers", destination: "/products/stickers-labels", permanent: true },
      { source: "/products/diary", destination: "/products/diaries", permanent: true },
      { source: "/products/led-sign", destination: "/products/lightboxes", permanent: true },
      { source: "/products/promo-mugs", destination: "/products/mugs", permanent: true },
    ];
  },
  env: {
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_BING_VERIFICATION: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default nextConfig;
