export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  hero: string;
  icon: string;
  image?: string;
  features: string[];
  products: Product[];
  faqs: { q: string; a: string }[];
  color: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  startingPrice: number;
  minQty: number;
  leadTime: string;
  sizes?: string[];
  materials?: string[];
  features: string[];
  category: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  services: string[];
  image: string;
  gallery: string[];
  year: string;
  location: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  outcome?: string;
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  duration?: string;
  teamSize?: string;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  region: string;
  population: string;
  description: string;
  highlights: string[];
  industries: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}
