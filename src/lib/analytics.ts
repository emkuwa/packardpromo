export function gtmId(): string | undefined {
  return process.env.NEXT_PUBLIC_GTM_ID || undefined;
}

export function googleSiteVerification(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;
}

export function bingVerification(): string | undefined {
  return process.env.NEXT_PUBLIC_BING_VERIFICATION || undefined;
}

export function hasGtm(): boolean {
  return !!gtmId();
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: string, data?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}
