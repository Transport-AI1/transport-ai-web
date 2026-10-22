
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Database,
  GitBranch,
  Globe,
  Headphones,
  Layers3,
  LockKeyhole,
  Mail,
  MessageSquareText,
  MonitorSmartphone,
  Network,
  PhoneCall,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Truck,
  Settings2,
  ChartNoAxesCombined,
} from "lucide-react";

import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "./components/site-shell";


export const metadata: Metadata = {
  title: "Transport AI | Diseño Web, Agentes de IA y Automatización",
  description:
    "Diseño de páginas web, agentes de inteligencia artificial para web y llamadas, chatbots, automatizaciones, integraciones y software a medida para empresas de todos los sectores.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Transport AI | Web, Inteligencia Artificial y Automatización",
    description:
      "Impulsa tu negocio con páginas web profesionales, agentes de IA, soluciones de voz, automatizaciones y software a medida.",
    url: "/",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport AI | Web, IA y Automatización",
    description:
      "Tecnología práctica para empresas: webs, agentes de IA, llamadas y automatizaciones.",
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
    title: "Diseño y desarrollo web",
    description:
      "Páginas web modernas, rápidas y adaptadas a móviles para presentar tus servicios, transmitir confianza y convertir visitas en oportunidades comerciales.",
    tags: ["Web profesional", "Diseño responsive", "SEO técnico"],
    query: "Diseño y desarrollo web",
  },
  {
    number: "02",
    icon: Bot,
    title: "Agentes de IA para tu web",
    description:
      "Asistentes conversacionales que pueden responder preguntas, explicar tus servicios, recoger datos de potenciales clientes y derivar consultas.",
    tags: ["Asistente web", "Chatbot IA", "Captación"],
    query: "Agentes de IA para web",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Agentes de voz y llamadas",
    description:
      "Soluciones de voz para automatizar parte de la atención telefónica, gestionar consultas frecuentes, recoger solicitudes y transferir casos.",
    tags: ["Voz IA", "Atención telefónica", "Recepción"],
    query: "Agentes de voz y llamadas",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automatización de tareas",
    description:
      "Conectamos formularios, correos, documentos y herramientas para reducir tareas repetitivas, enviar avisos y organizar flujos de trabajo.",
    tags: ["Flujos de trabajo", "Notificaciones", "Procesos"],
    query: "Automatización de tareas",
  },
  {
    number: "05",
    icon: Database,
    title: "CRM e integraciones",
    description:
      "Conectamos sistemas compatibles para centralizar información, reducir duplicidades y evitar que tu equipo tenga que copiar datos entre aplicaciones.",
    tags: ["CRM", "APIs", "Integraciones"],
    query: "CRM e integraciones",
  },
  {
    number: "06",
    icon: Code2,
    title: "Software a medida",
    description:
      "Desarrollamos paneles de control, aplicaciones internas, portales privados y plataformas adaptadas a las necesidades concretas de tu negocio.",
    tags: ["Aplicaciones", "Dashboards", "Plataformas"],
    query: "Software a medida",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Ahorra tiempo",
    text: "Reduce las tareas repetitivas y dedica más recursos a los clientes y al crecimiento de tu negocio.",
  },
  {
    icon: MessageSquareText,
    title: "Mejora la atención",
    text: "Facilita que tus clientes encuentren información y contacten con tu empresa por los canales adecuados.",
  },
  {
    icon: Network,
    title: "Conecta tus herramientas",
    text: "Integra sistemas compatibles para organizar mejor los datos y evitar procesos innecesariamente manuales.",
  },
];

