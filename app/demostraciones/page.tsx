
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
} from "lucide-react";
import { Eyebrow, SiteShell } from "../components/site-shell";

const demos = [
  {
    number: "01",
    category: "Gestión de incidencias",
    title: "De una reclamación a una acción concreta.",
    description:
      "Una incidencia entra en el sistema, se analiza la información disponible y se prepara el siguiente paso para el equipo responsable.",
    icon: CircleAlert,
    tags: ["Clasificación", "Seguimiento", "Escalado"],
  },
  {
    number: "02",
    category: "Atención al cliente con IA",
    title: "Respuestas más rápidas, con supervisión.",
    description:
      "Un agente puede interpretar consultas, consultar información autorizada y preparar respuestas. Los casos que requieren intervención se derivan a una persona.",
    icon: Headphones,
    tags: ["Email y consultas", "Contexto", "Supervisión humana"],
  },
  {
    number: "03",
    category: "Operaciones conectadas",
    title: "Cada equipo ve lo que necesita.",
    description:
      "Un panel central puede reunir pedidos, actividad e incidencias, con vistas y permisos configurados para cada sucursal o perfil.",
    icon: Workflow,
    tags: ["Panel operativo", "Permisos", "Integraciones"],
  },
];

function DemoBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      Demostración visual · Datos ficticios
    </span>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
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
              Descubre cómo la inteligencia artificial, las automatizaciones
              y el software a medida pueden ayudar a conectar procesos,
              gestionar incidencias y dar más visibilidad a las operaciones
              de tu empresa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Diseñar una solución
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Vista previa · Centro de operaciones
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Interfaz ilustrativa con información inventada
                </p>
              </div>
              <DemoBadge />
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[190px_1fr]">
              <aside className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Transport AI</p>
                    <p className="text-[10px] text-slate-400">
                      Panel de operaciones
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  {[
                    { label: "Resumen", active: true },
                    { label: "Incidencias", active: false },
                    { label: "Mensajería", active: false },
                    { label: "Automatizaciones", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-lg px-3 py-2.5 text-xs ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Entorno
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Vista demostrativa
                  </p>
                </div>
              </aside>

              <div className="min-w-0 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">
                      Resumen operativo
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Ejemplo de indicadores para una empresa
                    </p>
                  </div>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
                    Datos de ejemplo
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Metric label="Incidencias abiertas" value="12" />
                  <Metric label="Pendientes de revisión" value="04" />
                  <Metric label="Casos escalados" value="03" />
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Actividad reciente
                    </p>
                    <span className="text-xs text-slate-500">
                      Ejemplo ilustrativo
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="flex items-start gap-3 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          Dirección pendiente de confirmar
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          El sistema detecta información que necesita
                          comprobación antes de continuar.
                        </p>
                      </div>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-800">
                        Revisar
                      </span>
                    </div>

                    <div className="flex items-start gap-3 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <MessageSquareText className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          Consulta recibida
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Consulta clasificada para preparar una respuesta
                          con la información disponible.
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-800">
                        En curso
                      </span>
                    </div>

                    <div className="flex items-start gap-3 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          Caso preparado para cierre
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Flujo de ejemplo pendiente de validación según las
                          reglas de la empresa.
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-800">
                        Validar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Aplicaciones prácticas</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tecnología aplicada a problemas reales.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Estos escenarios ilustran lo que puede diseñarse y desarrollarse
              según los procesos, los datos y los sistemas de cada empresa.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {demos.map((demo) => {
              const Icon = demo.icon;

              return (
                <article
                  key={demo.number}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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

                  <Link
                    href="/contacto"
                    className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Consultar esta solución
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                ¿Quieres ver cómo funcionaría en tu empresa?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Cuéntanos qué herramientas utilizas, cómo funciona tu
                operativa y qué quieres mejorar. Podemos estudiar el alcance
                y preparar una propuesta adaptada.
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
              Las pantallas, métricas y flujos de esta página son ilustrativos
              y utilizan datos ficticios. No representan datos de clientes ni
              garantizan que las integraciones descritas estén operativas.
              Las funcionalidades finales dependen del alcance y de los
              sistemas disponibles en cada proyecto.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
