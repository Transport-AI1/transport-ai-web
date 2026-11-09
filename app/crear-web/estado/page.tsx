import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
export default async function Estado({searchParams}:{searchParams:Promise<{session_id?:string}>}) {
 const {session_id}=await searchParams; let status="processing"; let slug="";
 if(session_id&&(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL)&&process.env.SUPABASE_SERVICE_ROLE_KEY){
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  const r=await fetch((process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL)+"/rest/v1/web_orders?stripe_session_id=eq."+encodeURIComponent(session_id)+"&select=status,slug",{headers:{apikey:key,Authorization:"Bearer "+key},cache:"no-store"});
  if(r.ok){const rows=await r.json();status=rows[0]?.status||status;slug=rows[0]?.slug||"";}
 }
 return <SiteShell><main className="min-h-[65vh] bg-slate-50 px-5 py-20"><div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">✓</div><h1 className="mt-6 text-3xl font-semibold text-slate-950">Pago recibido</h1>{status==="generated"?<><p className="mt-4 leading-7 text-slate-600">Tu primera web ya está generada. Nuestro equipo la revisará antes de su entrega.</p><Link className="mt-7 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white" href={"/web-demo/"+slug}>Ver primera demo</Link></>:<p className="mt-4 leading-7 text-slate-600">Estamos preparando tu web. La generación puede tardar unos minutos. Si no recibes novedades, escribe a contacto@transportai.es.</p>}</div></main></SiteShell>;
}