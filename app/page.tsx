
"use client"

import { useState } from "react"

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Agentes de inteligencia artificial",
    description:
      "Agentes que interpretan información, ejecutan tareas definidas y ayudan a tu equipo a resolver procesos complejos.",
    tags: ["IA aplicada", "Automatización"]
  },
  {
    number: "02",
    icon: "▦",
    title: "CRM y plataformas a medida",
    description:
      "Sistemas centralizados para gestionar clientes, operaciones, pedidos, usuarios, incidencias y actividad empresarial.",
    tags: ["Paneles de control", "Software propio"]
  },
  {
    number: "03",
    icon: "⌘",
    title: "Automatización de procesos",
    description:
      "Conectamos herramientas y diseñamos flujos que reducen las tareas repetitivas y mantienen la información sincronizada.",
    tags: ["Workflows", "Integraciones"]
  },
  {
    number: "04",
    icon: "↗",
    title: "Atención al cliente inteligente",
    description:
      "Automatización de consultas, reclamaciones y seguimientos mediante canales de comunicación y sistemas empresariales.",
    tags: ["Email", "Chat", "Llamadas"]
  }
]

const solutions = [
  {
    number: "01",
    title: "Gestión de operaciones",
    description:
      "Centraliza la actividad diaria, los pedidos, los equipos y el estado de cada operación."
  },
  {
    number: "02",
    title: "Gestión de incidencias",
    description:
      "Detecta anomalías, organiza los casos pendientes y facilita su seguimiento hasta la resolución."
  },
  {
    number: "03",
    title: "Comunicación automatizada",
    description:
      "Coordina comunicaciones con clientes, empleados y repartidores mediante canales integrados."
  },
  {
    number: "04",
    title: "Control por delegaciones",
    description:
      "Diseña accesos diferenciados para usuarios, departamentos, delegaciones y administradores."
  },
  {
    number: "05",
    title: "Integraciones empresariales",
    description:
      "Conecta CRM, API, bases de datos y software existente según las posibilidades de cada sistema."
  },
  {
    number: "06",
    title: "Paneles de gestión",
    description:
      "Consulta estados, actividad, registros y métricas relevantes en un entorno adaptado a tu empresa."
  }
]

const channels = [
  { icon: "✉", name: "Email y Gmail", text: "Lectura y clasificación de mensajes." },
  { icon: "◉", name: "Llamadas", text: "Flujos de atención y registro de información." },
  { icon: "▤", name: "CRM y API", text: "Consulta y actualización de datos autorizados." },
  { icon: "↗", name: "WhatsApp y SMS", text: "Comunicaciones automatizadas cuando proceda." }
]

