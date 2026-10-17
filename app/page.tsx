
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Code2,
  Database,
  Headphones,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquare,
  Network,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const monthlyPlans = [
  {
    name: "Esencial",
    price: "300 €",
    description: "Automatiza tareas repetitivas sin desarrollar una aplicación propia.",
    features: [
      "Automatización de tareas concretas",
      "Flujos de trabajo y notificaciones",
      "Reducción del trabajo manual",
      "Configuración según necesidades",
    ],
  },
  {
    name: "Operativa",
    price: "600 €",
    description: "Conecta automatizaciones con una aplicación y un panel de control.",
    featured: true,
    features: [
      "Todo lo incluido en Esencial",
      "Panel de control operativo",
      "Gestión de tareas e incidencias",
      "Integraciones según disponibilidad",
    ],
  },
  {
    name: "Avanzada",
    price: "900 €+",
    description: "Para operaciones con más procesos, usuarios e integraciones.",
    features: [
      "Flujos de trabajo avanzados",
      "Integraciones adicionales",
      "Seguimiento de procesos",
      "Soporte según contrato",
    ],
  },
];

const customProjects = [
  {
    number: "01",
    icon: Workflow,
    name: "Automatización de incidencias",
    price: "6.000–8.000 €",
    duration: "4–6 semanas",
    description:
      "Centraliza la recepción de incidencias, clasifica solicitudes y automatiza avisos y seguimientos.",
    tags: ["Incidencias", "Notificaciones", "Flujos de trabajo"],
  },
  {
    number: "02",
    icon: Database,
    name: "Inteligencia artificial conectada al CRM",
    price: "8.000–12.000 €",
    duration: "6–10 semanas",
    description:
      "Consulta información de pedidos, registra reclamaciones y automatiza actualizaciones mediante API.",
    tags: ["CRM", "API", "Datos operativos"],
  },
  {
    number: "03",
    icon: Headphones,
    name: "Atención al cliente con IA",
    price: "10.000–15.000 €",
    duration: "8–12 semanas",
    description:
      "Automatiza procesos de atención a través de canales compatibles, con seguimiento de casos y escalado a gestores.",
    tags: ["Correo", "Chat", "Telefonía compatible"],
  },
  {
    number: "04",
    icon: Layers3,
    name: "Plataforma operativa integral",
    price: "15.000–20.000 €+",
    duration: "10–16+ semanas",
    description:
      "Unifica CRM, mensajeros, incidencias, automatizaciones y accesos independientes para distintas sucursales.",
    tags: ["CRM", "Mensajeros", "Multiempresa"],
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Sistemas capaces de interpretar solicitudes, consultar información y ejecutar acciones dentro de unos límites definidos.",
  },
  {
    icon: Database,
    title: "CRM e integración de datos",
    description:
      "Conecta los procesos con el software existente para consultar, registrar y actualizar información cuando la API lo permite.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación automatizada",
    description:
      "Centraliza comunicaciones por correo, chat y servicios de mensajería compatibles.",
  },
  {
    icon: Route,
    title: "Gestión de operativa y mensajeros",
    description:
      "Organiza pedidos, responsables, incidencias y respuestas desde una interfaz adaptada a cada equipo.",
  },
  {
    icon: Workflow,
    title: "Flujos de trabajo inteligentes",
    description:
      "Detecta datos inconsistentes, activa avisos y deriva los casos complejos a una persona.",
  },
  {
    icon: ShieldCheck,
    title: "Control y seguridad",
    description:
      "Diseña permisos por usuario, separación de información y trazabilidad según los requisitos del proyecto.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Analizamos tu operativa",
    description:
      "Identificamos tareas manuales, problemas frecuentes, herramientas y oportunidades de automatización.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos alcance, integraciones, requisitos técnicos, presupuesto y calendario.",
  },
  {
    number: "03",
    title: "Desarrollamos e integramos",
    description:
      "Construimos los flujos y conectamos los sistemas que sean técnicamente compatibles.",
  },
  {
    number: "04",
    title: "Probamos y desplegamos",
    description:
      "Validamos los procesos con casos reales controlados antes de la puesta en producción.",
  },
];

type ContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "No estoy seguro",
  message: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFormStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xoevbvpy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setFormStatus("success");
      setForm(initialForm);
    } catch {
      setFormStatus("error");
    } finally {
      setSending(false);
    }
  }

  function updateField(
    field: keyof ContactForm,
    value: string,
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080c14] text-white selection:bg-cyan-300 selection:text-[#080c14]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080c14]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.09]">
              <Network className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-[17px] font-bold tracking-tight">
                TRANSPORT<span className="text-cyan-300"> AI</span>
              </div>
              <div className="text-[9px] font-medium uppercase tracking-[0.23em] text-slate-500">
                Intelligent operations
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#soluciones" className="text-sm text-slate-400 transition hover:text-white">
              Soluciones
            </a>
            <a href="#plataforma" className="text-sm text-slate-400 transition hover:text-white">
              Plataforma
            </a>
            <a href="#proceso" className="text-sm text-slate-400 transition hover:text-white">
              Metodología
            </a>
            <a href="#precios" className="text-sm text-slate-400 transition hover:text-white">
              Precios
            </a>
          </nav>

          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#07111b] transition hover:bg-cyan-200 sm:inline-flex"
          >
            Solicitar propuesta <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#080c14] px-6 py-5 lg:hidden">
            {[
              ["Soluciones", "#soluciones"],
              ["Plataforma", "#plataforma"],
              ["Metodología", "#proceso"],
              ["Precios", "#precios"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block border-b border-white/[0.06] py-4 text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute -right-40 top-16 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 top-64 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-medium tracking-wide text-cyan-100">
                Inteligencia artificial aplicada a empresas
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Menos tareas
              <br />
              manuales.
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Más control.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Diseñamos automatizaciones, agentes de IA e integraciones
              para que tu empresa trabaje con más información, menos
              tareas repetitivas y procesos mejor conectados.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-bold text-[#07111b] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Estudiar mi proyecto <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#soluciones"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                Explorar soluciones <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" /> Soluciones a medida
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" /> Integración con sistemas existentes
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" /> Alcance definido por proyecto
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[36px] bg-cyan-300/[0.05] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1420] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div>
                  <div className="text-sm font-semibold">Operations Intelligence</div>
                  <div className="mt-1 text-[11px] text-slate-500">Vista ilustrativa de una solución</div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span className="text-[10px] text-cyan-100">Panel operativo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {[
                  { label: "Procesos", value: "Centralizados", icon: Layers3 },
                  { label: "Incidencias", value: "Trazables", icon: CircleCheck },
                  { label: "Integraciones", value: "Conectadas", icon: Network },
                  { label: "Automatización", value: "Configurada", icon: Zap },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{item.label}</span>
                        <Icon className="h-4 w-4 text-cyan-300" />
                      </div>
                      <div className="mt-4 text-base font-semibold">{item.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mx-5 mb-5 rounded-2xl border border-white/[0.07] bg-[#080d16] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">Ejemplo de flujo automatizado</span>
                  <Workflow className="h-4 w-4 text-cyan-300" />
                </div>
                {[
                  { title: "Solicitud recibida", detail: "Entrada desde un canal conectado", number: "01" },
                  { title: "Análisis y validación", detail: "Reglas, datos e IA según configuración", number: "02" },
                  { title: "Acción o escalado", detail: "Actualización o aviso al responsable", number: "03" },
                ].map((step, index) => (
                  <div key={step.number} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] text-[10px] font-bold text-cyan-200">
                        {step.number}
                      </div>
                      {index < 2 && <div className="my-1 h-6 w-px bg-white/10" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-sm font-medium">{step.title}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.07] px-5 py-3 text-[10px] leading-5 text-slate-600">
                Concepto visual. Las funcionalidades finales dependen del proyecto y de las integraciones disponibles.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 text-sm text-slate-400 md:justify-between">
          <span className="flex items-center gap-2"><Bot className="h-4 w-4 text-cyan-300" /> Agentes de IA</span>
          <span className="flex items-center gap-2"><Database className="h-4 w-4 text-cyan-300" /> Integración de datos</span>
          <span className="flex items-center gap-2"><Workflow className="h-4 w-4 text-cyan-300" /> Automatización de procesos</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-300" /> Control de accesos</span>
        </div>
      </section>

      <section id="soluciones" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Qué hacemos
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tecnología que se adapta a tu operativa.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              No necesitas sustituir todo tu software para mejorar tus procesos.
              Diseñamos soluciones que conectan herramientas, información y equipos
              de acuerdo con las necesidades de tu negocio.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.025]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <span className="text-xs text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-cyan-300 opacity-80">
                    Solución configurable <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="plataforma" className="border-y border-white/[0.06] bg-[#0b111c] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Operaciones conectadas
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              De herramientas aisladas a un flujo de trabajo coordinado.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Cuando la información está repartida entre correos, hojas de cálculo,
              mensajería y sistemas de gestión, las tareas se duplican y es más difícil
              saber qué ocurre. Transport AI puede ayudarte a conectar esos procesos.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Mail,
                  title: "Entrada de solicitudes",
                  text: "Organiza información recibida por los canales que se integren en el proyecto.",
                },
                {
                  icon: Code2,
                  title: "Conexión con sistemas existentes",
                  text: "Consulta o actualiza datos mediante API y permisos autorizados.",
                },
                {
                  icon: Phone,
                  title: "Comunicación y seguimiento",
                  text: "Activa avisos, solicita respuestas y registra el resultado de cada proceso.",
                },
                {
                  icon: LockKeyhole,
                  title: "Accesos por función o sucursal",
                  text: "Diseña permisos para que cada usuario acceda únicamente a la información autorizada.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Icon className="h-4 w-4 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/[0.05] blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#080d16] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="text-sm font-semibold">Flujo de operativa</p>
                  <p className="mt-1 text-xs text-slate-500">Ejemplo de arquitectura</p>
                </div>
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="space-y-3 py-6">
                {[
                  {
                    title: "01 · Canales de entrada",
                    detail: "Email · Chat · Sistemas internos",
                    color: "border-blue-400/20 bg-blue-400/[0.05]",
                  },
                  {
                    title: "02 · Capa de integración",
                    detail: "API · Validaciones · Reglas de negocio",
                    color: "border-cyan-300/25 bg-cyan-300/[0.05]",
                  },
                  {
                    title: "03 · Automatización e IA",
                    detail: "Clasificación · Acciones · Escalados",
                    color: "border-violet-400/20 bg-violet-400/[0.05]",
                  },
                  {
                    title: "04 · Panel y trazabilidad",
                    detail: "Gestores · Usuarios · Incidencias",
                    color: "border-emerald-400/20 bg-emerald-400/[0.04]",
                  },
                ].map((item, index) => (
                  <div key={item.title}>
                    <div className={`rounded-2xl border p-5 ${item.color}`}>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="mt-2 text-xs text-slate-400">{item.detail}</div>
                    </div>
                    {index < 3 && (
                      <div className="flex h-7 items-center justify-center">
                        <ArrowDownRight className="h-4 w-4 rotate-45 text-slate-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs leading-5 text-slate-500">
                Arquitectura conceptual. Cada integración requiere validar el acceso,
                la compatibilidad y las condiciones del proveedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Metodología
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Un proceso claro. Un alcance definido.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Cada proyecto comienza con un análisis de requisitos y termina
              con criterios de validación acordados. Así se evitan sorpresas
              en el presupuesto y en la entrega.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t border-white/10 pt-6">
                <div className="text-sm font-semibold text-cyan-300">{step.number}</div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="border-y border-white/[0.06] bg-[#0b111c] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Servicios e inversión
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Elige el punto de partida.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Desde automatizaciones concretas hasta sistemas empresariales
              conectados. Los siguientes importes son orientativos y se
              concretan después de analizar cada caso.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-7 ${
                  plan.featured
                    ? "border-cyan-300/40 bg-cyan-300/[0.045]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {plan.featured && (
                  <span className="mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-200">
                    Solución con aplicación
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-slate-500">/ mes</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">Más IVA</p>
                <div className="my-7 h-px bg-white/10" />
                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-cyan-300 text-[#07111b] hover:bg-cyan-200"
                      : "border border-white/10 text-white hover:border-cyan-300/40 hover:bg-white/[0.03]"
                  }`}
                >
                  Solicitar propuesta <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Desarrollo a medida
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Proyectos de IA e integración.
                </h3>
              </div>
              <p className="max-w-lg text-sm leading-6 text-slate-400">
                Para empresas que necesitan integrar su CRM, automatizar la
                atención al cliente o conectar su operativa de principio a fin.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {customProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.number}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-cyan-300/25 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06]">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <span className="text-xs font-semibold tracking-widest text-slate-600">
                        {project.number}
                      </span>
                    </div>

                    <h4 className="mt-6 text-xl font-semibold">{project.name}</h4>
                    <div className="mt-5 text-3xl font-semibold tracking-tight">
                      {project.price}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
                      Plazo estimado: {project.duration}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-white/[0.07] pt-5">
                      <p className="text-xs text-slate-500">Precio orientativo · Más IVA</p>
                      <a
                        href="#contacto"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                      >
                        Definir mi proyecto <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 sm:p-6">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <h4 className="text-sm font-semibold">¿Qué determina el precio y el plazo?</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Los importes y plazos son estimaciones iniciales, no ofertas vinculantes.
                    El presupuesto definitivo depende del alcance, las APIs disponibles,
                    el volumen de datos, los canales, los requisitos de seguridad y las
                    pruebas de aceptación. Los tiempos comienzan cuando se dispone de
                    accesos y documentación. Licencias, consumos de IA, proveedores externos,
                    alojamiento y mantenimiento se detallan por separado cuando corresponda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-[#0d1420] to-blue-500/[0.06] p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                El siguiente paso
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Tu empresa no necesita más tareas. Necesita mejores procesos.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Cuéntanos qué herramientas utilizas, qué tareas te hacen perder
                tiempo y qué te gustaría automatizar. Estudiaremos el alcance
                y la solución más adecuada.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-bold text-[#07111b] transition hover:bg-cyan-200"
            >
              Hablar de mi proyecto <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contacto
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Cuéntanos qué quieres automatizar.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              Explícanos cómo funciona actualmente tu empresa. Con esa información
              podremos valorar la viabilidad, el alcance y un presupuesto inicial.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-3 text-sm text-slate-300">
                <CircleCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                Análisis inicial de las necesidades
              </div>
              <div className="flex gap-3 text-sm text-slate-300">
                <CircleCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                Alcance y calendario estimados
              </div>
              <div className="flex gap-3 text-sm text-slate-300">
                <CircleCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                Propuesta adaptada a tu operativa
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/[0.08]">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Cada proyecto, con su alcance</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">
                    Las funcionalidades se acuerdan antes del desarrollo.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                  Empresa *
                </label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  required
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Nombre de la empresa"
                  className="w-full rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="nombre@empresa.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+34 ..."
                  className="w-full rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                  ¿Qué necesitas?
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(event) => updateField("service", event.target.value)}
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 pr-10 text-sm text-white outline-none transition focus:border-cyan-300/60"
                  >
                    <option>No estoy seguro</option>
                    <option>Automatización mensual</option>
                    <option>Automatización de incidencias</option>
                    <option>Integración con CRM</option>
                    <option>Atención al cliente con IA</option>
                    <option>Plataforma operativa integral</option>
                    <option>Otro proyecto a medida</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Describe tu operativa o problema *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="¿Qué tareas quieres automatizar? ¿Qué software utilizas actualmente?"
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080d16] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-bold text-[#07111b] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Solicitar propuesta"}
              {!sending && <ArrowRight className="h-4 w-4" />}
            </button>

            {formStatus === "success" && (
              <p role="status" className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-sm text-emerald-300">
                Solicitud enviada correctamente. Gracias por contactar con Transport AI.
              </p>
            )}

            {formStatus === "error" && (
              <p role="alert" className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-300">
                No hemos podido enviar la solicitud. Inténtalo de nuevo más tarde.
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-slate-600">
              Al enviar este formulario, facilitas tus datos para gestionar tu solicitud.
              Antes de publicarlo, añade un enlace a tu política de privacidad y la información
              legal aplicable.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06]">
              <Network className="h-4 w-4 text-cyan-300" />
            </div>
            <span className="text-sm font-bold tracking-tight">
              TRANSPORT<span className="text-cyan-300"> AI</span>
            </span>
          </a>
          <p className="text-xs leading-6 text-slate-500">
            Automatización inteligente e integración de procesos empresariales.
          </p>
          <a href="#inicio" className="text-xs text-slate-500 transition hover:text-white">
            Volver arriba ↑
          </a>
        </div>
        <div className="mx-auto mt-6 max-w-7xl border-t border-white/[0.06] pt-5 text-xs text-slate-600">
          © {new Date().getFullYear()} Transport AI. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
