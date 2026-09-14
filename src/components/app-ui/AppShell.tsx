"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Products", href: "/products", icon: "grid" },
  { label: "AI Quote", href: "/ai-tools/quote-generator", icon: "spark" },
  { label: "Projects", href: "/portfolio", icon: "briefcase" },
  { label: "Account", href: "/contact", icon: "user" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    cart: <><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L20.5 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></>,
    grid: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
    spark: <><path d="m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDetail = /^\/products\/[^/]+/.test(pathname);
  const isAi = pathname === "/ai-tools/quote-generator";
  const showStandardHeader = !isDetail && !isAi;

  return (
    <div className="promo-app">
      {showStandardHeader && (
        <header className="app-header">
          <button className="icon-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" className="size-6" /></button>
          <Link href="/" className="app-wordmark" aria-label="Packard Promo home">
            <Image src="/logo.png" alt="" width={38} height={38} className="app-logo" priority />
            <span><strong>Packard</strong><b>Promo</b><small>PRINT · BRAND · DELIVER</small></span>
          </Link>
          <Link href="/quote" className="icon-button cart-button" aria-label="View quote cart"><Icon name="cart" className="size-6" /><em>3</em></Link>
        </header>
      )}

      {menuOpen && (
        <div className="menu-backdrop" role="presentation" onClick={() => setMenuOpen(false)}>
          <nav className="menu-drawer" aria-label="Main navigation" onClick={(event) => event.stopPropagation()}>
            <div className="menu-heading"><span>Menu</span><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" className="size-6" /></button></div>
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><Icon name={item.icon} className="size-5" />{item.label}</Link>)}
            <div className="menu-contact"><strong>Need help?</strong><a href="tel:+255716002790">+255 716 002 790</a></div>
          </nav>
        </div>
      )}

      <div className="app-content">{children}</div>

      <nav className="bottom-nav" aria-label="App navigation">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace("/quote-generator", ""));
          return <Link key={item.href} href={item.href} className={active ? "active" : ""}><span className={item.icon === "spark" ? "ai-nav-icon" : ""}><Icon name={item.icon} className="size-5" /></span><small>{item.label}</small></Link>;
        })}
      </nav>
    </div>
  );
}