const useCases = [
  {
    icon: MonitorSmartphone,
    title: "Negocios y comercios",
    text: "Webs profesionales, información de servicios y asistentes para atender consultas.",
  },
  {
    icon: Headphones,
    title: "Atención telefónica",
    text: "Recepción de llamadas, preguntas frecuentes y registro de solicitudes mediante soluciones de voz.",
  },
  {
    icon: Mail,
    title: "Administración",
    text: "Clasificación de correos, extracción de datos, avisos y seguimiento de tareas.",
  },
  {
    icon: Workflow,
    title: "Empresas de servicios",
    text: "Automatización de solicitudes, coordinación de trabajos y comunicación con clientes.",
  },
  {
    icon: Layers3,
    title: "Equipos y operaciones",
    text: "Paneles internos para organizar tareas, consultar información y supervisar procesos.",
  },
  {
    icon: Truck,
    title: "Transporte y logística",
    text: "Seguimiento de operaciones, gestión de incidencias y coordinación de equipos y vehículos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Nos cuentas tu idea",
    text: "Entendemos tu negocio, tus objetivos y qué problema necesitas resolver.",
  },
  {
    number: "02",
    title: "Preparamos la propuesta",
    text: "Definimos funciones, alcance, plazos, dependencias y presupuesto.",
  },
  {
    number: "03",
    title: "Desarrollamos la solución",
    text: "Diseñamos y construimos el proyecto por fases, con pruebas acordes a su alcance.",
  },
  {
    number: "04",
    title: "Lanzamos el proyecto",
    text: "Preparamos la entrega y acordamos, cuando sea necesario, soporte y mejoras.",
  },
];

const prices = [
  {
    title: "Web profesional",
    price: "Desde 600 €",
    description:
      "Para negocios que quieren presentar sus servicios online con una web moderna y adaptada a móviles.",
    featured: false,
  },
  {
    title: "Agentes de IA y automatización",
    price: "Desde 1.000 €",
    description:
      "Para asistentes, automatizaciones y procesos conectados cuyo alcance técnico se haya definido.",
    featured: true,
  },
  {
    title: "Software e integraciones",
    price: "A medida",
    description:
      "Para aplicaciones, plataformas, conexiones complejas y proyectos con varios módulos.",
    featured: false,
  },
];

const demoModules = [
  {
    icon: Bot,
    title: "Asistente de IA",
    text: "Explora un ejemplo de atención conversacional para orientar a los usuarios.",
  },
  {
    icon: GitBranch,
    title: "Gestión de incidencias",
    text: "Descubre cómo se puede organizar la información y el seguimiento de casos.",
  },
  {
    icon: Layers3,
    title: "Plataforma operativa",
    text: "Consulta un ejemplo visual de panel empresarial y módulos de gestión.",
  },
];

