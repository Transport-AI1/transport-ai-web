import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
export const runtime = "nodejs";
function valid(raw:string,header:string,secret:string) {
  const parts=header.split(",").map(x=>x.split("="));
  const t=parts.find(x=>x[0]==="t")?.[1];
  const sigs=parts.filter(x=>x[0]==="v1").map(x=>x[1]);
  if(!t||!sigs.length||Math.abs(Date.now()/1000-Number(t))>300)return false;
  const expected=createHmac("sha256",secret).update(t+"."+raw).digest("hex");
  return sigs.some(s=>{try{return timingSafeEqual(Buffer.from(s,"hex"),Buffer.from(expected,"hex"));}catch{return false;}});
}
export async function POST(req:Request) {
  const raw=await req.text();
  const secret=process.env.STRIPE_WEBHOOK_SECRET;
  if(!secret||!valid(raw,req.headers.get("stripe-signature")||"",secret))return NextResponse.json({error:"Firma no válida."},{status:400});
  try {
    const event=JSON.parse(raw);
    if(event.type!=="checkout.session.completed")return NextResponse.json({received:true});
    const session=event.data.object;
    if(session.payment_status!=="paid")return NextResponse.json({received:true});
    const id=session.metadata?.order_id||session.client_reference_id;
    if(!id)return NextResponse.json({error:"Pedido no identificado."},{status:400});
    const base=(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL)!;
    const key=process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const headers={apikey:key,Authorization:"Bearer "+key,"Content-Type":"application/json"};
    const lookup=await fetch(base+"/rest/v1/web_orders?id=eq."+id+"&select=*",{headers,cache:"no-store"});
    const rows=await lookup.json();
    const order=rows[0];
    if(!order)return NextResponse.json({error:"Pedido inexistente."},{status:404});
    if(order.status==="generated")return NextResponse.json({received:true});
    await fetch(base+"/rest/v1/web_orders?id=eq."+id,{method:"PATCH",headers,body:JSON.stringify({status:"generating",stripe_payment_intent:session.payment_intent||null})});
    const prompt="Genera el contenido de una web comercial en español a partir del brief. No inventes premios, certificaciones, reseñas ni datos. Devuelve SOLO JSON válido con title, tagline, intro, about, services (array {name,description}), benefits (array strings), contactText, cta, primaryColor (hex). Haz textos específicos y atractivos. Brief: "+JSON.stringify(order.payload)+". Imágenes: "+JSON.stringify(order.photo_urls||[]);
    const ai=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.OPENAI_WEB_MODEL||"gpt-4o-mini",temperature:0.6,response_format:{type:"json_object"},messages:[{role:"system",content:"Eres diseñador web y copywriter senior. Devuelve exclusivamente JSON válido."},{role:"user",content:prompt}]})});
    const result=await ai.json();
    if(!ai.ok)throw new Error(result.error?.message||"Error del proveedor de IA.");
    const generated=JSON.parse(result.choices?.[0]?.message?.content||"{}");
    const slug = order.slug as string;
    const subdomain = slug + ".transportai.es";
    const saved=await fetch(base+"/rest/v1/web_orders?id=eq."+id,{method:"PATCH",headers,body:JSON.stringify({status:"generated",generated_site:generated,generated_at:new Date().toISOString(),custom_domain:subdomain,domain_status:"pending"})});
    if(!saved.ok)throw new Error("No se pudo guardar la web generada.");
    // The verified wildcard *.transportai.es on this Vercel project serves customer subdomains.
    // proxy.ts maps this hostname to the generated website record in Supabase.
    await fetch(base+"/rest/v1/web_orders?id=eq."+id,{method:"PATCH",headers,body:JSON.stringify({domain_status:"waiting_dns"})});
    return NextResponse.json({received:true});
  } catch(e) { console.error("AI web generation error",e); return NextResponse.json({error:e instanceof Error?e.message:"Error generando la web."},{status:500}); }
}