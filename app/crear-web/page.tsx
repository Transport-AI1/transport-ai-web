import type { Metadata } from "next";
import { SiteShell, Eyebrow } from "../components/site-shell";
import { Clock3, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creación de páginas web | Próximamente — Transport AI",
  description: "El servicio de creación de páginas web de Transport AI todavía no está disponible. Contacta con nosotros para otras soluciones.",
  alternates: { canonical: "/crear-web" },
};

export default function CrearWebPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-blue-600/30 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="mx-auto flex min-h-[68vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
          <Eyebrow>Transport AI · Actualización del servicio</Eyebrow>
          <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-300">
            <Clock3 className="h-8 w-8" />
          </div>
          <span className="mt-7 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            Próximamente
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            La creación de páginas web todavía no está disponible.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Estamos preparando este servicio para ofrecerte una experiencia completa y bien cuidada. Por el momento, el asistente de creación y la contratación online permanecen temporalmente desactivados.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Si necesitas información sobre otros servicios de inteligencia artificial, automatización o software a medida, estaremos encantados de atenderte.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              <MessageCircle className="h-4 w-4" /> Contactar con Transport AI
            </Link>
            <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
