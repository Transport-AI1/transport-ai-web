"use client";

import Link from "next/link";
import {
  ArrowUpRight, Bot, Headphones, MessageCircle, Mic2, PhoneCall,
  ShoppingBag, Sparkles, Truck, Globe, BarChart3, Check, CircleDot
} from "lucide-react";

const previews = [
  { id: "web", label: "Web profesional", kind: "web", detail: "Diseño personalizado y adaptable a móvil para presentar tu empresa, servicios y captar nuevos clientes." },
  { id: "dashboard", label: "Panel empresarial", kind: "dashboard", detail: "Un panel centralizado para consultar indicadores, actividad, clientes y el estado del negocio." },
  { id: "voice", label: "Agente de voz IA", kind: "voice", detail: "Atiende por voz, responde preguntas frecuentes y recoge solicitudes de tus clientes." },
  { id: "chat", label: "Agente de chat IA", kind: "chat", detail: "Responde consultas en tu web usando la información de tu negocio y guía a cada visitante." },
  { id: "calls", label: "Agente de llamadas", kind: "calls", detail: "Gestiona llamadas entrantes, identifica lo que necesita cada persona y deriva los casos cuando hace falta." },
  { id: "shop", label: "Tienda online", kind: "shop", detail: "Catálogo digital con productos, precios y una experiencia de compra adaptada a tu marca." },
  { id: "logistics", label: "Operaciones logísticas", kind: "logistics", detail: "Organiza entregas, rutas e incidencias en una interfaz diseñada para equipos de transporte." },
] as const;

