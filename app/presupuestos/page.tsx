
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Building2,
  Check,
  Code2,
  Database,
  GitBranch,
  Headphones,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiteShell,
  Eyebrow,
  SectionHeading,
} from "../components/site-shell";

const plans = [
  {
    name: "Automatización",
    price: "Desde 300 €",
    period: "/ mes",
    description:
      "Para automatizar tareas repetitivas y reducir trabajo manual en procesos concretos.",
    features: [
      "Automatizaciones de alcance definido",
      "Conexión entre herramientas compatibles",
      "Notificaciones y flujos de trabajo",
      "Supervisión y ajustes según el plan",
    ],
    icon: Workflow,
    featured: false,
  },
  {
    name: "Soporte continuado",
    price: "Desde 600 €",
    period: "/ mes",
    description:
      "Para empresas que necesitan mantener, supervisar y mejorar sus soluciones de IA.",
    features: [
      "Mantenimiento y seguimiento",
      "Corrección de incidencias",
      "Mejoras evolutivas acordadas",
      "Supervisión de integraciones",
    ],
    icon: Headphones,
    featured: true,
  },
  {
    name: "Solución avanzada",
    price: "Desde 900 €",
    period: "/ mes",
    description:
      "Para sistemas con más procesos, integraciones o necesidades de soporte.",
    features: [
      "Flujos de trabajo más complejos",
      "Varias integraciones",
      "Seguimiento ampliado",
      "Alcance y condiciones personalizados",
    ],
    icon: Network,
    featured: false,
  },
];

const projects = [
  {
    level: "Complejidad baja",
    title: "Automatización de procesos",
    price: "1.500–4.000 €",
    description:
      "Automatizar tareas concretas que actualmente se realizan de forma manual.",
    examples: [
      "Traspaso de información entre aplicaciones",
      "Generación automática de documentos",
      "Avisos, tareas y notificaciones",
    ],
    icon: Zap,
  },
  {
    level: "Complejidad media",
    title: "CRM e integraciones con IA",
    price: "4.000–8.000 €",
    description:
      "Conectar herramientas y añadir inteligencia a procesos empresariales existentes.",
    examples: [
      "Integración con CRM o software de gestión",
      "Clasificación y tratamiento de información",
      "Panel de seguimiento y automatizaciones",
    ],
    icon: Database,
  },
  {
    level: "Complejidad alta",
    title: "Gestión inteligente de incidencias",
    price: "6.000–12.000 €",
    description:
      "Sistemas que identifican problemas, ejecutan acciones y derivan los casos complejos.",
    examples: [
      "Detección y clasificación de incidencias",
      "Comunicación con clientes o equipos",
      "Escalado de casos y registro de resultados",
    ],
    icon: ShieldCheck,
  },
  {
    level: "Complejidad alta",
    title: "Atención al cliente con IA",
    price: "6.000–15.000 €",
    description:
      "Automatizar parte de la atención mediante canales conectados y procesos controlados.",
    examples: [
      "Gestión de consultas y reclamaciones",
      "Integración con correo, CRM y mensajería",
      "Seguimiento y derivación a una persona",
    ],
    icon: MessageSquareText,
  },
  {
    level: "Complejidad muy alta",
    title: "Software empresarial a medida",
    price: "8.000–18.000 €",
    description:
      "Aplicaciones adaptadas a las operaciones, usuarios y permisos de cada empresa.",
    examples: [
      "Paneles privados por usuario o delegación",
      "Roles, permisos y separación de datos",
      "Procesos, informes y módulos personalizados",
    ],
    icon: Code2,
  },
  {
    level: "Complejidad integral",
    title: "Plataforma operativa con IA",
    price: "15.000–30.000 €+",
    description:
      "Un sistema que coordina varios procesos empresariales, herramientas y equipos.",
    examples: [
      "Múltiples integraciones y canales",
      "Automatizaciones conectadas entre sí",
      "Pruebas, seguridad y despliegue",
    ],
    icon: Boxes,
  },
];

