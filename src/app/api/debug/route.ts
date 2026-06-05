export async function GET() {
  return Response.json({
    gtm: process.env.NEXT_PUBLIC_GTM_ID || "not set",
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "not set",
  });
}
