"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AppIcon } from "@/components/app-ui/AppIcon";
import { appProductImage } from "@/lib/app-product-images";
import type { Product, Service } from "@/types";

const defaultSizes = ["Standard (90 × 50 mm)", "Square (65 × 65 mm)", "Custom Size"];
const defaultMaterials = ["Matt (350gsm)", "Gloss (350gsm)", "Premium (400gsm)"];
const defaultFeatures = ["High-quality print", "Multiple paper options", "Single or double sided", "Fast turnaround"];

export default function ProductDetail({ product }: { service: Service; product: Product & { category: string } }) {
  const [qty, setQty] = useState(Math.max(product.minQty, 250));
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || defaultSizes[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials?.[0] || defaultMaterials[0]);

  const sizes = product.sizes?.length ? product.sizes : defaultSizes;
  const materials = product.materials?.length ? product.materials : defaultMaterials;
  const features = product.features?.length ? product.features : defaultFeatures;

  const estimated = useMemo(() => {
    const base = product.startingPrice;
    const qtyMultiplier = Math.max(1, qty / Math.max(product.minQty, 1));
    const materialMultiplier = selectedMaterial.toLowerCase().includes("premium") ? 1.3 : 1;
    return Math.round(base * qtyMultiplier * materialMultiplier);
  }, [selectedMaterial, product, qty]);

  return <div className="detail-screen">
    <header className="detail-header"><Link href="/products" aria-label="Back to products"><AppIcon name="back"/></Link><div><button aria-label="Save product"><AppIcon name="heart"/></button><button aria-label="Share product"><AppIcon name="share"/></button></div></header>
    <div className="detail-image"><Image src={product.image || appProductImage(product, product.image)} alt={product.name} fill priority sizes="(max-width: 700px) 100vw, 700px"/><div className="image-dots"><i/><i className="active"/><i/><i/></div></div>
    <section className="detail-body">
      <div className="detail-title"><h1>{product.name}</h1><p>From <strong>TZS {product.startingPrice.toLocaleString("en-US")}</strong></p></div>
      <p className="detail-description">{product.description}</p>
      <div className="feature-grid">
        {features.map((f, i) => (
          <span key={i}><AppIcon name={i === 0 ? "printer" : i === 1 ? "layers" : i === 2 ? "card" : "clock"}/><small>{f}</small></span>
        ))}
      </div>
      {sizes.length > 1 && (
        <div className="option-block"><h3>Size</h3><div className="choice-row">{sizes.map((item) => <button className={selectedSize === item ? "active" : ""} onClick={() => setSelectedSize(item)} key={item}><b>{item}</b></button>)}</div></div>
      )}
      {materials.length > 1 && (
        <div className="option-block"><h3>{product.category === "Signage" ? "Material" : "Paper Type"}</h3><div className="choice-row compact">{materials.map((item) => <button className={selectedMaterial === item ? "active" : ""} onClick={() => setSelectedMaterial(item)} key={item}>{item}</button>)}</div></div>
      )}
      <div className="qty-price"><div><h3>Quantity</h3><div className="stepper"><button onClick={() => setQty(Math.max(product.minQty, qty - (product.minQty > 10 ? 10 : 1)))}>−</button><strong>{qty}</strong><button onClick={() => setQty(qty + (product.minQty > 10 ? 10 : 1))}>＋</button></div></div><div><small>Estimated Price</small><strong>TZS {estimated.toLocaleString("en-US")}</strong></div></div>
      <label className="select-row"><span>Turnaround Time</span><select><option>Standard ({product.leadTime})</option><option>Express (1–2 working days)</option></select></label>
      <label className="select-row"><span>Delivery Location</span><select>
        <option>Dar es Salaam</option>
        <option>Dodoma</option>
        <option>Arusha</option>
        <option>Mwanza</option>
        <option>Zanzibar</option>
        <option>Tanga</option>
        <option>Tabora</option>
        <option>Mbeya</option>
        <option>Moshi</option>
        <option>Morogoro</option>
        <option>Kigoma</option>
        <option>Songea</option>
        <option>Mtwara</option>
        <option>Ruvuma</option>
        <option>Kagera</option>
        <option>Mara</option>
        <option>Simiyu</option>
        <option>Geita</option>
        <option>Njombe</option>
        <option>Katavi</option>
        <option>Rukwa</option>
        <option>Lindi</option>
        <option>Pwani</option>
        <option>Kilimanjaro</option>
        <option>Manyara</option>
        <option>Lushoto</option>
      </select></label>
      <Link href={`/ai-tools/quote-generator?product=${product.slug}&qty=${qty}`} className="add-quote"><AppIcon name="document" className="size-5"/> Add to Quote</Link>
    </section>
  </div>;
}
