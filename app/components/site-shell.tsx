
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Layers3, Zap, Menu } from "lucide-react";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/presupuestos", label: "Precios y presupuestos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <Link
            href="/"
            aria-label="Transport AI, página de inicio"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 shadow-sm shadow-blue-900/15">
              <Layers3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-slate-950">
                TRANSPORT<span className="text-blue-700"> AI</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.22em] text-slate-500">
                Intelligent systems
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contacto"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:px-5"
          >
            Hablemos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <nav
          aria-label="Navegación móvil"
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 lg:hidden sm:px-8"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:py-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Layers3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                TRANSPORT<span className="text-blue-400"> AI</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Inteligencia artificial, automatización e integración
              tecnológica para empresas que quieren mejorar sus operaciones.
            </p>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Soluciones tecnológicas adaptadas a las necesidades de cada negocio.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Explora</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Dirección
            </p>
            <p className="mt-4 text-lg font-semibold text-white">
              Álvaro Chaveinte Camargo
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Fundador de Transport AI
            </p>
            <Link
              href="/contacto"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Transport AI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-800">
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
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
