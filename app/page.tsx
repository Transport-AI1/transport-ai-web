
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  ChevronRight,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Truck,
  Headphones,
  ChartNoAxesCombined,
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
      "Sistemas capaces de interpretar solicitudes, consultar información y ejecutar tareas dentro de procesos empresariales definidos.",
    tags: ["Agentes IA", "Análisis", "Asistencia"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Reducimos tareas repetitivas conectando herramientas, reglas de negocio, avisos y acciones automáticas.",
    tags: ["Flujos", "Incidencias", "Notificaciones"],
  },
  {
    number: "03",
    icon: Database,
    title: "CRM e integración de sistemas",
    description:
      "Conectamos el software que ya utilizas mediante APIs para centralizar información y evitar duplicidades.",
    tags: ["CRM", "APIs", "Sincronización"],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Plataformas y software a medida",
    description:
      "Desarrollamos paneles de control, portales privados y herramientas adaptadas a la operativa de tu empresa.",
    tags: ["Dashboards", "Accesos", "Software"],
  },
];

const capabilities = [
  {
    icon: Truck,
    title: "Operaciones y logística",
    description:
      "Pedidos, repartidores, seguimiento de entregas e incidencias desde un mismo entorno.",
  },
  {
    icon: Headphones,
    title: "Atención al cliente",
    description:
      "Clasificación de consultas, asistencia automatizada y escalado de casos que necesitan intervención.",
  },
  {
    icon: Network,
    title: "Equipos conectados",
    description:
      "Información compartida entre departamentos, con accesos y permisos según cada perfil.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analizamos",
    text: "Estudiamos cómo trabaja tu empresa, qué problemas existen y qué resultado necesitas conseguir.",
  },
  {
    number: "02",
    title: "Definimos",
    text: "Acordamos el alcance, las integraciones, las prioridades y los criterios de aceptación.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    text: "Construimos la solución por fases y validamos su funcionamiento con pruebas.",
  },
  {
    number: "04",
    title: "Evolucionamos",
    text: "Documentamos la entrega y planteamos mejoras y soporte según las necesidades.",
  },
];

const prices = [
  {
    title: "Automatización de procesos",
    price: "1.500–4.000 €",
    description: "Para automatizar un proceso concreto y reducir tareas manuales.",
  },
  {
    title: "CRM e integraciones con IA",
    price: "8.000–12.000 €",
    description: "Para conectar sistemas y coordinar operaciones empresariales.",
    featured: true,
  },
  {
    title: "Plataforma operativa",
    price: "Desde 15.000 €",
    description: "Para soluciones a medida con varios módulos y perfiles de usuario.",
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
              <Eyebrow>IA · Automatización · Software empresarial</Eyebrow>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
                Tu empresa puede trabajar de forma{" "}
                <span className="text-blue-700">más inteligente.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Diseñamos sistemas de inteligencia artificial, automatización
                y software a medida para conectar tus herramientas, reducir
                tareas manuales y mejorar el control de tus operaciones.
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
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Explorar soluciones
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                {[
                  "Soluciones a medida",
                  "Integración con tus sistemas",
                  "Desarrollo por fases",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-700" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagen y panel conceptual */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
                <div className="relative h-[270px] sm:h-[340px]">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                    alt="Oficina moderna y luminosa preparada para el trabajo empresarial"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Tecnología aplicada al negocio
                    </p>
                    <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                      Menos tareas manuales. Más control operativo.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Ejemplo de solución operativa
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Representación conceptual de un panel
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700">
                      DEMOSTRACIÓN
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Información", icon: Database },
                      { label: "Automatización", icon: Workflow },
                      { label: "Seguimiento", icon: ChartNoAxesCombined },
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
                        Trazabilidad y control
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Reglas, permisos y seguimiento de procesos
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
                      Diseñado a medida
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Según tus procesos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
            {[
              {
                title: "Reduce trabajo manual",
                text: "Automatiza tareas repetitivas y dedica más tiempo a actividades de valor.",
              },
              {
                title: "Conecta tus herramientas",
                text: "Coordina datos y procesos sin tener que sustituir todo tu software.",
              },
              {
                title: "Mejora la visibilidad",
                text: "Centraliza estados, incidencias y acciones en procesos definidos.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Check className="h-5 w-5 text-blue-700" />
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
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Tecnología que resuelve problemas reales."
            description="No todas las empresas necesitan lo mismo. Definimos una solución según tus procesos, tus herramientas y los objetivos que quieras alcanzar."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
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
                </article>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Ver todos los servicios
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* LOGÍSTICA Y OPERACIONES */}
        <section className="overflow-hidden bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Eyebrow>Una especialidad de Transport AI</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Más visibilidad y coordinación en cada operación.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Para empresas de transporte, logística y servicios con equipos
                en movimiento, desarrollamos soluciones que ayudan a coordinar
                pedidos, personas, comunicaciones e incidencias desde un mismo
                entorno.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Centralización de información operativa.",
                  "Detección y seguimiento de incidencias.",
                  "Comunicaciones y tareas automatizadas.",
                  "Accesos diferenciados según el perfil de usuario.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto?proyecto=Gestión%20operativa"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Estudiar mi operativa
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Instalaciones logísticas y preparación de operaciones"
                  className="h-56 w-full object-cover sm:h-72"
                />
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">
                        Panel de operaciones
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Ejemplo visual de módulos posibles
                      </p>
                    </div>
                    <Layers3 className="h-5 w-5 text-blue-300" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {capabilities.map((item) => {
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
                    <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-4 sm:col-span-2">
                      <div className="flex items-center gap-3">
                        <GitBranch className="h-5 w-5 text-blue-300" />
                        <p className="text-sm font-semibold">
                          Integración con los sistemas existentes
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        La viabilidad depende de las APIs, los permisos y la
                        documentación que facilite cada proveedor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso claro desde el primer día."
            description="Definimos las necesidades y dependencias antes de desarrollar, para que el alcance y la validación del proyecto estén claros."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
        </section>

        {/* PRECIOS */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading
              eyebrow="Inversión orientativa"
              title="Una solución ajustada a tu proyecto."
              description="Cada presupuesto se define según el alcance, la complejidad, las integraciones y los requisitos de seguridad."
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
              Importes orientativos, más IVA. El presupuesto final dependerá
              del alcance validado, los accesos técnicos y los posibles costes
              de servicios de terceros.
            </p>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  ¿Buscas soporte o un servicio mensual?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Consulta las modalidades recurrentes y los servicios incluidos.
                </p>
              </div>
              <Link
                href="/presupuestos"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
              >
                Ver todos los precios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FUNDADOR */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
            <div>
              <Eyebrow>Quién está detrás</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Tecnología con una visión práctica del negocio.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Transport AI nace para ayudar a las empresas a aplicar la
                inteligencia artificial y la automatización a problemas
                operativos reales. Cada proyecto empieza por entender el
                proceso, no por elegir una tecnología sin contexto.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                El objetivo es construir herramientas útiles, integrables y
                diseñadas alrededor de las necesidades de cada organización.
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
                Desarrollo de soluciones de IA, automatización e integración
                tecnológica para empresas.
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
        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-800 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Hablemos de tu proyecto
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  ¿Qué proceso te gustaría mejorar?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100">
                  Cuéntanos qué necesita tu empresa. Estudiaremos el caso y
                  definiremos los siguientes pasos para valorar una solución.
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
    </SiteShell>
  );
}