const safeguards = [
  {
    icon: LockKeyhole,
    title: "Accesos definidos",
    text: "Los permisos se establecen según las necesidades del proyecto.",
  },
  {
    icon: ShieldCheck,
    title: "Pruebas y validación",
    text: "Se comprueba el comportamiento de la solución antes de su puesta en marcha.",
  },
  {
    icon: GitBranch,
    title: "Control de procesos",
    text: "Se pueden definir registros, límites y puntos de intervención humana.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <div className="overflow-hidden bg-white text-slate-900">
        {/* HERO */}
        <section className="relative isolate">
          <div className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[480px] w-[480px] rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-40 -z-10 h-[360px] w-[360px] rounded-full bg-slate-100 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
            <div>
              <Eyebrow>
                Desarrollo web · Inteligencia artificial · Automatización
              </Eyebrow>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.3rem]">
                Tu empresa puede trabajar de forma{" "}
                <span className="text-blue-700">más inteligente.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Creamos páginas web profesionales, agentes de IA para web y
                llamadas, chatbots, automatizaciones y software a medida.
                Tecnología pensada para ayudarte a captar clientes, ahorrar
                tiempo y organizar mejor tu negocio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Solicitar presupuesto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/servicios"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Descubrir servicios
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                {[
                  "Soluciones personalizadas",
                  "Diseño adaptado a móviles",
                  "Alcance definido por proyecto",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-blue-700" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  ¿Tienes una empresa de transporte o logística?
                </p>
                <Link
                  href={transportSeoUrl}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Descubre nuestra especialización logística
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* PANEL VISUAL */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                <div className="relative h-64 sm:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                    alt="Espacio de trabajo moderno para empresas"
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
                      <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                      Tecnología aplicada a tu negocio
                    </span>
                    <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                      Una web mejor. Un equipo más eficiente.
                    </h2>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        ¿Qué necesitas mejorar?
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Soluciones para diferentes necesidades empresariales
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold tracking-wide text-blue-700">
                      TRANSPORT AI
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      { label: "Páginas web", icon: Globe },
                      { label: "Agentes IA", icon: Bot },
                      { label: "Llamadas", icon: PhoneCall },
                      { label: "Automatización", icon: Workflow },
                      { label: "Integraciones", icon: Database },
                      { label: "Software", icon: Code2 },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition hover:border-blue-200 hover:bg-blue-50"
                        >
                          <Icon className="h-5 w-5 text-blue-700" />
                          <p className="mt-3 text-xs font-semibold text-slate-800">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-slate-950 p-4 text-white">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <div>
                      <p className="text-sm font-semibold">
                        Cada proyecto, con un alcance claro
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">
                        Funciones, integraciones y pruebas definidos según las
                        necesidades del negocio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block md:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Zap className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Tecnología a medida
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Adaptada a tu negocio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:px-8 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Nuestros servicios"
            title="Todo lo que necesitas para llevar tu negocio al siguiente nivel."
            description="Desde una página web hasta un sistema de inteligencia artificial conectado con tus procesos. Empezamos por tus objetivos y diseñamos una solución acorde a tus necesidades."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-700">
                      <Icon className="h-6 w-6 text-blue-700 transition group-hover:text-white" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
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
                    href={`/contacto?proyecto=${encodeURIComponent(service.query)}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Consultar este servicio
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Ver todos los servicios
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demostraciones"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
            >
              Explorar demostraciones
              <Play className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Para diferentes sectores</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                La tecnología debe adaptarse a tu negocio.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                No todas las empresas necesitan lo mismo. Podemos estudiar
                desde una web para un pequeño negocio hasta automatizaciones
                para equipos con procesos más complejos.
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
                      {item.text}
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
                Cuéntanos qué quieres mejorar
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ESPECIALIDAD EN TRANSPORTE */}
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
            <div>
              <Eyebrow>Nuestra especialidad sectorial</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                También conocemos los retos del transporte y la logística.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Transport AI nació con un enfoque en empresas de transporte,
                mensajería, distribución, mudanzas y servicios con vehículos.
                Mantenemos esa especialización mientras desarrollamos
                soluciones tecnológicas para negocios de otros sectores.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Organización de información operativa.",
                  "Clasificación y seguimiento de incidencias.",
                  "Comunicación y tareas automatizadas.",
                  "Integración con sistemas compatibles.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href={transportSeoUrl}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Ver soluciones para logística
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Instalaciones logísticas y operaciones de transporte"
                  className="h-60 w-full object-cover sm:h-72"
                  loading="lazy"
                />
                <div className="p-6 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Aplicaciones operativas
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Más visibilidad y coordinación.
                  </h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        icon: Truck,
                        title: "Operaciones",
                        text: "Seguimiento y coordinación.",
                      },
                      {
                        icon: Headphones,
                        title: "Atención",
                        text: "Consultas y gestión de casos.",
                      },
                      {
                        icon: Network,
                        title: "Equipos",
                        text: "Información organizada.",
                      },
                      {
                        icon: GitBranch,
                        title: "Integraciones",
                        text: "Conexiones según viabilidad.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <Icon className="h-5 w-5 text-blue-300" />
                          <h4 className="mt-3 text-sm font-semibold">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {item.text}
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
              <Eyebrow>Demostraciones</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Mira ejemplos de lo que podemos desarrollar.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Explora demostraciones de asistentes de IA, gestión de
                incidencias y plataformas empresariales. Podemos estudiar cómo
                adaptar ideas similares a las necesidades de tu negocio.
              </p>
            </div>
            <Link
              href="/demostraciones"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Ver todas las demostraciones
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
            dependen del alcance, las integraciones disponibles y las pruebas
            acordadas para cada proyecto.
          </p>
        </section>

        {/* METODOLOGÍA */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Un proceso claro desde la idea hasta la entrega."
              description="Antes de desarrollar, definimos qué necesitas, cómo se comprobará el resultado y qué dependencias técnicas existen."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
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
            eyebrow="Precios orientativos"
            title="Encuentra el punto de partida para tu proyecto."
            description="Mostramos referencias iniciales para que puedas valorar opciones. El presupuesto definitivo se prepara según las funciones, el diseño, las integraciones y la complejidad."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {prices.map((item, index) => (
              <article
                key={item.title}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  item.featured
                    ? "border-blue-700 bg-white shadow-xl shadow-blue-950/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {item.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Solución personalizada
                  </span>
                )}

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  PROYECTO 0{index + 1}
                </p>

                <h3 className="mt-5 pr-2 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-5 text-3xl font-semibold tracking-tight text-blue-800">
                  {item.price}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={`/contacto?proyecto=${encodeURIComponent(item.title)}`}
                  className={`mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
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
            Importes orientativos, más IVA. El presupuesto final depende del
            alcance acordado, las integraciones, los accesos técnicos y los
            posibles costes de servicios de terceros. El mantenimiento y los
            servicios recurrentes se presupuestan por separado cuando
            corresponda.
          </p>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                ¿Necesitas un proyecto más completo?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Cuéntanos qué quieres conseguir y valoraremos el alcance y las
                opciones disponibles.
              </p>
            </div>
            <Link
              href="/presupuestos"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Ver precios y presupuestos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* SEGURIDAD */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <Eyebrow>Desarrollo responsable</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Privacidad, seguridad y control desde el diseño.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Cada proyecto debe considerar los datos que utiliza, los
                permisos de acceso, las acciones que puede ejecutar una
                automatización y cuándo debe intervenir una persona.
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
              <div className="space-y-0">
                {safeguards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-slate-100 py-5 first:pt-0 last:border-0 last:pb-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
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
          </div>
        </section>

        {/* PRESENTACIÓN DEL FUNDADOR */}
        <section
          id="fundador"
          className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <Eyebrow>Quién está detrás de Transport AI</Eyebrow>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  Soy Álvaro Chaveinte, fundador de Transport AI.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  He creado Transport AI con una idea clara: desarrollar
                  tecnología que ayude a las empresas a resolver problemas
                  reales, mejorar sus procesos y aprovechar las posibilidades
                  de la inteligencia artificial.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Mi trabajo abarca el desarrollo de páginas web, agentes de
                  inteligencia artificial, asistentes de voz, automatizaciones,
                  integraciones entre sistemas y herramientas de software
                  adaptadas a las necesidades de cada negocio.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  No se trata solamente de crear una web atractiva o incorporar
                  inteligencia artificial. También importa la parte funcional:
                  cómo responde una aplicación, cómo se procesa la información,
                  cómo se conectan las herramientas y cómo se pueden simplificar
                  tareas que actualmente requieren trabajo manual.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  A través de demostraciones y prototipos, exploro cómo pueden
                  funcionar estas soluciones en la práctica. Esto permite
                  visualizar las posibilidades, definir las funcionalidades y
                  estudiar cómo adaptar cada proyecto a los requisitos reales
                  de una empresa.
                </p>

                <div className="mt-9 border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    Qué desarrollo en Transport AI
                  </h3>

                  <div className="mt-6 space-y-5">
                    {[
                      {
                        icon: Globe,
                        title: "Páginas web y experiencias digitales",
                        text: "Webs corporativas, landing pages y diseños adaptados a móviles para presentar servicios y facilitar el contacto con clientes.",
                      },
                      {
                        icon: Bot,
                        title: "Agentes de inteligencia artificial",
                        text: "Asistentes conversacionales para responder consultas, explicar servicios y orientar a los usuarios.",
                      },
                      {
                        icon: PhoneCall,
                        title: "Agentes de voz",
                        text: "Soluciones y prototipos de voz para explorar nuevas formas de atención telefónica y gestión de solicitudes.",
                      },
                      {
                        icon: Workflow,
                        title: "Automatización de procesos",
                        text: "Flujos de trabajo que conectan tareas, datos y herramientas para reducir operaciones repetitivas.",
                      },
                      {
                        icon: Database,
                        title: "APIs, CRM e integraciones",
                        text: "Conexiones entre sistemas compatibles para organizar la información y facilitar el intercambio de datos.",
                      },
                      {
                        icon: Code2,
                        title: "Software a medida",
                        text: "Aplicaciones, paneles de control, portales privados y prototipos diseñados según las necesidades de cada proyecto.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <article
                          key={item.title}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                            <Icon className="h-5 w-5 text-blue-700" />
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-9 border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    Mi forma de trabajar
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Cada proyecto empieza por entender el problema y definir
                    qué debe resolver la tecnología. Después, se estudian las
                    funciones necesarias, las herramientas disponibles, las
                    dependencias técnicas y los límites del proyecto antes de
                    concretar su alcance.
                  </p>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    La idea es desarrollar soluciones con un objetivo claro,
                    comprobar sus funcionalidades y considerar la seguridad,
                    la privacidad y la intervención humana cuando sean
                    necesarias.
                  </p>
                </div>

                <div className="mt-9 border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    La visión de Transport AI
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Mi objetivo es construir una empresa tecnológica capaz de
                    desarrollar proyectos personalizados y transformar las
                    soluciones que puedan repetirse en herramientas cada vez
                    más completas y reutilizables.
                  </p>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Transport AI mantiene su especialización en transporte y
                    logística, pero también trabaja en soluciones para otros
                    sectores. Cada negocio tiene necesidades distintas, y la
                    tecnología debe adaptarse a ellas en lugar de obligar a la
                    empresa a cambiar su forma de trabajar sin necesidad.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Hablemos de tu proyecto
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/demostraciones"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    Ver demostraciones
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15">
                    <Sparkles className="h-8 w-8 text-blue-300" />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Fundador de Transport AI
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                    Álvaro Chaveinte Camargo
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Desarrollo web, inteligencia artificial, automatización,
                    integraciones y software a medida para empresas.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      icon: Code2,
                      title: "Crear y desarrollar",
                      text: "Convertir ideas en páginas, interfaces, aplicaciones y prototipos digitales.",
                    },
                    {
                      icon: Bot,
                      title: "Aplicar inteligencia artificial",
                      text: "Diseñar asistentes y funcionalidades inteligentes para tareas concretas.",
                    },
                    {
                      icon: Network,
                      title: "Conectar sistemas",
                      text: "Explorar cómo pueden colaborar aplicaciones, herramientas y fuentes de información.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Desarrollar con criterio",
                      text: "Definir el alcance, validar las funcionalidades y considerar los aspectos técnicos y de seguridad.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <Icon className="h-6 w-6 text-blue-300" />
                        <h4 className="mt-3 font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-sm font-semibold text-white">
                    La tecnología tiene que servir para algo.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Mi objetivo es convertir ideas y necesidades empresariales
                    en soluciones claras, prácticas y adaptadas a cada proyecto.
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
                >
                  Contactar con Álvaro
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
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
                  Tu próximo proyecto empieza aquí
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  ¿Qué te gustaría mejorar de tu negocio?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100">
                  Cuéntanos tu idea, el proceso que quieres automatizar o la
                  web que necesitas. Estudiaremos las opciones y prepararemos
                  una propuesta acorde al proyecto.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Solicitar propuesta
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm text-blue-100">
              <a
                href="mailto:alvarochaveinte1@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                alvarochaveinte1@gmail.com
              </a>
              <a
                href="tel:+34659980603"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <PhoneCall className="h-4 w-4" />
                659 980 603
              </a>
            </div>
          </div>
        </section>
      </div>

    </SiteShell>
  );
}
