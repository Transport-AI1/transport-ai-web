import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Layers3,
  Menu,
  X,
  Zap,
} from "lucide-react";

export function SiteShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07090d]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10">
              <Layers3 className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <span className="block text-lg font-semibold tracking-tight">
                TRANSPORT<span className="text-blue-400"> AI</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-500">
                Intelligent systems
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link className="transition hover:text-blue-400" href="/">
              Inicio
            </Link>
            <Link className="transition hover:text-blue-400" href="/servicios">
              Servicios
            </Link>
            <Link className="transition hover:text-blue-400" href="/contacto">
              Contacto
            </Link>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:bg-blue-400"
          >
            Hablemos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-semibold">
              TRANSPORT<span className="text-blue-400"> AI</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Inteligencia artificial, automatización e integración
              tecnológica para empresas que quieren operar mejor.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Explora</p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <Link href="/servicios" className="hover:text-white">Servicios</Link>
              <Link href="/contacto" className="hover:text-white">Contacto</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">¿Tienes un proceso que mejorar?</p>
            <p className="mb-4 text-sm leading-6 text-slate-400">
              Cuéntanos qué necesita tu empresa y estudiaremos una posible solución.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Cuéntanos tu proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.08] px-5 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Transport AI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-blue-300">
      <Zap className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
