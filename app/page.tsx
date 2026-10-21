
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Truck,
  Headphones,
  ChartNoAxesCombined,
  Play,
  LockKeyhole,
  MessageSquareText,
  CircleAlert,
  PhoneCall,
  Code2,
  Mail,
  MonitorSmartphone,
  Settings2,
  Building2,
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "./components/site-shell";
import FreeAssistant from "./components/free-assistant";

export const metadata: Metadata = {
  title:
    "Transport AI | Páginas Web, Agentes de IA y Automatización para Empresas",
  description:
    "Creamos páginas web profesionales, agentes de inteligencia artificial para web y llamadas, automatizaciones empresariales, integraciones y software a medida para empresas de cualquier sector.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Transport AI | Desarrollo Web, Inteligencia Artificial y Automatización",
    description:
      "Páginas web, agentes de IA, atención telefónica automatizada, integraciones y soluciones de software adaptadas a tu negocio.",
    url: "/",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport AI | IA, Web y Automatización",
    description:
      "Desarrollo web, agentes de inteligencia artificial y automatización de procesos para empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const transportSeoUrl = "/ia-para-transporte-logistica";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Páginas web profesionales",
    description:
      "Diseñamos y desarrollamos webs modernas, rápidas y adaptadas a móviles para presentar tu negocio, captar clientes y facilitar el contacto.",
    tags: ["Diseño web", "Next.js", "Formularios"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Agentes de inteligencia artificial",
    description:
      "Asistentes para tu web capaces de responder preguntas sobre tu negocio, recopilar información, orientar a los usuarios y derivar consultas.",
    tags: ["Agentes IA", "Atención web", "Captación"],
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Agentes de voz y llamadas",
    description:
      "Soluciones de voz para atender consultas telefónicas, recoger solicitudes, responder preguntas frecuentes y transferir casos cuando sea necesario.",
    tags: ["Voz IA", "Llamadas", "Recepción"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conectamos tareas, correos, formularios, documentos y notificaciones para reducir trabajo repetitivo y coordinar procesos empresariales.",
    tags: ["Flujos", "Tareas", "Notificaciones"],
  },
  {
    number: "05",
    icon: Database,
    title: "CRM e integración de sistemas",
    description:
      "Integramos herramientas y bases de datos para reducir duplicidades, organizar la información y mantener conectados los sistemas que utiliza tu empresa.",
    tags: ["CRM", "APIs", "Integraciones"],
  },
  {
    number: "06",
    icon: Code2,
    title: "Aplicaciones y software a medida",
    description:
      "Desarrollamos portales privados, paneles de control, aplicaciones internas y plataformas adaptadas a las necesidades de cada organización.",
    tags: ["Aplicaciones", "Dashboards", "Software"],
  },
];

const useCases = [
  {
    icon: MessageSquareText,
    title: "Atención al cliente",
    description:
      "Respuestas a consultas habituales, recogida de datos y derivación de solicitudes.",
  },
  {
    icon: PhoneCall,
    title: "Gestión de llamadas",
    description:
      "Recepción telefónica automatizada para atender consultas y registrar información.",
  },
  {
    icon: Mail,
    title: "Correos y documentos",
    description:
      "Clasificación de mensajes, extracción de datos y preparación de tareas de seguimiento.",
  },
  {
    icon: Settings2,
    title: "Procesos internos",
    description:
      "Automatización de tareas repetitivas y coordinación entre herramientas.",
  },
  {
    icon: MonitorSmartphone,
    title: "Presencia digital",
    description:
      "Webs profesionales para presentar servicios, mostrar proyectos y generar contactos.",
  },
  {
    icon: Truck,
    title: "Transporte y logística",
    description:
      "Gestión de incidencias, coordinación de equipos y automatización de operaciones.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analizamos tu negocio",
    text: "Entendemos tus necesidades, cómo trabaja tu equipo y qué problema quieres resolver.",
  },
  {
    number: "02",
    title: "Definimos la solución",
    text: "Acordamos las funciones, el alcance, las integraciones y el presupuesto antes de desarrollar.",
  },
  {
    number: "03",
    title: "Diseñamos y desarrollamos",
    text: "Construimos la solución por fases y comprobamos su funcionamiento con pruebas.",
  },
  {
    number: "04",
    title: "Publicamos y mejoramos",
    text: "Preparamos la entrega y valoramos el mantenimiento, el soporte y las mejoras futuras.",
  },
];

const prices = [
  {
    title: "Web profesional",
    price: "Desde 600 €",
    description:
      "Para empresas que necesitan una presencia digital profesional, adaptada a móviles y enfocada en sus servicios.",
  },
  {
    title: "Agentes de IA y automatizaciones",
    price: "Desde 1.000 €",
    description:
      "Para incorporar asistentes, automatizar tareas o conectar herramientas mediante un proyecto definido.",
    featured: true,
  },
  {
    title: "Software e integraciones a medida",
    price: "Presupuesto a medida",
    description:
      "Para aplicaciones, plataformas, integraciones complejas y proyectos con varios módulos.",
  },
];

const benefits = [
  {
    icon: Workflow,
    title: "Menos trabajo repetitivo",
    text: "Dedica menos tiempo a tareas manuales y más a las actividades importantes de tu negocio.",
  },
  {
    icon: Network,
    title: "Herramientas conectadas",
    text: "Integra tus herramientas cuando existan las APIs, los permisos y las condiciones técnicas necesarias.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Mejor organización",
    text: "Centraliza información y facilita el seguimiento de solicitudes, clientes y tareas.",
  },
];

const demoModules = [
  {
    icon: CircleAlert,
    title: "Gestión inteligente de incidencias",
    text: "Un ejemplo de cómo clasificar problemas, registrar información y escalar casos.",
  },
  {
    icon: Bot,
    title: "Asistente de IA para empresas",
    text: "Una demostración de atención automatizada y orientación de usuarios.",
  },
  {
    icon: Layers3,
    title: "Plataforma operativa",
    text: "Un ejemplo de panel empresarial con módulos, información y permisos.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main className="bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-slate-100 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>
                Desarrollo web · Inteligencia artificial · Automatización
              </Eyebrow>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
                Creamos tecnología para que tu empresa{" "}
                <span className="text-blue-700">llegue más lejos.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Desarrollamos páginas web, agentes de inteligencia artificial,
                soluciones de voz y automatizaciones que ayudan a las empresas
                a captar clientes, atender consultas y simplificar su trabajo
                diario. Diseñamos cada solución según las necesidades reales
                de tu negocio.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800"
                >
                  Cuéntanos tu proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/demostraciones"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Ver demostraciones
                  <Play className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                {[
                  "Soluciones personalizadas",
                  "Diseño adaptado a móviles",
                  "Integraciones según viabilidad técnica",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-700" />
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={transportSeoUrl}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Soluciones específicas para transporte y logística
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* PANEL PRINCIPAL */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
                <div className="relative h-[270px] sm:h-[340px]">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                    alt="Espacio de trabajo moderno para una empresa"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Tecnología aplicada a tu negocio
                    </p>
                    <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                      Una web mejor. Procesos más inteligentes.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Soluciones para empresas
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Desarrollo adaptado a cada proyecto
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700">
                      TRANSPORT AI
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Webs", icon: Globe },
                      { label: "Agentes IA", icon: Bot },
                      { label: "Automatización", icon: Workflow },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                        >
                          <Icon className="h-5 w-5 text-blue-700" />
                          <p className="mt-3 text-xs font-semibold text-slate-800">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                      <ShieldCheck className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">
                        Soluciones diseñadas con criterio
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Alcance, permisos y pruebas definidos por proyecto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block md:-left-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Sparkles className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Tecnología a medida
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Para tu forma de trabajar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Todo lo que tu empresa necesita para dar el siguiente paso."
            description="Desde una web profesional hasta agentes de IA e integraciones complejas. Definimos cada proyecto a partir de tus objetivos, tu presupuesto y las posibilidades técnicas."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <span className="text-sm font-medium text-slate-400">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contacto?proyecto=${encodeURIComponent(service.title)}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Consultar servicio
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Explorar todos los servicios
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demostraciones"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
            >
              Ver ejemplos de soluciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Aplicaciones reales</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                ¿Qué podríamos mejorar en tu empresa?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Trabajamos con empresas de distintos sectores. La solución
                depende del proceso que quieras mejorar y de las herramientas
                con las que ya trabajas.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15">
                      <Icon className="h-6 w-6 text-blue-300" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-9">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Cuéntanos qué quieres automatizar
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ESPECIALIDAD EN TRANSPORTE */}
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Eyebrow>Experiencia sectorial</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                También desarrollamos soluciones para transporte y logística.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Transport AI mantiene su especialidad en empresas de
                transporte, mensajería, distribución, mudanzas y servicios con
                vehículos. Diseñamos soluciones para coordinar operaciones,
                gestionar incidencias e integrar herramientas.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Centralización de información operativa.",
                  "Clasificación y seguimiento de incidencias.",
                  "Comunicaciones y tareas automatizadas.",
                  "Integración con sistemas existentes cuando sea viable.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contacto?proyecto=Gestion%20operativa"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Estudiar mi operativa
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href={transportSeoUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Ver soluciones logísticas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Instalaciones logísticas y operaciones de transporte"
                  className="h-56 w-full object-cover sm:h-72"
                />
                <div className="p-5 text-white sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">
                        Soluciones operativas
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Módulos configurados según el proyecto
                      </p>
                    </div>
                    <Layers3 className="h-5 w-5 text-blue-300" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        icon: Truck,
                        title: "Operaciones y logística",
                        description:
                          "Pedidos, equipos, seguimiento e incidencias.",
                      },
                      {
                        icon: Headphones,
                        title: "Atención al cliente",
                        description:
                          "Consultas y derivación de casos.",
                      },
                      {
                        icon: Network,
                        title: "Equipos y delegaciones",
                        description:
                          "Información organizada por perfiles.",
                      },
                      {
                        icon: GitBranch,
                        title: "Integraciones",
                        description:
                          "Conexiones según las APIs disponibles.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <Icon className="h-5 w-5 text-blue-300" />
                          <h3 className="mt-3 text-sm font-semibold">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs leading-5 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEMOSTRACIONES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Ejemplos de soluciones</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Comprueba cómo puede funcionar la tecnología.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Explora ejemplos visuales de agentes de IA, gestión de
                incidencias y plataformas empresariales. Cada solución se
                adapta al proceso y a las posibilidades técnicas del proyecto.
              </p>
            </div>
            <Link
              href="/demostraciones"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Explorar demostraciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {demoModules.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href="/demostraciones"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Ver ejemplo
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Las demostraciones son ejemplos ilustrativos. Las funciones finales
            dependen del alcance, las integraciones y las pruebas acordadas.
          </p>
        </section>

        {/* METODOLOGÍA */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Un proceso claro desde el primer día."
              description="Definimos las necesidades y dependencias antes de desarrollar para acordar el alcance y cómo se validará el resultado."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-blue-700">
                    FASE {step.number}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Inversión orientativa"
            title="Precios adaptados a cada tipo de proyecto."
            description="Estos importes son referencias iniciales. El presupuesto final depende de las funciones, el diseño, las integraciones y la complejidad."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {prices.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border p-6 sm:p-8 ${
                  item.featured
                    ? "border-blue-700 bg-white shadow-xl shadow-blue-950/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  PROYECTO 0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-3xl font-semibold tracking-tight text-blue-800">
                  {item.price}
                </p>
                <p className="mt-4 min-h-14 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <Link
                  href={`/contacto?proyecto=${encodeURIComponent(item.title)}`}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    item.featured
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "border border-slate-200 text-slate-800 hover:border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  Consultar proyecto
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            Importes orientativos, más IVA. El presupuesto final dependerá del
            alcance validado, los accesos técnicos y los posibles costes de
            servicios de terceros. Los servicios recurrentes se presupuestan
            por separado cuando corresponda.
          </p>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                ¿Necesitas mantenimiento o soporte mensual?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Consulta las modalidades disponibles y los servicios incluidos.
              </p>
            </div>
            <Link
              href="/presupuestos"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Ver todos los precios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* SEGURIDAD */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <Eyebrow>Diseño responsable</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Seguridad, privacidad y control desde el diseño.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Cada proyecto debe definir qué datos utiliza, quién puede
                acceder, qué acciones puede ejecutar una automatización y
                cuándo debe intervenir una persona.
              </p>
              <Link
                href="/seguridad"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Conocer nuestro enfoque de seguridad
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              {[
                {
                  icon: LockKeyhole,
                  title: "Accesos definidos",
                  text: "Permisos según las necesidades del proyecto.",
                },
                {
                  icon: ShieldCheck,
                  title: "Pruebas y validación",
                  text: "Comprobaciones antes de poner la solución en uso.",
                },
                {
                  icon: GitBranch,
                  title: "Trazabilidad",
                  text: "Registro de acciones cuando el diseño lo contempla.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-slate-100 py-4 last:border-0 last:pb-0 first:pt-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FUNDADOR */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
            <div>
              <Eyebrow>Quién está detrás</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Tecnología útil, pensada para cada negocio.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Transport AI ayuda a las empresas a incorporar tecnología
                mediante desarrollo web, inteligencia artificial,
                automatización e integración de sistemas. Cada proyecto
                empieza por entender el negocio y definir una solución útil.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Trabajamos en proyectos de distintos sectores, desde páginas
                web y asistentes de IA hasta herramientas internas y procesos
                operativos especializados.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15">
                <Zap className="h-7 w-7 text-blue-300" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Fundador de Transport AI
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Álvaro Chaveinte Camargo
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Desarrollo web, agentes de inteligencia artificial,
                automatización e integración tecnológica para empresas.
              </p>
              <Link
                href="/contacto"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
              >
                Contactar con Transport AI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-800 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Hablemos de tu proyecto
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  ¿Qué te gustaría mejorar de tu negocio?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100">
                  Cuéntanos tu idea, el problema que quieres resolver o la
                  herramienta que necesitas. Estudiaremos el proyecto para
                  definir una solución y los siguientes pasos.
                </p>
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Solicitar propuesta
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Contacto directo
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  ¿Hablamos de tu próximo proyecto?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  Cuéntame qué necesita tu empresa y valoramos cómo una web,
                  la inteligencia artificial o la automatización pueden ayudarte.
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Álvaro Chaveinte Camargo
                  </p>
                  <p className="mt-2 text-sm font-medium text-blue-300">
                    Fundador de Transport AI
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <a
                  href="mailto:alvarochaveinte1@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition duration-200 hover:border-blue-400/60 hover:bg-white/10 sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500/25">
                    <MessageSquareText className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Escríbeme por email
                    </p>
                    <p className="mt-2 break-all text-base font-semibold leading-6 text-white sm:text-lg">
                      alvarochaveinte1@gmail.com
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Cuéntame qué necesitas
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-blue-300 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+34659980603"
                  className="group flex items-center gap-4 rounded-2xl bg-blue-700 p-5 transition duration-200 hover:bg-blue-600 sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Headphones className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-100">
                      Llámame directamente
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      659 980 603
                    </p>
                    <p className="mt-1 text-sm text-blue-100">
                      Pulsa aquí para llamar
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contacto"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white text-base font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  Ir al formulario de contacto
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-slate-950 transition hover:text-blue-700"
              >
                Transport AI
              </Link>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Desarrollo web, inteligencia artificial, automatización y
                software empresarial para negocios de distintos sectores.
              </p>

              <p className="mt-3 text-xs text-slate-400">
                © {new Date().getFullYear()} Transport AI. Todos los derechos
                reservados.
              </p>
            </div>

            <nav
              aria-label="Información legal"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
            >
              <Link
                href="/privacidad"
                className="font-medium text-slate-600 transition hover:text-blue-700"
              >
                Política de privacidad
              </Link>

              <Link
                href="/seguridad"
                className="font-medium text-slate-600 transition hover:text-blue-700"
              >
                Seguridad
              </Link>

              <Link
                href="/contacto"
                className="font-medium text-slate-600 transition hover:text-blue-700"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Asistente de IA y contacto flotante */}
      <FreeAssistant />
    </SiteShell>
  );
}
