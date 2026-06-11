import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ChatBot from "@/components/layout/ChatBot";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import Script from "next/script";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import { googleSiteVerification } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseUrl = siteConfig.url;
const defaultOgImage = `${baseUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Packard Promo | Tanzania's Marketplace for Printing, Signage, Packaging & Promotional Products",
    template: "%s | Packard Promo",
  },
  description: "Tanzania's leading online marketplace for printing, signage, packaging, vehicle branding and promotional products. 50+ product categories, 9 service divisions, instant AI quotes, nationwide delivery. Print. Promote. Perform.",
  keywords: [
    "printing services Tanzania",
    "printing Dar es Salaam",
    "signboards Tanzania",
    "banner printing",
    "packaging printing Tanzania",
    "vehicle branding Tanzania",
    "promotional products Tanzania",
    "corporate gifts Tanzania",
    "T-shirt printing Tanzania",
    "business card printing Tanzania",
    "billboard printing",
    "rollup banner Tanzania",
    "vehicle wrap Dar es Salaam",
    "branded merchandise Tanzania",
    "shop signboard Tanzania",
    "exhibition stands Tanzania",
    "Sabasaba exhibition Tanzania",
    "Dar es Salaam International Trade Fair",
    "trade fair printing Tanzania",
    "event branding Tanzania",
    "Packard Promo",
    "Packard Limited",
    "design studio Tanzania",
  ],
  authors: [{ name: "Packard Promo" }],
  creator: "Packard Promo",
  publisher: "Packard Limited",
  openGraph: {
    title: "Printing, Signage, Packaging & Promotional Products in Tanzania | Packard Promo",
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    locale: "en_TZ",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Packard Promo printing, signage, packaging and promotional products in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing, Signage, Packaging & Promotional Products in Tanzania | Packard Promo",
    description: siteConfig.shortDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192x192.jpg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: baseUrl,
  },
  other: {
    "geo.region": "TZ",
    "geo.placename": "Dar es Salaam",
    "format-detection": "telephone=yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#060e1a",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060e1a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="organization-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <Script id="localbusiness-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        {googleSiteVerification() && (
          <meta name="google-site-verification" content={googleSiteVerification()!} />
        )}
        {true && (
          <meta name="msvalidate.01" content="E5971F1FF6CFBED454D2052DA1C769AD" />
        )}
        {true && (
          <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQ5WVR52');`
          }} />
        )}
      </head>
      <body className="antialiased overflow-x-hidden">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQ5WVR52" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
        <StickyMobileBar />
      </body>
    </html>
  );
}
