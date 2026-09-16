import type { ReactNode, SVGProps } from "react";

export type AppIconName = "menu" | "close" | "cart" | "home" | "grid" | "spark" | "briefcase" | "user" | "search" | "truck" | "bolt" | "shield" | "star" | "heart" | "share" | "printer" | "layers" | "card" | "clock" | "document" | "upload" | "refresh" | "send" | "whatsapp" | "filter" | "back";

const paths: Record<AppIconName, ReactNode> = {
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  cart: <><path d="M3 4h2.3l1.9 9.1a2.2 2.2 0 0 0 2.2 1.8h7.4a2.2 2.2 0 0 0 2.1-1.7L20.3 8H6.1"/><circle cx="10" cy="19.5" r="1.2"/><circle cx="18" cy="19.5" r="1.2"/></>,
  home: <><path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9.5v10h5v-5.7h3v5.7h5v-10"/></>,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1.4"/><rect x="14" y="4" width="6" height="6" rx="1.4"/><rect x="4" y="14" width="6" height="6" rx="1.4"/><rect x="14" y="14" width="6" height="6" rx="1.4"/></>,
  spark: <><path d="m12 2.8 1.6 4.6 4.6 1.6-4.6 1.6-1.6 4.6-1.6-4.6L5.8 9l4.6-1.6L12 2.8Z"/><path d="m18.5 15 .8 2.1 2.1.8-2.1.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.1Z"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2.2"/><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 12.5h18M10 12.5v2h4v-2"/></>,
  user: <><circle cx="12" cy="7.5" r="3.5"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/></>,
  truck: <><path d="M3 6h11v11H3zM14 10h3.5l3 3v4H14z"/><circle cx="7" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/></>,
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.2 7.8 7.5 9.5 4.3-1.7 7.5-4.8 7.5-9.5V6L12 3Z"/><path d="m8.7 12 2.1 2.1 4.6-4.7"/></>,
  star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.4 6.3-.9L12 2.8Z" />,
  heart: <path d="M20.8 5.8a5.1 5.1 0 0 0-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 1 0-7.2 7.2L12 21l8.8-8a5.1 5.1 0 0 0 0-7.2Z" />,
  share: <><path d="M12 15V3m0 0L8 7m4-4 4 4"/><path d="M6 10H4.8A1.8 1.8 0 0 0 3 11.8v7.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8v-7.4a1.8 1.8 0 0 0-1.8-1.8H18"/></>,
  printer: <><path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v7H7z"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></>,
  upload: <><path d="M12 16V4m0 0L8 8m4-4 4 4"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></>,
  refresh: <><path d="M20 7v5h-5"/><path d="M18.3 16a8 8 0 1 1 .8-7L20 12"/></>,
  send: <><path d="m3 3 18 9-18 9 3.5-9L3 3Z"/><path d="M6.5 12H21"/></>,
  whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M8.5 8.2c.4 3.5 2.2 5.3 5.7 6.2"/></>,
  filter: <><path d="M4 6h16M7 12h10M10 18h4"/><circle cx="9" cy="6" r="1.5"/><circle cx="14" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></>,
  back: <path d="m15 19-7-7 7-7" />,
};

export function AppIcon({ name, ...props }: { name: AppIconName } & SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
