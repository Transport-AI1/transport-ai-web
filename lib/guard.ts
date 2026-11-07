// Protección básica para rutas API públicas.
// El límite en memoria es best-effort y no se comparte entre instancias serverless.
// Para límites consistentes, configurar también Vercel Firewall.
const hits = new Map<string, number[]>();

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded?.split(",")[0] ?? request.headers.get("x-real-ip") ?? "unknown").trim();
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    const requestHost = request.headers.get("host");
    return !!requestHost && originUrl.host.toLowerCase() === requestHost.toLowerCase();
  } catch {
    return false;
  }
}

export function rateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [storedKey, timestamps] of hits) {
      if (timestamps.every((timestamp) => now - timestamp >= windowMs)) hits.delete(storedKey);
    }
  }
  return false;
}
