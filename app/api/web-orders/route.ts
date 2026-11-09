import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
const env = (key: string) => { const value = process.env[key]; if (!value) throw new Error("Falta " + key + " en Vercel."); return value; };
const slugify = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "negocio";

export async function POST(request: Request) {
  return NextResponse.json(
    { error: "La creación de páginas web no está disponible temporalmente. Vuelve a consultarnos próximamente." },
    { status: 503 }
  );
  try {
    const form = await request.formData();
    const raw = form.get("payload");
    if (typeof raw !== "string" || raw.length > 30000) return NextResponse.json({error:"Solicitud no válida."},{status:400});
    const data = JSON.parse(raw);
    const business = String(data.business || "").trim().slice(0,120);
    const sector = String(data.sector || "").trim().slice(0,120);
    const email = String(data.email || "").trim().toLowerCase().slice(0,254);
    if (!business || !sector || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({error:"Indica negocio, sector y un email válido."},{status:400});
    if (data.consent !== true) return NextResponse.json({error:"Debes aceptar la política de privacidad."},{status:400});
    const files = form.getAll("photos").filter((x): x is File => x instanceof File);
    if (files.length > 8 || files.some(f => f.size > 5*1024*1024 || !f.type.startsWith("image/"))) return NextResponse.json({error:"Máximo 8 imágenes de 5 MB cada una."},{status:400});

    const supabase = (process.env.SUPABASE_URL || env("NEXT_PUBLIC_SUPABASE_URL")).replace(/\/$/,"");
    const key = env("SUPABASE_SERVICE_ROLE_KEY");
    const id = randomUUID();
    const slug = slugify(business) + "-" + id.slice(0,6);
    const photos: string[] = [];
    for (const file of files) {
      const ext = file.type.split("/")[1]?.replace(/[^a-z0-9]/gi,"") || "jpg";
      const path = id + "/" + randomUUID() + "." + ext;
      const upload = await fetch(supabase + "/storage/v1/object/web-order-photos/" + path,{method:"POST",headers:{apikey:key,Authorization:"Bearer "+key,"Content-Type":file.type,"x-upsert":"false"},body:await file.arrayBuffer()});
      if (!upload.ok) throw new Error("No se pudieron guardar las imágenes. Comprueba el bucket web-order-photos.");
      photos.push(supabase + "/storage/v1/object/public/web-order-photos/" + path);
    }
    const insert = await fetch(supabase + "/rest/v1/web_orders",{method:"POST",headers:{apikey:key,Authorization:"Bearer "+key,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({id,slug,status:"pending_payment",payload:{...data,business,sector,email},photo_urls:photos})});
    if (!insert.ok) throw new Error("No se pudo guardar el pedido.");
    const params = new URLSearchParams();
    params.set("mode","payment");
    params.set("automatic_tax[enabled]","true");
    params.set("billing_address_collection","required");
    params.set("success_url",new URL(request.url).origin + "/crear-web/estado?session_id={CHECKOUT_SESSION_ID}");
    params.set("cancel_url",new URL(request.url).origin + "/crear-web?cancelado=1");
    params.set("customer_email",email);
    params.set("client_reference_id",id);
    params.set("metadata[order_id]",id);
    params.set("line_items[0][quantity]","1");
    params.set("line_items[0][price_data][currency]","eur");
    params.set("line_items[0][price_data][unit_amount]","30000");
    params.set("line_items[0][price_data][product_data][name]","Web profesional — oferta de lanzamiento");
    params.set("line_items[0][price_data][product_data][description]","Oferta de lanzamiento: 450 € → 300 € + IVA. Dominio y alojamiento no incluidos.");
    const checkout = await fetch("https://api.stripe.com/v1/checkout/sessions",{method:"POST",headers:{Authorization:"Bearer "+env("STRIPE_SECRET_KEY"),"Content-Type":"application/x-www-form-urlencoded"},body:params});
    const session = await checkout.json();
    if (!checkout.ok || !session.url) throw new Error(session.error?.message || "No se pudo crear el pago.");
    await fetch(supabase + "/rest/v1/web_orders?id=eq." + id,{method:"PATCH",headers:{apikey:key,Authorization:"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({stripe_session_id:session.id})});
    return NextResponse.json({url:session.url});
  } catch(e) { return NextResponse.json({error:e instanceof Error?e.message:"Error al crear el pedido."},{status:500}); }
}