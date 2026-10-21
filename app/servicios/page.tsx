
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Workflow,
  Zap,
  Sparkles,
  MonitorSmartphone,
  Headphones,
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "../components/site-shell";

const solutions = [
  {
    icon: Globe,
    number: "01",
    title: "Diseño y desarrollo web",
    description:
      "Creamos páginas web profesionales para presentar tu empresa, explicar tus servicios y convertir visitas en oportunidades comerciales.",
    examples: [
      "Webs corporativas y páginas comerciales",
      "Landing pages para captar clientes",
      "Diseño adaptable a móviles, tablets y ordenadores",
      "Formularios de contacto y conexión con WhatsApp",
      "Optimización técnica básica para buscadores",
    ],
    tag: "Presencia digital",
  },
  {
    icon: Bot,
    number: "02",
    title: "Agentes de inteligencia artificial",
    description:
      "Incorporamos asistentes que pueden responder preguntas, consultar información y ayudar a tus clientes o empleados desde canales digitales.",
    examples: [
      "Agentes de IA integrados en páginas web",
      "Respuestas basadas en información de tu empresa",
      "Captación y cualificación de potenciales clientes",
      "Consulta de información y procedimientos",
      "Derivación a una persona cuando sea necesario",
    ],
    tag: "Atención inteligente",
  },
  {
    icon: PhoneCall,
    number: "03",
    title: "Agentes de voz y llamadas con IA",
    description:
      "Diseñamos soluciones de voz para atender conversaciones telefónicas, recoger información y automatizar partes de la atención al cliente.",
    examples: [
      "Recepción automatizada de llamadas",
      "Respuesta a preguntas frecuentes",
      "Recogida de datos y solicitudes",
      "Registro y clasificación de conversaciones",
      "Transferencia o escalado de casos complejos",
    ],
    tag: "Comunicación por voz",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Chatbots y asistentes conversacionales",
    description:
      "Creamos experiencias conversacionales para ayudar a los usuarios a encontrar información, resolver dudas y completar acciones.",
    examples: [
      "Chat en páginas web",
      "Asistentes para preguntas frecuentes",
      "Orientación sobre productos y servicios",
      "Recogida de datos de contacto",
      "Conexión con sistemas empresariales compatibles",
    ],
    tag: "Atención digital",
  },
  {
    icon: Workflow,
    number: "05",
    title: "Automatización de tareas y procesos",
    description:
      "Conectamos herramientas y diseñamos flujos automáticos para reducir tareas repetitivas, ahorrar tiempo y mejorar la organización.",
    examples: [
      "Automatización de tareas administrativas",
      "Generación y envío de documentos",
      "Avisos, recordatorios y seguimiento",
      "Procesamiento de correos y formularios",
      "Asignación de tareas y actualización de registros",
    ],
    tag: "Productividad",
  },
  {
    icon: Database,
    number: "06",
    title: "Integraciones, CRM y APIs",
    description:
      "Conectamos las aplicaciones que ya utiliza tu empresa para reducir duplicidades y facilitar el intercambio de información.",
    examples: [
      "Integraciones con CRM y ERP",
      "Conexión entre páginas web y aplicaciones",
      "Sincronización de datos entre herramientas",
      "Integración con APIs disponibles",
      "Validación y registro de operaciones",
    ],
    tag: "Sistemas conectados",
  },
  {
    icon: Code2,
    number: "07",
    title: "Software y aplicaciones a medida",
    description:
      "Desarrollamos herramientas digitales adaptadas a las necesidades de tu negocio cuando las soluciones estándar no son suficientes.",
    examples: [
      "Aplicaciones web internas",
      "Portales para clientes y empleados",
      "Paneles de control y seguimiento",
      "Gestión de usuarios, roles y permisos",
      "Herramientas específicas para cada operativa",
    ],
    tag: "Desarrollo personalizado",
  },
  {
    icon: Layers3,
    number: "08",
    title: "Paneles de gestión y análisis",
    description:
      "Centralizamos información relevante en interfaces claras para facilitar el seguimiento de la actividad y la toma de decisiones.",
    examples: [
      "Cuadros de mando empresariales",
      "Indicadores y métricas operativas",
      "Seguimiento de tareas y estados",
      "Informes y visualización de datos",
      "Vistas adaptadas a cada equipo",
    ],
    tag: "Control y visibilidad",
  },
  {
    icon: MonitorSmartphone,
    number: "09",
    title: "Soluciones operativas sectoriales",
    description:
      "Combinamos desarrollo, automatización e inteligencia artificial para resolver necesidades concretas de empresas con procesos complejos.",
    examples: [
      "Gestión de incidencias y excepciones",
      "Coordinación de equipos y operaciones",
      "Detección de información inconsistente",
      "Seguimiento de solicitudes y actuaciones",
      "Digitalización de procesos existentes",
    ],
    tag: "Soluciones integrales",
  },
];

