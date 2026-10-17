
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "../components/site-shell";

const solutions = [
  {
    icon: Bot,
    number: "01",
    title: "Agentes de inteligencia artificial",
    description:
      "Sistemas capaces de interpretar solicitudes, consultar información empresarial y ejecutar tareas dentro de límites definidos.",
    examples: [
      "Clasificación y tratamiento de solicitudes",
      "Asistencia inteligente a equipos internos",
      "Consulta de información empresarial",
      "Escalado de casos que requieren intervención humana",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Automatización de operaciones",
    description:
      "Conectamos eventos, reglas y acciones para reducir trabajo manual, eliminar tareas repetitivas y mejorar la trazabilidad.",
    examples: [
      "Creación y actualización de registros",
      "Avisos y recordatorios automáticos",
      "Gestión de incidencias y excepciones",
      "Asignación inteligente de tareas",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "CRM, APIs e integraciones",
    description:
      "Conectamos tus herramientas actuales para que los datos y las operaciones puedan fluir entre sistemas compatibles.",
    examples: [
      "Integración con CRM y ERP",
      "Sincronización de datos",
      "Conexión entre aplicaciones",
      "Validación y registro de operaciones",
    ],
  },
  {
    icon: Layers3,
    number: "04",
    title: "Plataformas y paneles a medida",
    description:
      "Diseñamos interfaces de trabajo que centralizan la información y permiten supervisar procesos desde un único entorno.",
    examples: [
      "Paneles de gestión y seguimiento",
      "Roles y permisos por usuario",
      "Control de tareas y estados",
      "Accesos independientes por equipo o delegación",
    ],
  },
  {
    icon: MessageSquare,
    number: "05",
    title: "Comunicación multicanal",
    description:
      "Organizamos las comunicaciones con clientes y equipos, conectándolas con los procesos internos de tu empresa.",
    examples: [
      "Tratamiento de correos electrónicos",
      "Notificaciones mediante canales compatibles",
      "Registro de mensajes y respuestas",
      "Derivación a una persona cuando sea necesario",
    ],
  },
  {
    icon: GitBranch,
    number: "06",
    title: "Sistemas operativos especializados",
    description:
      "Combinamos software, automatizaciones e inteligencia artificial para resolver necesidades operativas de principio a fin.",
    examples: [
      "Coordinación de procesos empresariales",
      "Detección de datos inconsistentes",
      "Historial de actuaciones e incidencias",
      "Métricas e informes de seguimiento",
    ],
  },
];

const principles = [
  {
    icon: LockKeyhole,
    title: "Accesos y permisos",
    description:
      "Cada usuario accede únicamente a la información y las funciones que le corresponden.",
  },
  {
    icon: GitBranch,
    title: "Trazabilidad",
    description:
      "Registramos las acciones, los resultados y las excepciones relevantes del proceso.",
  },
  {
    icon: ShieldCheck,
    title: "Validación y control",
    description:
      "Definimos límites de actuación, pruebas y puntos de revisión humana.",
  },
  {
    icon: Database,
    title: "Protección de datos",
    description:
      "Diseñamos la solución teniendo en cuenta los datos tratados y los requisitos aplicables.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Soluciones tecnológicas</Eyebrow>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Tecnología que trabaja para{" "}
                <span className="text-blue-600">tu empresa.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Desarrollamos soluciones de inteligencia artificial,
                automatización e integración de software para mejorar procesos,
                conectar herramientas y dar más control a tus operaciones.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Cuéntanos tu proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/presupuestos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Ver opciones de presupuesto
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Adaptado a tus procesos
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Integración con tus herramientas
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Operaciones conectadas
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Ejemplo visual de una solución empresarial
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    Arquitectura modular
                  </span>
                </div>

                <div className="grid gap-4 bg-slate-50 p-5 sm:p-7">
                  <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Database className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Sistemas existentes</p>
                        <p className="mt-1 text-xs text-slate-500">
                          CRM · correo · aplicaciones
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
                      <GitBranch className="h-4 w-4" />
                      Integración de datos y procesos
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Automatización e IA</p>
                        <p className="mt-1 text-xs text-slate-500">
                          Reglas · análisis · acciones controladas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <p className="mt-3 text-sm font-semibold">Menos tareas manuales</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Flujos diseñados para cada proceso.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <ShieldCheck className="h-5 w-5 text-blue-600" />
                      <p className="mt-3 text-sm font-semibold">Más supervisión</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Permisos, registros y validaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-5 -left-4 -z-10 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Áreas de especialización"
            title="Una solución para cada reto operativo."
            description="Desarrollamos componentes individuales o proyectos integrales. Definimos el alcance después de analizar tus necesidades, tus herramientas y la viabilidad técnica."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                      {solution.number}
                    </span>
                  </div>

                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">
                    {solution.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {solution.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2">
            <div>
              <Eyebrow>Especialización sectorial</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Tecnología adaptada a la realidad de tus operaciones.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Trabajamos a partir de cómo funciona tu empresa. En transporte
                y logística, por ejemplo, podemos estudiar procesos de
                seguimiento, incidencias, comunicación con clientes y
                coordinación de equipos. El mismo enfoque se puede aplicar a
                otros sectores con necesidades operativas similares.
              </p>

              <Link
                href="/contacto"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Analizar mi proceso
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85"
                alt="Operaciones de almacén y logística"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Ejemplo de aplicación sectorial
                </span>
                <h3 className="mt-4 max-w-md text-2xl font-semibold text-white sm:text-3xl">
                  Más visibilidad. Procesos mejor coordinados.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                  Información conectada para ayudar a los equipos a detectar,
                  gestionar y resolver excepciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Diseño responsable"
            title="Automatizar no significa perder el control."
            description="La seguridad y la supervisión forman parte del diseño de la solución, no son un añadido de última hora."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400">
              <ArrowUpRight className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Siguiente paso
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Empecemos por el proceso que quieres mejorar.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Analizaremos el objetivo, las herramientas disponibles y las
              dependencias técnicas para preparar una propuesta con alcance,
              fases y criterios de validación definidos.
            </p>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Hablar de mi proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
