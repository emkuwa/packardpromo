"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const venueTypes = [
  { id: "shop", label: "Shop / Retail Store", icon: "🏪" },
  { id: "hotel", label: "Hotel / Resort", icon: "🏨" },
  { id: "office", label: "Office / Corporate", icon: "🏢" },
  { id: "school", label: "School / University", icon: "🎓" },
  { id: "hospital", label: "Hospital / Clinic", icon: "🏥" },
  { id: "restaurant", label: "Restaurant / Cafe", icon: "🍽️" },
  { id: "warehouse", label: "Warehouse / Industrial", icon: "🏭" },
  { id: "bank", label: "Bank / Financial", icon: "🏦" },
];

const sizes = [
  { id: "small", label: "Small (< 200 sqm)", min: 50, max: 200, multiplier: 1 },
  { id: "medium", label: "Medium (200 – 1,000 sqm)", min: 200, max: 1000, multiplier: 2.5 },
  { id: "large", label: "Large (1,000 – 5,000 sqm)", min: 1000, max: 5000, multiplier: 5 },
  { id: "xl", label: "Campus / Multi-site (5,000+ sqm)", min: 5000, max: 50000, multiplier: 12 },
];

const goals = [
  { id: "wayfinding", label: "Wayfinding / Navigation" },
  { id: "branding", label: "Branding & Identity" },
  { id: "regulatory", label: "Regulatory / Safety" },
  { id: "promo", label: "Promotional / Marketing" },
];

interface Package {
  exterior: string[];
  interior: string[];
  wayfinding: string[];
  regulatory: string[];
  promo: string[];
  extras: string[];
  budget: string;
  leadTime: string;
  notes: string;
  whatsappText: string;
}