const principles = [
  {
    icon: LockKeyhole,
    title: "Accesos y permisos",
    description:
      "Diseñamos los permisos en función de los usuarios, los datos y las funciones que necesita cada perfil.",
  },
  {
    icon: GitBranch,
    title: "Trazabilidad",
    description:
      "Cuando el proyecto lo requiere, registramos las acciones, los resultados y las excepciones relevantes.",
  },
  {
    icon: ShieldCheck,
    title: "Validación y supervisión",
    description:
      "Definimos pruebas, límites de actuación y puntos de revisión humana según el riesgo de cada proceso.",
  },
  {
    icon: Database,
    title: "Protección de datos",
    description:
      "Evaluamos qué información se utiliza y qué medidas técnicas y organizativas requiere la solución.",
  },
];

const process = [
  {
    number: "01",
    title: "Entendemos tu necesidad",
    description:
      "Analizamos el problema, los objetivos y cómo trabaja actualmente tu empresa.",
  },
  {
    number: "02",
    title: "Definimos la solución",
    description:
      "Proponemos el alcance, las tecnologías, las integraciones y las fases del proyecto.",
  },
  {
    number: "03",
    title: "Desarrollamos y validamos",
    description:
      "Construimos la solución y comprobamos su funcionamiento con pruebas acordadas.",
  },
  {
    number: "04",
    title: "Implantamos y mejoramos",
    description:
      "Preparamos la puesta en marcha y, si se acuerda, el mantenimiento y la evolución.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="overflow-hidden bg-white text-slate-900">
        {/* HERO */}
        <section className="relative border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Web · Inteligencia artificial · Automatización</Eyebrow>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Creamos tecnología para que tu empresa{" "}
                <span className="text-blue-600">llegue más lejos.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Desarrollamos páginas web, agentes de inteligencia artificial,
                asistentes de voz, automatizaciones y software a medida.
                Conectamos la tecnología con los objetivos reales de tu negocio,
                sea cual sea tu sector.
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
                  href="/demostraciones"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Ver demostraciones
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Soluciones adaptadas a cada empresa
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Proyectos por fases y alcance definido
                </span>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Ecosistema digital
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Ejemplo visual de servicios conectados
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    Web + IA + procesos
                  </span>
                </div>

                <div className="grid gap-4 bg-slate-50 p-5 sm:p-7">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Globe className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-semibold">Páginas web</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Presencia digital y captación
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-semibold">Agentes de IA</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Texto, voz y atención
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
                      <GitBranch className="h-4 w-4" />
                      Sistemas y procesos conectados
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Workflow className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          Automatización empresarial
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Tareas · integraciones · seguimiento
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <p className="mt-3 text-sm font-semibold">
                        Menos trabajo repetitivo
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Más tiempo para tareas de valor.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <ShieldCheck className="h-5 w-5 text-blue-600" />
                      <p className="mt-3 text-sm font-semibold">
                        Más control
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Procesos definidos y supervisables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-5 -left-4 -z-10 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Todo lo que tu empresa necesita para dar el siguiente paso."
            description="Puedes contratar un servicio concreto o combinar varias soluciones en un proyecto integral. El alcance se define según tus objetivos, presupuesto y necesidades técnicas."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                      {solution.number}
                    </span>
                  </div>

                  <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {solution.tag}
                  </span>

                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
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
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacto"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                  >
                    Consultar este servicio
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTORES */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow>Para distintos sectores</Eyebrow>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  No importa tu sector. Importa lo que necesitas mejorar.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Trabajamos con empresas que quieren mejorar su presencia
                  digital, atender mejor a sus clientes, reducir tareas
                  repetitivas o conectar sus herramientas. Estudiamos cada caso
                  para proponer una solución acorde a la operativa real del
                  negocio.
                </p>

                <Link
                  href="/contacto"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Cuéntanos qué necesitas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">
                    Comercios y servicios
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Webs comerciales, atención digital y automatización de
                    consultas.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Headphones className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">
                    Atención al cliente
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Agentes de texto y voz, clasificación de solicitudes y
                    seguimiento.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">
                    Empresas y equipos internos
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Integraciones, aplicaciones internas y procesos
                    administrativos.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-600 p-5 text-white shadow-lg shadow-blue-900/10">
                  <Zap className="h-6 w-6 text-blue-100" />
                  <h3 className="mt-4 font-semibold">
                    Transporte y logística
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    Nuestra especialidad: incidencias, seguimiento,
                    coordinación y operaciones con vehículos.
                  </p>
                  <Link
                    href="/ia-para-transporte-logistica"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-100"
                  >
                    Ver especialización
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMA DE TRABAJO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="De una necesidad concreta a una solución útil."
            description="Priorizamos los objetivos del negocio, la viabilidad técnica y una implantación controlada."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-blue-600">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SEGURIDAD */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <SectionHeading
              eyebrow="Diseño responsable"
              title="La automatización debe ayudarte, no quitarte el control."
              description="La seguridad, la supervisión y la protección de datos deben adaptarse al funcionamiento y al riesgo de cada proyecto."
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
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400">
              <Sparkles className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Cuéntanos tu idea
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ¿Qué te gustaría mejorar en tu empresa?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tanto si necesitas una web nueva como si quieres incorporar un
              agente de IA, automatizar tareas o desarrollar una herramienta
              específica, estudiaremos contigo el enfoque más adecuado.
            </p>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-5 text-xs leading-6 text-slate-400">
              Cada proyecto se valora según su alcance, complejidad e
              integraciones necesarias.
            </p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
