"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AppIcon, type AppIconName } from "./AppIcon";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const navItems = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Products", href: "/products", icon: "grid" },
  { label: "AI Quote", href: "/ai-tools/quote-generator", icon: "spark" },
  { label: "Projects", href: "/portfolio", icon: "briefcase" },
  { label: "Account", href: "/contact", icon: "user" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDetail = /^\/products\/[^/]+/.test(pathname);
  const isAi = pathname === "/ai-tools/quote-generator";
  const isCommerceExperience = pathname === "/" || pathname.startsWith("/products") || isAi || pathname === "/quote";
  const showStandardHeader = !isDetail && !isAi;

  return (
    <div className={`promo-app${isCommerceExperience ? " commerce-shell" : ""}${isDetail ? " detail-shell" : ""}`}>
      {showStandardHeader && (
        <header className="app-header">
          <button className="icon-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><AppIcon name="menu" className="size-6" /></button>
          <Link href="/" className="app-wordmark" aria-label="Packard Promo home">
            <Image src="/logo.png" alt="" width={38} height={38} className="app-logo" priority />
            <span><strong>Packard</strong><b>Promo</b><small>PRINT · BRAND · DELIVER</small></span>
          </Link>
          <Link href="/quote" className="icon-button cart-button" aria-label="View quote cart"><AppIcon name="cart" className="size-6" /><em>3</em></Link>
        </header>
      )}

      {menuOpen && (
        <div className="menu-backdrop" role="presentation" onClick={() => setMenuOpen(false)}>
          <nav className="menu-drawer" aria-label="Main navigation" onClick={(event) => event.stopPropagation()}>
            <div className="menu-heading"><span>Menu</span><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><AppIcon name="close" className="size-6" /></button></div>
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><AppIcon name={item.icon as AppIconName} className="size-5" />{item.label}</Link>)}
            <div className="menu-contact"><strong>Need help?</strong><a href="tel:+255716002790">+255 716 002 790</a></div>
          </nav>
        </div>
      )}

      <div className="app-content">{children}</div>

      {!isDetail && <nav className="bottom-nav" aria-label="App navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace("/quote-generator", ""));
            return <Link key={item.href} href={item.href} className={active ? "active" : ""}><span className={item.icon === "spark" ? "ai-nav-icon" : ""}><AppIcon name={item.icon as AppIconName} className="size-5" /></span><small>{item.label}</small></Link>;
          })}
        </nav>}

      {!isDetail && !isAi && <WhatsAppButton />}
    </div>
  );
}
