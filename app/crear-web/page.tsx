import type { Metadata } from "next";
import { SiteShell, Eyebrow } from "../components/site-shell";
import { WebBuilderWizard } from "./web-builder-wizard";

export const metadata: Metadata = {
  title: "Crea tu web profesional con IA: 450 € → 300 €",
  description: "Oferta de lanzamiento: crea tu web profesional con IA por 300 € en lugar de 450 €. Cuéntale a nuestro asistente qué necesita tu negocio.",
  alternates: { canonical: "/crear-web" },
};

export default function CrearWebPage() {
  return (
    <SiteShell>
      <div className="overflow-hidden bg-slate-950 text-white">
        <section className="relative isolate border-b border-white/10">
          <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-blue-600/30 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <Eyebrow>Tu negocio merece una buena web</Eyebrow>
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Tu nueva web empieza con una <span className="text-blue-400">conversación.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Habla con nuestro asistente, cuéntale cómo es tu negocio y añade tus fotografías. Prepararemos una primera propuesta visual para que nuestro equipo la revise contigo.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <p className="text-sm font-medium text-blue-300">Oferta de lanzamiento</p>
                <div className="mt-2 flex items-baseline gap-3"><span className="text-2xl text-slate-400 line-through">450 €</span><span className="text-5xl font-semibold tracking-tight">300 €</span></div>
                <p className="mt-1 text-sm font-semibold text-emerald-300">Ahorras 150 € · 33 % de descuento</p>
                <p className="mt-2 text-sm text-slate-300">+ IVA · Total con IVA (21 %): 363 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Web profesional estándar. Dominio, alojamiento y funciones especiales se presupuestan aparte.</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Oferta de lanzamiento</div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-slate-50 py-14 text-slate-900 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <WebBuilderWizard />
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
