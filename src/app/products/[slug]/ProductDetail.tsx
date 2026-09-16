"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AppIcon } from "@/components/app-ui/AppIcon";
import { appProductImage } from "@/lib/app-product-images";
import type { Product, Service } from "@/types";

export default function ProductDetail({ product }: { service: Service; product: Product & { category: string } }) {
  const [qty, setQty] = useState(Math.max(product.minQty, 250));
  const [size, setSize] = useState("Standard");
  const [paper, setPaper] = useState("Matt");
  const estimated = useMemo(() => Math.round(product.startingPrice * Math.max(1, qty / Math.max(product.minQty, 1)) * (paper === "Premium" ? 1.3 : 1)), [paper, product, qty]);
  return <div className="detail-screen">
    <header className="detail-header"><Link href="/products" aria-label="Back to products"><AppIcon name="back"/></Link><div><button aria-label="Save product"><AppIcon name="heart"/></button><button aria-label="Share product"><AppIcon name="share"/></button></div></header>
    <div className="detail-image"><Image src={appProductImage(product, product.image)} alt={product.name} fill priority sizes="(max-width: 700px) 100vw, 700px"/><div className="image-dots"><i/><i className="active"/><i/><i/></div></div>
    <section className="detail-body">
      <div className="detail-title"><h1>{product.name}</h1><p>From <strong>TZS {product.startingPrice.toLocaleString("en-US")}</strong></p></div>
      <p className="detail-description">{product.description}</p>
      <div className="feature-grid"><span><AppIcon name="printer"/><small>High-quality print</small></span><span><AppIcon name="layers"/><small>Multiple paper options</small></span><span><AppIcon name="card"/><small>Single or double sided</small></span><span><AppIcon name="clock"/><small>Fast turnaround</small></span></div>
      <div className="option-block"><h3>Size</h3><div className="choice-row">{["Standard", "Square", "Custom Size"].map((item) => <button className={size === item ? "active" : ""} onClick={() => setSize(item)} key={item}><b>{item}</b><small>{item === "Standard" ? "(90 × 50 mm)" : item === "Square" ? "(65 × 65 mm)" : "Request a size"}</small></button>)}</div></div>
      <div className="option-block"><h3>Paper Type</h3><div className="choice-row compact">{["Matt", "Gloss", "Premium"].map((item) => <button className={paper === item ? "active" : ""} onClick={() => setPaper(item)} key={item}>{item} {item === "Premium" ? "(400gsm)" : "(350gsm)"}</button>)}</div></div>
      <div className="qty-price"><div><h3>Quantity</h3><div className="stepper"><button onClick={() => setQty(Math.max(product.minQty, qty - 50))}>−</button><strong>{qty}</strong><button onClick={() => setQty(qty + 50)}>＋</button></div></div><div><small>Estimated Price</small><strong>TZS {estimated.toLocaleString("en-US")}</strong></div></div>
      <label className="select-row"><span>Turnaround Time</span><select><option>Standard (3–5 working days)</option><option>Express (1–2 working days)</option></select></label>
      <label className="select-row"><span>Delivery Location</span><select><option>Dar es Salaam</option><option>Zanzibar</option><option>Arusha</option><option>Dodoma</option></select></label>
      <Link href={`/ai-tools/quote-generator?product=${product.slug}&qty=${qty}`} className="add-quote"><AppIcon name="document" className="size-5"/> Add to Quote</Link>
    </section>
  </div>;
}
