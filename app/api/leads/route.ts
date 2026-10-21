
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadSource = "chat" | "voice";

function cleanText(value: unknown, maxLength = 1000): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().slice(0, maxLength);
  return cleaned || null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = cleanText(body.name, 120);
    const company = cleanText(body.company, 160);
    const email = cleanText(body.email, 254)?.toLowerCase() ?? null;
    const phone = cleanText(body.phone, 40);
    const need = cleanText(body.need, 2000);
    const budget = cleanText(body.budget, 120);
    const summary = cleanText(body.summary, 2000);
    const source = body.source;
    const consent = body.consent;

    if (consent !== true) {
      return NextResponse.json(
        { error: "Es necesario aceptar el aviso de privacidad." },
        { status: 400 }
      );
    }

    if (source !== "chat" && source !== "voice") {
      return NextResponse.json(
        { error: "Origen no válido." },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Indica un email o teléfono de contacto." },
        { status: 400 }
      );
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !secretKey) {
      return NextResponse.json(
        { error: "El servidor no está configurado correctamente." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/leads`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          source: source as LeadSource,
          need,
          budget,
          summary,
          consent: true,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "No se pudo guardar el contacto." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 400 }
    );
  }
}
