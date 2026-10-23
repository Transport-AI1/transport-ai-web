import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  AudioLines,
  Bot,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Headset,
  MapPin,
  MessageSquareText,
  Navigation,
  Package,
  PhoneCall,
  ShieldCheck,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IA para Transporte y Logística | Transport AI",
  description:
    "Reduce el tiempo dedicado a incidencias de transporte. Conecta conductores, operaciones y clientes con una plataforma de logística asistida por IA.",
  alternates: { canonical: "https://logistica.transportai.es/" },
  openGraph: {
    title: "Transport AI Logística | Menos tiempo gestionando incidencias",
    description:
      "Una plataforma para coordinar incidencias, conductores y operaciones logísticas con inteligencia artificial.",
    url: "https://logistica.transportai.es/",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
};

const whatsapp = "https://wa.me/34659980603?text=Hola%2C%20quiero%20conocer%20la%20soluci%C3%B3n%20de%20Transport%20AI%20para%20log%C3%ADstica.";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Transport AI Logística, inicio">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25">
        <Truck size={22} strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-semibold tracking-tight text-white">Transport AI</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300">Logística inteligente</span>
      </span>
    </Link>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-xs font-medium tracking-wide text-blue-200">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
      {children}
    </div>
  );
}

export default function LogisticsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-slate-100 selection:bg-blue-500/30">
      <header className="relative z-10 border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#solucion" className="transition hover:text-white">La solución</a>
            <a href="#conductor" className="transition hover:text-white">App del conductor</a>
            <a href="#incidencias" className="transition hover:text-white">Incidencias</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-100">
            Hablemos <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_20%,rgba(37,99,235,0.19),transparent_40%),radial-gradient(ellipse_at_15%_65%,rgba(14,165,233,0.08),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-28">
          <div>
            <Eyebrow>IA aplicada a operaciones de transporte</Eyebrow>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Menos tiempo resolviendo incidencias. <span className="text-blue-400">Más tiempo entregando.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Conectamos conductores, tráfico y atención al cliente para que cada incidencia llegue al lugar adecuado, con la información necesaria y menos llamadas de ida y vuelta.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
                Solicitar una demostración <ArrowRight size={18} />
              </a>
              <a href="#solucion" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.04]">
                Explorar la solución <ChevronRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Adaptada a tus procesos</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Integración por fases</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Supervisión humana</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1422] shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-white">Centro de operaciones</div>
                  <div className="mt-1 text-xs text-slate-500">Vista de demostración · Datos ficticios</div>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Sistema de ejemplo</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"><Package size={17} className="text-blue-300" /><div className="mt-3 text-2xl font-semibold">128</div><div className="mt-1 text-[11px] text-slate-400">Envíos activos</div></div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"><CircleAlert size={17} className="text-amber-300" /><div className="mt-3 text-2xl font-semibold">07</div><div className="mt-1 text-[11px] text-slate-400">Incidencias</div></div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"><Truck size={17} className="text-emerald-300" /><div className="mt-3 text-2xl font-semibold">24</div><div className="mt-1 text-[11px] text-slate-400">Conductores</div></div>
              </div>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="rounded-xl border border-white/[0.08] bg-[#080e19] p-4">
                  <div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold text-slate-200">Incidencias que requieren atención</span><span className="text-[10px] text-slate-500">EJEMPLO</span></div>
                  <div className="space-y-3">
                    <div className="flex gap-3 rounded-lg border border-amber-300/10 bg-amber-300/[0.04] p-3">
                      <span className="mt-0.5 rounded-lg bg-amber-300/10 p-2 text-amber-300"><MapPin size={16} /></span>
                      <div className="min-w-0 flex-1"><div className="text-xs font-medium text-white">Dirección no coincide</div><div className="mt-1 text-[11px] leading-5 text-slate-400">Pedido TA-2048 · Comprobación de datos</div></div>
                      <span className="self-start rounded-md bg-amber-300/10 px-2 py-1 text-[10px] text-amber-200">Prioridad alta</span>
                    </div>
                    <div className="flex gap-3 rounded-lg border border-white/[0.06] p-3">
                      <span className="mt-0.5 rounded-lg bg-blue-400/10 p-2 text-blue-300"><PhoneCall size={16} /></span>
                      <div className="min-w-0 flex-1"><div className="text-xs font-medium text-white">Destinatario no responde</div><div className="mt-1 text-[11px] leading-5 text-slate-400">Pedido TA-2042 · Contacto pendiente</div></div>
                      <span className="self-start rounded-md bg-blue-400/10 px-2 py-1 text-[10px] text-blue-200">En gestión</span>
                    </div>
                    <div className="flex gap-3 rounded-lg border border-white/[0.06] p-3">
                      <span className="mt-0.5 rounded-lg bg-emerald-400/10 p-2 text-emerald-300"><Check size={16} /></span>
                      <div className="min-w-0 flex-1"><div className="text-xs font-medium text-white">Entrega reprogramada</div><div className="mt-1 text-[11px] leading-5 text-slate-400">Pedido TA-2037 · Registro actualizado</div></div>
                      <span className="self-start rounded-md bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">Resuelta</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] leading-5 text-slate-500"><ShieldCheck size={14} className="shrink-0 text-blue-300" /> Los datos y métricas mostrados son ilustrativos, no datos operativos reales.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:px-8 md:grid-cols-3">
          <div className="flex items-start gap-3"><Clock3 className="mt-1 shrink-0 text-blue-300" size={20} /><div><div className="font-medium text-white">Menos tiempo administrativo</div><p className="mt-1 text-sm leading-6 text-slate-400">Reduce la búsqueda de datos y el seguimiento manual de cada problema.</p></div></div>
          <div className="flex items-start gap-3"><Workflow className="mt-1 shrink-0 text-blue-300" size={20} /><div><div className="font-medium text-white">Un proceso coordinado</div><p className="mt-1 text-sm leading-6 text-slate-400">Centraliza el contexto, las acciones y el estado de cada incidencia.</p></div></div>
          <div className="flex items-start gap-3"><Headset className="mt-1 shrink-0 text-blue-300" size={20} /><div><div className="font-medium text-white">Personas cuando hacen falta</div><p className="mt-1 text-sm leading-6 text-slate-400">La IA puede preparar acciones y escalar decisiones que requieran autorización.</p></div></div>
        </div>
      </section>

      <section id="solucion" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl"><Eyebrow>Una plataforma conectada</Eyebrow><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">De una incidencia a una acción coordinada.</h2><p className="mt-5 leading-7 text-slate-400">No se trata de añadir otro chat. Se trata de que la información viaje con el problema y que cada persona sepa qué hacer a continuación.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-400/30"><div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/10 text-blue-300"><AudioLines size={22} /></div><div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">01 · Conductor</div><h3 className="mt-3 text-xl font-semibold">Lo cuenta por voz</h3><p className="mt-3 text-sm leading-6 text-slate-400">«Estoy en el restaurante y está cerrado». La app recoge el aviso y lo asocia al envío cuando existe información suficiente.</p></article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-400/30"><div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><Bot size={22} /></div><div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">02 · IA logística</div><h3 className="mt-3 text-xl font-semibold">Analiza y propone</h3><p className="mt-3 text-sm leading-6 text-slate-400">Clasifica la incidencia, consulta los procedimientos definidos y prepara la siguiente acción: contactar, notificar o solicitar aprobación.</p></article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-400/30"><div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300"><Check size={22} /></div><div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">03 · Resolución</div><h3 className="mt-3 text-xl font-semibold">Actúa y deja registro</h3><p className="mt-3 text-sm leading-6 text-slate-400">Las acciones autorizadas se ejecutan mediante integraciones disponibles; los casos excepcionales pasan al equipo con todo el contexto.</p></article>
        </div>
      </section>

      <section id="conductor" className="border-y border-white/[0.07] bg-[#0b1220]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div><Eyebrow>Diseñada para el día a día</Eyebrow><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">El conductor habla. La app organiza el siguiente paso.</h2><p className="mt-5 leading-7 text-slate-400">Una experiencia móvil pensada para consultar entregas, recibir instrucciones y registrar incidencias con voz o con controles sencillos, sin tener que navegar por múltiples herramientas.</p>
            <ul className="mt-7 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400" size={18} /> Próxima entrega, dirección e información relevante del envío.</li>
              <li className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400" size={18} /> Registro de incidencias por voz o mediante botones accesibles.</li>
              <li className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400" size={18} /> Instrucciones claras y confirmación antes de acciones sensibles.</li>
              <li className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400" size={18} /> Posible conexión con navegación, prueba de entrega y sistemas existentes, según compatibilidad.</li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-white/15 bg-[#070b14] p-3 shadow-2xl shadow-black/40">
            <div className="rounded-[2rem] border border-white/[0.06] bg-[#101827] px-5 pb-6 pt-5">
              <div className="mx-auto mb-7 h-1 w-16 rounded-full bg-white/20" />
              <div className="flex items-center justify-between"><div><div className="text-xs text-slate-500">BUENOS DÍAS</div><div className="mt-1 text-lg font-semibold">Tu ruta de hoy</div></div><span className="rounded-xl bg-blue-400/10 p-2.5 text-blue-300"><Navigation size={19} /></span></div>
              <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/[0.07] p-4"><div className="flex items-center gap-2 text-xs font-medium text-blue-200"><MapPin size={15} /> SIGUIENTE ENTREGA</div><div className="mt-3 text-base font-semibold">Restaurante La Plaza</div><div className="mt-1 text-sm text-slate-400">Calle de ejemplo, 24 · Madrid</div><div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs text-slate-400"><span>Pedido DEMO-1024</span><span>3 bultos</span></div></div>
              <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#080e19] p-4"><div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-full bg-blue-500 text-white"><AudioLines size={18} /></span><div><div className="text-sm font-medium">Asistente de ruta</div><div className="text-xs text-slate-500">Ejemplo de interacción</div></div></div><p className="mt-4 text-sm leading-6 text-slate-300">«Dime qué ha pasado con la entrega y te ayudo a registrar la incidencia».</p><div className="mt-4 flex gap-2"><span className="flex-1 rounded-lg bg-blue-500 px-3 py-2.5 text-center text-xs font-semibold text-white">Hablar</span><span className="rounded-lg border border-white/10 px-3 py-2.5 text-xs text-slate-300">Escribir</span></div></div>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500"><ShieldCheck size={14} /> Prototipo visual · No envía rutas reales</div>
            </div>
          </div>
        </div>
      </section>

      <section id="incidencias" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><Eyebrow>Automatización con límites claros</Eyebrow><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">La IA no solo avisa del problema. Ayuda a gestionarlo.</h2><p className="mt-5 leading-7 text-slate-400">Los procedimientos se configuran con la empresa. Las acciones externas dependen de las integraciones, permisos y reglas que se acuerden.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200">Hablar sobre mis procesos <ArrowRight size={17} /></a></div>
          <div className="space-y-3">
            {[
              ["Dirección incorrecta", "Contrasta los datos disponibles, solicita la información que falta y prepara una corrección para validarla."],
              ["Cliente o destinatario no responde", "Registra los intentos, propone el siguiente canal de contacto y evita repetir gestiones sin contexto."],
              ["Local cerrado o entrega imposible", "Recoge los detalles, consulta el protocolo de la empresa y plantea opciones como reintento o escalado."],
              ["Retraso o cambio de ruta", "Centraliza el aviso, informa a los equipos autorizados y registra el motivo y el estado actualizado."],
            ].map(([title, description]) => (
              <div key={title} className="flex gap-4 rounded-xl border border-white/[0.09] bg-white/[0.02] p-5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-300/10 text-amber-200"><CircleAlert size={18} /></span>
                <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-400">{description}</p></div>
                <ArrowDownRight size={17} className="ml-auto mt-1 shrink-0 text-slate-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.15),transparent_55%)]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300"><Zap size={26} /></div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Empieza por la incidencia que más tiempo te hace perder.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Analizamos cómo trabaja hoy tu equipo y definimos una primera automatización medible, compatible con tus sistemas y ampliable por fases.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Cuéntanos tu caso <ArrowRight size={18} /></a>
          <p className="mt-4 text-xs text-slate-500">Sin promesas mágicas: alcance, permisos e integraciones se definen antes de poner la solución en producción.</p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Brand />
        <p>© {new Date().getFullYear()} Transport AI · IA y automatización para logística.</p>
        <div className="flex gap-4"><Link href="https://www.transportai.es/privacidad" className="transition hover:text-slate-300">Privacidad</Link><Link href="https://www.transportai.es/seguridad" className="transition hover:text-slate-300">Seguridad</Link><a href="mailto:contacto@transportai.es" className="transition hover:text-slate-300">Contacto</a></div>
      </footer>
    </main>
  );
}
