import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packard Promo | Print. Brand. Deliver.",
  description: "Order premium printing, branded apparel, packaging, signage and corporate gifts with nationwide delivery across Tanzania.",
};

const categories = [
  ["Business Cards", "/images/business card2.jpg", "/products/business-cards"],
  ["T-Shirts", "/images/round neck t-shirt.jpg", "/products/t-shirts"],
  ["Caps", "/images/cap.jpg", "/products/caps"],
  ["Packaging", "/images/packard-2026/custom-retail-packaging-tanzania.webp", "/services/packaging-printing"],
  ["Signage", "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp", "/services/signage-solutions"],
  ["Banners", "/images/x-banner.jpg", "/products/rollup-banners"],
  ["Corporate Gifts", "/images/packard-2026/custom-branded-mug-printing-tanzania.webp", "/services/promotional-products"],
  ["Vehicle Branding", "/images/packard-2026/fleet-vehicle-branding-tanzania.webp", "/services/vehicle-branding"],
];

const trending = [
  ["Business Cards", "/images/business card2.jpg", "18,000", "Best Seller", "/products/business-cards"],
  ["Branded T-Shirts", "/images/round neck t-shirt.jpg", "8,500", "Popular", "/products/t-shirts"],
  ["Branded Caps", "/images/cap.jpg", "6,500", "Trending", "/products/caps"],
  ["Packaging Boxes", "/images/packard-2026/custom-retail-packaging-tanzania.webp", "250", "Best Value", "/services/packaging-printing"],
];

function SearchBar() {
  return <form action="/products" className="app-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input name="q" aria-label="Search products" placeholder="Search products, services or ideas..." /></form>;
}

export default function HomePage() {
  return (
    <div className="home-screen">
      <SearchBar />
      <section className="home-hero">
        <Image src="/images/hero image for promo packard.jpg" alt="Packard Promo printing and branding products" fill sizes="(max-width: 700px) 100vw, 1100px" priority />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Tanzania&apos;s print partner</p>
          <h1>Print.<br/>Brand.<br/><span>Deliver.</span></h1>
          <p>High-quality printing, signage, packaging and promotional products for businesses across Tanzania.</p>
          <div className="hero-actions"><Link href="/ai-tools/quote-generator" className="btn-primary">Get Instant Quote <span>→</span></Link><a className="btn-whatsapp" href="https://wa.me/255716002790">◉ Chat on WhatsApp</a></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our service guarantees">
        <div><b>▣</b><span>Tanzania-wide<br/>Delivery</span></div><div><b>ϟ</b><span>Same-day<br/>Printing</span></div><div><b>♢</b><span>Trusted by<br/>Businesses</span></div><div><b>☆</b><span>Quality<br/>Guaranteed</span></div>
      </section>

      <section className="app-section">
        <div className="section-title"><h2>Shop by Category</h2><Link href="/products">View all →</Link></div>
        <div className="category-grid">{categories.map(([name, image, href]) => <Link href={href} key={name}><span><Image src={image} alt={name} fill sizes="130px" /></span><strong>{name}</strong></Link>)}</div>
      </section>

      <section className="app-section trending-section">
        <div className="section-title"><h2>Trending Products</h2><Link href="/products">View all →</Link></div>
        <div className="trending-grid">{trending.map(([name, image, price, badge, href]) => <Link href={href} className="trend-card" key={name}><div><Image src={image} alt={name} fill sizes="260px"/><em>{badge}</em></div><h3>{name}</h3><p>From <strong>TZS {price}</strong></p><span>Get Quote</span></Link>)}</div>
      </section>

      <section className="app-cta"><div><small>PACKARD PROMO</small><h2>More than print.<br/>A brighter Tanzania.</h2><p>From a first idea to nationwide delivery, we make brands visible.</p></div><Link href="/products">Explore products →</Link></section>
    </div>
  );
}