function planPackage(venue: string, size: string, primaryGoal: string, secondary: string[]): Package {
  const s = sizes.find((x) => x.id === size)!;
  const baseMultiplier = s.multiplier;

  const base: Package = {
    exterior: [],
    interior: [],
    wayfinding: [],
    regulatory: [],
    promo: [],
    extras: [],
    budget: "",
    leadTime: "2–4 weeks for installation",
    notes: "",
    whatsappText: `Hi Packard Promo, I need a signage package. Venue: ${venueTypes.find((v) => v.id === venue)?.label}, Size: ${s.label}. Please share a full quote.`,
  };

  if (venue === "shop") {
    base.exterior = ["Illuminated shop signboard (ACP + LED)", "Window graphics / perforated vinyl", "A-frame pavement sign"];
    base.interior = ["Reception / counter logo", "Product category wall signs", "Promotional posters / menu boards", "Lightboxes for offers"];
    base.wayfinding = ["Entrance / exit signs", "Till / counter directional", "Fitting room signs"];
    base.regulatory = ["Trading license display", "Health & safety notices", "Payment methods signage"];
    base.promo = ["Seasonal campaign posters", "Social media QR signs", "Promo counter cards"];
    base.extras = ["Floor graphics", "Hanging ceiling signs"];
    base.notes = "Retail signage prioritizes visibility from the street, in-window marketing, and clear navigation. We recommend 70% of the budget on the illuminated signboard + window graphics — that's what gets customers in the door.";
  } else if (venue === "hotel") {
    base.exterior = ["Tower / building signage (illuminated)", "Driveway entrance signage", "Directional totem / monolith", "Bilingual (English + Swahili)"];
    base.interior = ["Reception backwall logo", "Restaurant / bar signage", "Spa / gym / pool signs", "Conference / event signage", "Lift lobby directories"];
    base.wayfinding = ["Floor directories", "Room directional signs", "Stair / lift identification", "Bilingual room numbers"];
    base.regulatory = ["Fire exit signs", "Emergency assembly point", "No smoking signs", "Pool depth markers"];
    base.promo = ["Restaurant menu boards", "Spa promo displays", "Activity schedule boards", "Local attractions displays"];
    base.extras = ["Branded do-not-disturb signs", "Key card holders", "Welcome amenities cards"];
    base.notes = "Hotel signage must balance luxury aesthetic with clear navigation. We use premium materials (brushed steel, frosted acrylic) and bilingual designs throughout. Free site survey included for hotel projects.";
  } else if (venue === "office") {
    base.exterior = ["Building directory / monolith", "Reception exterior branding", "Tenant signage (if multi-tenant)"];
    base.interior = ["Reception 3D logo wall", "Boardroom name plates", "Office / floor directories", "Department identification", "Reception desk branding"];
    base.wayfinding = ["Floor directories", "Stair / lift identification", "Restroom signs", "Emergency exits"];
    base.regulatory = ["Fire safety plans", "Emergency exits", "First aid stations", "No smoking", "CCTV notices"];
    base.promo = ["Company values wall", "Achievement wall", "Brand wall / culture wall", "Awards display"];
    base.extras = ["Glass manifestation (privacy)", "Acoustic wall art", "Branded meeting room signs"];
    base.notes = "Office signage focuses on brand culture, navigation and regulatory compliance. We recommend a reception 3D logo wall as the anchor piece — it's the first thing clients see and sets the tone for the whole organization.";
  } else if (venue === "school") {
    base.exterior = ["School name + motto signboard", "Directional signage at gates", "Sport field / court signage", "Notice boards at entrance"];
    base.interior = ["Reception / admin logo", "Department / faculty signs", "Classroom numbering", "Library / lab signage", "Notice boards for each block"];
    base.wayfinding = ["Block / building identification", "Directional to key areas", "Map boards at junctions", "Stair / floor signs"];
    base.regulatory = ["Fire exits", "Assembly points", "First aid", "No smoking", "Lab safety notices", "CCTV notices"];
    base.promo = ["Notice boards", "Achievement walls", "Event banners", "Alumni walls", "Motto / vision signage"];
    base.extras = ["Motivational wall quotes", "Sports trophies display", "Photo gallery walls"];
    base.notes = "School signage balances wayfinding, regulation, inspiration and pride. We work with primary, secondary and tertiary institutions. Free design service included. We can also brand uniforms, books, and stationery.";
  } else if (venue === "hospital") {
    base.exterior = ["Hospital name + emergency signage", "Ambulance bay signage", "Drop-off directional", "Parking signage"];
    base.interior = ["Reception / triage", "Department / wing signs", "Doctor's office / consultation room signs", "Ward identification", "Pharmacy / lab signs"];
    base.wayfinding = ["Color-coded department signs", "Lift / stair identification", "Bilingual (English + Swahili)", "Wheelchair-accessible route signs"];
    base.regulatory = ["Fire exits", "Isolation / infection control", "No smoking", "MRI / X-ray safety", "Sharps disposal", "Hazardous materials"];
    base.promo = ["Health campaign posters", "Vaccination drives", "Screening notices", "Donor recognition walls"];
    base.extras = ["Wayfinding floor decals", "Touchless sanitizer stations", "Privacy screens"];
    base.notes = "Hospital signage prioritizes clear navigation, regulatory compliance, and infection control. Bilingual design and accessibility (ADA / wheelchair) are essential. We work with public and private hospitals, clinics and diagnostic centers.";
  } else if (venue === "restaurant") {
    base.exterior = ["Illuminated shop sign", "Menu board / lightbox", "A-frame / chalkboard sign", "Window decals / perforated vinyl"];
    base.interior = ["Wall menu boards", "Table tents / table cards", "Restroom signs", "Counter / till signage", "Kitchen / staff-only signs"];
    base.wayfinding = ["Entrance / exit", "Restroom directional", "Counter directional", "Queue management"];
    base.regulatory = ["Health & safety notices", "Fire exits", "Food allergy notices", "No smoking"];
    base.promo = ["Daily specials", "Social media QR codes", "Loyalty program signs", "Event / theme night posters"];
    base.extras = ["Branded coasters", "Napkin holders", "Branded packaging for takeaway"];
    base.notes = "Restaurant signage should be inviting, on-brand, and easy to update. We recommend modular lightbox menu boards so you can swap daily specials. Branded packaging for takeaway is a great extension of the signage system.";
  } else if (venue === "warehouse") {
    base.exterior = ["Company name + address monolith", "Loading bay signage", "Truck directional", "Security signage"];
    base.interior = ["Aisle / rack identification", "Zone identification (receiving / storage / dispatch)", "Safety stations", "First aid stations", "Equipment labels"];
    base.wayfinding = ["Directional arrows (floor decals)", "Loading bay numbers", "Picking zone identification", "Vehicle / pedestrian segregation"];
    base.regulatory = ["Forklift / pedestrian zones", "PPE requirements", "Hazardous materials", "Height restrictions", "Speed limits", "No smoking"];
    base.promo = ["Safety message boards", "Quality KPI displays", "5S / lean manufacturing signage"];
    base.extras = ["Floor markings (paint or decal)", "Pallet position labels", "Racking load signs"];
    base.notes = "Industrial signage is functional and durable. We use heavy-duty materials (aluminum composite, retroreflective vinyl, heavy-duty floor decals) that withstand forklift traffic and outdoor exposure.";
  } else if (venue === "bank") {
    base.exterior = ["Illuminated branch signboard", "ATM signage", "Drive-through signage", "Pylon / monolith (campus)"];
    base.interior = ["Reception logo wall", "Teller counter signage", "Queue management system", "Service desk signs", "Back office identification"];
    base.wayfinding = ["Service direction", "Restroom", "Lift / stair", "ATM location", "Vault / safe room identification"];
    base.regulatory = ["CCTV notice", "No smoking", "Armed guard notice", "Fire exits", "First aid", "Anti-money laundering notice"];
    base.promo = ["Product posters (loans, savings, mortgages)", "Campaign banners", "Digital screen content", "Forex rate boards"];
    base.extras = ["Branded pens and holders", "Counter mats", "Branded water bottles", "Branded folders"];
    base.notes = "Bank signage must project trust, security and professionalism. The illuminated signboard is critical. We also recommend branded merchandise (pens, folders, water bottles) for branch giveaways.";
  }

  const baseCost = (venue === "hotel" ? 8000000 : venue === "bank" ? 6500000 : venue === "hospital" ? 5500000 : venue === "school" ? 4000000 : venue === "office" ? 3500000 : venue === "warehouse" ? 3000000 : venue === "restaurant" ? 2500000 : 2000000);
  const totalLow = Math.round(baseCost * baseMultiplier * 0.85);
  const totalHigh = Math.round(baseCost * baseMultiplier * 1.4);
  base.budget = `TZS ${totalLow.toLocaleString()} – TZS ${totalHigh.toLocaleString()}`;

  return base;
}

