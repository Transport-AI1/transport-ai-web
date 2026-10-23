
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Globe,
  Layers3,
  MessageCircle,
  PhoneCall,
  Workflow,
  Zap,
} from "lucide-react";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/demostraciones", label: "Demostraciones" },
  { href: "/presupuestos", label: "Precios" },
  { href: "/seguridad", label: "Seguridad" },
  { href: "/contacto", label: "Contacto" },
];

const serviceLinks = [
  {
    href: "/servicios",
    label: "Páginas web",
    icon: Globe,
  },
  {
    href: "/servicios",
    label: "Agentes de IA",
    icon: Bot,
  },
  {
    href: "/servicios",
    label: "Agentes de voz",
    icon: PhoneCall,
  },
  {
    href: "/servicios",
    label: "Automatizaciones",
    icon: Workflow,
  },
  {
    href: "/servicios",
    label: "Software a medida",
    icon: Code2,
  },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
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
              <span className="block text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Web · IA · Automatización
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-blue-700"
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

        {/* Accesos rápidos a servicios */}
        <nav
          aria-label="Servicios principales"
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 sm:px-8"
        >
          {serviceLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Navegación móvil */}
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

      <a
        href="https://wa.me/34659980603?text=Hola%20Transport%20AI%2C%20quiero%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con Transport AI por WhatsApp"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1fb958] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-3">
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
              Desarrollo web, agentes de inteligencia artificial,
              automatización y software a medida para empresas de distintos
              sectores.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Desarrollo web",
                "Agentes de IA",
                "Automatización",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Explora Transport AI
            </p>

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
              <Link
                href="/ia-para-transporte-logistica"
                className="transition hover:text-white"
              >
                IA para transporte y logística
              </Link>
              <Link
                href="/privacidad"
                className="transition hover:text-white"
              >
                Política de privacidad
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              ¿Tienes un proyecto?
            </p>

            <p className="mt-4 text-lg font-semibold text-white">
              Álvaro Chaveinte Camargo
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Fundador de Transport AI
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Cuéntanos qué quieres crear, qué tareas necesitas automatizar o
              qué proceso de tu empresa te gustaría mejorar.
            </p>

            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="mailto:contacto@transportai.es"
              className="mt-4 flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              contacto@transportai.es
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Transport AI. Todos los derechos
          reservados.
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
