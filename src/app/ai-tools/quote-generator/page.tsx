"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState, useRef, useEffect } from "react";
import { AppIcon } from "@/components/app-ui/AppIcon";
import { appImages } from "@/lib/app-product-images";

const prompts = ["Business cards for my company", "100 branded T-Shirts with logo", "Packaging boxes for my product", "A shop signboard in Dar es Salaam", "Help me choose the best material", "I want vehicle branding for 2 vans"];

interface QuoteResult {
  product: string;
  image: string;
  details: string;
  price: string;
  turnaround: string;
  delivery: string;
  productSlug: string;
}

function generateQuote(input: string): QuoteResult {
  const lower = input.toLowerCase();

  if (lower.includes("business card") || lower.includes("visiting card")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    const price = qty <= 100 ? 18000 : qty <= 250 ? 35000 : qty <= 500 ? 65000 : qty <= 1000 ? 95000 : Math.round(qty * 120);
    return { product: "Business Cards", image: appImages.cards, details: `${qty} pcs · Matt finish · Double sided\nStandard size (90 × 50 mm)`, price: `TZS ${price.toLocaleString()}`, turnaround: "1–3 working days", delivery: "Same-day in Dar", productSlug: "business-cards" };
  }
  if (lower.includes("t-shirt") || lower.includes("tshirt") || lower.includes("shirt")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    const price = qty <= 25 ? 8500 * qty : qty <= 50 ? 7800 * qty : qty <= 100 ? 7200 * qty : qty <= 250 ? 6500 * qty : Math.round(qty * 5800);
    return { product: "Branded T-Shirts", image: appImages.tshirt, details: `${qty} pcs · 180gsm cotton · Screen print\nSizes S–3XL`, price: `TZS ${price.toLocaleString()}`, turnaround: "5–10 working days", delivery: "Tanzania-wide", productSlug: "tshirts" };
  }
  if (lower.includes("polo")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 50;
    const price = qty <= 25 ? 14000 * qty : qty <= 50 ? 12500 * qty : qty <= 100 ? 11000 * qty : Math.round(qty * 9500);
    return { product: "Branded Polo Shirts", image: "/images/screen printing.jpg", details: `${qty} pcs · Cotton-poly pique · Embroidered logo\nSizes S–3XL`, price: `TZS ${price.toLocaleString()}`, turnaround: "7–14 working days", delivery: "Tanzania-wide", productSlug: "polo-shirts" };
  }
  if (lower.includes("banner") && !lower.includes("roll")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1;
    const price = qty * 15000;
    return { product: "PVC Banner", image: appImages.banner, details: `${qty} pc(s) · 440gsm PVC · Hemmed with eyelets\nCustom size`, price: `TZS ${price.toLocaleString()}`, turnaround: "1–3 working days", delivery: "Tanzania-wide", productSlug: "pvc-banners" };
  }
  if (lower.includes("rollup") || lower.includes("roll-up") || lower.includes("roll up")) {
    return { product: "Roll-up Banner", image: appImages.banner, details: "1 pc · 85×200cm retractable stand\nCarrying bag included", price: "TZS 55,000", turnaround: "1–3 working days", delivery: "Tanzania-wide", productSlug: "rollup-banners" };
  }
  if (lower.includes("sign") || lower.includes("signage") || lower.includes("signboard")) {
    return { product: "Shop Signboard", image: "/images/packard-2026/shop-signboard-printing-dar-es-salaam.webp", details: "ACP / Acrylic / Illuminated\nFree site survey in Dar", price: "From TZS 180,000", turnaround: "3–7 working days", delivery: "Installation included", productSlug: "shop-signboards" };
  }
  if (lower.includes("vehicle") || lower.includes("car") || lower.includes("van") || lower.includes("wrap") || lower.includes("branding my")) {
    return { product: "Vehicle Branding", image: appImages.vehicle, details: "Full / Partial wrap · 3M cast vinyl\n5–7 year durability", price: "From TZS 350,000", turnaround: "2–4 working days", delivery: "On-site installation", productSlug: "car-branding" };
  }
  if (lower.includes("packaging") || lower.includes("box") || lower.includes("carton")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1000;
    const price = qty <= 1000 ? 350 * qty : qty <= 5000 ? 280 * qty : Math.round(qty * 220);
    return { product: "Custom Packaging", image: appImages.packaging, details: `${qty} pcs · Food-safe inks · FDA/TBS compliant\nCustom dieline design included`, price: `TZS ${price.toLocaleString()}`, turnaround: "10–18 working days", delivery: "Tanzania-wide", productSlug: "folding-cartons" };
  }
  if (lower.includes("cap") || lower.includes("hat")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 50;
    const price = qty <= 25 ? 6500 * qty : qty <= 50 ? 5800 * qty : Math.round(qty * 5000);
    return { product: "Branded Caps", image: appImages.cap, details: `${qty} pcs · Embroidered logo\nAdjustable snapback / strapback`, price: `TZS ${price.toLocaleString()}`, turnaround: "5–10 working days", delivery: "Tanzania-wide", productSlug: "caps" };
  }
  if (lower.includes("flyer") || lower.includes("leaflet")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1000;
    const price = qty <= 500 ? 350 * qty : qty <= 1000 ? 280 * qty : qty <= 5000 ? 220 * qty : Math.round(qty * 150);
    return { product: "Flyers & Leaflets", image: "/images/packard-2026/flyer-leaflet-printing-dar-es-salaam-tanzania.webp", details: `${qty} pcs · A5 · 150gsm gloss art\nFull color CMYK`, price: `TZS ${price.toLocaleString()}`, turnaround: "1–2 working days", delivery: "Same-day in Dar", productSlug: "flyers" };
  }
  if (lower.includes("mug")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 25;
    const price = qty <= 25 ? 4500 * qty : qty <= 50 ? 4000 * qty : Math.round(qty * 3500);
    return { product: "Branded Ceramic Mugs", image: "/images/packard-2026/custom-branded-mug-printing-tanzania.webp", details: `${qty} pcs · Ceramic 330ml · Sublimation print\nDishwasher safe`, price: `TZS ${price.toLocaleString()}`, turnaround: "5–10 working days", delivery: "Tanzania-wide", productSlug: "mugs" };
  }
  if (lower.includes("sticker") || lower.includes("label")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    const price = qty <= 100 ? 200 * qty : qty <= 500 ? 120 * qty : Math.round(qty * 80);
    return { product: "Custom Stickers & Labels", image: "/images/packard-2026/custom-stickers-labels-printing-tanzania.webp", details: `${qty} pcs · Vinyl / Paper · Die-cut\nWaterproof options available`, price: `TZS ${price.toLocaleString()}`, turnaround: "2–5 working days", delivery: "Tanzania-wide", productSlug: "stickers-labels" };
  }
  if (lower.includes("brochure") || lower.includes("profile") || lower.includes("catalogue")) {
    const qtyMatch = lower.match(/(\d+)/);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 100;
    const price = qty <= 50 ? 2500 * qty : qty <= 100 ? 1800 * qty : Math.round(qty * 1200);
    return { product: "Brochures & Company Profiles", image: "/images/packard-2026/brochure-company-profile-printing-tanzania.webp", details: `${qty} pcs · A4 · Multi-page · Silk paper\nSaddle-stitched or perfect bound`, price: `TZS ${price.toLocaleString()}`, turnaround: "3–7 working days", delivery: "Tanzania-wide", productSlug: "brochures" };
  }

  return { product: "Custom Printing Solution", image: appImages.cards, details: "Tell us more specifics (product, quantity, materials)\nand we'll provide an accurate estimate", price: "Request a quote", turnaround: "Varies by product", delivery: "Tanzania-wide", productSlug: "business-cards" };
}