function PreviewContent({ kind }: { kind: (typeof previews)[number]["kind"] }) {
  if (kind === "web") return <div className="h-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-4 text-white"><div className="flex items-center justify-between text-[9px] font-bold"><span>STUDIO / DIGITAL</span><span className="rounded-full border border-white/30 px-2 py-1">INICIO</span></div><div className="mt-8 max-w-[75%]"><p className="text-[8px] uppercase tracking-[.25em] text-cyan-300">Diseño que destaca</p><p className="mt-2 text-xl font-semibold leading-tight">Tu marca.<br/>Una nueva experiencia.</p><div className="mt-3 h-1.5 w-20 rounded-full bg-cyan-400"/><p className="mt-3 text-[8px] text-blue-100">Servicios · Proyectos · Contacto</p></div><div className="absolute bottom-4 right-4 h-20 w-24 rounded-xl border border-white/20 bg-gradient-to-br from-cyan-300/50 to-blue-500/20"/></div>;
  if (kind === "dashboard") return <div className="h-full bg-slate-950 p-3 text-white"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold">OVERVIEW / BUSINESS</span><BarChart3 size={13} className="text-cyan-300"/></div><div className="mt-4 grid grid-cols-3 gap-2">{[["Ingresos","24,8k"],["Clientes","1.284"],["Conversión","8,6%"]].map(([a,b])=><div key={a} className="rounded-lg border border-white/10 bg-white/5 p-2"><p className="text-[7px] text-slate-400">{a}</p><p className="mt-1 text-sm font-semibold">{b}</p></div>)}</div><div className="mt-3 flex h-20 items-end gap-2 rounded-lg border border-white/10 bg-white/5 p-3">{[35,55,42,75,58,90,68,100,78,88].map((h,i)=><div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-300" style={{height:h+"%"}}/>)}</div><div className="mt-3 flex gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/><span className="text-[8px] text-slate-300">Actividad actualizada</span></div></div>;
  if (kind === "voice") return <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-950 p-4 text-white"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/40 bg-violet-400/15"><Mic2 size={24} className="text-violet-200"/></div><p className="mt-3 text-xs font-semibold">Asistente de voz IA</p><p className="mt-1 text-[8px] text-violet-200">Escuchando · Demo interactiva</p><div className="mt-4 flex h-9 items-center gap-1">{[12,25,17,31,14,28,19,34,16,25,12,30,18,26,13].map((h,i)=><span key={i} className="w-1 rounded-full bg-violet-300" style={{height:h}}/>)}</div><p className="mt-3 max-w-[80%] text-center text-[8px] leading-4 text-slate-300">Responde consultas y atiende a tus clientes por voz.</p></div>;
  if (kind === "chat") return <div className="h-full bg-slate-50 p-3"><div className="flex items-center gap-2 border-b border-slate-200 pb-2"><div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700"><Bot size={15}/></div><div><p className="text-[9px] font-bold text-slate-900">Asistente inteligente</p><p className="text-[7px] text-emerald-600">En línea · IA</p></div></div><div className="mt-3 space-y-2"><div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-2 text-[8px] text-slate-600 shadow-sm">¡Hola! ¿En qué puedo ayudarte?</div><div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-blue-600 p-2 text-[8px] text-white">Quiero conocer vuestros servicios.</div><div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-2 text-[8px] text-slate-600 shadow-sm">Claro. Puedo explicarte las opciones y resolver tus dudas.</div></div><div className="mt-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-[7px] text-slate-400">Escribe tu mensaje…</div></div>;
  if (kind === "calls") return <div className="flex h-full flex-col justify-between bg-[#071b24] p-4 text-white"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold tracking-wide">CENTRO DE LLAMADAS</span><span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[7px] text-emerald-300">ACTIVO</span></div><div className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200"><PhoneCall size={23}/></div><p className="mt-3 text-xs font-semibold">Recepción IA</p><p className="mt-1 text-[8px] text-slate-400">Llamada en curso · 02:18</p><div className="mx-auto mt-4 flex w-36 items-center justify-center gap-1">{[14,23,10,30,17,26,12,22,15,29,12,20].map((h,i)=><span key={i} className="w-1 rounded-full bg-cyan-300" style={{height:h}}/>)}</div></div><div className="flex justify-center gap-2"><span className="rounded-full bg-white/10 p-2"><Headphones size={13}/></span><span className="rounded-full bg-rose-500 p-2"><PhoneCall size={13}/></span></div></div>;
  if (kind === "shop") return <div className="h-full bg-[#f8f7f4] p-3"><div className="flex items-center justify-between border-b border-stone-200 pb-2"><span className="text-[9px] font-bold tracking-widest text-slate-900">ATELIER / STORE</span><ShoppingBag size={13} className="text-slate-700"/></div><p className="mt-3 text-[8px] uppercase tracking-widest text-stone-500">Nueva colección</p><p className="mt-1 text-base font-semibold text-slate-900">Diseño para cada día.</p><div className="mt-3 grid grid-cols-3 gap-2">{["from-amber-100 to-orange-200","from-rose-100 to-pink-200","from-stone-200 to-stone-300"].map((c,i)=><div key={c}><div className={`flex h-20 items-center justify-center rounded-lg bg-gradient-to-br ${c}`}><ShoppingBag size={20} className="text-slate-600"/></div><p className="mt-1 text-[7px] text-slate-600">Producto 0{i+1}</p><p className="text-[8px] font-bold text-slate-900">{[29,45,59][i]} €</p></div>)}</div></div>;
  return <div className="h-full bg-gradient-to-br from-slate-950 to-slate-800 p-3 text-white"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold">OPERACIONES / LOGÍSTICA</span><Truck size={14} className="text-cyan-300"/></div><div className="mt-4 grid grid-cols-3 gap-2">{[["En ruta","28"],["Entregas","146"],["Incidencias","04"]].map(([a,b])=><div key={a} className="rounded-lg bg-white/10 p-2"><p className="text-[7px] text-slate-400">{a}</p><p className="mt-1 text-sm font-semibold">{b}</p></div>)}</div><div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3"><div className="flex items-center gap-2"><CircleDot size={11} className="text-emerald-400"/><span className="text-[8px]">Ruta de reparto · Madrid</span></div><div className="mt-3 space-y-2">{["Pedido asignado","Vehículo en ruta","Entrega confirmada"].map((s,i)=><div key={s} className="flex items-center gap-2 text-[8px] text-slate-300"><span className={`h-1.5 w-1.5 rounded-full ${i===2?"bg-emerald-400":"bg-cyan-400"}`}/>{s}</div>)}</div></div></div>;
}