export default function SignagePlannerPage() {
  const [step, setStep] = useState(1);
  const [venue, setVenue] = useState("");
  const [size, setSize] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [secondary, setSecondary] = useState<string[]>([]);
  const [pkg, setPkg] = useState<Package | null>(null);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else setPkg(planPackage(venue, size, primaryGoal, secondary));
  };

  const reset = () => {
    setStep(1); setVenue(""); setSize(""); setPrimaryGoal(""); setSecondary([]); setPkg(null);
  };

  const toggleSecondary = (id: string) => {
    setSecondary((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-packard-900/40 via-packard-950 to-packard-950" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-rose-500/60" />
            <span className="text-rose-400 text-xs uppercase tracking-[0.25em] font-semibold">AI Signage Planner</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
            Plan Your <span className="text-gradient" style={{ backgroundImage: "linear-gradient(135deg, #ff97ab 0%, #f23a5e 50%, #a91336 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Complete Signage</span> Package in 4 Steps
          </h1>
          <p className="text-silver-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Tell us your venue type, size, and primary goal. We'll recommend a complete signage system with budget and lead time.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!pkg ? (
              <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-rose-400 text-xs uppercase tracking-wider font-semibold">Step {step} of 4</div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((s) => (
                      <div key={s} className={cn("h-1 w-10 rounded-full transition-all", s <= step ? "bg-rose-500" : "bg-white/10")} />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">What type of venue?</h2>
                    <p className="text-silver-400 text-sm mb-5">Each venue type has different signage needs and regulations.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {venueTypes.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setVenue(v.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-center transition-all",
                            venue === v.id
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="text-2xl mb-1">{v.icon}</div>
                          <div className="text-xs font-semibold">{v.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">How large is the space?</h2>
                    <p className="text-silver-400 text-sm mb-5">Larger spaces need more wayfinding and regulatory signs.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sizes.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setSize(s.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            size === s.id
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold">{s.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Primary goal?</h2>
                    <p className="text-silver-400 text-sm mb-5">We'll prioritize signs that achieve this primary goal.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {goals.map((g) => (
                        <button
                          key={g.id}
                          onClick={() => setPrimaryGoal(g.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            primaryGoal === g.id
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold">{g.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Additional goals? (Optional)</h2>
                    <p className="text-silver-400 text-sm mb-5">Select all that apply — we'll include them in the package.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {goals.filter((g) => g.id !== primaryGoal).map((g) => (
                        <button
                          key={g.id}
                          onClick={() => toggleSecondary(g.id)}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition-all",
                            secondary.includes(g.id)
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-300"
                              : "bg-white/5 border-white/10 text-silver-300 hover:bg-white/10"
                          )}
                        >
                          <div className="font-semibold flex items-center gap-2">
                            {secondary.includes(g.id) && <span>✓</span>}
                            {g.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10"
                    >
                      ← Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={(step === 1 && !venue) || (step === 2 && !size) || (step === 3 && !primaryGoal)}
                    className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-400 text-white font-bold text-sm hover:from-rose-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {step === 4 ? "Get Signage Plan →" : "Continue →"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="rec" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-rose-500" />
                    <span className="text-rose-400 text-[10px] uppercase tracking-wider font-bold">Your Signage Plan</span>
                  </div>

                  <div className="space-y-4 mb-5">
                    {pkg.exterior.length > 0 && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="text-rose-300 text-[10px] uppercase tracking-wider font-semibold mb-2">🪧 Exterior Signage</div>
                        <ul className="text-silver-200 text-sm space-y-1">
                          {pkg.exterior.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                    {pkg.interior.length > 0 && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="text-rose-300 text-[10px] uppercase tracking-wider font-semibold mb-2">🏛 Interior Signage</div>
                        <ul className="text-silver-200 text-sm space-y-1">
                          {pkg.interior.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                    {pkg.wayfinding.length > 0 && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="text-rose-300 text-[10px] uppercase tracking-wider font-semibold mb-2">🧭 Wayfinding</div>
                        <ul className="text-silver-200 text-sm space-y-1">
                          {pkg.wayfinding.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                    {pkg.regulatory.length > 0 && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="text-rose-300 text-[10px] uppercase tracking-wider font-semibold mb-2">⚠️ Regulatory & Safety</div>
                        <ul className="text-silver-200 text-sm space-y-1">
                          {pkg.regulatory.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                    {pkg.promo.length > 0 && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="text-rose-300 text-[10px] uppercase tracking-wider font-semibold mb-2">📢 Promotional</div>
                        <ul className="text-silver-200 text-sm space-y-1">
                          {pkg.promo.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                    {pkg.extras.length > 0 && (
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-2">✨ Optional Extras</div>
                        <ul className="text-silver-300 text-sm space-y-1">
                          {pkg.extras.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <div className="text-emerald-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Estimated Budget</div>
                      <div className="text-white text-base font-bold">{pkg.budget}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-silver-300 text-[10px] uppercase tracking-wider font-semibold mb-1">Lead Time</div>
                      <div className="text-white text-sm font-semibold">{pkg.leadTime}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <p className="text-silver-300 text-sm leading-relaxed">{pkg.notes}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/+255716002790?text=${encodeURIComponent(pkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-sm hover:from-green-500 transition-all"
                    >
                      💬 Book Free Site Survey
                    </a>
                    <button
                      onClick={reset}
                      className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
