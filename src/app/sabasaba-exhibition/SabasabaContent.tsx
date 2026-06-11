"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import FAQ from "@/components/shared/FAQ";

export default function SabasabaContent() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const products = [
    { name: "Exhibition Stands", href: "/products/exhibition-stands", desc: "Custom 3x3m to 100+ sqm island stands" },
    { name: "Gazebos", href: "/products/promotional-tables", desc: "Branded promotional gazebos and tables" },
    { name: "Roll-up Banners", href: "/products/rollup-banners", desc: "Retractable banner stands" },
    { name: "Backdrop Banners", href: "/products/backdrops", desc: "Step-and-repeat and fabric tension backdrops" },
    { name: "Teardrop Banners", href: "/products/teardrop-banners", desc: "Outdoor feather flags" },
    { name: "PVC Banners", href: "/products/pvc-banners", desc: "Heavy-duty outdoor banners" },
    { name: "Promotional T-Shirts", href: "/products/tshirts", desc: "Custom branded T-shirts" },
    { name: "Caps & Headwear", href: "/products/caps", desc: "Embroidered and printed caps" },
    { name: "Corporate Gifts", href: "/products/gift-sets", desc: "Branded gift sets and merchandise" },
    { name: "Brochures", href: "/products/brochures", desc: "Bi-fold, tri-fold and multi-page" },
    { name: "Flyers", href: "/products/flyers", desc: "A4, A5 and DL flyers" },
    { name: "Business Cards", href: "/products/business-cards", desc: "Premium business cards" },
    { name: "Signboards", href: "/products/shop-signboards", desc: "ACP, acrylic and illuminated signs" },
    { name: "Conference Materials", href: "/products/event-materials", desc: "Badges, lanyards, programs" },
  ];

  const services = [
    { name: "Exhibition & Events", href: "/services/exhibition-events" },
    { name: "Large Format Printing", href: "/services/large-format-printing" },
    { name: "Promotional Products", href: "/services/promotional-products" },
    { name: "Digital Printing", href: "/services/digital-printing" },
    { name: "Signage Solutions", href: "/services/signage-solutions" },
    { name: "Design Studio", href: "/services/design-studio" },
  ];

  const faqItems = [
    {
      q: "What is Sabasaba (Dar es Salaam International Trade Fair)?",
      a: "Sabasaba, officially the Dar es Salaam International Trade Fair (DITF), is Tanzania's largest annual trade exhibition held every July at the Mwalimu J.K. Nyerere Grounds in Dar es Salaam. Organised by the Tanzania Trade Development Authority (TANTRADE), it attracts thousands of exhibitors and visitors from across East Africa, including businesses from Kenya, Uganda, Rwanda, Burundi, DRC, Zambia, and international delegations. Exhibitors showcase products and services across industries including manufacturing, agriculture, technology, financial services, education, and tourism.",
    },
    {
      q: "What branding materials do I need for Sabasaba?",
      a: "A successful Sabasaba exhibition requires a coordinated set of branding materials. At minimum you need an exhibition stand or booth structure, PVC banners for outdoor visibility, roll-up banners for indoor booth areas, teardrop flags to attract foot traffic, a backdrop display as your visual centrepiece, promotional products (T-shirts, caps, corporate gifts) for visitor engagement, brochures and flyers for lead generation, business cards for networking, and signboards for booth identification. Packard Promo supplies all these materials from one source, ensuring consistent branding across every element.",
    },
    {
      q: "How much does exhibition stand design cost in Tanzania?",
      a: "Exhibition stand costs vary by size, complexity, and materials. A standard 3x3m modular shell-scheme upgrade starts at TZS 850,000. A 6x3m corner stand with custom graphics ranges from TZS 1,500,000 to TZS 3,000,000. Custom island stands and large-format booths (50-100+ sqm) are quoted based on design specifications, materials, and additional features like LED screens, demo counters, and storage. Contact our team for a detailed quotation tailored to your Sabasaba exhibition requirements.",
    },
    {
      q: "How far in advance should I order Sabasaba exhibition materials?",
      a: "We recommend beginning your Sabasaba preparation 4-6 weeks before the event. Exhibition stands typically require 2-6 weeks for design approval, fabrication, and finishing. Custom printed materials (banners, brochures, flyers, signage) need 1-2 weeks. Promotional products sourced internationally may require 2-3 weeks. Early ordering ensures production capacity, preferred installation slots, and ample time for design revisions. Last-minute orders can be accommodated for standard printed items through our same-day and express services.",
    },
    {
      q: "Do you deliver and install exhibition materials in Dar es Salaam?",
      a: "Yes. We offer complimentary delivery for exhibition materials within Dar es Salaam. Our installation team provides on-site setup at the Mwalimu J.K. Nyerere Grounds including exhibition stand assembly, backdrop installation, banner mounting, and signage placement. We coordinate with event organisers to ensure compliance with venue regulations and safety standards. For clients outside Dar es Salaam, we arrange nationwide delivery to all major Tanzanian cities.",
    },
    {
      q: "Can you customise promotional products with our brand?",
      a: "Yes. We specialise in full-service promotional product customisation. Options include screen printing for T-shirts and apparel, embroidery for caps, polo shirts, and uniforms, sublimation for mugs, bottles, and textiles, laser engraving for pens, USB drives, and corporate gifts, and pad printing for smaller items. Our design team ensures your logo is reproduced accurately across all merchandise with consistent colours and positioning.",
    },
    {
      q: "What banners work best for outdoor exhibitions in Tanzania?",
      a: "For outdoor exhibition use, we recommend heavy-duty PVC banners (minimum 440gsm) with reinforced edges and eyelets. These withstand sun exposure, light rain, and wind common during Dar es Salaam's July weather. Teardrop banners and feather flags are excellent for high-visibility outdoor placement. For booth interiors, roll-up banners and fabric tension backdrops provide a premium finish. All materials are UV-resistant and colour-fast for the duration of the exhibition.",
    },
    {
      q: "Do you offer exhibition stand rental or lease options?",
      a: "Yes. For short-term events like Sabasaba, we offer rental options for modular pop-up displays, portable exhibition stands, and promotional tables. Rental includes delivery, setup, and breakdown at the end of the event. This is a cost-effective solution for first-time exhibitors or companies testing new markets. Custom-built stands can be stored at our facility between events for re-use, reducing long-term costs.",
    },
    {
      q: "What printing services are most in demand during Sabasaba?",
      a: "During Sabasaba, the most requested printing services are banner printing (PVC banners and roll-ups), brochure and flyer printing for distribution at booths, business card printing for networking, promotional T-shirt and cap printing, corporate gift customisation, large-format backdrop printing, and signboard fabrication. Many exhibitors also order conference materials like branded folders, notepads, and delegate kits.",
    },
    {
      q: "How can I get a quote for my Sabasaba exhibition needs?",
      a: "Request a comprehensive quote through our online quote form, WhatsApp (0716 002 790), or by calling our sales team. Provide your exhibition stand size requirements, list of printed materials and quantities, promotional product needs, and desired delivery or installation timeline. We respond within 2 hours during business hours with a consolidated quotation covering all items.",
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-packard-900/40 via-packard-950 to-packard-950" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-promo-500/15 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-packard-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-promo-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-silver-500 mb-5 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-promo-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-promo-400 font-semibold">Sabasaba Exhibition</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4 max-w-4xl">
            Sabasaba Exhibition Branding &amp; Printing Services
          </h1>

          <p className="text-silver-300 text-lg leading-relaxed max-w-3xl mb-6">
            Complete branding and printing solutions for the Dar es Salaam International Trade Fair.
            Exhibition stands, banners, promotional products, corporate gifts, and signage —
            everything you need to make an impact at Sabasaba. Based in Dar es Salaam, serving Tanzania.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Dar es Salaam International Trade Fair", "Exhibition Stands Tanzania", "Trade Fair Branding", "Promotional Products Tanzania", "Nationwide Delivery"].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 text-xs font-semibold">{b}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "sabasaba_hero" }); }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400"
            >
              Get Your Sabasaba Branding Ready
            </button>
            <Link
              href="/quote"
              onClick={() => trackEvent("quote_click", { label: "sabasaba_hero_quote" })}
              className="px-7 py-3.5 rounded-full bg-packard-500/20 border border-packard-500/30 text-packard-300 font-semibold text-sm hover:bg-packard-500/30"
            >
              Request Exhibition Branding Quote
            </Link>
            <a
              href="https://wa.me/+255716002790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { label: "sabasaba_hero" })}
              className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Sabasaba Essentials</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Everything You Need for Sabasaba</h2>
              <p className="text-silver-400 text-sm leading-relaxed mb-5">
                The Dar es Salaam International Trade Fair (Sabasaba) is Tanzania's premier business event. Every July, companies from across East Africa converge at the Mwalimu J.K. Nyerere Grounds to showcase their products, network with industry leaders, and generate new business opportunities. Your exhibition presence directly impacts how potential clients perceive your brand — make it count with professional, cohesive branding from Packard Promo.
              </p>
              <p className="text-silver-400 text-sm leading-relaxed mb-5">
                We provide end-to-end Sabasaba exhibition services including stand design and fabrication, banner printing, promotional merchandise, corporate gifts, signage, and event collateral. Based in Dar es Salaam, we understand the local exhibition landscape and deliver materials that stand out in Tanzania's competitive trade fair environment.
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "sabasaba_essentials" }); }} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-xs">Order Sabasaba Promotional Materials</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Exhibition Stands", desc: "Custom and modular designs" },
                { label: "Banners & Signage", desc: "PVC, roll-up, teardrop, backdrops" },
                { label: "Promo Products", desc: "T-shirts, caps, corporate gifts" },
                { label: "Printing Services", desc: "Brochures, flyers, business cards" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30">
                  <span className="text-white font-bold text-sm block">{item.label}</span>
                  <span className="text-silver-500 text-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Sabasaba Products</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Recommended Exhibition Products</h2>
            <p className="text-silver-400 text-sm mt-3 max-w-2xl">
              Every product your Sabasaba booth needs — from the physical structure to the printed materials and giveaways that drive engagement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p) => (
              <Link key={p.name} href={p.href} onClick={() => trackEvent("product_click", { label: `sabasaba_${p.name}` })} className="glass-card rounded-2xl p-5 hover:border-promo-500/30 block group">
                <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{p.name}</h3>
                <p className="text-silver-500 text-xs mt-1">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/products" className="inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 text-silver-300 font-semibold text-sm hover:bg-white/10">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Exhibition Stands</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Custom Exhibition Stand Design &amp; Build</h2>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                Your exhibition stand is the physical embodiment of your brand at Sabasaba. Our in-house design team creates photorealistic 3D renders and detailed CAD drawings, ensuring your stand captures attention and communicates your message effectively. From compact 3x3m shell-scheme upgrades to expansive 100+ sqm island stands, we design and fabricate structures that align with your brand identity and exhibition goals.
              </p>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                We use modular aluminium extrusion systems, custom wood and steel fabrication, and tension fabric technology to create stands that are both visually striking and structurally sound. Every stand includes full graphic production, on-site installation, and optional post-event storage for re-use at future exhibitions across Tanzania.
              </p>
              <Link href="/products/exhibition-stands" className="inline-flex px-5 py-2.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 font-semibold text-sm hover:bg-promo-500/20">
                Explore Exhibition Stands →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { stand: "3x3m Shell Scheme", price: "From TZS 850,000" },
                { stand: "6x3m Corner Stand", price: "From TZS 1,500,000" },
                { stand: "Custom Island", price: "Project-based" },
                { stand: "Pop-Up Display", price: "From TZS 145,000" },
              ].map((item) => (
                <div key={item.stand} className="glass-card rounded-xl p-4 text-center">
                  <span className="text-white font-bold text-sm block">{item.stand}</span>
                  <span className="text-promo-400 text-xs font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Get Ready for Sabasaba</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your Complete Sabasaba Branding Checklist</h2>
            <p className="text-silver-400 text-sm max-w-2xl mx-auto">
              Tick every box for a successful Dar es Salaam International Trade Fair exhibition. Let us handle production while you focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-packard-500/20 text-packard-300 font-bold flex items-center justify-center mb-3 text-sm">1</div>
              <h3 className="text-white font-bold text-base mb-2">Booth Structure</h3>
              <ul className="space-y-1.5">
                {["Exhibition stand or booth", "Pop-up display", "Promotional table", "Registration counter", "Branded backdrop"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-silver-400 text-xs"><span className="w-1 h-1 rounded-full bg-promo-500 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-promo-500/20 text-promo-300 font-bold flex items-center justify-center mb-3 text-sm">2</div>
              <h3 className="text-white font-bold text-base mb-2">Printed Materials</h3>
              <ul className="space-y-1.5">
                {["PVC banners", "Roll-up banners", "Teardrop flags", "Brochures & flyers", "Business cards"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-silver-400 text-xs"><span className="w-1 h-1 rounded-full bg-promo-500 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-packard-500/20 text-packard-300 font-bold flex items-center justify-center mb-3 text-sm">3</div>
              <h3 className="text-white font-bold text-base mb-2">Promotional &amp; Signage</h3>
              <ul className="space-y-1.5">
                {["Branded T-shirts & caps", "Corporate gifts", "Signboards", "Event signage", "Conference materials"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-silver-400 text-xs"><span className="w-1 h-1 rounded-full bg-promo-500 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "sabasaba_checklist" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">
              Get Your Sabasaba Branding Ready
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-3">
              {[
                { name: "Banner Printing Dar es Salaam", href: "/products/pvc-banners" },
                { name: "Roll-up Banners Tanzania", href: "/products/rollup-banners" },
                { name: "Teardrop Banners", href: "/products/teardrop-banners" },
                { name: "Event Backdrops", href: "/products/backdrops" },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 group">
                  <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Banners & Signage</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">High-Impact Banners for Trade Fair Success</h2>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                At a busy exhibition like Sabasaba, your banners are your first impression. Heavy-duty PVC banners provide durable outdoor visibility, while roll-up banners offer portable, professional indoor displays. Teardrop banners and feather flags catch attention from across the exhibition floor with their dynamic movement. Backdrop banners create a photo-worthy branded wall that visitors naturally gravitate toward for pictures, extending your brand reach through social media.
              </p>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                All banners are printed on high-quality materials with UV-resistant inks suitable for Dar es Salaam's climate. We offer multiple sizes, finishes (matte, gloss, satin), and mounting options. Installation at the Mwalimu J.K. Nyerere Grounds is available for all banner types.
              </p>
              <Link href="/services/large-format-printing" className="inline-flex px-5 py-2.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 font-semibold text-sm hover:bg-promo-500/20">
                Explore Banner Printing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Promotional Products</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Branded Merchandise That Gets Noticed</h2>
            <p className="text-silver-400 text-sm max-w-2xl mx-auto">
              Promotional products turn visitors into leads. Custom T-shirts, caps, corporate gifts, and branded merchandise keep your brand visible long after Sabasaba ends.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: "T-Shirts", href: "/products/tshirts", price: "From TZS 8,500/25" },
              { name: "Caps", href: "/products/caps", price: "From TZS 6,500/25" },
              { name: "Corporate Gift Sets", href: "/products/gift-sets", price: "From TZS 18,000/25" },
              { name: "Branded Mugs", href: "/products/mugs", price: "From TZS 4,500/25" },
              { name: "Power Banks", href: "/products/power-banks", price: "From TZS 18,000/25" },
              { name: "Branded Pens", href: "/products/pens", price: "From TZS 950/100" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="glass-card rounded-2xl p-5 text-center hover:border-promo-500/30 group">
                <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{item.name}</h3>
                <p className="text-promo-400 text-xs font-semibold mt-1">{item.price}</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/services/promotional-products" className="inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 text-silver-300 font-semibold text-sm hover:bg-white/10">
              View All Promotional Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Printing Services</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Exhibition Printing for Sabasaba</h2>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                From brochures and flyers that educate visitors about your products, to business cards that facilitate post-event follow-up, printed materials are essential for trade fair success. We offer comprehensive printing services including digital printing for short runs and offset printing for high-volume materials. Our HP Indigo and Konica Minolta presses deliver exceptional colour accuracy and consistency across all printed items.
              </p>
              <p className="text-silver-400 text-sm leading-relaxed mb-4">
                Exhibition-specific printing needs include product catalogues, company profiles, promotional flyers, branded folders, event programmes, and welcome kits. We also produce signage materials such as booth number signs, directional signage, and information boards. All materials can be delivered directly to the Mwalimu J.K. Nyerere Grounds ahead of the exhibition.
              </p>
              <Link href="/services/digital-printing" className="inline-flex px-5 py-2.5 rounded-full bg-promo-500/10 border border-promo-500/20 text-promo-300 font-semibold text-sm hover:bg-promo-500/20">
                Explore Printing Services →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Business Cards", href: "/products/business-cards" },
                { name: "Brochures", href: "/products/brochures" },
                { name: "Flyers", href: "/products/flyers" },
                { name: "Conference Folders", href: "/products/conference-folders" },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 group">
                  <span className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-promo-500/20 via-packard-900 to-packard-900" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Need Sabasaba Branding Urgently?</h2>
              <p className="text-silver-300 text-lg mb-7">Call or WhatsApp us for express exhibition branding services in Dar es Salaam. Quick turnaround available.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "sabasaba_urgent" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm">Request Quote</button>
                <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "sabasaba_urgent" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">WhatsApp Now</a>
                <a href="tel:+255716002790" onClick={() => trackEvent("phone_click", { label: "sabasaba_urgent" })} className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">Call 0716 002 790</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Complete Exhibition Services in Tanzania</h2>
            <p className="text-silver-400 text-sm max-w-2xl mx-auto">
              From design to delivery and installation — we manage every aspect of your Sabasaba exhibition branding.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="glass-card rounded-2xl p-5 hover:border-promo-500/30 group">
                <h3 className="text-white font-bold text-sm group-hover:text-promo-300 transition-colors">{s.name}</h3>
                <p className="text-silver-500 text-xs mt-1">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Why Choose Packard Promo</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Exhibitors Trust Us for Sabasaba</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "14+ Years Experience", desc: "Serving Tanzanian businesses since 2010 with printing, signage, and exhibition branding." },
              { title: "End-to-End Service", desc: "Design, production, delivery, and on-site installation — one partner, no coordination headaches." },
              { title: "Nationwide Coverage", desc: "Based in Dar es Salaam with delivery and installation across all major Tanzanian cities." },
              { title: "Fast Turnaround", desc: "Express services available for last-minute exhibition needs. Same-day printing for selected items." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-silver-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-silver-400 text-sm max-w-2xl mx-auto mb-4">
              Based in Dar es Salaam, Tanzania, we serve exhibitors at the Dar es Salaam International Trade Fair (Sabasaba) and other major exhibitions across East Africa. Our exhibition solutions help businesses make a powerful impact at trade fairs, conferences, and corporate events.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Knowledge Center</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Sabasaba &amp; Exhibition Guides</h2>
            <p className="text-silver-400 text-sm">Expert advice to help you prepare for a successful trade fair exhibition.</p>
          </div>
          <div className="space-y-3">
            {[
              { title: "How to Prepare for Sabasaba Exhibition", href: "/knowledge/sabasaba-exhibition-guide" },
              { title: "Exhibition Stand Design Guide Tanzania", href: "/knowledge/exhibition-stand-design-guide" },
              { title: "Best Promotional Products for Trade Shows", href: "/knowledge/best-promotional-products-trade-shows" },
              { title: "How to Maximize ROI from Your Exhibition Stand", href: "/knowledge/exhibition-stand-roi" },
              { title: "Exhibition Banner Sizes Guide", href: "/knowledge/exhibition-banner-sizes-guide" },
            ].map((article) => (
              <Link key={article.title} href={article.href} className="glass-card rounded-xl p-4 hover:border-promo-500/30 block group">
                <span className="text-white font-semibold text-sm group-hover:text-promo-300 transition-colors">{article.title}</span>
                <svg className="w-3.5 h-3.5 text-silver-500 inline-block ml-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/knowledge" className="inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 text-silver-300 font-semibold text-sm hover:bg-white/10">View All Guides →</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sabasaba Exhibition FAQ</h2>
            <p className="text-silver-400 text-sm mt-2">Everything you need to know about exhibition branding for the Dar es Salaam International Trade Fair.</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready for Sabasaba?</h2>
          <p className="text-silver-400 text-sm mb-6 max-w-xl mx-auto">
            Get your complete Sabasaba exhibition branding package. Free quotes, fast turnaround, and professional installation at the Dar es Salaam International Trade Fair.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => { setQuoteOpen(true); trackEvent("quote_click", { label: "sabasaba_bottom" }); }} className="px-7 py-3.5 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-semibold text-sm hover:from-promo-400">Get Your Sabasaba Branding Ready</button>
            <Link href="/quote" onClick={() => trackEvent("quote_click", { label: "sabasaba_bottom_quote" })} className="px-7 py-3.5 rounded-full bg-packard-500/20 border border-packard-500/30 text-packard-300 font-semibold text-sm hover:bg-packard-500/30">Request Exhibition Branding Quote</Link>
            <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { label: "sabasaba_bottom" })} className="px-7 py-3.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm hover:bg-green-500/30">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-packard-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="text-promo-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Related Services</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">More Exhibition Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/services/exhibition-events" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Exhibition &amp; Events</span>
            </Link>
            <Link href="/services/large-format-printing/dar-es-salaam" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Large Format Printing Dar es Salaam</span>
            </Link>
            <Link href="/services/promotional-products" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Promotional Products</span>
            </Link>
            <Link href="/services/signage-solutions/dar-es-salaam" className="glass-card rounded-xl p-4 text-center hover:border-promo-500/30 block">
              <span className="text-white font-semibold text-sm">Signage Dar es Salaam</span>
            </Link>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-packard-950/80 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-lg w-full glass-card rounded-2xl p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-silver-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Get Sabasaba Exhibition Quote</h3>
            <p className="text-silver-400 text-sm mb-5">Tell us what you need for Sabasaba — we'll prepare a comprehensive quote.</p>
            <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
                <input required type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              </div>
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                <option className="bg-packard-900">I need...</option>
                <option className="bg-packard-900">Exhibition Stand</option>
                <option className="bg-packard-900">Banners & Signage</option>
                <option className="bg-packard-900">Promotional Products</option>
                <option className="bg-packard-900">Printed Materials</option>
                <option className="bg-packard-900">Everything (Full Package)</option>
                <option className="bg-packard-900">Other / Not Sure</option>
              </select>
              <textarea placeholder="Tell us about your Sabasaba exhibition requirements..." rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm">Send Inquiry →</button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