function DemoCard({ item }: { item: (typeof previews)[number] }) {
  return <a href="/demostraciones" className="demo-card group relative block w-[265px] shrink-0 sm:w-[320px]">
    <div className="relative h-[205px] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-[0_22px_65px_rgba(15,23,42,.18)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 sm:h-[245px] sm:p-2.5">
      <div className="flex h-6 items-center gap-1.5 rounded-t-lg border-b border-slate-100 bg-slate-50 px-2"><i className="h-1.5 w-1.5 rounded-full bg-rose-400"/><i className="h-1.5 w-1.5 rounded-full bg-amber-400"/><i className="h-1.5 w-1.5 rounded-full bg-emerald-400"/><span className="ml-2 truncate text-[7px] text-slate-400">transport-ai.demo / {item.id}</span></div>
      <div className="relative h-[calc(100%-24px)] overflow-hidden rounded-b-lg"><PreviewContent kind={item.kind}/></div>
      <div className="demo-card-detail absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-slate-950/95 p-3 text-left text-white shadow-xl"><p className="text-xs font-semibold">{item.label}</p><p className="mt-1 text-[11px] leading-5 text-slate-200">{item.detail}</p><span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300">Ver demostración <ArrowUpRight size={11}/></span></div>
    </div>
    <div className="mt-3 flex items-center justify-between px-1"><span className="text-xs font-semibold text-slate-800">{item.label}</span><span className="flex items-center gap-1 text-[10px] font-semibold text-blue-700">Ver demos <ArrowUpRight size={12}/></span></div>
  </a>;
}

export function HomeShowcase() {
  return <section className="relative overflow-hidden border-y border-slate-100 bg-[#f8faff] py-16 sm:py-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,.10),transparent_60%)]"/>
    <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
      <div className="mx-auto max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-blue-700"><Sparkles size={13}/> Lo que podemos crear</span>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">Ideas que se convierten en <span className="text-blue-700">experiencias reales.</span></h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Explora una muestra de nuestras páginas web, paneles empresariales y agentes de inteligencia artificial. Cada proyecto está diseñado para resolver necesidades reales.</p>
      </div>
      <div className="relative mt-12">
        <div className="demo-marquee flex w-max gap-5 py-3 sm:gap-7">
          {[...previews,...previews].map((item,index)=><div key={item.id+"-"+index} className={index%2===0?"demo-float-a":"demo-float-b"}><DemoCard item={item}/></div>)}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><div className="flex items-center gap-2 text-xs text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-500"/> 7 tipos de demostraciones</div><Link href="/demostraciones" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700">Ver todas las demostraciones <ArrowUpRight size={14}/></Link></div>
    </div>
    <style jsx global>{`
      .demo-marquee { animation: demo-scroll 90s linear infinite; }
      .demo-marquee:hover { animation-play-state: paused; }
      .demo-card { transition: transform 450ms ease, filter 450ms ease; }
      .demo-card-detail { opacity: 0; transform: translateY(8px); pointer-events: none; transition: opacity 350ms ease, transform 350ms ease; transition-delay: 0ms; }
      .demo-card:hover { z-index: 20; transform: scale(1.075); filter: drop-shadow(0 18px 24px rgba(15,23,42,.16)); transition-delay: 3s; }
      .demo-card:hover .demo-card-detail { opacity: 1; transform: translateY(0); transition-delay: 3s; }
      .demo-card:not(:hover) { transition-delay: 0ms; }
      .demo-float-a { animation: demo-float 5s ease-in-out infinite; }
      .demo-float-b { animation: demo-float 6s ease-in-out infinite reverse; }
      @keyframes demo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes demo-float { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-9px) rotate(1deg); } }
      @media (prefers-reduced-motion: reduce) { .demo-marquee,.demo-float-a,.demo-float-b { animation: none; } .demo-card,.demo-card-detail { transition: none; } }
    `}</style>
  </section>;
}