export default function PresupuestosPage() {
  return (
    <SiteShell>
      <main className="bg-[#070910] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.20),transparent_48%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
            <Eyebrow>PRECIOS TRANSPARENTES</Eyebrow>

            <div className="mt-6 max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Precios y presupuestos
                <span className="mt-2 block text-blue-400">
                  adaptados a tu empresa.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Desde automatizaciones concretas hasta plataformas empresariales
                con inteligencia artificial. El precio depende del alcance,
                las integraciones necesarias y la complejidad real del proyecto.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium transition hover:bg-blue-500"
                >
                  Solicitar presupuesto <ArrowRight size={18} />
                </Link>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-slate-200 transition hover:border-blue-400/60 hover:bg-white/5"
                >
                  Ver proyectos <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Alcance definido", "Qué necesita realmente tu empresa."],
                ["02", "Coste transparente", "Partidas y alcance acordados antes de desarrollar."],
                ["03", "Solución a medida", "Sin pagar por funciones innecesarias."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="text-sm text-blue-400">{number}</span>
                  <h2 className="mt-3 font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <Eyebrow>SERVICIOS RECURRENTES</Eyebrow>
          <SectionHeading
            title="Soluciones que siguen funcionando."
            description="Planes orientativos para mantener, supervisar y evolucionar las soluciones una vez implantadas."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-7 ${
                    plan.featured
                      ? "border-blue-500/60 bg-blue-500/[0.08]"
                      : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-5 w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                      Más completo
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400">{plan.period}</span>
                  </div>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-blue-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacto"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium transition hover:border-blue-400/60 hover:bg-white/5"
                  >
                    Consultar plan <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Precios mensuales orientativos. El servicio concreto, los límites,
            el mantenimiento incluido y los costes de terceros se definen por
            escrito antes de contratar.
          </p>
        </section>

        <section
          id="proyectos"
          className="border-y border-white/10 bg-[#0a0d16]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
            <Eyebrow>PROYECTOS A MEDIDA</Eyebrow>
            <SectionHeading
              title="Cada proyecto tiene su complejidad."
              description="Precios orientativos organizados por tipo de solución. El presupuesto final se calcula según las funciones, los sistemas existentes, la calidad de los datos, las pruebas y el despliegue necesarios."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.title}
                    className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.045] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                        <Icon size={23} />
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1.5 text-right text-xs text-slate-400">
                        {project.level}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Inversión orientativa
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-blue-300">
                        {project.price}
                      </p>
                    </div>

                    <div className="my-6 h-px bg-white/10" />

                    <p className="mb-3 text-sm font-medium text-slate-200">
                      Qué puede incluir
                    </p>
                    <ul className="flex-1 space-y-3">
                      {project.examples.map((example) => (
                        <li
                          key={example}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >
                          <Check
                            size={16}
                            className="mt-1 shrink-0 text-blue-400"
                          />
                          {example}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contacto"
                      className="mt-8 inline-flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-medium transition group-hover:border-blue-400/40"
                    >
                      Solicitar presupuesto
                      <ArrowUpRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-slate-300">
                  <Layers3 size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">¿Tu proyecto combina varias soluciones?</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Una plataforma con varios canales, integraciones, permisos,
                    automatizaciones y reglas de negocio se presupuesta como un
                    proyecto integral. No se calcula sumando automáticamente
                    los precios de las tarjetas: se estudia el alcance completo
                    para evitar duplicidades y valorar las dependencias reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Eyebrow>EL PRESUPUESTO</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Primero entendemos el problema. Después definimos la solución.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Antes de confirmar un precio, revisamos los procesos actuales,
                las herramientas que ya utiliza la empresa y las integraciones
                disponibles. Así podemos concretar el alcance, los plazos y los
                costes con mayor precisión.
              </p>
              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium transition hover:bg-blue-500"
              >
                Hablar sobre mi proyecto <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Análisis",
                  description: "Necesidades, procesos y herramientas existentes.",
                },
                {
                  number: "02",
                  title: "Alcance y presupuesto",
                  description: "Funciones, entregables, plazos y costes definidos.",
                },
                {
                  number: "03",
                  title: "Desarrollo y validación",
                  description: "Implementación, pruebas y entrega acordada.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="text-sm font-medium text-blue-400">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7 text-sm leading-6 text-slate-500">
            Los importes son estimaciones iniciales, no ofertas vinculantes.
            Los precios indicados no incluyen IVA. Las licencias, los servicios
            externos, el uso de modelos de IA y las API de pago se valorarán
            según las necesidades de cada proyecto.
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
