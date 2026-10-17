
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
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
      "Para automatizar tareas repetitivas y reducir el trabajo manual en procesos concretos.",
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
      "Automatiza tareas concretas que actualmente se realizan de forma manual.",
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
      "Conecta herramientas y añade inteligencia a procesos empresariales existentes.",
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
      "Sistemas que identifican problemas, ejecutan acciones y derivan casos complejos.",
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
      "Automatiza parte de la atención mediante canales conectados y procesos controlados.",
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

const steps = [
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
];

export default function PresupuestosPage() {
  return (
    <SiteShell>
      <div className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white">
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-4xl">
              <Eyebrow>Precios y presupuestos</Eyebrow>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Una inversión adaptada a{" "}
                <span className="text-blue-600">tu empresa.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Desde automatizaciones concretas hasta plataformas
                empresariales con inteligencia artificial. Definimos el precio
                según el alcance, las integraciones y la complejidad real del
                proyecto.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Solicitar presupuesto
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Explorar proyectos
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Alcance definido",
                  description: "Acordamos qué necesita realmente tu empresa.",
                },
                {
                  number: "02",
                  title: "Costes transparentes",
                  description:
                    "Funciones y condiciones detalladas por escrito.",
                },
                {
                  number: "03",
                  title: "Solución a medida",
                  description:
                    "Priorizamos lo que aporta valor a tu negocio.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-900/[0.02]"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    {item.number}
                  </span>
                  <h2 className="mt-3 font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Servicios recurrentes"
            title="Soluciones que siguen evolucionando."
            description="Planes orientativos para mantener, supervisar y mejorar las soluciones una vez implantadas."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 ${
                    plan.featured
                      ? "border-blue-300 bg-blue-50/70 shadow-lg shadow-blue-900/5"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-5 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      Servicio destacado
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  <div className="my-6 h-px bg-slate-200" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-blue-600"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacto"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-white hover:text-blue-700"
                  >
                    Consultar plan
                    <ArrowRight size={16} />
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
          className="border-y border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <SectionHeading
              eyebrow="Proyectos a medida"
              title="Cada proyecto tiene su complejidad."
              description="Estos rangos sirven como referencia inicial. El presupuesto final depende de las funciones, las integraciones, los datos, las pruebas y el despliegue necesarios."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.title}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={23} />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-right text-xs font-medium text-slate-600">
                        {project.level}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold leading-snug text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Inversión orientativa
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-blue-700">
                        {project.price}
                      </p>
                    </div>

                    <div className="my-6 h-px bg-slate-100" />

                    <p className="mb-3 text-sm font-semibold text-slate-800">
                      Qué puede incluir
                    </p>

                    <ul className="flex-1 space-y-3">
                      {project.examples.map((example) => (
                        <li
                          key={example}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <Check
                            size={16}
                            className="mt-1 shrink-0 text-blue-600"
                          />
                          {example}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contacto"
                      className="mt-8 inline-flex items-center justify-between rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                    >
                      Solicitar presupuesto
                      <ArrowUpRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Layers3 size={21} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    ¿Tu proyecto combina varias soluciones?
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Una plataforma con varios canales, integraciones, permisos
                    y automatizaciones se valora como un proyecto integral.
                    Estudiamos las dependencias y el alcance completo, en lugar
                    de sumar automáticamente los precios de cada tarjeta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Eyebrow>Cómo trabajamos</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Primero entendemos el problema. Después definimos la solución.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Revisamos los procesos actuales, las herramientas que utiliza
                tu empresa y las integraciones disponibles. Así podemos
                concretar el alcance, los plazos y los costes con mayor
                precisión antes de iniciar el desarrollo.
              </p>
              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Hablar sobre mi proyecto
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-7 text-sm leading-6 text-slate-500">
            Los importes son estimaciones iniciales, no ofertas vinculantes.
            Los precios indicados no incluyen IVA. Las licencias, los servicios
            externos, el uso de modelos de IA y las API de pago se valorarán
            según las necesidades de cada proyecto.
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400">
              <Layers3 size={23} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Hablemos de tu empresa
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ¿Tienes un proceso que podría funcionar mejor?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Cuéntanos qué necesitas resolver y estudiaremos contigo una
              solución realista, con un alcance y unas condiciones definidos.
            </p>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Solicitar una propuesta
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
