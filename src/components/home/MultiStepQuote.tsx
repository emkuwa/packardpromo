"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Your Details", subtitle: "Tell us who you are" },
  { id: 2, title: "Project Specs", subtitle: "What you need" },
  { id: 3, title: "Project Details", subtitle: "Tell us more" },
];

export default function MultiStepQuote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    industry: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const updateForm = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canProceed = () => {
    if (step === 1) return form.firstName && form.lastName && form.email && form.phone;
    if (step === 2) return form.product && form.industry;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding relative" id="multi-quote">
        <div className="absolute inset-0 bg-gradient-to-br from-packard-900/30 via-packard-950 to-packard-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-10 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-promo-500/20 border border-promo-500/30 flex items-center justify-center mb-5">
              <svg className="w-10 h-10 text-promo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Quote Request Sent!</h2>
            <p className="text-silver-300 text-lg mb-7">Our team will respond within 2 hours during business hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/+255716002790" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm hover:from-green-500">
                💬 Chat on WhatsApp Now
              </a>
              <a href="tel:+255716002790" className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20">
                Call 0716 002 790
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding relative" id="multi-quote">
      <div className="absolute inset-0 bg-gradient-to-br from-packard-900/30 via-packard-950 to-packard-950" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <div className="text-promo-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">Get Your Free Quote</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Tell Us About Your Project</h2>
          <p className="text-silver-400">3 simple steps. Less than 60 seconds.</p>
        </motion.div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            {steps.map((s) => (
              <div key={s.id} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                    step >= s.id
                      ? "bg-gradient-to-br from-promo-500 to-promo-400 text-white shadow-lg shadow-promo-500/30"
                      : "bg-white/5 border border-white/10 text-silver-500"
                  )}>
                    {step > s.id ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s.id}
                  </div>
                  <div className="text-center mt-2 hidden sm:block">
                    <div className={cn("text-xs font-semibold", step >= s.id ? "text-white" : "text-silver-500")}>
                      {s.title}
                    </div>
                    <div className="text-[10px] text-silver-500">{s.subtitle}</div>
                  </div>
                </div>
                {s.id < 3 && <div className={cn("flex-1 h-px mx-2", step > s.id ? "bg-promo-500" : "bg-white/10")} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">First Name *</label>
                      <input required value={form.firstName} onChange={(e) => updateForm("firstName", e.target.value)} type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="First name" />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Last Name *</label>
                      <input required value={form.lastName} onChange={(e) => updateForm("lastName", e.target.value)} type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="Last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Email *</label>
                    <input required value={form.email} onChange={(e) => updateForm("email", e.target.value)} type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="you@company.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Phone / WhatsApp *</label>
                      <input required value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="+255 ..." />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Company (Optional)</label>
                      <input value={form.company} onChange={(e) => updateForm("company", e.target.value)} type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50" placeholder="Company" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">What do you need? *</label>
                    <select required value={form.product} onChange={(e) => updateForm("product", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                      <option className="bg-packard-900">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title} className="bg-packard-900">{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Your Industry *</label>
                    <select required value={form.industry} onChange={(e) => updateForm("industry", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                      <option className="bg-packard-900">Select your industry</option>
                      {industries.map((i) => (
                        <option key={i.id} value={i.name} className="bg-packard-900">{i.name}</option>
                      ))}
                      <option className="bg-packard-900">Other</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Budget Range</label>
                      <select value={form.budget} onChange={(e) => updateForm("budget", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                        <option className="bg-packard-900">Select budget</option>
                        <option className="bg-packard-900">Under TZS 500K</option>
                        <option className="bg-packard-900">TZS 500K - 2M</option>
                        <option className="bg-packard-900">TZS 2M - 10M</option>
                        <option className="bg-packard-900">TZS 10M - 50M</option>
                        <option className="bg-packard-900">TZS 50M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-1.5">Timeline</label>
                      <select value={form.timeline} onChange={(e) => updateForm("timeline", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-promo-500/50">
                        <option className="bg-packard-900">Select timeline</option>
                        <option className="bg-packard-900">Urgent (24-48h)</option>
                        <option className="bg-packard-900">1 week</option>
                        <option className="bg-packard-900">2-4 weeks</option>
                        <option className="bg-packard-900">1-3 months</option>
                        <option className="bg-packard-900">Flexible</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div>
                    <label className="block text-white text-xs font-semibold mb-1.5">Project Details</label>
                    <textarea
                      value={form.details}
                      onChange={(e) => updateForm("details", e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-promo-500/50 resize-none"
                      placeholder="Tell us about your project — quantity, sizes, materials, deadline, any specific requirements..."
                    />
                  </div>
                  <div className="glass-card rounded-xl p-4 text-xs text-silver-400">
                    <div className="text-white font-semibold mb-1">What happens next?</div>
                    <ul className="space-y-1">
                      <li>✓ Your request is sent to our sales team</li>
                      <li>✓ We respond within 2 hours during business hours</li>
                      <li>✓ Formal quote with itemized pricing and lead times</li>
                      <li>✓ Free design consultation for first-time clients</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-7 flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10"
                >
                  ← Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-promo-500 to-promo-400 text-white font-bold text-sm hover:from-promo-400 shadow-lg shadow-promo-500/30 transition-all"
                >
                  Send Quote Request →
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
