export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  industry?: string;
  service?: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

export const knowledgeCategories = [
  { id: "printing-tips", label: "Printing Tips" },
  { id: "signage-guide", label: "Signage Guides" },
  { id: "packaging-design", label: "Packaging Design" },
  { id: "vehicle-branding", label: "Vehicle Branding" },
  { id: "promo-products", label: "Promotional Products" },
  { id: "business-growth", label: "Business Growth" },
  { id: "industry-news", label: "Industry News" },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "ultimate-guide-business-cards",
    slug: "ultimate-guide-business-cards",
    title: "The Ultimate Guide to Business Cards in 2026",
    excerpt: "Everything you need to know about paper, finish, design and printing for business cards that make a lasting impression.",
    content: "Business cards remain the most powerful networking tool...",
    category: "printing-tips",
    tags: ["business cards", "printing", "branding"],
    author: "Packard Promo",
    date: "2026-05-15",
    readTime: "8 min",
  },
  {
    id: "vehicle-branding-roi",
    slug: "vehicle-branding-roi",
    title: "Vehicle Branding ROI: Why Your Fleet is a Marketing Goldmine",
    excerpt: "A single branded vehicle generates 30,000-70,000 daily impressions. Here's how to maximize your fleet's marketing impact.",
    content: "Mobile advertising is one of the highest-ROI marketing channels...",
    category: "vehicle-branding",
    tags: ["vehicle branding", "marketing", "ROI"],
    author: "Packard Promo",
    date: "2026-05-10",
    readTime: "6 min",
  },
  {
    id: "signage-permits-tanzania",
    slug: "signage-permits-tanzania",
    title: "Signage Permits in Tanzania: The Complete 2026 Guide",
    excerpt: "Municipal regulations for shop signs, billboards and outdoor advertising. What you need to know before installing.",
    content: "Installing signage in Tanzania requires permits from local councils...",
    category: "signage-guide",
    tags: ["signage", "permits", "regulations"],
    author: "Packard Promo",
    date: "2026-05-05",
    readTime: "10 min",
  },
  {
    id: "offset-vs-digital",
    slug: "offset-vs-digital-printing",
    title: "Offset vs Digital Printing: When to Use Each",
    excerpt: "Both are essential — but choosing the wrong one wastes money. Here's how to decide based on quantity, quality and budget.",
    content: "The offset vs digital decision depends on three factors...",
    category: "printing-tips",
    tags: ["printing", "offset", "digital"],
    author: "Packard Promo",
    date: "2026-04-28",
    readTime: "7 min",
  },
  {
    id: "promo-products-events",
    slug: "promo-products-for-events",
    title: "Promotional Products That Actually Get Used",
    excerpt: "T-shirts, caps, mugs, bottles, USBs — the best event merch is the kind people actually keep. Here's what works in 2026.",
    content: "Not all promotional products are created equal...",
    category: "promo-products",
    tags: ["promotional products", "events", "marketing"],
    author: "Packard Promo",
    date: "2026-04-20",
    readTime: "9 min",
  },
  {
    id: "packaging-design-east-africa",
    slug: "packaging-design-east-africa",
    title: "Packaging Design Trends That Sell in East Africa",
    excerpt: "Local consumer behavior, retail trends and cultural preferences that drive packaging design success in Tanzania and Kenya.",
    content: "East African consumers respond to specific packaging cues...",
    category: "packaging-design",
    tags: ["packaging", "design", "FMCG"],
    author: "Packard Promo",
    date: "2026-04-12",
    readTime: "8 min",
  },
  {
    id: "shop-signage-essentials",
    slug: "shop-signage-essentials",
    title: "7 Shop Signage Essentials Every Business Needs",
    excerpt: "From illuminated boards to window graphics — the signage that drives foot traffic and brand recall.",
    content: "Your shop sign is your most important advertising asset...",
    category: "signage-guide",
    tags: ["signage", "retail", "shop signs"],
    author: "Packard Promo",
    date: "2026-04-05",
    readTime: "6 min",
  },
  {
    id: "print-design-files",
    slug: "how-to-prep-print-files",
    title: "How to Prepare Print-Ready Files (and Avoid Re-Print Costs)",
    excerpt: "CMYK vs RGB, bleeds, safe zones, file formats — the technical checklist that saves money.",
    content: "Most re-prints happen because of file preparation errors...",
    category: "printing-tips",
    tags: ["design", "print files", "CMYK"],
    author: "Packard Promo",
    date: "2026-03-28",
    readTime: "7 min",
  },
  {
    id: "fleet-branding-guide",
    slug: "fleet-branding-guide",
    title: "Fleet Branding: From Design to Rollout",
    excerpt: "How to plan and execute a multi-vehicle branding project across 10+ vehicles without disrupting operations.",
    content: "Fleet branding is a multi-step project that requires careful planning...",
    category: "vehicle-branding",
    tags: ["fleet", "branding", "rollout"],
    author: "Packard Promo",
    date: "2026-03-22",
    readTime: "8 min",
  },
  {
    id: "corporate-gifts-that-work",
    slug: "corporate-gifts-that-work",
    title: "Corporate Gifts That Actually Get Used (and Remembered)",
    excerpt: "Premium gift sets, executive pens, leather accessories — the corporate gifts that drive real ROI.",
    content: "A good corporate gift is one that's used daily...",
    category: "promo-products",
    tags: ["corporate gifts", "premium", "B2B"],
    author: "Packard Promo",
    date: "2026-03-15",
    readTime: "5 min",
  },
  {
    id: "packaging-food-grade",
    slug: "packaging-food-grade-tanzania",
    title: "Food-Grade Packaging in Tanzania: TBS Compliance Guide",
    excerpt: "TBS food safety standards, food-grade inks, and how to choose compliant packaging for your food business.",
    content: "Tanzania's TBS has specific requirements for food-contact packaging...",
    category: "packaging-design",
    tags: ["food packaging", "TBS", "compliance"],
    author: "Packard Promo",
    date: "2026-03-08",
    readTime: "9 min",
  },
  {
    id: "exhibition-stand-roi",
    slug: "exhibition-stand-roi",
    title: "How to Maximize ROI from Your Exhibition Stand",
    excerpt: "Pre-event promotion, on-stand engagement, and post-event follow-up — the playbook for trade show success.",
    content: "An exhibition stand is a significant investment...",
    category: "business-growth",
    tags: ["events", "exhibitions", "B2B"],
    author: "Packard Promo",
    date: "2026-03-01",
    readTime: "7 min",
  },
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.slug === slug);
}
