"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    from: "bot",
    text: "Hi! I'm the Packard Promo AI assistant. I can help you with quotes, product recommendations, lead times, and more. What are you looking to print or brand?",
  },
];

const sampleReplies: { keywords: string[]; reply: string }[] = [
  { keywords: ["business card", "business cards", "visiting card"], reply: "Great! We print premium business cards starting at TZS 18,000 for 100 cards. Standard turnaround is 24 hours. Want a quote? Visit /quote or tell me quantity and finish (matte/gloss/foil)." },
  { keywords: ["banner", "pvc"], reply: "PVC banners from TZS 12,000 each. Heavy-duty 440gsm, hemmed with eyelets. Same-day to 3-day turnaround. For roll-ups we start at TZS 55,000." },
  { keywords: ["tshirt", "t-shirt", "shirt", "polo"], reply: "Branded T-shirts from TZS 8,500 each (25+ units). Screen print, embroidery, or DTF. Polos from TZS 14,000. Cotton, poly-cotton, or performance fabrics." },
  { keywords: ["sign", "signage", "signboard"], reply: "Shop signboards from TZS 180,000. ACP, acrylic, illuminated, 3D letters. Includes free site survey and design within Dar. Want to book a survey?" },
  { keywords: ["vehicle", "car", "van", "truck", "wrap", "branding"], reply: "Vehicle branding from TZS 350,000 (car) and TZS 1.2M+ (truck). Premium 3M vinyl, 5–7 year outdoor durability. We come to you for fleets of 5+." },
  { keywords: ["packaging", "box", "carton"], reply: "Custom packaging from TZS 250/unit (1,000+ qty). Food, cosmetic, pharmaceutical, retail — all FDA/TBS compliant options. Need a dieline? Our design team can create it." },
  { keywords: ["mug", "cap", "pen", "diary", "bottle", "promo", "merch", "merchandise"], reply: "Promotional merchandise — mugs (TZS 4,500), caps (TZS 6,500), pens (TZS 950), diaries (TZS 6,500), bottles (TZS 5,500). MOQ 25–100 units. Bulk discounts available." },
  { keywords: ["wedding", "event", "church", "school"], reply: "We handle wedding/event printing, school branding, and church materials. Programs, banners, branded gifts, signage. Tell me the event type and I'll recommend a package." },
  { keywords: ["price", "cost", "how much", "quote"], reply: "For instant estimates, try our AI Quote Generator at /quote. Or share: product + quantity + size + delivery city, and I'll give you a ballpark." },
  { keywords: ["delivery", "dar", "zanzibar", "arusha", "mwanza"], reply: "Same-day in Dar es Salaam CBD. 24–48h to suburbs. 2–3 days to Zanzibar, Arusha, Dodoma, Mwanza. Free delivery for orders above TZS 500,000 in Dar." },
  { keywords: ["hello", "hi", "hey", "mambo", "habari"], reply: "Hello! 👋 How can I help with your printing, signage or branding project today?" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const lower = text.toLowerCase();
      const match = sampleReplies.find((r) => r.keywords.some((k) => lower.includes(k)));
      const botReply: Message = {
        id: Date.now() + 1,
        from: "bot",
        text: match
          ? match.reply
          : "Thanks! I can help with printing, signage, packaging, vehicle branding and promo products. Try /quote for instant estimates, or share what you need (product, quantity, city) and I'll guide you.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 700);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 md:bottom-6 right-24 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-packard-500 to-packard-600 shadow-lg shadow-packard-500/30 flex items-center justify-center text-white hover:shadow-packard-500/50 transition-shadow duration-300"
        style={{ right: "calc(1.5rem + 80px)" }}
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </motion.svg>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-promo-500 border-2 border-packard-950 animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-44 right-6 md:bottom-28 z-40 w-[calc(100vw-3rem)] max-w-sm h-[500px] max-h-[70vh] rounded-2xl bg-packard-900/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-packard-500/20 to-promo-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-promo-500 to-packard-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Packard Promo AI</div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · typically replies instantly
                  </div>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-promo-500/20 text-white border border-promo-500/30"
                        : "bg-white/5 text-silver-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-white/5">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about printing, signs, prices..."
                  className="flex-1 px-3.5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-promo-500 to-promo-400 text-white flex items-center justify-center hover:from-promo-400 transition-colors"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
              <div className="text-[9px] text-silver-600 text-center mt-2">
                Powered by Packard Promo AI · Responses are indicative
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
