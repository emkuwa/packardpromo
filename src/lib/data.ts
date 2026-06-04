import type { City, Stat, Testimonial } from "@/types";
import { activeDomains, crossLinkLabel, crossLinkUrl, promoShopUrl, corporateSiteUrl, isFutureDomains } from "./domains";

export const siteConfig = {
  name: "Packard Promo",
  parentBrand: crossLinkLabel(),
  tagline: "PRINT. BRAND. DELIVER.",
  description:
    "Tanzania's leading printing, branding, signage and promotional products platform. Professional printing, signage, packaging, promotional products and branding solutions for businesses across Tanzania.",
  shortDescription: "Tanzania's leading printing, signage, packaging & promotional products platform.",
  location: "Fire Area, Dar es Salaam, Tanzania",
  phone: "+255 716 002 790",
  phoneAlt: "+255 658 144 421",
  email: "promo@packardltd.co.tz",
  whatsapp: "255716002790",
  url: activeDomains.primary,
  parentUrl: crossLinkUrl(),
  promoUrl: promoShopUrl(),
  corporateUrl: corporateSiteUrl(),
  primaryDomain: "packardltd.com",
  useFutureDomains: isFutureDomains,
  hours: "Mon - Fri: 8:00 AM - 6:00 PM · Sat: 9:00 AM - 2:00 PM",
  founded: 2010,
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
};

export const heroStats: Stat[] = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 4500, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "hr", label: "Same-Day Printing" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

export const trustStats: Stat[] = [
  { value: 4500, suffix: "+", label: "Print Jobs Delivered" },
  { value: 1200, suffix: "+", label: "Signage Installs" },
  { value: 350, suffix: "+", label: "Branding Projects" },
  { value: 14, suffix: "+", label: "Years Experience" },
];

