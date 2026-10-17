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
} from "lucide-react";
import {
  Eyebrow,
  SectionHeading,
  SiteShell,
} from "../components/site-shell";

const solutions = [
  {
    icon: Bot,
    title: "Agentes de inteligencia artificial",
    description:
      "Sistemas que interpretan solicitudes, consultan información y ayudan a ejecutar tareas dentro de límites definidos.",
    examples: [
      "Clasificación y tratamiento de solicitudes",
      "Asistencia a equipos internos",
      "Consulta de información empresarial",
      "Escalado de casos complejos",
    ],
  },
  {
    icon: Workflow,
    title: "Automatización de operaciones",
    description:
      "Flujos que conectan eventos, reglas y acciones para reducir pasos manuales y mejorar la trazabilidad.",
    examples: [
      "Creación y actualización de registros",
      "Avisos y recordatorios automáticos",
      "Gestión de excepciones e incidencias",
      "Asignación de tareas por reglas",
    ],
  },
  {
    icon: Database,
    title: "CRM, APIs e integraciones",
    description:
      "Conectamos las herramientas existentes cuando sus APIs, permisos y condiciones técnicas lo permiten.",
    examples: [
      "Integración con CRM y ERP",
      "Sincronización de datos",
      "Conexión entre aplicaciones",
      "Validación y registro de operaciones",
    ],
  },
  {
    icon: Layers3,
    title: "Plataformas y paneles a medida",
    description:
      "Interfaces de trabajo para centralizar la información y facilitar el seguimiento de cada proceso.",
    examples: [
      "Paneles de gestión",
      "Roles y permisos por usuario",
      "Seguimiento de tareas y estados",
      "Vistas diferenciadas por equipo o delegación",
    ],
  },
  {
    icon: MessageSquare,
    title: "Comunicación multicanal",
    description:
      "Flujos que organizan las comunicaciones y registran las respuestas en los sistemas conectados.",
    examples: [
      "Gestión de correo electrónico",
      "Notificaciones por canales compatibles",
      "Registro de respuestas",
      "Derivación a una persona cuando sea necesario",
    ],
  },
  {
    icon: GitBranch,
    title: "Sistemas operativos especializados",
    description:
      "Soluciones que combinan varios componentes para resolver una necesidad operativa concreta de principio a fin.",
    examples: [
      "Coordinación de procesos",
      "Detección de inconsistencias",
      "Historial de actuaciones",
      "Métricas e informes de seguimiento",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Eyebrow>Soluciones tecnológicas</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Tecnología conectada a
            <span className="block text-blue-400">los objetivos de tu empresa.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Desarrollamos automatizaciones, integraciones y software a medida.
            Partimos de los procesos que necesitas mejorar y diseñamos una solución
            adecuada a tus herramientas, datos y recursos.
          </p>
          <Link
            href="/contacto"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
          >
            Consultar mi proyecto
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Áreas de especialización"
          title="Una solución para cada reto operativo."
          description="Podemos desarrollar componentes individuales o combinarlos en un proyecto integral. El alcance se determina después de analizar tus necesidades."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-7 transition hover:border-blue-400/30 sm:p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs tracking-[0.2em] text-slate-600">
                  SOLUCIÓN 0{index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{solution.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {solution.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0b0f17]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Diseño responsable</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Automatizar no significa perder el control.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Las soluciones deben contemplar permisos, registros, validaciones
              y tratamiento de errores desde el principio. Definimos qué puede
              hacer el sistema, cuándo necesita aprobación y cuándo debe intervenir
              una persona.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["Seguridad y permisos", "Acceso según los roles y las necesidades de cada equipo."],
              ["Trazabilidad", "Registro de acciones, resultados y excepciones."],
              ["Validación", "Pruebas con escenarios reales y criterios acordados."],
              ["Protección de datos", "Diseño de acuerdo con los datos tratados y los requisitos aplicables."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          Siguiente paso
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
          Cuéntanos qué quieres mejorar.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Estudiaremos el proceso, las herramientas disponibles y las dependencias
          técnicas para preparar una propuesta con alcance y fases definidos.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold transition hover:bg-blue-400"
        >
          Hablar de mi proyecto
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteShell>
  );
}
