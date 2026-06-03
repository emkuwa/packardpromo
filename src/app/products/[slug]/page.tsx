import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getProductBySlug } from "@/lib/services";
import { defaultMetadata, productSchema, faqSchema } from "@/lib/seo";
import ProductDetail from "./ProductDetail";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: result.product.name,
            description: result.product.description,
            brand: { "@type": "Brand", name: "Packard Promo" },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "TZS",
              lowPrice: result.product.startingPrice,
              offerCount: 1,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <ProductDetail service={result.service} product={result.product} />
    </>
  );
}
