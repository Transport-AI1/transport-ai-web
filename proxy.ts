import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (hostname === "logistica.transportai.es" || hostname === "www.logistica.transportai.es") {
    const url = request.nextUrl.clone();
    url.pathname = url.pathname === "/" ? "/logistica" : `/logistica${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
