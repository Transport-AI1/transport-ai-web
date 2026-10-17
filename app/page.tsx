
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Sparkles,
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
    title: "Inteligencia artificial",
    description:
      "Agentes de IA que interpretan solicitudes, consultan información y ejecutan tareas dentro de procesos definidos.",
    tags: ["Agentes IA", "Clasificación", "Asistencia"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conectamos tareas, reglas y acciones para reducir trabajo manual y mejorar la coordinación entre equipos.",
    tags: ["Flujos", "Incidencias", "Notificaciones"],
  },
  {
    number: "03",
    icon: Database,
    title: "CRM e integraciones",
    description:
      "Conectamos las herramientas que ya utiliza tu empresa mediante APIs y flujos de datos compatibles.",
    tags: ["APIs", "CRM", "Sincronización"],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Software a medida",
    description:
      "Desarrollamos paneles, plataformas internas y sistemas adaptados a las necesidades reales de tu negocio.",
    tags: ["Dashboards", "Portales", "Permisos"],
  },
];

const industries = [
  {
    icon: Building2,
    title: "Logística y transporte",
    text: "Seguimiento operativo, incidencias, comunicaciones y coordinación de equipos.",
  },
  {
    icon: Network,
    title: "Servicios y operaciones",
    text: "Gestión de tareas, avisos, información y procesos entre departamentos.",
  },
  {
    icon: MessageSquareText,
    title: "Atención al cliente",
    text: "Clasificación de consultas, respuestas asistidas y derivación de casos.",
  },
  {
    icon: Code2,
    title: "Empresas con sistemas propios",
    text: "Integraciones y herramientas personalizadas que complementan tu software actual.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analizamos",
    text: "Entendemos tu proceso, los problemas actuales y el resultado que necesitas.",
  },
  {
    number: "02",
    title: "Diseñamos",
    text: "Definimos la solución, las integraciones, el alcance y las fases de trabajo.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    text: "Construimos y probamos la solución con criterios de aceptación acordados.",
  },
  {
    number: "04",
    title: "Optimizamos",
    text: "Evaluamos el funcionamiento y planteamos mejoras según las necesidades.",
  },
];