export default function QuoteGeneratorPage() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{ from: "user" | "bot"; text: string; quote?: QuoteResult }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatMessages]);

  const send = (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;
    const userText = message.trim();
    setChatMessages((prev) => [...prev, { from: "user", text: userText }]);
    setMessage("");
    setTimeout(() => {
      const quote = generateQuote(userText);
      setChatMessages((prev) => [...prev, { from: "bot", text: `Here's your estimate for ${quote.product}:`, quote }]);
    }, 600);
  };

  const handlePrompt = (prompt: string) => {
    setMessage(prompt);
    setChatMessages((prev) => [...prev, { from: "user", text: prompt }]);
    setTimeout(() => {
      const quote = generateQuote(prompt);
      setChatMessages((prev) => [...prev, { from: "bot", text: `Here's your estimate for ${quote.product}:`, quote }]);
    }, 600);
  };

  return <div className="ai-screen">
    <header className="ai-header"><Link href="/" aria-label="Go back" className="grid size-8 shrink-0 place-items-center"><AppIcon name="back" className="size-5"/></Link><div className="bot-avatar">🤖</div><div><h1>AI Quote Assistant <em>BETA</em></h1><p>Your printing & branding expert</p></div></header>
    <div className="assistant-tabs"><button className="active">AI Quote</button><button>Print Consultant</button><button>Packaging Advisor</button><button>Signage Planner</button></div>
    <section className="chat-thread" ref={scrollRef}>
      <div className="chat-row bot"><span>🤖</span><div><strong>Habari! 👋</strong><p>I&apos;m your AI Quote Assistant.<br/>Tell me what you need and I&apos;ll help you get an instant estimate.</p><p>You can also upload your artwork or describe your idea in plain language.</p></div></div>
      {chatMessages.length === 0 && <div className="suggestions"><b>Try asking:</b><div>{prompts.map((prompt) => <button key={prompt} onClick={() => handlePrompt(prompt)}>{prompt}</button>)}</div></div>}
      {chatMessages.map((msg, index) => msg.from === "user" ? (
        <div className="chat-row user" key={`msg-${index}`}><div>{msg.text}<small>{new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} ✓✓</small></div></div>
      ) : (
        <div className="chat-row bot quote-message" key={`msg-${index}`}><span>🤖</span><div><p>{msg.text}</p>{msg.quote && <article><Image src={msg.quote.image} alt={msg.quote.product} width={86} height={64} style={{ width: 86, height: 64 }}/><div><strong>{msg.quote.product}</strong><small>{msg.quote.details}</small><b>{msg.quote.price}</b></div></article>}<footer><span><AppIcon name="clock" className="size-3 shrink-0"/>{msg.quote?.turnaround || "3–5 working days"}</span><span><AppIcon name="truck" className="size-3 shrink-0"/>{msg.quote?.delivery || "Tanzania-wide delivery"}</span></footer>{msg.quote && <div className="quote-actions"><Link href={`/products/${msg.quote.productSlug}`}><AppIcon name="document" className="size-4 shrink-0"/>Add to Quote</Link><a href="https://wa.me/255716002790"><AppIcon name="whatsapp" className="size-4 shrink-0"/>Chat on WhatsApp</a></div>}</div></div>
      ))}
      <div className="chat-secondary"><button><AppIcon name="upload" className="size-4 shrink-0"/>Upload Artwork</button><button onClick={() => setChatMessages([])}><AppIcon name="refresh" className="size-4 shrink-0"/>Start New Request</button></div>
    </section>
    <form className="message-composer" onSubmit={send}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message..." aria-label="Message"/><button aria-label="Send message"><AppIcon name="send"/></button></form>
  </div>;
}
