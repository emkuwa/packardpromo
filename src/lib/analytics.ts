export function gtmId(): string | null {
  return process.env.NEXT_PUBLIC_GTM_ID ?? null;
}

export function googleSiteVerification(): string | null {
  return process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? null;
}

export function bingVerification(): string | null {
  return process.env.NEXT_PUBLIC_BING_VERIFICATION ?? null;
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
