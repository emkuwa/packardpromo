export type DomainKey = "current" | "future";

export interface DomainConfig {
  primary: string;
  promo: string;
  corporate: string;
  parentBrand: string;
}

export const domainConfigs: Record<DomainKey, DomainConfig> = {
  current: {
    primary: "https://packardpromo.co.tz",
    promo: "https://packardpromo.co.tz",
    corporate: "https://packardlimited.co.tz",
    parentBrand: "Packard Limited",
  },
  future: {
    primary: "https://promo.packardltd.com",
    promo: "https://promo.packardltd.com",
    corporate: "https://packardltd.com",
    parentBrand: "Packard Ltd",
  },
};

function resolveActiveKey(): DomainKey {
  const flag = process.env.NEXT_PUBLIC_USE_FUTURE_DOMAINS;
  if (flag === "true" || flag === "1") return "future";
  return "current";
}

export const activeDomainKey: DomainKey = resolveActiveKey();

export const activeDomains: DomainConfig = domainConfigs[activeDomainKey];

export const isFutureDomains = activeDomainKey === "future";

export function crossLinkLabel(): string {
  return isFutureDomains ? "Packard Ltd" : "Packard Limited";
}

export function crossLinkUrl(): string {
  return activeDomains.corporate;
}

export function promoShopUrl(): string {
  return activeDomains.promo;
}

export function corporateSiteUrl(): string {
  return activeDomains.corporate;
}
