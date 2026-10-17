
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  ShieldEllipsis,
} from "lucide-react";
import { Eyebrow, SiteShell } from "../components/site-shell";

const principles = [
  {
    icon: LockKeyhole,
    title: "Protección de la información",
    text: "Diseñamos cada solución teniendo en cuenta la confidencialidad, el acceso a los datos y las necesidades de cada empresa.",
  },
  {
    icon: KeyRound,
    title: "Accesos y permisos",
    text: "Las aplicaciones pueden estructurarse con permisos por usuario, rol o área para limitar el acceso a la información que corresponde a cada perfil.",
  },
  {
    icon: Network,
    title: "Integraciones controladas",
    text: "Las conexiones con CRM, API y herramientas externas deben definirse con credenciales protegidas, permisos adecuados y una configuración revisada.",
  },
  {
    icon: Eye,
    title: "Trazabilidad operativa",
    text: "Cuando el proyecto lo requiere, se pueden registrar operaciones, incidencias y acciones relevantes para facilitar la supervisión.",
  },
];

const safeguards = [
  "Definición de los permisos necesarios para cada perfil.",
  "Revisión de los datos que se recopilan y de su finalidad.",
  "Pruebas de funcionamiento y gestión de errores antes de la entrega.",
  "Control de las integraciones y de los servicios externos utilizados.",
  "Documentación de las limitaciones y de las responsabilidades del sistema.",
  "Revisión de los casos que necesitan supervisión humana.",
];

export default function SeguridadPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-32 -top-28 h-[30rem] w-[30rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[38rem] h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Seguridad · Confianza · Control</Eyebrow>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl">
              La seguridad forma parte del{" "}
              <span className="text-blue-600">diseño de cada solución.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              En Transport AI abordamos la seguridad desde el diseño de
              procesos, aplicaciones e integraciones. Cada proyecto requiere
              medidas adaptadas a sus datos, usuarios, sistemas y riesgos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Consultar un proyecto
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explorar soluciones
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-base font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Controles definidos desde el inicio.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              La seguridad no depende únicamente de la tecnología. También
              importa cómo se configura, quién puede utilizarla, qué
              información procesa y cómo se supervisa.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <Fingerprint className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-950">
                Aspectos que evaluamos
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {safeguards.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <ShieldEllipsis className="h-6 w-6 text-blue-600" />
                <Eyebrow>Transparencia y responsabilidad</Eyebrow>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Cada proyecto necesita sus propias medidas de seguridad.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Las medidas concretas dependen del alcance, los proveedores,
                los datos y la infraestructura utilizada. Los requisitos de
                seguridad, privacidad y cumplimiento aplicables se deben
                determinar y verificar para cada implementación.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Hablar con el equipo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
            <p className="text-xs leading-6 text-slate-500">
              La información de esta página describe nuestro enfoque de
              trabajo y no constituye una certificación ni una garantía de
              seguridad o cumplimiento normativo. Las medidas efectivas deben
              confirmarse en cada proyecto.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
