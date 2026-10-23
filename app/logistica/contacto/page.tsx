import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle, ShieldCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Transport AI Logística",
  description: "Contacta con Transport AI para estudiar automatizaciones, software e inteligencia artificial para transporte y logística.",
  alternates: { canonical: "https://logistica.transportai.es/contacto" },
};

const email = "contacto@transportai.es";
const whatsapp = "https://wa.me/34659980603?text=Hola%2C%20quiero%20hablar%20sobre%20una%20soluci%C3%B3n%20de%20IA%20para%20transporte%20y%20log%C3%ADstica.";

export default function ContactPage() {
  return <main className="min-h-screen bg-[#070b14] text-slate-100">
    <header className="border-b border-white/[0.08]"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"><Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500"><Truck size={22}/></span><span><span className="block font-semibold text-white">Transport AI</span><span className="text-[10px] uppercase tracking-[0.2em] text-blue-300">Logística inteligente</span></span></Link><Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={16}/> Volver a la web</Link></div></header>
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24"><div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-xs text-blue-200"><span className="h-1.5 w-1.5 rounded-full bg-sky-400"/> Hablemos de tu operativa</div>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Cuéntanos qué necesitas automatizar.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Podemos estudiar procesos de transporte, gestión de incidencias, atención al cliente, coordinación de conductores e integración con las herramientas que ya utiliza tu empresa.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a href={whatsapp} target="_blank" rel="noreferrer" className="group rounded-2xl border border-blue-400/25 bg-blue-400/[0.07] p-6 transition hover:border-blue-300/50"><span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500 text-white"><MessageCircle size={23}/></span><h2 className="mt-5 text-xl font-semibold">Hablar por WhatsApp</h2><p className="mt-2 text-sm leading-6 text-slate-400">La forma más directa de explicar tu caso y acordar una primera conversación.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">Abrir WhatsApp <ArrowRight size={16}/></span></a>
        <a href={`mailto:${email}?subject=Consulta%20sobre%20Transport%20AI%20Log%C3%ADstica`} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/25"><span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-slate-100"><Mail size={23}/></span><h2 className="mt-5 text-xl font-semibold">Escribir por correo</h2><p className="mt-2 text-sm leading-6 text-slate-400">Envíanos una descripción del proceso, las herramientas que usáis y el problema que queréis resolver.</p><span className="mt-5 block break-all text-sm font-semibold text-blue-300">{email}</span></a>
      </div>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"><h2 className="font-semibold text-white">Para preparar una propuesta útil</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400"><li>• Qué tarea genera más llamadas, correos o trabajo manual.</li><li>• Qué sistema utilizáis actualmente (CRM, TMS, ERP, correo u hojas de cálculo).</li><li>• Qué debería ocurrir cuando se detecta una incidencia.</li><li>• Si hay una fecha, volumen o requisito importante que debamos tener en cuenta.</li></ul></div>
      <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck size={15} className="mt-0.5 shrink-0"/> No incluyas datos personales de clientes, credenciales ni información confidencial en el primer mensaje. Podemos acordar un canal y unas condiciones adecuados antes de revisar datos reales.</p>
    </section>
    <footer className="border-t border-white/[0.08]"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-slate-500 sm:px-8"><span>© {new Date().getFullYear()} Transport AI</span><nav className="flex gap-5"><Link href="/privacidad" className="hover:text-white">Privacidad</Link><Link href="/seguridad" className="hover:text-white">Seguridad</Link></nav></div></footer>
  </main>;
}
