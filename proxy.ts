import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (hostname === "logistica.transportai.es" || hostname === "www.logistica.transportai.es") {
    const url = request.nextUrl.clone();
    url.pathname = url.pathname === "/" ? "/logistica" : "/logistica" + url.pathname;
    return NextResponse.rewrite(url);
  }
  if (hostname?.endsWith(".transportai.es") && hostname !== "logistica.transportai.es" && hostname !== "www.transportai.es") {
    const base = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (base && key) {
      try {
        const response = await fetch(base + "/rest/v1/web_orders?custom_domain=eq." + encodeURIComponent(hostname) + "&status=eq.generated&select=slug&limit=1", { headers: { apikey: key, Authorization: "Bearer " + key }, cache: "no-store" });
        if (response.ok) {
          const rows = await response.json();
          if (rows[0]?.slug) { const url = request.nextUrl.clone(); url.pathname = "/web-demo/" + rows[0].slug; return NextResponse.rewrite(url); }
        }
      } catch (error) { console.error("Customer subdomain lookup failed", error); }
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon.svg|opengraph-image|twitter-image).*)"] };