const steps = [
  {
    number: "01",
    title: "Analizamos",
    text: "Estudiamos cómo trabaja tu empresa, qué herramientas utiliza y dónde están los principales problemas."
  },
  {
    number: "02",
    title: "Definimos",
    text: "Concretamos funcionalidades, integraciones, permisos, alcance y objetivos del proyecto."
  },
  {
    number: "03",
    title: "Desarrollamos",
    text: "Construimos la solución y validamos los flujos con pruebas y datos controlados."
  },
  {
    number: "04",
    title: "Implementamos",
    text: "Preparamos el despliegue, la documentación, la supervisión y las mejoras acordadas."
  }
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return

    const form = e.currentTarget
    setSending(true)

    try {
      const response = await fetch("https://formspree.io/f/xoevbvpy", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      })

      if (response.ok) {
        setSent(true)
        form.reset()
      } else {
        alert("Ha ocurrido un error. Inténtalo de nuevo.")
      }
    } catch {
      alert("Ha ocurrido un error de conexión. Inténtalo de nuevo.")
    } finally {
      setSending(false)
    }
  }

  const openForm = () => {
    setMenuOpen(false)
    setSent(false)
    setFormOpen(true)
  }

  const closeForm = () => {
    setFormOpen(false)
    setSent(false)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080c14] text-white selection:bg-cyan-300 selection:text-[#080c14]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080c14]/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-lg font-bold text-cyan-300">
              T
            </div>
            <div>
              <div className="text-[17px] font-semibold tracking-tight">
                Transport <span className="text-cyan-300">AI</span>
              </div>
              <div className="text-[9px] uppercase tracking-[0.23em] text-slate-500">
                Intelligent business systems
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["#soluciones", "Soluciones"],
              ["#plataforma", "Plataformas"],
              ["#integraciones", "Integraciones"],
              ["#metodo", "Metodología"]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] text-slate-400 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={openForm}
            className="hidden items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-xs font-bold text-[#080c14] transition hover:bg-cyan-200 sm:inline-flex"
          >
            Hablemos de tu proyecto <span>↗</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl text-white lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0b101a] px-5 py-5 lg:hidden">
            {[
              ["#soluciones", "Soluciones"],
              ["#plataforma", "Plataformas"],
              ["#integraciones", "Integraciones"],
              ["#metodo", "Metodología"],
              ["#contacto", "Contacto"]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
            <button
              onClick={openForm}
              className="mt-5 w-full rounded-xl bg-cyan-300 px-5 py-3 font-bold text-[#080c14]"
            >
              Solicitar una reunión
            </button>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-[76px]">
        <div className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-200 sm:text-xs">
                IA · Software · Automatización
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-[43px] font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[68px]">
              El siguiente nivel de tu empresa empieza con{" "}
              <span className="text-cyan-300">una mejor forma de trabajar.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Diseñamos soluciones de inteligencia artificial, CRM y
              automatización que conectan tus herramientas, simplifican tus
              operaciones y reducen el trabajo manual.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openForm}
                className="rounded-xl bg-cyan-300 px-7 py-4 text-sm font-bold text-[#080c14] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Cuéntanos tu proyecto <span className="ml-2">↗</span>
              </button>
              <a
                href="#soluciones"
                className="rounded-xl border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Explorar soluciones
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400 sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="text-cyan-300">✓</span> Desarrollo a medida
              </span>
              <span className="flex items-center gap-2">
                <span className="text-cyan-300">✓</span> Integración con sistemas existentes
              </span>
            </div>
          </div>

          {/* VISUAL CONCEPTUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[35px] bg-cyan-300/[0.07] blur-3xl" />

            <div className="relative rounded-[26px] border border-white/10 bg-[#101723] p-4 shadow-2xl shadow-black/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    TRANSPORT AI
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    Business Control Center
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Ejemplo conceptual de plataforma empresarial
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-300">
                  ◈
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Operaciones", value: "Centralizadas", icon: "▦" },
                  { label: "Inteligencia", value: "Asistida por IA", icon: "✳" },
                  { label: "Integraciones", value: "Sistemas conectados", icon: "⌘" },
                  { label: "Supervisión", value: "Control y registros", icon: "◎" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{item.label}</span>
                      <span className="text-lg text-cyan-300">{item.icon}</span>
                    </div>
                    <div className="mt-4 text-sm font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#0b111b] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Flujo de trabajo</div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">
                    Ejemplo
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { n: "01", title: "Información recibida", detail: "Email · CRM · API", width: "100%" },
                    { n: "02", title: "Análisis y clasificación", detail: "Reglas · Inteligencia artificial", width: "78%" },
                    { n: "03", title: "Acción o revisión humana", detail: "Seguimiento · Registro", width: "58%" }
                  ].map((item) => (
                    <div key={item.n} className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
                      <div
                        className="absolute bottom-0 left-0 h-px bg-cyan-300/50"
                        style={{ width: item.width }}
                      />
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-semibold text-cyan-300">{item.n}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold">{item.title}</div>
                          <div className="mt-1 text-[10px] text-slate-500">{item.detail}</div>
                        </div>
                        <span className="text-slate-500">↗</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                Representación ilustrativa. Las funciones dependen del alcance de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 sm:px-8">
          {[
            { n: "01", title: "Software a medida", text: "Diseñado para tu operativa." },
            { n: "02", title: "Procesos conectados", text: "Menos información dispersa." },
            { n: "03", title: "Control y trazabilidad", text: "Supervisión de cada flujo." }
          ].map((item) => (
            <div key={item.n} className="flex items-start gap-4">
              <span className="text-xs font-semibold text-cyan-300">{item.n}</span>
              <div>
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-1 text-xs leading-6 text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="soluciones" className="scroll-mt-24 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Qué hacemos
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Tecnología que resuelve problemas reales.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              No se trata de incorporar IA porque sí. Se trata de identificar
              qué tareas conviene automatizar y construir un sistema que encaje
              con tu forma de trabajar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.04] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-2xl text-cyan-300">
                    {service.icon}
                  </div>
                  <span className="text-xs text-slate-600">{service.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="plataforma" className="scroll-mt-24 border-y border-white/[0.07] bg-[#0c121d] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Una solución conectada
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Más que una herramienta. Un sistema adaptado a tu empresa.
              </h2>
              <p className="mt-6 leading-8 text-slate-400">
                Diseñamos plataformas que conectan información, personas y
                procesos. Desde un panel de operaciones hasta un CRM con
                automatizaciones y accesos diferenciados por departamento.
              </p>
              <button onClick={openForm} className="mt-8 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-bold text-[#080c14] transition hover:bg-cyan-200">
                Diseñar una solución a medida ↗
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#080d15] p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <div className="text-xs text-slate-500">VISTA CONCEPTUAL</div>
                  <h3 className="mt-2 text-lg font-semibold">Panel de operaciones</h3>
                </div>
                <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[10px] text-cyan-300">
                  Diseño ilustrativo
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["Operaciones", "Gestión central"],
                  ["Incidencias", "Seguimiento"],
                  ["Mensajeros", "Coordinación"],
                  ["Reclamaciones", "Atención al cliente"],
                  ["Automatizaciones", "Flujos de trabajo"],
                  ["Administración", "Usuarios y permisos"]
                ].map(([title, subtitle], index) => (
                  <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                    <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm ${index % 2 === 0 ? "bg-cyan-300/10 text-cyan-300" : "bg-indigo-300/10 text-indigo-300"}`}>
                      {["▦", "!", "↗", "✉", "⌘", "◎"][index]}
                    </div>
                    <div className="text-xs font-semibold">{title}</div>
                    <div className="mt-2 text-[10px] leading-5 text-slate-500">{subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Accesos por equipo</div>
                    <p className="mt-1 text-xs text-slate-500">Permisos definidos según las necesidades</p>
                  </div>
                  <span className="text-xl text-cyan-300">⌘</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Administrador", "Gestor", "Delegación"].map((role) => (
                    <div key={role} className="rounded-lg border border-white/[0.07] bg-[#0b111b] px-2 py-3 text-center text-[10px] text-slate-400">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                Los módulos, permisos y funcionalidades se definen para cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Aplicaciones
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Una misma capacidad. Diferentes necesidades empresariales.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Adaptamos las funcionalidades al tipo de operación, los usuarios
              y los sistemas que necesita conectar cada organización.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.number} className="border-t border-white/10 py-7">
                <div className="text-xs font-semibold text-cyan-300">{item.number}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section id="integraciones" className="scroll-mt-24 border-y border-white/[0.07] bg-[#0c121d] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Integraciones
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Tus herramientas. Conectadas con un propósito.
              </h2>
              <p className="mt-6 leading-8 text-slate-400">
                Estudiamos cómo conectar los canales de comunicación, el CRM y
                las aplicaciones que ya utiliza tu equipo. La viabilidad depende
                de las API, los permisos y las condiciones de cada proveedor.
              </p>
              <button onClick={openForm} className="mt-8 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-cyan-300/40 hover:bg-white/[0.03]">
                Consultar una integración ↗
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((channel) => (
                <div key={channel.name} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-cyan-300/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-xl text-cyan-300">
                    {channel.icon}
                  </div>
                  <h3 className="mt-5 font-semibold">{channel.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{channel.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
            <p className="text-sm leading-7 text-slate-400">
              <span className="font-semibold text-white">Importante:</span>{" "}
              cada integración se valida antes del desarrollo. No todas las
              herramientas permiten las mismas operaciones, y algunas requieren
              permisos, licencias o servicios de terceros.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Sectores
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Especialmente útil cuando coordinarlo todo se complica.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Transporte y logística",
              "Mensajería y paquetería",
              "Mudanzas y portes",
              "Distribución",
              "Servicios a domicilio",
              "Empresas con flotas",
              "Equipos de atención al cliente",
              "Empresas con varias delegaciones"
            ].map((sector) => (
              <span key={sector} className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-300/25">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="metodo" className="scroll-mt-24 border-y border-white/[0.07] bg-[#0c121d] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Metodología
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              De una necesidad concreta a una solución funcional.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Un proceso estructurado para definir el alcance, validar la
              viabilidad técnica y reducir sorpresas durante el desarrollo.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="border-t border-cyan-300/30 pt-6">
                <div className="text-xs font-semibold tracking-widest text-cyan-300">{step.number}</div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-cyan-300/15 bg-[#101925] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-[100px]" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Hablemos de tu proyecto
            </div>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              ¿Qué podría hacer la inteligencia artificial por tu empresa?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Cuéntanos qué proceso quieres mejorar. Analizaremos tus
              necesidades para valorar una solución, sus integraciones y su
              alcance.
            </p>
            <button onClick={openForm} className="mt-8 rounded-xl bg-cyan-300 px-7 py-4 text-sm font-bold text-[#080c14] transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Solicitar una reunión ↗
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#060910]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-bold text-cyan-300">T</div>
            <div>
              <div className="text-sm font-semibold">Transport AI</div>
              <div className="mt-1 text-[10px] text-slate-500">IA y automatización empresarial</div>
            </div>
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
            <a href="#soluciones" className="hover:text-white">Soluciones</a>
            <a href="#plataforma" className="hover:text-white">Plataformas</a>
            <a href="#integraciones" className="hover:text-white">Integraciones</a>
            <a href="#metodo" className="hover:text-white">Metodología</a>
            <button onClick={openForm} className="hover:text-white">Contacto</button>
          </div>
        </div>
        <div className="border-t border-white/[0.06] px-5 py-5 text-center text-[10px] text-slate-600">
          © {new Date().getFullYear()} Transport AI. Todos los derechos reservados.
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeForm()
          }}
        >
          <div className="my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#101723] shadow-2xl">
            {!sent ? (
              <>
                <div className="flex items-start justify-between border-b border-white/[0.08] p-6 sm:p-7">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Transport AI
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold">Hablemos de tu proyecto</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Cuéntanos un poco sobre tu empresa y qué necesitas mejorar.
                    </p>
                  </div>
                  <button onClick={closeForm} aria-label="Cerrar formulario" className="rounded-lg px-3 py-2 text-xl text-slate-400 transition hover:bg-white/5 hover:text-white">
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-7">
                  <div>
                    <label htmlFor="nombre" className="mb-2 block text-xs font-semibold text-slate-300">Nombre</label>
                    <input id="nombre" required type="text" name="nombre" autoComplete="name" placeholder="Tu nombre" className="w-full rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60" />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="mb-2 block text-xs font-semibold text-slate-300">Empresa</label>
                    <input id="empresa" required type="text" name="empresa" autoComplete="organization" placeholder="Nombre de la empresa" className="w-full rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-300">Email profesional</label>
                      <input id="email" required type="email" name="email" autoComplete="email" placeholder="tu@empresa.com" className="w-full rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="mb-2 block text-xs font-semibold text-slate-300">Teléfono (opcional)</label>
                      <input id="telefono" type="tel" name="telefono" autoComplete="tel" placeholder="+34 600 000 000" className="w-full rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipo_proyecto" className="mb-2 block text-xs font-semibold text-slate-300">¿Qué necesitas?</label>
                    <select id="tipo_proyecto" name="tipo_proyecto" defaultValue="" className="w-full rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-300/60">
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Agentes de IA">Agentes de inteligencia artificial</option>
                      <option value="CRM y plataforma">CRM o plataforma empresarial</option>
                      <option value="Automatización">Automatización de procesos</option>
                      <option value="Atención al cliente">Atención al cliente</option>
                      <option value="Integraciones API">Integraciones con API y software</option>
                      <option value="Proyecto personalizado">Otro proyecto personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="operativa" className="mb-2 block text-xs font-semibold text-slate-300">Cuéntanos tu necesidad</label>
                    <textarea id="operativa" rows={3} name="operativa" placeholder="¿Qué tareas quieres automatizar o qué problema necesitas resolver?" className="w-full resize-y rounded-xl border border-white/10 bg-[#090e17] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60" />
                  </div>

                  <button disabled={sending} type="submit" className="w-full rounded-xl bg-cyan-300 px-5 py-4 text-sm font-bold text-[#080c14] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
                    {sending ? "Enviando solicitud..." : "Enviar solicitud ↗"}
                  </button>

                  <p className="text-center text-[10px] leading-5 text-slate-500">
                    Utilizaremos estos datos para responder a tu solicitud.
                  </p>
                </form>
              </>
            ) : (
              <div className="px-7 py-12 text-center sm:px-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-2xl text-emerald-300">✓</div>
                <h3 className="mt-6 text-2xl font-semibold">Solicitud enviada</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Gracias por contactar con Transport AI. Revisaremos tu solicitud para hablar sobre tu proyecto.
                </p>
                <button onClick={closeForm} className="mt-7 rounded-xl bg-cyan-300 px-6 py-3 text-sm font-bold text-[#080c14]">
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
