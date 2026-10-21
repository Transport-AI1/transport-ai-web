
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  CircleAlert,
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
  Smartphone,
  Mail,
  LockKeyhole,
  Layers3,
  Monitor,
  MousePointer2,
  Target,
} from "lucide-react";

import { Eyebrow, SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Demostraciones de Web, IA y Software | Transport AI",
  description:
    "Explora las demostraciones de Transport AI: páginas web profesionales, tiendas online, agentes de inteligencia artificial, automatizaciones y software empresarial.",
  alternates: {
    canonical: "/demostraciones",
  },
  openGraph: {
    title: "Demostraciones de Web, IA y Software | Transport AI",
    description:
      "Descubre ejemplos de páginas web, tiendas online, inteligencia artificial, automatizaciones y software creados por Transport AI.",
    url: "/demostraciones",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
};

const corporateUrl = "https://transport-ai-web-corporativa.vercel.app/";
const restaurantUrl = "https://transport-ai-restaurant.vercel.app/";
const landingUrl = "https://transport-ai-landing.vercel.app/";
const shopUrl = "https://transport-ai-shop.vercel.app/";
const aiAgentUrl = "https://transport-ai-agente-ia.vercel.app/";
const mvpUrl = "https://transport-ai1-logistica.vercel.app/";

const categories = [
  "Todos",
  "Páginas web",
  "Inteligencia artificial",
  "Automatización",
  "Software",
  "Logística",
] as const;

type Category = (typeof categories)[number];

type Demo = {
  number: string;
  id: string;
  category: Exclude<Category, "Todos">;
  title: string;
  description: string;
  tags: string[];
  preview:
    | "corporate"
    | "restaurant"
    | "landing"
    | "shop"
    | "chat"
    | "voice"
    | "automation"
    | "dashboard"
    | "crm"
    | "transport";
  status: string;
  href?: string;
  live?: boolean;
};

const demos: Demo[] = [
  {
    number: "01",
    id: "web-corporativa",
    category: "Páginas web",
    title: "Web corporativa profesional",
    description:
      "Una web moderna para presentar una empresa, mostrar sus servicios y convertir visitas en oportunidades comerciales.",
    tags: ["Diseño web", "Responsive", "Imagen de marca"],
    preview: "corporate",
    status: "Demostración disponible online",
    href: corporateUrl,
    live: true,
  },
  {
    number: "02",
    id: "restaurante",
    category: "Páginas web",
    title: "Web profesional para restaurante",
    description:
      "Una web gastronómica con carta digital, presentación del establecimiento y una experiencia adaptada a móviles.",
    tags: ["Diseño web", "Carta digital", "Restauración"],
    preview: "restaurant",
    status: "Demostración disponible online",
    href: restaurantUrl,
    live: true,
  },
  {
    number: "03",
    id: "landing",
    category: "Páginas web",
    title: "Landing page de captación",
    description:
      "Una página de aterrizaje profesional diseñada para presentar servicios, destacar ventajas y convertir visitas en contactos. Incluye llamadas a la acción para contactar directamente por WhatsApp.",
    tags: [
      "Captación de clientes",
      "Conversión",
      "WhatsApp",
      "Diseño responsive",
    ],
    preview: "landing",
    status: "Demostración disponible online",
    href: landingUrl,
    live: true,
  },
  {
    number: "04",
    id: "tienda-online",
    category: "Páginas web",
    title: "Catálogo y tienda online",
    description:
      "Una experiencia visual para mostrar productos, organizar categorías y preparar una tienda digital adaptada a móviles.",
    tags: ["Catálogo", "E-commerce", "Productos", "Diseño responsive"],
    preview: "shop",
    status: "Demostración disponible online",
    href: shopUrl,
    live: true,
  },
  {
    number: "05",
    id: "agente-ia",
    category: "Inteligencia artificial",
    title: "Agente de IA para páginas web",
    description:
      "Un asistente interactivo que responde preguntas sobre servicios, orienta a los visitantes y facilita el contacto con tu empresa.",
    tags: ["Asistente IA", "Atención al cliente", "Web", "Captación"],
    preview: "chat",
    status: "Demostración disponible online",
    href: aiAgentUrl,
    live: true,
  },
  {
    number: "06",
    id: "agente-voz",
    category: "Inteligencia artificial",
    title: "Agente de voz con IA",
    description:
      "Un asistente conversacional para atender consultas, orientar a los usuarios y facilitar la gestión de solicitudes.",
    tags: ["Voz", "Conversación", "Automatización"],
    preview: "voice",
    status: "Concepto visual",
  },
  {
    number: "07",
    id: "automatizacion",
    category: "Automatización",
    title: "Automatización de procesos",
    description:
      "Conecta tareas, aplicaciones y notificaciones para reducir trabajo repetitivo y mejorar el seguimiento de cada proceso.",
    tags: ["Flujos", "Integraciones", "Productividad"],
    preview: "automation",
    status: "Concepto visual",
  },
  {
    number: "08",
    id: "dashboard",
    category: "Software",
    title: "Dashboard empresarial",
    description:
      "Un panel de control para consultar indicadores, revisar actividad y visualizar información importante en un solo lugar.",
    tags: ["Indicadores", "Informes", "Datos"],
    preview: "dashboard",
    status: "Concepto visual",
  },
  {
    number: "09",
    id: "crm",
    category: "Software",
    title: "CRM y gestión de clientes",
    description:
      "Una interfaz para centralizar clientes, organizar oportunidades comerciales y consultar el estado de cada seguimiento.",
    tags: ["CRM", "Clientes", "Seguimiento"],
    preview: "crm",
    status: "Concepto visual",
  },
  {
    number: "10",
    id: "transport",
    category: "Logística",
    title: "Centro de operaciones logísticas",
    description:
      "Un MVP orientado al transporte para centralizar operaciones, consultar incidencias y visualizar información relevante.",
    tags: ["Logística", "Incidencias", "Operaciones"],
    preview: "transport",
    status: "MVP disponible online",
    href: mvpUrl,
    live: true,
  },
];

function PreviewWindow({ demo }: { demo: Demo }) {
  const isDark = demo.preview === "transport";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${
        isDark
          ? "border-slate-700 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          isDark
            ? "border-slate-800 bg-slate-900"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <div
          className={`max-w-[65%] truncate rounded-md px-3 py-1 text-[10px] ${
            isDark
              ? "bg-slate-800 text-slate-400"
              : "bg-white text-slate-500"
          }`}
        >
          {demo.preview === "corporate"
            ? "transport-ai-web-corporativa.vercel.app"
            : demo.preview === "restaurant"
              ? "transport-ai-restaurant.vercel.app"
              : demo.preview === "landing"
                ? "transport-ai-landing.vercel.app"
                : demo.preview === "shop"
                  ? "transport-ai-shop.vercel.app"
                  : demo.preview === "chat"
                    ? "transport-ai-agente-ia.vercel.app"
                    : demo.preview === "transport"
                      ? "transport-ai · operaciones"
                      : `demo.transport-ai.es/${demo.id}`}
        </div>

        <Monitor
          className={`h-4 w-4 ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        />
      </div>

      <div className="min-h-[230px] p-4 sm:min-h-[260px] sm:p-5">
        {demo.preview === "corporate" && (
          <div className="flex min-h-[220px] flex-col overflow-hidden rounded-xl bg-slate-950 p-5 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500">
                  <Sparkles className="h-4 w-4" />
                </span>
                Transport AI
              </div>
              <span className="text-[9px] text-slate-400">
                WEB · IA · SOFTWARE
              </span>
            </div>

            <div className="my-auto py-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                Tecnología para empresas
              </p>
              <h3 className="max-w-xs text-2xl font-bold leading-tight sm:text-3xl">
                Tecnología útil.
                <br />
                Procesos más inteligentes.
              </h3>
              <p className="mt-3 max-w-xs text-xs leading-5 text-slate-300">
                Diseño web, inteligencia artificial y automatización adaptados
                a cada negocio.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-xs font-semibold">
                Descubrir soluciones <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["Diseño web", "Inteligencia IA", "Automatización"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[9px] text-slate-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {demo.preview === "restaurant" && (
          <div className="overflow-hidden rounded-xl bg-[#f6f4ed] text-[#20271f]">
            <div className="flex items-center justify-between border-b border-[#dedccf] px-4 py-3">
              <div className="font-serif text-xs font-bold tracking-wide sm:text-sm">
                TRANSPORT AI
                <span className="ml-1 text-[#68734b]">RESTAURANT</span>
              </div>
              <Utensils className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="flex flex-col justify-center py-2">
                <p className="text-[9px] uppercase tracking-widest text-[#68734b]">
                  Diseño gastronómico
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold leading-tight sm:text-2xl">
                  Una experiencia para saborear.
                </h3>
                <p className="mt-2 text-[10px] leading-4 text-[#686b5e]">
                  Carta digital, imagen cuidada y una web hecha para tu negocio.
                </p>
                <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-[#3d4932] px-3 py-2 text-[9px] font-semibold text-white">
                  Ver demostración <ArrowRight className="h-3 w-3" />
                </span>
              </div>

              <div className="flex min-h-[150px] flex-col items-center justify-center rounded-lg bg-[#e5e6d9] p-3 text-center">
                <Utensils className="h-10 w-10 text-[#68734b]" />
                <span className="mt-3 text-[9px] font-semibold uppercase tracking-widest text-[#3d4932]">
                  Web para restauración
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-4 pb-4">
              {["Carta digital", "Diseño responsive", "Contacto"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#dedccf] bg-white/70 p-2 text-center text-[9px]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {demo.preview === "landing" && (
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 p-5 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500">
                  <Target className="h-4 w-4" />
                </span>
                TRANSPORT AI
              </span>
              <span className="rounded-full border border-white/20 px-2 py-1 text-[9px] text-blue-100">
                Captación
              </span>
            </div>

            <div className="py-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Landing page profesional
              </p>
              <h3 className="mt-3 max-w-xs text-2xl font-bold leading-tight sm:text-3xl">
                Convierte visitas en oportunidades reales.
              </h3>
              <p className="mt-3 max-w-xs text-[10px] leading-5 text-slate-300">
                Presenta tus servicios, destaca tu propuesta de valor y facilita
                que tus clientes contacten contigo.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500 px-3 py-2 text-[10px] font-semibold">
                  <MousePointer2 className="h-3.5 w-3.5" />
                  Solicitar información
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-[10px] font-semibold">
                  <MessageSquare className="h-3.5 w-3.5" />
                  WhatsApp
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["Diseño premium", "Captación", "Contacto directo"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[9px] text-slate-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {demo.preview === "shop" && (
          <div className="overflow-hidden rounded-xl bg-slate-50 p-3 sm:p-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShoppingBag className="h-4 w-4 text-blue-600" />
                TRANSPORT AI SHOP
              </div>
              <span className="text-[10px] text-slate-500">Tienda online</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Todos", "Novedades", "Accesorios"].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                {
                  name: "Producto esencial",
                  price: "29 €",
                  style: "from-amber-100 to-orange-200",
                  icon: Package,
                },
                {
                  name: "Colección nueva",
                  price: "39 €",
                  style: "from-rose-100 to-pink-200",
                  icon: ShoppingBag,
                },
                {
                  name: "Producto premium",
                  price: "49 €",
                  style: "from-emerald-100 to-teal-200",
                  icon: Sparkles,
                },
              ].map((product) => {
                const Icon = product.icon;

                return (
                  <div
                    key={product.name}
                    className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <div
                      className={`flex h-20 items-center justify-center bg-gradient-to-br ${product.style}`}
                    >
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <div className="p-2">
                      <p className="truncate text-[9px] font-semibold text-slate-800">
                        {product.name}
                      </p>
                      <p className="mt-1 text-[10px] font-bold text-slate-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between rounded-lg bg-blue-600 px-3 py-2.5 text-white">
              <span className="text-[10px] font-semibold">
                Explorar catálogo
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        )}

        {demo.preview === "chat" && (
          <div className="mx-auto max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3 border-b pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Asistente de Transport AI
                </p>
                <p className="text-[10px] text-emerald-600">
                  Demo disponible online
                </p>
              </div>
            </div>

            <div className="space-y-3 py-4">
              <div className="max-w-[85%] rounded-xl rounded-tl-none bg-slate-100 p-3 text-[10px] leading-4 text-slate-700">
                ¡Hola! ¿En qué puedo ayudarte hoy?
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-none bg-blue-600 p-3 text-[10px] leading-4 text-white">
                Quiero información sobre vuestros servicios.
              </div>
              <div className="max-w-[85%] rounded-xl rounded-tl-none bg-slate-100 p-3 text-[10px] leading-4 text-slate-700">
                Puedo explicarte las soluciones y ayudarte a contactar con el
                equipo.
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border px-3 py-2 text-[10px] text-slate-400">
              Escribe tu consulta...
              <MessageSquare className="h-3.5 w-3.5" />
            </div>

            <a
              href={aiAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              Probar asistente <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        {demo.preview === "voice" && (
          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-violet-950 to-indigo-800 p-5 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Headphones className="h-8 w-8" />
            </div>
            <p className="mt-4 text-sm font-bold">Asistente de voz IA</p>
            <p className="mt-1 text-center text-[10px] text-violet-200">
              Atención conversacional para tus clientes
            </p>
            <div className="my-4 flex h-8 items-center gap-1">
              {[12, 22, 30, 17, 26, 14, 32, 18, 27, 12, 22].map(
                (height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1 rounded-full bg-violet-300"
                    style={{ height: `${height}px` }}
                  />
                ),
              )}
            </div>
            <span className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] text-violet-100">
              Ejemplo de interfaz
            </span>
          </div>
        )}

        {demo.preview === "automation" && (
          <div className="flex min-h-[220px] flex-col justify-center rounded-xl bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                Flujo automatizado
              </span>
              <Workflow className="h-4 w-4 text-emerald-600" />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              {[
                {
                  label: "Entrada",
                  icon: Mail,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  label: "Procesamiento",
                  icon: Bot,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  label: "Resultado",
                  icon: CheckCircle2,
                  color: "bg-emerald-100 text-emerald-700",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="relative">
                    <div className="flex min-h-[88px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${step.color}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="mt-2 text-[9px] font-semibold text-slate-700">
                        {step.label}
                      </span>
                    </div>
                    {index < 2 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-center text-[10px] text-slate-500">
              Menos tareas repetitivas. Más control.
            </p>
          </div>
        )}

        {demo.preview === "dashboard" && (
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                Resumen empresarial
              </span>
              <ChartNoAxesCombined className="h-4 w-4 text-blue-600" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Actividad", value: "1.284" },
                { label: "Procesos", value: "86" },
                { label: "Pendientes", value: "12" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-white p-2"
                >
                  <p className="text-[9px] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex h-20 items-end gap-2 rounded-lg border border-slate-200 bg-white px-3 pb-2 pt-3">
              {[35, 55, 43, 72, 51, 86, 64, 95, 69, 80, 59, 91].map(
                (height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex-1 rounded-t bg-blue-500/80"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>
        )}

        {demo.preview === "crm" && (
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                Gestión de clientes
              </span>
              <Building2 className="h-4 w-4 text-violet-600" />
            </div>

            <div className="mt-3 space-y-2">
              {[
                {
                  name: "Empresa Norte",
                  state: "Nuevo",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  name: "Grupo Central",
                  state: "En seguimiento",
                  color: "bg-amber-100 text-amber-700",
                },
                {
                  name: "Servicios Delta",
                  state: "Contactado",
                  color: "bg-emerald-100 text-emerald-700",
                },
              ].map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white p-3"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      <Building2 className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="truncate text-[10px] font-semibold text-slate-800">
                      {client.name}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-[9px] ${client.color}`}
                  >
                    {client.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {demo.preview === "transport" && (
          <div className="rounded-xl bg-slate-950 p-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">Centro de operaciones</p>
                <p className="mt-1 text-[9px] text-slate-400">
                  Vista de demostración
                </p>
              </div>
              <Truck className="h-5 w-5 text-emerald-400" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Incidencias", value: "48" },
                { label: "Resueltas IA", value: "31" },
                { label: "Pendientes", value: "9" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-2"
                >
                  <p className="text-[9px] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-2.5">
                <CircleAlert className="h-4 w-4 shrink-0 text-amber-400" />
                <div>
                  <p className="text-[10px] font-semibold">
                    Incidencia de dirección
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Revisión de datos de entrega
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-[10px] font-semibold">
                    Seguimiento automatizado
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Información centralizada
                  </p>
                </div>
              </div>
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
      <main className="overflow-hidden">
        <section className="relative border-b border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Demostraciones · Transport AI</Eyebrow>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tecnología que puedes ver.
                <span className="block text-blue-600">
                  Soluciones que puedes explorar.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Descubre ejemplos de páginas web profesionales, tiendas online,
                asistentes de inteligencia artificial, automatizaciones y
                software empresarial. Desarrollamos soluciones adaptadas a las
                necesidades de cada negocio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Explorar demostraciones
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Cuéntanos tu proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Diseños adaptados a móvil
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Soluciones personalizadas
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Integración de tecnologías
                </span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: "Páginas web",
                  text: "Presencia digital",
                },
                {
                  icon: Bot,
                  title: "Inteligencia artificial",
                  text: "Asistentes inteligentes",
                },
                {
                  icon: Workflow,
                  title: "Automatización",
                  text: "Procesos conectados",
                },
                {
                  icon: Layers3,
                  title: "Software",
                  text: "Herramientas de gestión",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="catalogo"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Catálogo de soluciones</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Explora lo que podemos construir
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Cada proyecto parte de un objetivo de negocio. Explora los
                ejemplos y descubre qué tipo de solución puede encajar con tu
                empresa.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Layers3 className="h-4 w-4" />
              {demos.length} demostraciones
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const sectionId =
                category === "Todos"
                  ? "catalogo"
                  : category
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("í", "i");

              return (
                <a
                  key={category}
                  href={`#${sectionId}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {category}
                </a>
              );
            })}
          </div>

          <div className="mt-10 space-y-14">
            {categories
              .filter((category) => category !== "Todos")
              .map((category) => {
                const categoryDemos = demos.filter(
                  (demo) => demo.category === category,
                );

                if (categoryDemos.length === 0) return null;

                const sectionId = category
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("í", "i");

                return (
                  <div
                    key={category}
                    id={sectionId}
                    className="scroll-mt-8"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {category === "Páginas web" ? (
                          <Globe className="h-5 w-5" />
                        ) : category === "Inteligencia artificial" ? (
                          <Bot className="h-5 w-5" />
                        ) : category === "Automatización" ? (
                          <Workflow className="h-5 w-5" />
                        ) : category === "Software" ? (
                          <Code2 className="h-5 w-5" />
                        ) : (
                          <Truck className="h-5 w-5" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          {category}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {categoryDemos.length}{" "}
                          {categoryDemos.length === 1
                            ? "demostración"
                            : "demostraciones"}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {categoryDemos.map((demo) => (
                        <article
                          key={demo.id}
                          className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                        >
                          <div className="p-3 pb-0">
                            <PreviewWindow demo={demo} />
                          </div>

                          <div className="flex flex-1 flex-col p-5 sm:p-6">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                                DEMO {demo.number}
                              </span>

                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                  demo.live
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {demo.live ? (
                                  <CheckCircle2 className="h-3 w-3" />
                                ) : (
                                  <Sparkles className="h-3 w-3" />
                                )}
                                {demo.status}
                              </span>
                            </div>

                            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                              {demo.title}
                            </h3>

                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                              {demo.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {demo.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 border-t border-slate-100 pt-5">
                              {demo.live && demo.href ? (
                                <a
                                  href={demo.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                  Abrir demostración real
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              ) : (
                                <Link
                                  href={`/contacto?servicio=${encodeURIComponent(demo.title)}`}
                                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                                >
                                  Quiero una solución así
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <Eyebrow>De la idea al proyecto</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                No se trata solo de tecnología. Se trata de resolver problemas.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Analizamos las necesidades de tu empresa para diseñar una
                solución útil, con funcionalidades concretas y un alcance
                adaptado a tus objetivos.
              </p>

              <Link
                href="/contacto"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Hablar sobre mi proyecto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: CircleAlert,
                  title: "1. Identificar",
                  text: "Entendemos el problema y el resultado que necesitas.",
                },
                {
                  icon: Layers3,
                  title: "2. Diseñar",
                  text: "Definimos una solución y las funcionalidades prioritarias.",
                },
                {
                  icon: Code2,
                  title: "3. Desarrollar",
                  text: "Construimos una solución adaptada a tu negocio.",
                },
                {
                  icon: ShieldCheck,
                  title: "4. Mejorar",
                  text: "Revisamos el funcionamiento y las necesidades futuras.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <Icon className="h-5 w-5 text-blue-600" />
                    <h3 className="mt-4 text-sm font-semibold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-2xl">
                <Eyebrow>¿Tienes una idea?</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Construyamos una solución para tu empresa.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Cuéntanos qué quieres mejorar y estudiaremos qué tipo de web,
                  tienda online, automatización o herramienta de inteligencia
                  artificial puede ayudarte.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  Contactar con Transport AI
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/34659980603?text=Hola%2C%20he%20visto%20las%20demostraciones%20de%20Transport%20AI%20y%20quiero%20informaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Smartphone className="h-4 w-4" />
                  Contactar por WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
          <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
            <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
            Las demostraciones identificadas como conceptos visuales sirven para
            ilustrar posibles soluciones. Sus funcionalidades definitivas se
            concretan según los requisitos de cada proyecto. Las demos
            disponibles enlazan a sus respectivas páginas.
          </p>

          <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <MapPin className="h-4 w-4" />
            Transport AI · Desarrollo web, inteligencia artificial y
            automatización.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
