import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "./components/site-shell";

const services = [
  {
    number: "01",
    icon: Bot,
    title: "Inteligencia artificial aplicada",
    description:
      "Agentes capaces de interpretar solicitudes, consultar información y ejecutar tareas dentro de procesos definidos.",
    tags: ["Agentes IA", "Atención", "Clasificación"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conecta tareas, elimina trabajo repetitivo y establece flujos de actuación con reglas y supervisión.",
    tags: ["Flujos", "Incidencias", "Notificaciones"],
  },
  {
    number: "03",
    icon: Database,
    title: "CRM e integraciones",
    description:
      "Conecta tus herramientas y sistemas actuales para que los datos y las acciones estén coordinados.",
    tags: ["APIs", "CRM", "Sistemas internos"],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Software a medida",
    description:
      "Paneles, plataformas internas y herramientas adaptadas a la operativa real de tu empresa.",
    tags: ["Dashboards", "Portales", "Permisos"],
  },
];

const steps = [
  {
    n: "01",
    title: "Entendemos la operativa",
    text: "Analizamos tareas, herramientas, incidencias y objetivos para detectar dónde aporta valor la tecnología.",
  },
  {
    n: "02",
    title: "Diseñamos la solución",
    text: "Definimos alcance, integraciones, datos, seguridad, plazos y criterios de aceptación.",
  },
  {
    n: "03",
    title: "Desarrollamos e integramos",
    text: "Construimos por fases, probamos los casos reales y validamos el comportamiento con tu equipo.",
  },
  {
    n: "04",
    title: "Medimos y mejoramos",
    text: "Evaluamos resultados, corregimos errores y planificamos las siguientes mejoras.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-15%] h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[140px]" />
          <div className="absolute left-[-15%] top-[45%] h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>IA · Automatización · Software</Eyebrow>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Tu empresa tiene procesos.
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Nosotros los hacemos evolucionar.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Diseñamos sistemas de inteligencia artificial, automatizaciones
              e integraciones que ayudan a las empresas a trabajar con más
              control, menos tareas manuales y mejores datos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
              >
                Estudiar mi proyecto
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-slate-200 transition hover:border-blue-400/50 hover:bg-white/[0.04]"
              >
                Explorar soluciones
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Proyectos a medida
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Integración con tus herramientas
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Desarrollo por fases
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c111a]/95 shadow-2xl shadow-blue-950/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <Network className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Operations Intelligence</p>
                    <p className="mt-1 text-[11px] text-slate-500">Concepto de arquitectura</p>
                  </div>
                </div>
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[10px] text-blue-300">
                  VISUAL DEMO
                </span>
              </div>

              <div className="space-y-4 p-5 sm:p-7">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <div className="flex items-center gap-3">
                    <MessageSquareText className="h-5 w-5 text-blue-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Entrada de información</p>
                      <p className="mt-1 text-xs text-slate-500">Email · CRM · Herramientas internas</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-px bg-gradient-to-b from-blue-400 to-indigo-500" />
                </div>

                <div className="rounded-2xl border border-blue-400/25 bg-blue-500/[0.08] p-4 shadow-lg shadow-blue-950/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                      <Zap className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Motor de automatización</p>
                      <p className="mt-1 text-xs text-slate-400">Interpreta · Valida · Decide</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Reglas", "Contexto", "Permisos"].map((item) => (
                      <div key={item} className="rounded-lg border border-white/[0.08] bg-black/20 px-2 py-2 text-center text-[10px] text-slate-400">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-px bg-gradient-to-b from-indigo-500 to-blue-400" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                    <GitBranch className="mb-3 h-5 w-5 text-indigo-300" />
                    <p className="text-xs font-medium">Acción coordinada</p>
                    <p className="mt-1 text-[10px] text-slate-500">Flujos e integraciones</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                    <ShieldCheck className="mb-3 h-5 w-5 text-blue-300" />
                    <p className="text-xs font-medium">Control y seguimiento</p>
                    <p className="mt-1 text-[10px] text-slate-500">Registro y supervisión</p>
                  </div>
                </div>
                <p className="text-center text-[10px] leading-5 text-slate-600">
                  Ilustración conceptual. Cada sistema se define según el alcance del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:px-8 md:grid-cols-3">
          {[
            ["IA aplicada", "Para tareas con reglas y contexto"],
            ["Sistemas conectados", "Para reducir silos de información"],
            ["Soluciones a medida", "Adaptadas a tu operativa real"],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-3">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Check className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Tecnología diseñada para trabajar de verdad."
          description="No se trata de añadir IA porque sí. Se trata de encontrar el punto en el que una solución tecnológica puede mejorar un proceso de negocio."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.04] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-slate-600">{service.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0b0f17]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Una solución. Tu operativa.</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Menos tareas dispersas.
              <span className="block text-blue-400">Más control del proceso.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-400">
              Cuando los equipos trabajan entre correos, hojas de cálculo,
              llamadas y diferentes programas, es fácil perder información.
              Diseñamos flujos que conectan los datos con las acciones.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-300"
            >
              Analizar un proceso de mi empresa
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {[
              ["01", "Recibir", "Capturar información desde los canales definidos."],
              ["02", "Interpretar", "Clasificar solicitudes y detectar datos incompletos."],
              ["03", "Actuar", "Ejecutar acciones autorizadas y coordinar herramientas."],
              ["04", "Supervisar", "Registrar resultados y escalar excepciones."],
            ].map(([n, title, text], i) => (
              <div key={n} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-semibold text-blue-400">
                  {n}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                </div>
                {i < 3 && <ChevronRight className="mt-3 h-4 w-4 shrink-0 text-slate-600" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="De un problema real a una solución medible."
          description="Un proceso claro para reducir incertidumbre, controlar el alcance y construir con criterios definidos."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="border-l border-blue-400/30 pl-5">
              <p className="text-sm font-semibold text-blue-400">{step.n}</p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/70 via-[#101624] to-[#0a0c12] p-8 sm:p-14 lg:p-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Hablemos de tu proyecto
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                ¿Qué podría hacer mejor tu empresa con tecnología?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                Cuéntanos qué proceso quieres mejorar. Estudiaremos las necesidades,
                las integraciones y el alcance antes de proponer una solución.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
            >
              Cuéntanos tu idea
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
