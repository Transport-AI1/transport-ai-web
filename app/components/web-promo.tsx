"use client";
import { Clock3, Sparkles } from "lucide-react";

export function WebPromo() {
 return <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-blue-50 shadow-sm">
  <div className="flex items-center gap-3 p-4 sm:p-5">
   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white"><Sparkles size={20}/></span>
   <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-slate-950">Creación de páginas web</span><span className="mt-1 block text-xs text-slate-600">Estamos preparando este servicio para ofrecerlo próximamente.</span></span>
   <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-800"><Clock3 size={13}/> Próximamente</span>
  </div>
  <div className="border-t border-slate-200 px-4 py-3 sm:px-5"><p className="text-xs leading-5 text-slate-500">El asistente de creación y la contratación online están temporalmente desactivados.</p></div>
 </div>;
}