export const cities: City[] = [
  {
    id: "dar-es-salaam",
    slug: "dar-es-salaam",
    name: "Dar es Salaam",
    region: "Dar es Salaam Region",
    population: "6.7M+",
    description:
      "Tanzania's commercial capital and primary hub for corporate printing, signage installation and branding services.",
    highlights: [
      "Same-day printing & delivery in CBD",
      "Free site survey for signage projects",
      "Dedicated account managers",
      "On-site installation teams",
    ],
    industries: ["Banking & Finance", "Telecommunications", "Government", "Hospitality", "Real Estate", "Manufacturing", "Oil & Gas", "Logistics"],
  },
  {
    id: "zanzibar",
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Zanzibar Archipelago",
    population: "1.9M+",
    description:
      "Premium hospitality, tourism and resort branding specialist — packaging, signage, uniforms and printed guest collateral.",
    highlights: [
      "Resort & hotel signage specialists",
      "Custom packaging for hospitality",
      "Branded uniforms & merchandise",
      "Event & wedding printing packages",
    ],
    industries: ["Hotels & Resorts", "Tourism", "Spice Exports", "Government", "Education"],
  },
  {
    id: "arusha",
    slug: "arusha",
    name: "Arusha",
    region: "Arusha Region",
    population: "620K+",
    description:
      "Northern Tanzania's commercial gateway serving safari companies, NGOs and the international conference circuit.",
    highlights: [
      "Safari & tourism operator branding",
      "Conference & event materials",
      "NGO communications & printing",
      "Vehicle fleets for safari operators",
    ],
    industries: ["Tourism & Safari", "NGOs & INGOs", "Conference & Events", "Agriculture", "Diplomatic Missions"],
  },
  {
    id: "mwanza",
    slug: "mwanza",
    name: "Mwanza",
    region: "Mwanza Region",
    population: "1.1M+",
    description:
      "Lake Zone commercial center — mining, fisheries and trade — with rapid turnaround printing and regional signage deployment.",
    highlights: [
      "Mining & industrial signage",
      "Lake trade packaging",
      "Multi-location brand rollouts",
      "Bulk offset printing for schools",
    ],
    industries: ["Mining", "Fisheries", "Education", "Telecommunications", "Trade & Commerce"],
  },
  {
    id: "dodoma",
    slug: "dodoma",
    name: "Dodoma",
    region: "Dodoma Region (Capital)",
    population: "765K+",
    description:
      "The national capital — government, parliamentary and institutional printing partner of choice.",
    highlights: [
      "Government & parliamentary printing",
      "Tender document & RFP printing",
      "Institutional signage systems",
      "Bulk educational materials",
    ],
    industries: ["Government", "Parliament", "Public Institutions", "Education", "Embassies & Diplomatic Missions"],
  },
  {
    id: "mbeya",
    slug: "mbeya",
    name: "Mbeya",
    region: "Mbeya Region",
    population: "520K+",
    description:
      "Southern Highlands hub — agriculture, mining and education — with high-volume printing capacity and rapid regional delivery.",
    highlights: [
      "Agricultural cooperative printing",
      "Mining sector signage",
      "School & university materials",
      "Cross-border trade packaging",
    ],
    industries: ["Agriculture", "Mining", "Education", "Cross-Border Trade", "Banking"],
  },
  {
    id: "morogoro",
    slug: "morogoro",
    name: "Morogoro",
    region: "Morogoro Region",
    population: "430K+",
    description:
      "Education, agriculture and SACCOS hub — high-quality, cost-effective printing and signage for growing institutions.",
    highlights: [
      "SACCOS & microfinance printing",
      "Agricultural extension materials",
      "University & college branding",
      "Township commercial signage",
    ],
    industries: ["Education", "Agriculture", "SACCOS & Microfinance", "Small Business", "Government"],
  },
  {
    id: "tanga",
    slug: "tanga",
    name: "Tanga",
    region: "Tanga Region",
    population: "395K+",
    description:
      "Coastal port city — cement, sisal and port logistics — with heavy-duty signage, durable labeling and export packaging.",
    highlights: [
      "Port & logistics signage",
      "Export-quality packaging",
      "Industrial safety labeling",
      "Cement & sisal sector branding",
    ],
    industries: ["Port & Logistics", "Cement & Construction", "Sisal & Agriculture", "Oil & Gas", "Government"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mwakasege",
    role: "Brand Manager",
    company: "CRDB Bank Foundation",
    content:
      "Packard Promo handled our 12-branch signage rollout in record time. The quality of materials, attention to brand guidelines and installation precision was on another level.",
  },
  {
    id: "t2",
    name: "David Mlay",
    role: "Operations Director",
    company: "Azam Media",
    content:
      "From concept to delivery, the Packard Promo team delivered 50,000 branded notebooks for our campaign ahead of schedule. Best print quality we've experienced in Tanzania.",
  },
  {
    id: "t3",
    name: "Joyce Mwangosi",
    role: "Marketing Lead",
    company: "Serena Hotels",
    content:
      "Their in-house design team transformed our resort welcome materials. The packaging, signage and guest collateral all carry a premium feel that matches our brand.",
  },
  {
    id: "t4",
    name: "Hamisi Juma",
    role: "School Principal",
    company: "St. Mary's Secondary School",
    content:
      "We needed 2,000 branded exercise books, certificates and event banners in 5 days. Packard Promo delivered every item, on time, on budget, with impeccable print quality.",
  },
  {
    id: "t5",
    name: "Anna Nkya",
    role: "Communications Officer",
    company: "UNICEF Tanzania",
    content:
      "Packard Promo is our go-to for campaign materials. Their AI quote tool saved our team weeks of back-and-forth. Professional, fast, and globally competitive quality.",
  },
  {
    id: "t6",
    name: "Michael Senga",
    role: "Fleet Manager",
    company: "Dangote Cement Tanzania",
    content:
      "We branded 48 trucks and 12 pickups. The vinyl quality, alignment and weather-resistance is excellent even after 18 months on the road. Highly recommended.",
  },
];

export const trustedBy = [
  "CRDB Bank",
  "Vodacom",
  "NMB Bank",
  "Serena Hotels",
  "TBL",
  "Azam Media",
  "Hyatt Regency",
  "UNDP",
  "UNICEF",
  "WHO",
  "Dangote Cement",
  "Airtel",
  "NBC Bank",
  "Bakhresa Group",
  "TPB Bank",
  "World Bank",
];
