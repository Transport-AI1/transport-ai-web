
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CircleAlert,
  Database,
  GitBranch,
  Headphones,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IA para Transporte y Logística | Transport AI",
  description:
    "Automatización e inteligencia artificial para empresas de transporte, logística, mensajería y mudanzas. Gestiona incidencias, conecta sistemas y mejora el control operativo.",
  alternates: {
    canonical: "/ia-para-transporte-logistica",
  },
  openGraph: {
    title: "Inteligencia Artificial para Transporte y Logística",
    description:
      "Descubre cómo automatizar incidencias, conectar sistemas y coordinar operaciones con soluciones de IA adaptadas a tu empresa.",
    url: "/ia-para-transporte-logistica",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const problems = [
  {
    icon: CircleAlert,
    title: "Incidencias que se acumulan",
    text: "Organiza reclamaciones, errores de dirección, retrasos y otros problemas para facilitar su seguimiento y escalado.",
  },
  {
    icon: MessageSquareText,
    title: "Demasiados canales de comunicación",
    text: "Diseña flujos que coordinen correo electrónico, consultas y notificaciones cuando las integraciones necesarias estén disponibles.",
  },
  {
    icon: Database,
    title: "Información repartida entre sistemas",
    text: "Conecta CRM y herramientas operativas para reducir duplicidades y consultar la información desde un entorno centralizado.",
  },
  {
    icon: Network,
    title: "Falta de visibilidad entre equipos",
    text: "Organiza paneles y permisos para que cada equipo o delegación acceda a la información que le corresponde.",
  },
];

const capabilities = [
  "Clasificación y seguimiento de incidencias operativas.",
  "Consultas de pedidos y estados desde sistemas conectados.",
  "Asistencia automatizada para consultas y reclamaciones.",
  "Notificaciones y tareas según reglas de negocio.",
  "Paneles con accesos diferenciados por equipo o delegación.",
  "Integración con CRM y APIs cuando el proveedor lo permita.",
];

const process = [
  {
    number: "01",
    title: "Analizamos tu operativa",
    text: "Identificamos las tareas manuales, los sistemas utilizados y los problemas que más tiempo consumen.",
  },
  {
    number: "02",
    title: "Definimos el alcance",
    text: "Priorizamos funcionalidades, dependencias técnicas, permisos, costes y criterios de aceptación.",
  },
  {
    number: "03",
    title: "Desarrollamos por fases",
    text: "Construimos la solución y validamos cada fase con pruebas antes de avanzar.",
  },
  {
    number: "04",
    title: "Preparamos la puesta en marcha",
    text: "Documentamos el funcionamiento y acordamos la entrega, la formación y el posible soporte.",
  },
];

export default function IaParaTransporteLogisticaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-white"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Transport AI
            </Link>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Inteligencia artificial aplicada a operaciones
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              IA para empresas de{" "}
              <span className="text-blue-300">
                transporte y logística.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Automatiza tareas, organiza incidencias y conecta los sistemas
              de tu empresa con soluciones de inteligencia artificial
              diseñadas alrededor de tus procesos operativos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto?proyecto=IA%20para%20transporte%20y%20logistica"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Estudiar mi empresa
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demostraciones"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver demostraciones
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              {["Soluciones a medida", "Desarrollo por fases", "Integraciones según viabilidad"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-300" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold">Operaciones de transporte</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Ejemplo conceptual de una plataforma
                  </p>
                </div>
                <div className="rounded-xl bg-blue-500/15 p-3">
                  <Truck className="h-6 w-6 text-blue-300" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Incidencias", value: "Seguimiento", icon: CircleAlert },
                  { label: "Comunicaciones", value: "Coordinación", icon: Headphones },
                  { label: "Sistemas", value: "Integración", icon: GitBranch },
                  { label: "Automatización", value: "Flujos de trabajo", icon: Workflow },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <Icon className="h-5 w-5 text-blue-300" />
                      <p className="mt-5 text-xs text-slate-400">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                <div>
                  <p className="text-sm font-semibold">Control y trazabilidad</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Permisos, registro de acciones y validación según el alcance acordado.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Ilustración conceptual; no representa métricas de clientes reales.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Retos operativos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Qué puede mejorar la IA en una empresa de transporte?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            La tecnología aporta valor cuando resuelve problemas concretos.
            Analizamos cómo circula la información en tu empresa para diseñar
            automatizaciones útiles y compatibles con tus sistemas.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-700" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Soluciones posibles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Una plataforma adaptada a tu operativa.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Podemos estudiar una automatización concreta o una solución
              integrada con varios módulos. La selección depende de las
              necesidades, el presupuesto y las posibilidades de acceso a los
              sistemas actuales.
            </p>
            <Link
              href="/demostraciones"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Explorar las demostraciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <Bot className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-lg font-semibold">Funciones que podemos valorar</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Metodología
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Del problema a una solución validada.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <p className="text-sm font-semibold text-blue-700">FASE {item.number}</p>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
                <Zap className="h-6 w-6 text-blue-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Siguiente paso
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Estudiemos qué procesos puedes automatizar.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Cuéntanos cómo trabaja tu empresa y qué dificultades quieres
              resolver. Valoraremos contigo el alcance y los siguientes pasos.
            </p>
          </div>

          <Link
            href="/contacto?proyecto=IA%20para%20transporte%20y%20logistica"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Solicitar propuesta
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