const priceReferences = [
  {
    title: "Automatización de procesos",
    price: "1.500–4.000 €",
    detail: "Flujos concretos y tareas repetitivas.",
  },
  {
    title: "Integración de CRM e IA",
    price: "8.000–12.000 €",
    detail: "Conexión de sistemas y automatización de operaciones.",
  },
  {
    title: "Plataforma operativa integral",
    price: "Desde 15.000 €",
    detail: "Sistemas personalizados con varios componentes.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-8%] top-[-12%] h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[150px]" />
          <div className="absolute left-[-12%] top-[40%] h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Eyebrow>Inteligencia artificial · Automatización · Software</Eyebrow>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Convertimos procesos complejos en
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                sistemas inteligentes.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Diseñamos soluciones tecnológicas a medida para empresas que
              quieren automatizar tareas, conectar herramientas y mejorar
              el control de sus operaciones.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/presupuestos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-7 py-4 text-sm font-medium text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/[0.06]"
              >
                Ver precios y presupuestos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Desarrollo a medida
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Integración con tus sistemas
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Alcance por fases
              </span>
            </div>
          </div>

          {/* VISUAL TECNOLÓGICO */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#090e17]/95 shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Intelligent Operations
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Arquitectura de solución
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-blue-300">
                  CONCEPTO
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                      <MessageSquareText className="h-5 w-5 text-slate-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Información empresarial
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Email · CRM · Aplicaciones
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex h-9 items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-blue-400/70 to-blue-500" />
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/[0.15] to-indigo-500/[0.06] p-5">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20">
                      <Bot className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Motor de inteligencia
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Interpretación · Reglas · Acciones
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 grid grid-cols-3 gap-2">
                    {["Analizar", "Validar", "Decidir"].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/[0.08] bg-black/20 px-2 py-2.5 text-center text-[10px] text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex h-9 items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-blue-500 to-indigo-400/70" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-4">
                    <GitBranch className="mb-3 h-5 w-5 text-blue-400" />
                    <p className="text-xs font-semibold">Acciones coordinadas</p>
                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      Flujos e integraciones
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-4">
                    <ShieldCheck className="mb-3 h-5 w-5 text-indigo-300" />
                    <p className="text-xs font-semibold">Control operativo</p>
                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      Permisos y trazabilidad
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-center text-[10px] leading-5 text-slate-600">
                  Representación conceptual. Las funciones finales dependen
                  del alcance de cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:px-8 md:grid-cols-3">
          {[
            {
              title: "Menos tareas manuales",
              text: "Automatización de procesos repetitivos y definidos.",
            },
            {
              title: "Sistemas conectados",
              text: "Información coordinada entre las herramientas compatibles.",
            },
            {
              title: "Mayor trazabilidad",
              text: "Seguimiento de acciones, estados y excepciones.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Check className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Soluciones tecnológicas para problemas reales."
          description="Cada empresa tiene procesos distintos. Diseñamos la combinación de IA, automatización e integración que necesita cada proyecto."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.035] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Explorar todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SECTORES */}
      <section className="border-y border-white/[0.07] bg-[#090c12]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Dónde aportamos valor"
            title="Una tecnología. Diferentes sectores."
            description="La solución se adapta al proceso de tu empresa, tanto si necesitas optimizar operaciones como conectar aplicaciones o mejorar la atención al cliente."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-blue-400/30"
                >
                  <Icon className="h-6 w-6 text-blue-400" />
                  <h3 className="mt-5 text-base font-semibold">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {industry.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Nuestra metodología"
          title="Un proceso claro, de principio a fin."
          description="Definimos qué se va a construir, cómo se validará y qué dependencias pueden afectar a la entrega."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-l border-blue-400/30 pl-5">
              <p className="text-sm font-semibold text-blue-400">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section className="border-y border-white/[0.07] bg-[#090c12]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Precios orientativos"
            title="Desde una automatización hasta una plataforma completa."
            description="Estas referencias ayudan a dimensionar la inversión. El precio definitivo se confirma después de analizar los requisitos y la viabilidad técnica."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {priceReferences.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border p-6 sm:p-7 ${
                  index === 1
                    ? "border-blue-400/30 bg-blue-500/[0.07]"
                    : "border-white/[0.09] bg-white/[0.025]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  PROYECTO 0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-5 text-3xl font-semibold tracking-tight">
                  {item.price}
                </p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {item.detail}
                </p>
                <Link
                  href={`/contacto?proyecto=${encodeURIComponent(item.title)}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  Consultar mi proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-semibold">¿Necesitas un servicio recurrente?</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Consulta también las opciones mensuales y los servicios incluidos.
              </p>
            </div>
            <Link
              href="/presupuestos"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-blue-400/30 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/10"
            >
              Ver precios y presupuestos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            Importes orientativos, más IVA. Los plazos y precios pueden variar
            según las integraciones, el acceso a los datos, las pruebas y los
            servicios de terceros necesarios.
          </p>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#111827] via-[#0b0f17] to-[#07090d] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Eyebrow>Quién está detrás</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Tecnología construida con visión de negocio.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Transport AI nace con una idea: que las empresas puedan
                aprovechar la inteligencia artificial y la automatización
                para resolver problemas reales, conectar sus herramientas
                y mejorar sus operaciones.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Cada proyecto empieza por entender cómo trabaja la empresa y
                qué necesita conseguir, antes de definir la solución tecnológica.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-black/25 p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10">
                <Zap className="h-7 w-7 text-blue-400" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                Fundador de Transport AI
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Álvaro Chaveinte Camargo
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Desarrollo de soluciones de inteligencia artificial,
                automatización e integración tecnológica para empresas.
              </p>
              <Link
                href="/contacto"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Contactar con Transport AI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-[#101624] to-[#07090d] p-8 sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Hablemos de tu proyecto
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                El siguiente paso empieza con un problema real.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Cuéntanos qué quieres mejorar. Analizaremos tus necesidades
                y valoraremos una solución con un alcance claro.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
            >
              Solicitar propuesta
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
