"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AppIcon } from "@/components/app-ui/AppIcon";
import { appImages } from "@/lib/app-product-images";

const prompts = ["Business cards for my company", "100 branded T-Shirts with logo", "Packaging boxes for my product", "A shop signboard in Dar es Salaam", "Help me choose the best material", "I want vehicle branding for 2 vans"];

export default function QuoteGeneratorPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>(["I need 500 business cards, matt finish, double sided, with my artwork."]);
  const send = (event: FormEvent) => { event.preventDefault(); if (!message.trim()) return; setMessages((items) => [...items, message.trim()]); setMessage(""); };
  return <div className="ai-screen">
    <header className="ai-header"><Link href="/" aria-label="Go back" className="grid size-8 shrink-0 place-items-center"><AppIcon name="back" className="size-5"/></Link><div className="bot-avatar">🤖</div><div><h1>AI Quote Assistant <em>BETA</em></h1><p>Your printing & branding expert</p></div></header>
    <div className="assistant-tabs"><button className="active">AI Quote</button><button>Print Consultant</button><button>Packaging Advisor</button><button>Signage Planner</button></div>
    <section className="chat-thread">
      <div className="chat-row bot"><span>🤖</span><div><strong>Habari! 👋</strong><p>I&apos;m your AI Quote Assistant.<br/>Tell me what you need and I&apos;ll help you get an instant estimate.</p><p>You can also upload your artwork or describe your idea in plain language.</p></div></div>
      <div className="suggestions"><b>Try asking:</b><div>{prompts.map((prompt) => <button key={prompt} onClick={() => setMessage(prompt)}>{prompt}</button>)}</div></div>
      {messages.map((item, index) => <div className="chat-row user" key={`${item}-${index}`}><div>{item}<small>09:42 ✓✓</small></div></div>)}
      <div className="chat-row bot quote-message"><span>🤖</span><div><p>Here&apos;s your estimate:</p><article><Image src={appImages.cards} alt="Business cards" width={86} height={64} style={{ width: 86, height: 64 }}/><div><strong>Business Cards</strong><small>500 pcs · Matt finish · Double sided<br/>Standard size (90 × 50 mm)</small><b>TZS 95,000</b></div></article><footer><span><AppIcon name="clock" className="size-3 shrink-0"/>3–5 working days</span><span><AppIcon name="truck" className="size-3 shrink-0"/>Tanzania-wide delivery</span></footer><div className="quote-actions"><Link href="/products/business-cards"><AppIcon name="document" className="size-4 shrink-0"/>Add to Quote</Link><a href="https://wa.me/255716002790"><AppIcon name="whatsapp" className="size-4 shrink-0"/>Chat on WhatsApp</a></div></div></div>
      <div className="chat-secondary"><button><AppIcon name="upload" className="size-4 shrink-0"/>Upload Artwork</button><button onClick={() => setMessages([])}><AppIcon name="refresh" className="size-4 shrink-0"/>Start New Request</button></div>
    </section>
    <form className="message-composer" onSubmit={send}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message..." aria-label="Message"/><button aria-label="Send message"><AppIcon name="send"/></button></form>
  </div>;
}
