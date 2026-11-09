"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export function WebPromo() {
 const [open,setOpen]=useState(false);
 return <div className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 shadow-sm">
  <button type="button" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="flex w-full items-center gap-3 p-4 text-left sm:p-5">
   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white"><Sparkles size={20}/></span>
   <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-slate-950">Haz tu web profesional por solo 300 €</span><span className="mt-1 flex flex-wrap items-center gap-2 text-xs"><span className="text-slate-500 line-through">450 €</span><span className="font-bold text-emerald-700">300 € · Ahorras 150 €</span></span></span>
   <ChevronDown size={19} className={"shrink-0 text-blue-700 transition-transform "+(open?"rotate-180":"")}/>
  </button>
  {open&&<div className="border-t border-blue-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5"><p className="text-sm leading-6 text-slate-600">Cuéntale a nuestro asistente cómo es tu negocio, añade tus fotos y prepara una primera versión personalizada de tu web. Después la revisamos contigo.</p><p className="mt-2 text-xs text-slate-500">300 € + IVA · Dominio y alojamiento se contratan aparte.</p><Link href="/crear-web" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">Crear mi web <ArrowRight size={16}/></Link></div>}
 </div>;
}