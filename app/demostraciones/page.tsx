import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Headphones,
  MapPin,
  ShieldCheck,
  Workflow,
  Truck,
  Package,
  Building2,
  ChartNoAxesCombined,
  Globe,
  Code2,
  Sparkles,
  ExternalLink,
  MessageSquare,
  ShoppingBag,
  Utensils,
  Mail,
  LockKeyhole,
  Layers3,
  Monitor,
} from "lucide-react";
import { Eyebrow, SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Demostraciones de Web, IA y Software | Transport AI",
  description:
    "Descubre webs corporativas, páginas para empresas, restaurantes, agencias de selección, agentes de IA, automatizaciones y software a medida.",
  alternates: {
    canonical: "/demostraciones",
  },
  openGraph: {
    title: "Demostraciones de Web, IA y Software | Transport AI",
    description:
      "Explora ejemplos de páginas web, inteligencia artificial, automatización y software empresarial.",
    url: "/demostraciones",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
};

// Sustituye estas dos direcciones por las URL reales de tus proyectos en Vercel.
const corporateWebUrl = "PEGA_AQUI_LA_URL_DE_TU_WEB_CORPORATIVA";
const italentersUrl = "PEGA_AQUI_LA_URL_DE_LA_WEB_DE_ITALENTERS";

const mvpUrl = "https://transport-ai1-logistica.vercel.app/";

const categories = [
  "Todos",
  "Páginas web",
  "Inteligencia artificial",
  "Automatización",
  "Software",
  "Logística",
];

const demos = [
  {
    id: "transport-ai-corporativa",
    number: "01",
    category: "Páginas web",
    type: "Diseño web · Web corporativa",
    title: "Web corporativa de Transport AI",
    description:
      "Una web moderna para presentar servicios digitales, diseño web, inteligencia artificial, automatización y software a medida.",
    tags: ["Diseño responsive", "Servicios", "Contacto por WhatsApp"],
    icon: Globe,
    preview: "corporate",
    accent: "blue",
    status: "Demo web disponible",
    href: corporateWebUrl,
    live: true,
  },
  {
    id: "italenters",
    number: "02",
    category: "Páginas web",
    type: "Diseño web · Selección de talento",
    title: "ITALENTERS, S.L.",
    description:
      "Propuesta web para una agencia especializada en selección de desarrolladores. Diseñada para presentar sus servicios y facilitar que las empresas soliciten perfiles tecnológicos.",
    tags: ["Selección de desarrolladores", "Empresas", "Captación de solicitudes"],
    icon: Building2,
    preview: "italenters",
    accent: "violet",
    status: "Demo web disponible",
    href: italentersUrl,
    live: true,
  },
  {
    id: "restaurante",
    number: "03",
    category: "Páginas web",
    type: "Diseño web · Hostelería",
    title: "Web para restaurantes y bares",
    description:
      "Una web con personalidad para mostrar la carta, los platos destacados, la historia del local, sus premios y cómo llegar.",
    tags: ["Carta", "Galería", "Ubicación"],
    icon: Utensils,
    preview: "restaurant",
    accent: "orange",
    status: "Concepto visual",
  },
  {
    id: "landing",
    number: "04",
    category: "Páginas web",
    type: "Diseño web · Captación",
    title: "Landing page para captar clientes",
    description:
      "Una página enfocada en un servicio o campaña, con una propuesta clara, ventajas, preguntas frecuentes y una llamada a la acción.",
    tags: ["Conversión", "Formulario", "Campañas"],
    icon: Sparkles,
    preview: "landing",
    accent: "violet",
    status: "Concepto visual",
  },
  {
    id: "catalogo",
    number: "05",
    category: "Páginas web",
    type: "Diseño web · Productos",
    title: "Catálogo y tienda online",
    description:
      "Presenta productos y servicios de forma organizada, con fichas visuales y una estructura preparada para facilitar las consultas o compras.",
    tags: ["Productos", "Catálogo", "Móvil"],
    icon: ShoppingBag,
    preview: "shop",
    accent: "green",
    status: "Concepto visual",
  },
  {
    id: "chat",
    number: "06",
    category: "Inteligencia artificial",
    type: "IA · Atención al cliente",
    title: "Agente de IA para tu página web",
    description:
      "Un asistente conversacional que puede responder preguntas frecuentes, orientar a los visitantes y recoger solicitudes según su configuración.",
    tags: ["Chat", "Preguntas frecuentes", "Leads"],
    icon: MessageSquare,
    preview: "chat",
    accent: "blue",
    status: "Ejemplo de interfaz",
  },
  {
    id: "voz",
    number: "07",
    category: "Inteligencia artificial",
    type: "IA · Voz y llamadas",
    title: "Agente de voz para llamadas",
    description:
      "Un asistente de voz diseñado para atender consultas, recopilar información y derivar conversaciones cuando sea necesario.",
    tags: ["Voz", "Llamadas", "Derivación"],
    icon: Headphones,
    preview: "voice",
    accent: "violet",
    status: "Ejemplo conceptual",
  },
  {
    id: "automatizacion",
    number: "08",
    category: "Automatización",
    type: "Automatización · Procesos",
    title: "Procesos que trabajan automáticamente",
    description:
      "Conecta formularios, correos y herramientas para reducir tareas repetitivas y organizar el flujo de trabajo de tu equipo.",
    tags: ["Flujos", "Notificaciones", "Integraciones"],
    icon: Workflow,
    preview: "automation",
    accent: "green",
    status: "Ejemplo de interfaz",
  },
  {
    id: "dashboard",
    number: "09",
    category: "Software",
    type: "Software · Analítica",
    title: "Dashboard de gestión empresarial",
    description:
      "Un panel a medida para consultar indicadores, actividad, tareas pendientes y alertas importantes desde una sola pantalla.",
    tags: ["Indicadores", "Informes", "Panel privado"],
    icon: ChartNoAxesCombined,
    preview: "dashboard",
    accent: "blue",
    status: "Ejemplo de interfaz",
  },
  {
    id: "crm",
    number: "10",
    category: "Software",
    type: "Software · Gestión de clientes",
    title: "CRM adaptado a tu negocio",
    description:
      "Organiza clientes, oportunidades, comunicaciones y tareas con una herramienta diseñada en torno a tus procesos.",
    tags: ["Clientes", "Seguimiento", "Tareas"],
    icon: Layers3,
    preview: "crm",
    accent: "orange",
    status: "Ejemplo conceptual",
  },
  {
    id: "transport",
    number: "11",
    category: "Logística",
    type: "MVP online · Transport AI",
    title: "Centro de operaciones logísticas",
    description:
      "Explora el MVP de Transport AI: una demostración orientada a centralizar pedidos, incidencias, conductores y seguimiento operativo.",
    tags: ["Pedidos", "Incidencias", "Conductores"],
    icon: Truck,
    preview: "transport",
    accent: "blue",
    status: "MVP disponible online",
    href: mvpUrl,
    live: true,
  },
];

type Demo = (typeof demos)[number];

function PreviewWindow({ demo }: { demo: Demo }) {
  const accentClasses: Record<string, string> = {
    blue: "bg-blue-600",
    orange: "bg-orange-500",
    violet: "bg-violet-600",
    green: "bg-emerald-600",
  };

  const softClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-700",
    violet: "bg-violet-50 text-violet-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  const accent = accentClasses[demo.accent] ?? "bg-blue-600";
  const soft = softClasses[demo.accent] ?? "bg-blue-50 text-blue-700";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <div className="ml-3 flex h-5 min-w-0 flex-1 items-center rounded-md border border-slate-200 bg-white px-2">
          <span className="truncate text-[9px] text-slate-400">
            vista-previa.local / {demo.id}
          </span>
        </div>
      </div>

      <div className="min-h-[218px] p-3 sm:p-4">
        {demo.preview === "corporate" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-900">
                <span className={`h-4 w-4 rounded ${accent}`} />
                TRANSPORT AI
              </div>
              <div className="flex gap-2 text-[8px] text-slate-500">
                <span>Servicios</span>
                <span>Proyectos</span>
                <span>Contacto</span>
              </div>
            </div>
            <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-3">
              <div>
                <span className={`rounded-full px-2 py-1 text-[8px] ${soft}`}>
                  SOLUCIONES DIGITALES
                </span>
                <div className="mt-3 space-y-1">
                  <div className="h-3 w-full rounded bg-slate-900" />
                  <div className="h-3 w-4/5 rounded bg-slate-900" />
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-3/4 rounded bg-slate-200" />
                </div>
                <div className={`mt-3 h-6 w-24 rounded-md ${accent}`} />
              </div>
              <div className={`flex aspect-square items-center justify-center rounded-2xl ${soft}`}>
                <Globe className="h-12 w-12" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Web", "IA", "Software"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-100 p-2">
                  <div className={`h-4 w-4 rounded ${soft}`} />
                  <div className="mt-2 text-[8px] font-semibold text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {demo.preview === "italenters" && (
          <div className="overflow-hidden rounded-xl bg-slate-950 p-4 text-white">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold tracking-wide">
                ITALENTERS<span className="text-violet-300">.</span>
              </span>
              <span className="text-[8px] text-slate-300">Talento tecnológico</span>
            </div>
            <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] items-center gap-3">
              <div>
                <p className="text-[8px] uppercase tracking-widest text-violet-300">
                  Selección de desarrolladores
                </p>
                <p className="mt-2 text-lg font-semibold leading-tight">
                  El talento que impulsa tu empresa.
                </p>
                <p className="mt-2 text-[8px] leading-4 text-slate-300">
                  Conectamos empresas con perfiles tecnológicos.
                </p>
                <div className="mt-3 inline-flex rounded-lg bg-violet-500 px-3 py-2 text-[8px] font-semibold">
                  Encontrar talento
                </div>
              </div>
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-violet-500/10">
                <Code2 className="h-12 w-12 text-violet-300" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Frontend", "Backend", "Full stack"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-2 py-1 text-[8px] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {demo.preview === "restaurant" && (
          <div className="overflow-hidden rounded-xl bg-[#f7f1e8] p-3">
            <div className="flex items-center justify-between">
              <span className="font-serif text-[12px] font-bold text-[#573b2b]">
                CASA · SABOR
              </span>
              <span className="text-[8px] text-[#795c47]">Carta　Historia</span>
            </div>
            <div className="mt-3 grid grid-cols-[1fr_0.85fr] items-center gap-2">
              <div>
                <div className="font-serif text-xl leading-tight text-[#573b2b]">
                  Cocina con
                  <br />
                  <span className="italic">historia.</span>
                </div>
                <p className="mt-2 text-[8px] leading-4 text-[#795c47]">
                  Tradición, producto y recetas para recordar.
                </p>
                <div className="mt-2 inline-flex rounded-full bg-[#573b2b] px-3 py-2 text-[8px] font-semibold text-white">
                  Descubrir la carta
                </div>
              </div>
              <div className="flex aspect-[4/5] items-center justify-center rounded-full bg-[#e4c8a5]">
                <Utensils className="h-10 w-10 text-[#79523a]" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-[#e0cfb9] pt-2 text-[8px] text-[#795c47]">
              <span>Producto local</span>
              <span>Desde 1985</span>
              <span>Madrid</span>
            </div>
          </div>
        )}

        {demo.preview === "landing" && (
          <div className="rounded-xl bg-slate-950 p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold">IMPULSA DIGITAL</span>
              <span className="rounded-full border border-white/20 px-2 py-1 text-[7px]">Para empresas</span>
            </div>
            <div className="mt-5 max-w-[240px] text-2xl font-semibold leading-tight tracking-tight">
              Haz crecer tu
              <span className="block text-violet-300">próximo proyecto.</span>
            </div>
            <p className="mt-2 max-w-[220px] text-[9px] leading-4 text-slate-300">
              Una propuesta clara, una página enfocada y una acción sencilla.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="rounded-md bg-violet-500 px-3 py-2 text-[8px] font-semibold">
                Solicitar información
              </div>
              <span className="text-[8px] text-slate-300">Cómo funciona →</span>
            </div>
          </div>
        )}

        {demo.preview === "shop" && (
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">FORMA STUDIO</span>
              <ShoppingBag className="h-4 w-4 text-slate-700" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["bg-amber-100", "Pieza 01", "Diseño"],
                ["bg-rose-100", "Pieza 02", "Estilo"],
                ["bg-emerald-100", "Pieza 03", "Calidad"],
              ].map(([color, name, detail]) => (
                <div key={name}>
                  <div className={`flex aspect-[4/5] items-center justify-center rounded-lg ${color}`}>
                    <Package className="h-8 w-8 text-slate-600" />
                  </div>
                  <p className="mt-2 text-[9px] font-semibold text-slate-800">{name}</p>
                  <p className="mt-1 text-[8px] text-slate-500">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 p-2">
              <span className="text-[8px] text-slate-600">Descubre la colección</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        )}

        {demo.preview === "chat" && (
          <div className="mx-auto max-w-[250px] overflow-hidden rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 bg-slate-950 p-3 text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-semibold">Asistente virtual</p>
                <p className="text-[8px] text-emerald-300">Disponible para ayudarte</p>
              </div>
            </div>
            <div className="space-y-3 bg-slate-50 p-3">
              <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-white p-2 text-[9px] leading-4 text-slate-600 shadow-sm">
                ¡Hola! ¿En qué puedo ayudarte hoy?
              </div>
              <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-blue-600 p-2 text-[9px] text-white">
                Quiero información sobre vuestros servicios.
              </div>
              <div className="max-w-[95%] rounded-xl rounded-tl-sm bg-white p-2 text-[9px] leading-4 text-slate-600 shadow-sm">
                Puedo orientarte y recoger tus datos para que el equipo contacte contigo.
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2 py-2 text-[8px] text-slate-400">
                <span>Escribe tu consulta...</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        )}

        {demo.preview === "voice" && (
          <div className="flex min-h-[190px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-violet-950 to-slate-950 p-4 text-center text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20 ring-1 ring-violet-300/30">
              <Headphones className="h-6 w-6 text-violet-200" />
            </div>
            <p className="mt-3 text-sm font-semibold">Asistente de voz</p>
            <p className="mt-1 text-[9px] text-violet-200">Atención conversacional</p>
            <div className="mt-4 flex h-8 items-center justify-center gap-1">
              {[12, 20, 27, 16, 30, 18, 25, 12, 22, 15, 28, 10, 18].map((height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-violet-300"
                  style={{ height }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-[9px] text-slate-200">
              <LockKeyhole className="h-3 w-3" />
              Ejemplo visual · Sin llamada activa
            </div>
          </div>
        )}

        {demo.preview === "automation" && (
          <div className="flex min-h-[190px] flex-col justify-center rounded-xl bg-slate-50 p-3">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
              Flujo de trabajo
            </p>
            {[
              { title: "Nuevo correo recibido", detail: "Detectar y clasificar", icon: Mail },
              { title: "Procesar información", detail: "Aplicar reglas definidas", icon: Bot },
              { title: "Actualizar y notificar", detail: "Según la configuración", icon: Workflow },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] font-semibold text-slate-800">{item.title}</p>
                      <p className="text-[8px] text-slate-500">{item.detail}</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  {index < 2 && <div className="ml-5 h-3 border-l border-dashed border-slate-300" />}
                </div>
              );
            })}
          </div>
        )}

        {demo.preview === "dashboard" && (
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-900">Panel de control</p>
                <p className="mt-1 text-[8px] text-slate-500">Resumen de actividad · Vista ilustrativa</p>
              </div>
              <ChartNoAxesCombined className="h-5 w-5 text-blue-600" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Actividad", "Pendientes", "Proyectos"].map((label, index) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-2">
                  <p className="text-[7px] text-slate-500">{label}</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {["84%", "12", "08"][index]}
                  </p>
                  <div className={`mt-2 h-1 rounded-full ${index === 1 ? "bg-amber-400" : "bg-blue-500"}`} />
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-20 items-end gap-2 rounded-lg border border-slate-200 bg-white px-3 pb-2 pt-3">
              {[34, 52, 40, 69, 47, 82, 60, 92, 67, 77, 55, 88].map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <div
                    className={`w-full rounded-t-sm ${index === 7 ? "bg-blue-600" : "bg-blue-200"}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {demo.preview === "crm" && (
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-900">CRM de clientes</p>
                <p className="mt-1 text-[8px] text-slate-500">Seguimiento comercial · Ejemplo visual</p>
              </div>
              <Building2 className="h-5 w-5 text-orange-500" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["Nuevo", "En curso", "Cerrado"].map((label, index) => (
                <div key={label} className="rounded-md bg-slate-50 p-2">
                  <p className="text-[8px] font-semibold text-slate-600">{label}</p>
                  <p className="mt-1 text-[8px] text-slate-400">
                    {["Contacto inicial", "Propuesta enviada", "Proyecto completado"][index]}
                  </p>
                  <div className={`mt-2 h-1 w-3/4 rounded-full ${["bg-blue-400", "bg-orange-400", "bg-emerald-400"][index]}`} />
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {["Empresa A · Seguimiento pendiente", "Empresa B · Preparar propuesta"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-100 p-2">
                  <div className="h-6 w-6 rounded-full bg-orange-50" />
                  <span className="text-[8px] text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {demo.preview === "transport" && (
          <div className="rounded-xl bg-slate-950 p-3 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Transport AI</p>
                  <p className="text-[8px] text-slate-400">Centro de operaciones</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-300">
                MVP online
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Pedidos", "12"],
                ["Incidencias", "04"],
                ["En reparto", "02"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <p className="text-[8px] text-slate-400">{label}</p>
                  <p className="mt-1 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-[72px] items-center justify-center rounded-lg border border-white/10 bg-slate-900">
              <MapPin className="h-7 w-7 text-blue-400" />
              <span className="ml-2 text-[9px] text-slate-400">Vista ilustrativa de operaciones</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DemonstrationsPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Portfolio tecnológico · Transport AI</Eyebrow>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Web · Inteligencia artificial · Software
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.07] tracking-[-0.045em] sm:text-6xl">
              Ideas que se convierten en
              <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-violet-300 bg-clip-text text-transparent">
                soluciones digitales.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explora ejemplos de páginas web, agentes de inteligencia artificial,
              automatizaciones y software empresarial. Diseñamos cada solución
              según los objetivos y las necesidades de tu negocio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
              >
                Explorar demostraciones
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Soluciones a medida
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Diseño responsive
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Tecnología aplicada al negocio
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur sm:p-4">
              <div className="flex items-center justify-between gap-3 px-2 pb-4 pt-2">
                <div>
                  <p className="text-xs font-semibold text-slate-300">TRANSPORT AI STUDIO</p>
                  <p className="mt-1 text-sm text-white">Soluciones digitales para empresas</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Layers3 className="h-5 w-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Globe, name: "Páginas web", text: "Presencia digital", color: "text-blue-300 bg-blue-400/10" },
                  { icon: Bot, name: "Agentes de IA", text: "Atención inteligente", color: "text-violet-300 bg-violet-400/10" },
                  { icon: Workflow, name: "Automatización", text: "Procesos conectados", color: "text-emerald-300 bg-emerald-400/10" },
                  { icon: Code2, name: "Software", text: "Herramientas a medida", color: "text-orange-300 bg-orange-400/10" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div>
                  <p className="text-sm font-semibold text-white">Tu siguiente proyecto empieza aquí.</p>
                  <p className="mt-1 text-xs text-slate-400">De la idea a una solución real.</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:px-8 md:grid-cols-4">
          {[
            { value: "Web", label: "Diseño y desarrollo" },
            { value: "IA", label: "Agentes inteligentes" },
            { value: "Automatización", label: "Procesos conectados" },
            { value: "Software", label: "Soluciones a medida" },
          ].map((item) => (
            <div key={item.value} className="border-l-2 border-blue-500 pl-4">
              <p className="text-base font-semibold tracking-tight text-slate-950">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Portfolio de soluciones</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
                Tecnología que se adapta a tu negocio.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Cada proyecto es diferente. Aquí puedes explorar ejemplos visuales
                de las soluciones que podemos diseñar y desarrollar contigo.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Monitor className="h-4 w-4" />
              <span>Diseño para escritorio y móvil</span>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category}
                href={`#categoria-${category === "Todos" ? "todos" : category === "Páginas web" ? "web" : category === "Inteligencia artificial" ? "ia" : category === "Automatización" ? "automatizacion" : category === "Software" ? "software" : "logistica"}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {category}
              </a>
            ))}
          </div>

          <div id="categoria-todos" className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {demos.map((demo) => {
              const Icon = demo.icon;
              const isLive = demo.live === true;
              const hasValidUrl =
                typeof demo.href === "string" &&
                demo.href.startsWith("https://") &&
                !demo.href.includes("PEGA_AQUI");

              return (
                <article
                  key={demo.id}
                  id={
                    demo.category === "Páginas web"
                      ? `categoria-web-card-${demo.id}`
                      : demo.category === "Inteligencia artificial"
                        ? `categoria-ia-card-${demo.id}`
                        : demo.category === "Automatización"
                          ? `categoria-automatizacion-card-${demo.id}`
                          : demo.category === "Software"
                            ? `categoria-software-card-${demo.id}`
                            : `categoria-logistica-card-${demo.id}`
                  }
                  className={`group flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${
                    isLive ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"
                  }`}
                >
                  <div className="relative p-3 pb-0 sm:p-4 sm:pb-0">
                    <PreviewWindow demo={demo} />
                    <div className="absolute left-6 top-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-2.5 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                        {isLive ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        )}
                        {demo.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-blue-700">
                        {demo.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">{demo.number}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-950">
                      {demo.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {demo.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {demo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isLive && hasValidUrl ? (
                      <a
                        href={demo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        Abrir demostración real
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : isLive ? (
                      <span className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-xs leading-5 text-amber-800">
                        Añade la URL de Vercel en el código para activar este enlace.
                      </span>
                    ) : (
                      <Link
                        href={`/contacto?servicio=${encodeURIComponent(demo.title)}`}
                        className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        Quiero una solución así
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">Transparencia sobre las demostraciones</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Las vistas previas de esta página son ejemplos visuales para mostrar posibles diseños e interfaces.
                  No son aplicaciones independientes ni implican que todas las funciones estén conectadas o desplegadas.
                  Las demostraciones reales enlazan a sus respectivas webs cuando su URL está configurada.
                  El alcance de cada proyecto se define antes de su desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eyebrow>Cómo trabajamos</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                De una necesidad concreta a una solución útil.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                No se trata de añadir tecnología por añadirla. Primero entendemos
                qué necesita tu empresa y después definimos una solución con un
                alcance claro.
              </p>
              <Link
                href="/servicios"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Descubrir todos los servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Entendemos tu negocio",
                  description: "Analizamos el objetivo, el problema y las herramientas que utilizas.",
                  icon: Building2,
                },
                {
                  number: "02",
                  title: "Definimos la solución",
                  description: "Acordamos funcionalidades, integraciones, prioridades y alcance.",
                  icon: Layers3,
                },
                {
                  number: "03",
                  title: "Diseñamos y desarrollamos",
                  description: "Creamos la web, la automatización o el software adaptado al proyecto.",
                  icon: Code2,
                },
                {
                  number: "04",
                  title: "Preparamos la entrega",
                  description: "Revisamos el funcionamiento y definimos la puesta en marcha acordada.",
                  icon: CheckCircle2,
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-semibold tracking-wider text-blue-700">{step.number}</span>
                        <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-300">
                <Sparkles className="h-5 w-5" />
                Tu proyecto empieza con una conversación
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                ¿Qué te gustaría mejorar en tu empresa?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Cuéntanos tu idea: una web nueva, un agente de IA, una tarea que
                quieras automatizar o una herramienta que se adapte a tu forma de
                trabajar. Estudiaremos contigo el siguiente paso.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Propuesta adaptada al proyecto
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Alcance definido antes de desarrollar
                </span>
              </div>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Hablar de mi proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Transport AI · Web, inteligencia artificial y software a medida.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 font-semibold text-slate-300 hover:text-white">
              Contactar
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
