import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "../components/site-shell";

const monthlyPlans = [
  {
    name: "Esencial",
    price: "300 €",
    suffix: "/mes",
    description: "Para automatizar una parte concreta de la operativa.",
    features: [
      "Automatización de un proceso delimitado",
      "Configuración inicial acordada",
      "Seguimiento básico del funcionamiento",
      "Soporte según condiciones del servicio",
    ],
  },
  {
    name: "Operativa",
    price: "600 €",
    suffix: "/mes",
    description: "Para empresas que necesitan conectar varios procesos.",
    popular: true,
    features: [
      "Varios flujos de automatización",
      "Integraciones previamente definidas",
      "Registro y seguimiento de incidencias",
      "Mantenimiento y mejoras acordadas",
    ],
  },
  {
    name: "Avanzada",
    price: "900 €+",
    suffix: "/mes",
    description: "Para operaciones con necesidades más complejas.",
    features: [
      "Automatizaciones de mayor alcance",
      "Supervisión de varios procesos",
      "Integraciones adicionales según viabilidad",
      "Plan de evolución personalizado",
    ],
  },
];

const projects = [
  {
    icon: Workflow,
    name: "Automatización de procesos",
    price: "1.500–4.000 €",
    duration: "Estimación inicial: 2–4 semanas",
    description:
      "Automatización de tareas repetitivas, reglas operativas, avisos y actualización de información.",
  },
  {
    icon: GitBranch,
    name: "Gestión de incidencias",
    price: "6.000–8.000 €",
    duration: "Estimación inicial: 4–6 semanas",
    description:
      "Sistema para registrar incidencias, clasificar casos, coordinar actuaciones y realizar seguimiento.",
  },
  {
    icon: Database,
    name: "Integración de CRM e IA",
    price: "8.000–12.000 €",
    duration: "Estimación inicial: 6–10 semanas",
    description:
      "Conexión con sistemas empresariales, consulta de datos y automatización de operaciones mediante IA.",
  },
  {
    icon: MessageSquare,
    name: "Atención al cliente multicanal",
    price: "10.000–15.000 €",
    duration: "Estimación inicial: 8–12 semanas",
    description:
      "Flujos de atención que pueden integrar correo, canales de mensajería, clasificación y escalado a personas.",
  },
  {
    icon: Layers3,
    name: "Plataforma operativa integral",
    price: "15.000–20.000 €+",
    duration: "Estimación inicial: 10–16+ semanas",
    description:
      "Plataforma a medida con paneles, integraciones, automatizaciones y permisos diferenciados por equipos.",
  },
];

export default function BudgetsPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-5%] top-[-30%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute left-[20%] top-[60%] h-[220px] w-[400px] rounded-full bg-indigo-600/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Eyebrow>Inversión y soluciones</Eyebrow>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Tecnología con un alcance claro.
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Una inversión adaptada a tu empresa.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Desde automatizaciones concretas hasta plataformas empresariales
            completas. Consulta nuestras referencias de inversión y solicita
            una propuesta adaptada a tus procesos.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
            >
              Ver proyectos a medida
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium transition hover:border-blue-400/40 hover:bg-white/[0.04]"
            >
              Solicitar presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Alcance definido", "Qué incluye y qué queda fuera"],
              ["02", "Fases de trabajo", "Entregas y validaciones acordadas"],
              ["03", "Costes transparentes", "Integraciones y extras identificados"],
            ].map(([n, title, text]) => (
              <div key={n} className="rounded-xl border border-white/[0.08] bg-black/20 p-4">
                <p className="text-xs text-blue-400">{n}</p>
                <p className="mt-2 text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Servicios recurrentes"
          title="Automatización y soporte continuado."
          description="Planes orientativos para servicios recurrentes con un alcance acordado. Las cuotas no implican que cualquier desarrollo nuevo esté incluido."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {monthlyPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.popular
                  ? "border-blue-400/40 bg-gradient-to-b from-blue-500/[0.12] to-[#0b0f17] shadow-xl shadow-blue-950/20"
                  : "border-white/[0.09] bg-white/[0.025]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                  Más completo
                </span>
              )}

              <p className="text-sm font-medium text-slate-300">{plan.name}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.suffix}</span>
              </div>
              <p className="mt-4 min-h-12 text-sm leading-6 text-slate-400">
                {plan.description}
              </p>

              <div className="my-7 h-px bg-white/[0.08]" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/contacto?plan=${encodeURIComponent(plan.name)}`}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-blue-500 hover:bg-blue-400"
                    : "border border-white/15 hover:border-blue-400/40 hover:bg-white/[0.04]"
                }`}
              >
                Consultar este plan
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          Cuotas orientativas, más IVA. El precio final depende del alcance,
          mantenimiento, consumo de servicios externos y condiciones acordadas.
        </p>
      </section>

      <section id="proyectos" className="scroll-mt-24 border-y border-white/[0.08] bg-[#090c12]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Desarrollo a medida"
            title="Proyectos según la complejidad real."
            description="Referencias iniciales para orientar la conversación. Cada proyecto requiere validar requisitos, accesos, integraciones, pruebas y entregables antes de cerrar el precio."
          />

          <div className="space-y-4">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.name}
                  className="group grid gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.025] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
                >
                  <div className="flex gap-5">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 sm:flex">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                        PROYECTO 0{index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>
                      <p className="mt-3 text-xs text-slate-500">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5 lg:block lg:border-0 lg:pt-0 lg:text-right">
                    <div>
                      <p className="text-2xl font-semibold text-white">{project.price}</p>
                      <p className="mt-1 text-xs text-slate-500">Más IVA</p>
                    </div>
                    <Link
                      href={`/contacto?proyecto=${encodeURIComponent(project.name)}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300 lg:mt-4"
                    >
                      Consultar
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-7 rounded-2xl border border-blue-400/15 bg-blue-500/[0.05] p-5 sm:p-6">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
              <div>
                <h3 className="font-semibold">¿Tu proyecto no encaja en estas referencias?</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Los sistemas con varias delegaciones, distintos perfiles de acceso,
                  múltiples canales y dependencias de terceros pueden requerir un
                  alcance superior. Estudiaremos el caso antes de presentar una oferta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Qué determina el presupuesto</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              No pagas por una etiqueta. Pagas por el alcance.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Antes de fijar el precio, definimos qué debe hacer el sistema,
              qué herramientas se conectarán y cómo se comprobará que funciona.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [Code2, "Complejidad del desarrollo"],
              [Database, "APIs y acceso a datos"],
              [ShieldCheck, "Seguridad y permisos"],
              [Zap, "Pruebas y despliegue"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof Code2;

              return (
                <div key={label as string} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <ItemIcon className="h-5 w-5 text-blue-400" />
                  <p className="mt-4 text-sm font-medium">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-[#101624] to-[#07090d] p-8 sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Presupuesto personalizado
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Cuéntanos qué necesitas construir.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                Revisaremos el problema, las integraciones y las prioridades para
                definir una propuesta adaptada a tu empresa.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="relative mt-10 border-t border-white/[0.1] pt-6 text-xs text-slate-500">
            Álvaro Chaveinte Camargo · Fundador de Transport AI
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
