
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Headphones,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Workflow,
  Truck,
  Package,
  Building2,
  Mail,
  PhoneCall,
  ChartNoAxesCombined,
} from "lucide-react";
import { Eyebrow, SiteShell } from "../components/site-shell";

const mvpUrl = "https://transport-ai1-logistica.vercel.app/";

const demos = [
  {
    number: "01",
    category: "MVP funcional · Transport AI",
    title: "Un centro de operaciones para controlar la logística.",
    description:
      "Mi plataforma de gestión logística reúne pedidos, anomalías, conductores y estados de reparto en un único entorno, con un mapa para visualizar las operaciones.",
    icon: Truck,
    tags: [
      "Dashboard operativo",
      "Pedidos",
      "Anomalías",
      "Conductores",
      "Mapa de operaciones",
    ],
    href: mvpUrl,
    action: "Entrar a la demostración",
    live: true,
  },
  {
    number: "02",
    category: "Gestión inteligente de incidencias",
    title: "De una reclamación a una acción concreta.",
    description:
      "Diseño de flujos para clasificar incidencias, detectar información incompleta, registrar cada actuación y derivar los casos que requieren intervención humana.",
    icon: CircleAlert,
    tags: ["Clasificación", "Seguimiento", "Escalado"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
  {
    number: "03",
    category: "Atención al cliente con IA",
    title: "Respuestas más rápidas, con supervisión.",
    description:
      "Un agente de IA puede interpretar consultas, consultar información autorizada y preparar respuestas sobre pedidos o servicios. Los casos complejos se derivan al equipo.",
    icon: Headphones,
    tags: ["Consultas", "Contexto", "Supervisión humana"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
  {
    number: "04",
    category: "Gestión de mensajeros y entregas",
    title: "Conecta la información de la oficina y la calle.",
    description:
      "Una solución adaptada para consultar entregas, comunicar instrucciones a los conductores y centralizar incidencias relacionadas con el reparto.",
    icon: MapPin,
    tags: ["Reparto", "Notificaciones", "Seguimiento"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
  {
    number: "05",
    category: "CRM y automatización",
    title: "Menos tareas repetitivas. Más tiempo para el equipo.",
    description:
      "Automatización de tareas administrativas, clasificación de correos, registro de conversaciones y conexión de herramientas empresariales mediante integraciones.",
    icon: Workflow,
    tags: ["CRM", "Correo electrónico", "Integraciones"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
  {
    number: "06",
    category: "Gestión por delegaciones",
    title: "Cada delegación trabaja con sus propios datos.",
    description:
      "Plataforma diseñada con accesos y permisos por sucursal, zona o perfil para separar la información y facilitar la supervisión centralizada.",
    icon: Building2,
    tags: ["Delegaciones", "Permisos", "Control de acceso"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
  {
    number: "07",
    category: "Panel de control empresarial",
    title: "Toda la actividad importante, de un vistazo.",
    description:
      "Un dashboard a medida puede reunir indicadores, tareas pendientes, actividad reciente y alertas para ayudar a los responsables a tomar decisiones.",
    icon: ChartNoAxesCombined,
    tags: ["Indicadores", "Alertas", "Informes"],
    href: "/contacto",
    action: "Consultar esta solución",
    live: false,
  },
];

function DemoBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      MVP disponible online
    </span>
  );
}

function Metric({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Truck;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-slate-500 sm:text-sm">
          {label}
        </p>
        <Icon className="h-4 w-4 text-blue-600" />
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}

export default function DemonstrationsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-32 -top-28 h-[30rem] w-[30rem] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Demostraciones · Soluciones empresariales</Eyebrow>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl">
              Menos tareas manuales.
              <span className="block text-blue-600">
                Más control sobre tu negocio.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Descubre proyectos, demostraciones y soluciones de inteligencia
              artificial y software a medida para conectar procesos, gestionar
              incidencias y mejorar las operaciones de tu empresa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Ver mi MVP de Transport AI
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Diseñar una solución
              </Link>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Transport AI
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Centro de operaciones logísticas
                    </p>
                  </div>
                </div>
              </div>
              <DemoBadge />
            </div>

            <div className="mt-6 flex flex-col gap-5 lg:flex-row">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Control operativo en un solo lugar.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  Explora el MVP de Transport AI y descubre cómo se organiza la
                  información de pedidos, anomalías, conductores y reparto en
                  una misma plataforma.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <Metric
                    label="Pedidos activos"
                    value="3"
                    icon={Truck}
                  />
                  <Metric
                    label="Anomalías pendientes"
                    value="4"
                    icon={CircleAlert}
                  />
                  <Metric
                    label="Pedidos totales"
                    value="12"
                    icon={Package}
                  />
                  <Metric
                    label="En reparto"
                    value="2"
                    icon={MapPin}
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">
                        Una base para operaciones más conectadas
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        El MVP reúne diferentes áreas de la operativa logística.
                        Las ampliaciones y conexiones con sistemas externos se
                        valoran según los requisitos de cada empresa.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={mvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                >
                  Entrar a la demostración
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 lg:max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Áreas del MVP
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      icon: ChartNoAxesCombined,
                      label: "Dashboard",
                      detail: "Resumen de la operativa",
                    },
                    {
                      icon: Package,
                      label: "Pedidos",
                      detail: "Consulta y seguimiento",
                    },
                    {
                      icon: CircleAlert,
                      label: "Anomalías",
                      detail: "Información que revisar",
                    },
                    {
                      icon: Truck,
                      label: "Conductores",
                      detail: "Gestión de repartidores",
                    },
                    {
                      icon: MapPin,
                      label: "Mapa de operaciones",
                      detail: "Ubicación visual de pedidos",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-500">
                  La web de demostración se abre en una pestaña nueva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Aplicaciones prácticas</Eyebrow>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Siete formas de aplicar la tecnología a tu negocio.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Empieza por el MVP de Transport AI y explora otros ejemplos de
              soluciones que podemos estudiar y desarrollar según los procesos
              y las herramientas de cada empresa.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demos.map((demo) => {
              const Icon = demo.icon;

              return (
                <article
                  key={demo.number}
                  className={`flex flex-col rounded-3xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7 ${
                    demo.live
                      ? "border-blue-200 ring-1 ring-blue-100"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        demo.live
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold text-slate-300">
                      {demo.number}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {demo.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-950">
                    {demo.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {demo.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {demo.live ? (
                    <a
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      {demo.action}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={demo.href}
                      className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      {demo.action}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-300">
                <Bot className="h-5 w-5" />
                Soluciones a medida
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                ¿Quieres una solución adaptada a tu empresa?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Cuéntanos qué herramientas utilizas, cómo funciona tu operativa
                y qué quieres mejorar. Podemos estudiar el alcance, las
                integraciones necesarias y preparar una propuesta adaptada.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
            <p className="text-xs leading-6 text-slate-500">
              El primer elemento enlaza con el MVP online de Transport AI. Las
              demás tarjetas describen ejemplos de soluciones que pueden
              desarrollarse a medida; no implican que esas funcionalidades
              estén actualmente implementadas o integradas. Las métricas del
              panel de presentación son ilustrativas y las funcionalidades
              finales dependen del alcance acordado con cada empresa.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
