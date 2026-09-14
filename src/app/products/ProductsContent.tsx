"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Service } from "@/types";

const tabs = ["All", "Printing", "Apparel", "Packaging", "Signage"];

export default function ProductsContent({ services }: { services: Service[] }) {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) setSearch(query);
  }, []);
  const products = useMemo(() => services.flatMap((service) => service.products.map((product) => ({ ...product, service: service.title }))), [services]);
  const filtered = products.filter((product) => {
    const category = `${product.category} ${product.service}`.toLowerCase();
    const tabMatch = active === "All" || category.includes(active.toLowerCase());
    return tabMatch && `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase());
  });

  return <div className="products-screen">
    <label className="app-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." /></label>
    <div className="filter-tabs">{tabs.map((tab) => <button key={tab} onClick={() => setActive(tab)} className={active === tab ? "active" : ""}>{tab}</button>)}</div>
    <div className="products-heading"><div><h1>All Products</h1><p>{filtered.length} products</p></div><button className="filter-button">☷ <span>Filter</span></button></div>
    {filtered.length ? <div className="product-grid">{filtered.map((product) => <article className="product-tile" key={product.id}>
      <div className="product-image"><Link className="absolute inset-0 block" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 50vw, 260px"/></Link><button type="button" aria-label={`Save ${product.name}`}>♡</button></div>
      <div><Link href={`/products/${product.slug}`}><h2>{product.name}</h2></Link><p>{product.description}</p><strong>From TZS {product.startingPrice.toLocaleString("en-US")}</strong><Link className="outline-quote" href={`/products/${product.slug}`}>Get Quote</Link></div>
    </article>)}</div> : <div className="empty-products"><span>⌕</span><h2>No products found</h2><p>Try another search or category.</p></div>}
  </div>;
}
