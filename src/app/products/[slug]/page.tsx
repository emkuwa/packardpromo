import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getProductBySlug } from "@/lib/services";
import { defaultMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/data";
import ProductDetail from "./ProductDetail";

const baseUrl = siteConfig.url;

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  services.forEach((s) => s.products.forEach((p) => params.push({ slug: p.slug })));
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = getProductBySlug(slug);
  if (!result) return defaultMetadata("Product Not Found", "Product not found", "/products");
  return defaultMetadata(
    `${result.product.name} | ${result.service.title} | Packard Promo Tanzania`,
    `${result.product.description} Starting from TZS ${result.product.startingPrice.toLocaleString()}. Min order ${result.product.minQty} units. Lead time: ${result.product.leadTime}.`,
    `/products/${result.product.slug}`
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getProductBySlug(slug);
  if (!result) notFound();

  const { product, service } = result;
  const productUrl = `${baseUrl}/products/${product.slug}`;

  const productSchemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: "Packard Promo",
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    category: service.title,
    ...(product.materials && product.materials.length > 0 && {
      material: product.materials.join(", "),
    }),
    ...(product.sizes && product.sizes.length > 0 && {
      size: product.sizes.join(", "),
    }),
    offers: {
      "@type": "Offer",
      priceCurrency: "TZS",
      price: product.startingPrice,
      priceValidUntil: "2026-12-31",
      url: productUrl,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: baseUrl,
      },
      ...(product.minQty && {
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: product.minQty,
          unitCode: "C62",
        },
      }),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "TZ",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "d",
          },
        },
      },
    },
    ...(product.features && product.features.length > 0 && {
      additionalProperty: product.features.map((f) => ({
        "@type": "PropertyValue",
        name: "Feature",
        value: f,
      })),
    }),
  };

  const breadcrumbData = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: service.title, url: `/services/${service.slug}` },
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <ProductDetail service={service} product={product} />
    </>
  );
}
