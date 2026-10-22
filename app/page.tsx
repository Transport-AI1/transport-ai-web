
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Database,
  Globe,
  Headphones,
  Layers3,
  LockKeyhole,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Truck,
  Settings2,
  ChartNoAxesCombined,
  Lightbulb,
  Target,
  UserRound,
  Rocket,
} from "lucide-react";
import { SiteShell } from "./components/site-shell";
import FreeAssistant from "./components/free-assistant";

export const metadata: Metadata = {
  title: "Transport AI | Desarrollo web, inteligencia artificial y automatización",
  description:
    "Transport AI desarrolla páginas web, agentes de inteligencia artificial, asistentes de voz, automatizaciones, integraciones y software a medida para empresas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Transport AI | Tecnología útil para empresas",
    description:
      "Desarrollo web, inteligencia artificial, automatización y software a medida.",
    url: "https://transport-ai-web.vercel.app",
    siteName: "Transport AI",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Desarrollo web profesional",
    description:
      "Páginas web corporativas, landing pages y experiencias digitales diseñadas para presentar tu negocio, explicar tus servicios y facilitar que tus clientes contacten contigo.",
    items: [
      "Diseño adaptable a móvil, tablet y ordenador",
      "Estructura enfocada en la conversión",
      "Optimización técnica y SEO básico",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "Agentes de inteligencia artificial",
    description:
      "Asistentes que pueden responder preguntas, orientar a clientes, explicar servicios y ayudar a gestionar consultas mediante información previamente definida.",
    items: [
      "Asistentes para páginas web",
      "Respuestas adaptadas al negocio",
      "Derivación a una persona cuando sea necesario",
    ],
  },
  {
    number: "03",
    icon: Headphones,
    title: "Agentes de voz",
    description:
      "Soluciones de voz para explorar la automatización de llamadas, la atención inicial y la gestión de consultas, según las herramientas y servicios que necesite cada proyecto.",
    items: [
      "Atención de consultas frecuentes",
      "Recogida estructurada de información",
      "Posible integración con sistemas existentes",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conexión de tareas que actualmente requieren trabajo manual para reducir pasos repetitivos y facilitar el flujo de información entre herramientas.",
    items: [
      "Procesamiento de formularios y correos",
      "Avisos y notificaciones automáticas",
      "Flujos de trabajo personalizados",
    ],
  },
  {
    number: "05",
    icon: Network,
    title: "APIs e integraciones",
    description:
      "Conexión entre plataformas, CRM, bases de datos y servicios externos para que la información pueda circular de manera más ordenada.",
    items: [
      "Integración con APIs disponibles",
      "Sincronización de información",
      "Validación de datos y gestión de errores",
    ],
  },
  {
    number: "06",
    icon: MonitorSmartphone,
    title: "Software a medida",
    description:
      "Desarrollo de herramientas digitales adaptadas a necesidades concretas, desde paneles internos hasta prototipos de plataformas operativas.",
    items: [
      "Paneles de control",
      "Aplicaciones internas",
      "Prototipos y plataformas personalizadas",
    ],
  },
];

const useCases = [
  {
    icon: Truck,
    title: "Transporte y logística",
    description:
      "Herramientas para organizar información de envíos, detectar incidencias, coordinar comunicaciones y mejorar la visibilidad de las operaciones.",
  },
  {
    icon: MessageCircle,
    title: "Atención al cliente",
    description:
      "Asistentes que ayudan a resolver consultas frecuentes y a recopilar los datos necesarios antes de derivar un caso al equipo.",
  },
  {
    icon: Database,
    title: "Gestión de información",
    description:
      "Automatizaciones para organizar datos, conectar herramientas y reducir la duplicación de tareas entre distintos sistemas.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Procesos empresariales",
    description:
      "Soluciones para identificar tareas repetitivas, estructurar flujos de trabajo y facilitar el seguimiento de actividades.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analizamos la necesidad",
    description:
      "Hablamos sobre tu negocio, el problema que quieres resolver y las herramientas que utilizas actualmente.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos el alcance, las funcionalidades, las integraciones necesarias y una propuesta adaptada al proyecto.",
  },
  {
    number: "03",
    title: "Desarrollamos y validamos",
    description:
      "Construimos la solución y comprobamos su funcionamiento con pruebas adecuadas antes de plantear su puesta en marcha.",
  },
  {
    number: "04",
    title: "Preparamos la entrega",
    description:
      "Documentamos el funcionamiento y acordamos los siguientes pasos, el mantenimiento y las mejoras que puedan ser necesarias.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Soluciones con un propósito",
    description:
      "La tecnología debe responder a una necesidad concreta, no añadir complejidad porque sí.",
  },
  {
    icon: Settings2,
    title: "Adaptación al negocio",
    description:
      "Cada empresa tiene sus procesos, herramientas y prioridades. La solución se plantea teniendo eso en cuenta.",
  },
  {
    icon: ShieldCheck,
    title: "Pruebas y seguridad",
    description:
      "La validación, los permisos, el tratamiento de los datos y los límites de cada integración deben formar parte del proyecto.",
  },
];

const prices = [
  {
    name: "Web profesional",
    price: "Desde 600 €",
    description:
      "Para empresas que necesitan una presencia digital profesional.",
    features: [
      "Diseño web adaptado al negocio",
      "Diseño responsive",
      "Secciones y contenido acordados",
      "Formulario o vías de contacto",
    ],
  },
  {
    name: "IA y automatización",
    price: "Desde 1.000 €",
    description:
      "Para automatizar tareas o incorporar asistentes inteligentes.",
    features: [
      "Análisis del proceso",
      "Diseño de la solución",
      "Configuración y desarrollo",
      "Pruebas según el alcance acordado",
    ],
    featured: true,
  },
  {
    name: "Software e integraciones",
    price: "Presupuesto a medida",
    description:
      "Para proyectos que necesitan funcionalidades e integraciones específicas.",
    features: [
      "Análisis técnico",
      "Desarrollo personalizado",
      "Integración con sistemas compatibles",
      "Alcance y fases definidos previamente",
    ],
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main className="overflow-hidden bg-white text-slate-950">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
          <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
                <Sparkles size={16} />
                Desarrollo digital e inteligencia artificial
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Tecnología útil.
                <span className="block text-blue-700">
                  Procesos más inteligentes.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                En Transport AI desarrollo páginas web, agentes de
                inteligencia artificial, automatizaciones e integraciones
                tecnológicas para ayudar a las empresas a trabajar de una
                manera más organizada y eficiente.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Cuéntame tu proyecto
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/demostraciones"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Ver demostraciones
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-blue-700" />
                  Desarrollo personalizado
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-blue-700" />
                  IA y automatización
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-blue-700" />
                  Soluciones para empresas
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-indigo-100/30 blur-xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      Transport AI
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Tecnología conectada
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Network size={26} />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <Globe className="text-blue-700" size={23} />
                    <h3 className="mt-4 font-semibold">Desarrollo web</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Experiencias digitales para presentar y hacer crecer
                      tu negocio.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <Bot className="text-blue-700" size={23} />
                    <h3 className="mt-4 font-semibold">Inteligencia artificial</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Asistentes y herramientas adaptados a tareas concretas.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <Workflow className="text-blue-700" size={23} />
                    <h3 className="mt-4 font-semibold">Automatización</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Procesos conectados para reducir tareas manuales.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <Database className="text-blue-700" size={23} />
                    <h3 className="mt-4 font-semibold">Integraciones</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Datos y herramientas trabajando conjuntamente.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                  <div className="rounded-xl bg-white p-2 text-blue-700">
                    <Zap size={21} />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">
                    Una solución digital debe resolver un problema real y
                    encajar con la forma de trabajar de cada empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Qué hacemos
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Desarrollo digital adaptado a cada empresa
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                No todas las empresas necesitan la misma tecnología. Por eso,
                cada proyecto parte de una necesidad concreta y de las
                posibilidades reales de las herramientas que ya utiliza el
                negocio.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={25} />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <Check
                            size={17}
                            className="mt-1 shrink-0 text-blue-700"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ESPECIALIZACIÓN */}
        <section className="bg-slate-950 py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Un enfoque práctico
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tecnología aplicada a problemas reales
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                Transport AI presta especial atención al sector del transporte
                y la logística, donde la información, la coordinación y la
                gestión de incidencias pueden ser especialmente importantes.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                El objetivo es desarrollar herramientas que complementen los
                sistemas existentes, sin asumir que una empresa tiene que
                sustituir toda su infraestructura para mejorar un proceso.
              </p>
              <Link
                href="/ia-para-transporte-logistica"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-white"
              >
                Soluciones para transporte y logística
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]"
                  >
                    <Icon size={25} className="text-blue-300" />
                    <h3 className="mt-5 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* DEMOSTRACIONES */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Proyectos demostrativos
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ideas que puedes explorar
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Un espacio para mostrar conceptos, interfaces y ejemplos de
                  cómo podrían funcionar distintas soluciones digitales.
                </p>
              </div>

              <Link
                href="/demostraciones"
                className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
              >
                Ver todas las demos
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <article className="rounded-3xl border border-slate-200 p-7">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 w-fit">
                  <Bot size={25} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Asistente de inteligencia artificial
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Un ejemplo de asistente que responde preguntas y ayuda al
                  visitante a encontrar información.
                </p>
                <Link
                  href="/demostraciones"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700"
                >
                  Explorar demo <ArrowUpRight size={17} />
                </Link>
              </article>

              <article className="rounded-3xl border border-slate-200 p-7">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 w-fit">
                  <PhoneCall size={25} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Experiencia de voz
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Una demostración de interacción por voz para explorar nuevas
                  formas de atención digital.
                </p>
                <Link
                  href="/demostraciones"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700"
                >
                  Explorar demo <ArrowUpRight size={17} />
                </Link>
              </article>

              <article className="rounded-3xl border border-slate-200 p-7">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 w-fit">
                  <Layers3 size={25} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Interfaces y herramientas
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Ejemplos de páginas, paneles y conceptos de software
                  desarrollados para necesidades empresariales.
                </p>
                <Link
                  href="/demostraciones"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700"
                >
                  Explorar demo <ArrowUpRight size={17} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Metodología
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                De la idea a una solución concreta
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Un proceso claro permite definir mejor el alcance, comprobar
                las dependencias técnicas y evitar desarrollar funciones que
                no aportan valor.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-sm font-bold tracking-widest text-blue-700">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Orientación de precios
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Una propuesta adaptada al alcance
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Los siguientes importes son orientativos. El precio final
                depende de las funcionalidades, la complejidad, los servicios
                externos y las integraciones que necesite cada proyecto.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {prices.map((price) => (
                <article
                  key={price.name}
                  className={`rounded-3xl border p-7 sm:p-8 ${
                    price.featured
                      ? "border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-900/5"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {price.featured && (
                    <span className="inline-flex rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">
                      Soluciones inteligentes
                    </span>
                  )}

                  <h3 className="mt-4 text-xl font-semibold">{price.name}</h3>
                  <p className="mt-4 text-2xl font-semibold tracking-tight">
                    {price.price}
                  </p>
                  <p className="mt-4 leading-7 text-slate-600">
                    {price.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {price.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-blue-700"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacto"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                      price.featured
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "border border-slate-300 text-slate-800 hover:border-blue-400 hover:text-blue-700"
                    }`}
                  >
                    Solicitar propuesta <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Los importes deben confirmarse en cada propuesta. Los servicios
              externos, licencias, consumo de APIs, alojamiento y mantenimiento
              pueden presupuestarse por separado según las necesidades.
            </p>
          </div>
        </section>

        {/* SEGURIDAD */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-2xl bg-white p-4 text-blue-700 shadow-sm">
                <LockKeyhole size={30} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                Seguridad y control desde el diseño
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                La seguridad no debe añadirse al final. En cada proyecto hay
                que valorar qué información se maneja, quién puede acceder,
                qué servicios externos intervienen y cómo se gestionan los
                errores.
              </p>
              <Link
                href="/seguridad"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700"
              >
                Conocer el enfoque de seguridad <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <Icon size={24} className="text-blue-700" />
                    <h3 className="mt-5 font-semibold">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRESENTACIÓN DEL FUNDADOR */}
        <section id="fundador" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Quién está detrás de Transport AI
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Soy Álvaro Chaveinte, fundador de Transport AI
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    He creado Transport AI con una idea clara: desarrollar
                    tecnología que ayude a las empresas a resolver problemas
                    reales, mejorar sus procesos y aprovechar las posibilidades
                    de la inteligencia artificial.
                  </p>

                  <p className="mt-5 leading-8 text-slate-600">
                    Mi trabajo se centra en diseñar y desarrollar soluciones
                    digitales, desde páginas web y asistentes de inteligencia
                    artificial hasta automatizaciones, integraciones entre
                    sistemas y herramientas de software adaptadas a cada
                    proyecto.
                  </p>

                  <p className="mt-5 leading-8 text-slate-600">
                    Además de construir interfaces y experiencias digitales,
                    trabajo en la parte funcional: cómo debe responder una
                    herramienta, cómo se organiza la información, cómo se
                    conectan los servicios y qué ocurre cuando un proceso no
                    funciona como debería.
                  </p>

                  <p className="mt-5 leading-8 text-slate-600">
                    Estoy desarrollando Transport AI como un proyecto
                    tecnológico con una visión de crecimiento: empezar por
                    resolver necesidades concretas de empresas y evolucionar
                    hacia soluciones cada vez más completas, especializadas y
                    útiles.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                    >
                      Hablar conmigo <ArrowRight size={17} />
                    </Link>

                    <Link
                      href="/demostraciones"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
                    >
                      Ver mi trabajo <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>

                <div className="relative flex flex-col justify-between bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      <UserRound size={32} />
                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Fundador y desarrollador
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      Álvaro Chaveinte Camargo
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      Desarrollo de soluciones digitales, inteligencia
                      artificial, automatización y software a medida.
                    </p>
                  </div>

                  <div className="mt-10 space-y-4">
                    {[
                      "Desarrollo de páginas y aplicaciones web",
                      "Creación de agentes de inteligencia artificial",
                      "Automatización de tareas y procesos",
                      "Integración de APIs y herramientas",
                      "Diseño de prototipos y soluciones a medida",
                    ].map((skill) => (
                      <div key={skill} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-blue-400/15 p-1 text-blue-300">
                          <Check size={15} />
                        </div>
                        <p className="text-sm leading-6 text-slate-200">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="shrink-0 text-blue-300" size={23} />
                      <p className="font-semibold">Mi manera de entender la tecnología</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Primero entender el problema. Después diseñar la
                      solución. Y finalmente desarrollarla, comprobarla y
                      mejorarla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="bg-blue-50/70 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-2xl bg-white p-4 text-blue-700 shadow-sm">
                <Rocket size={30} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                La visión
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Construir soluciones que evolucionen con las empresas
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Quiero que Transport AI sea un proyecto tecnológico capaz de
                desarrollar soluciones personalizadas y, con el tiempo,
                convertir las necesidades que se repiten en productos que
                puedan utilizar más empresas.
              </p>
              <p>
                Eso significa no limitarse a crear una página o automatizar una
                tarea aislada, sino comprender cómo se relacionan los procesos,
                los datos y las personas para encontrar oportunidades de mejora.
              </p>
              <p>
                La inteligencia artificial ofrece muchas posibilidades, pero
                su valor depende de cómo se aplica. Mi objetivo es convertir
                esas posibilidades en herramientas comprensibles, útiles y
                adaptadas a cada contexto.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-center text-white sm:px-12 sm:py-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <Sparkles size={28} />
                </div>

                <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  ¿Tienes una idea o un proceso que quieras mejorar?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
                  Cuéntame qué necesita tu empresa. Podemos estudiar el
                  problema y valorar qué solución digital tiene sentido para
                  tu caso, sin dar por hecho que necesitas una tecnología
                  concreta.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
                  >
                    Contactar con Álvaro <ArrowRight size={18} />
                  </Link>

                  <a
                    href="https://wa.me/34659980603?text=Hola%20%C3%81lvaro%2C%20quiero%20hablar%20sobre%20un%20proyecto%20para%20mi%20empresa."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    Hablar por WhatsApp
                  </a>
                </div>

                <a
                  href="mailto:alvarochaveinte1@gmail.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                >
                  <Mail size={16} />
                  alvarochaveinte1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ASISTENTE */}
        <FreeAssistant />
      </main>
    </SiteShell>
  );
}
