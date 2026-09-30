"use client"

import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

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
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#101828]">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111827] text-lg text-white shadow-lg shadow-black/10">
              T
            </div>

            <div>
              <div className="text-[17px] font-bold tracking-tight">
                Transport AI
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Logistics Intelligence
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#solucion"
              className="text-sm font-medium text-slate-600 transition hover:text-[#111827]"
            >
              Solución
            </a>
            <a
              href="#funciona"
              className="text-sm font-medium text-slate-600 transition hover:text-[#111827]"
            >
              Cómo funciona
            </a>
            <a
              href="#integracion"
              className="text-sm font-medium text-slate-600 transition hover:text-[#111827]"
            >
              Integración
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-slate-600 transition hover:text-[#111827]"
            >
              Contacto
            </a>
          </nav>

          <button
            onClick={() => setFormOpen(true)}
            className="hidden rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black md:block"
          >
            Solicitar demostración
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
            aria-label="Abrir menú"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#solucion"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Solución
              </a>
              <a
                href="#funciona"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Cómo funciona
              </a>
              <a
                href="#integracion"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Integración
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setFormOpen(true)
                }}
                className="rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white"
              >
                Solicitar demostración
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32">
        <div className="absolute left-1/2 top-0 -z-10 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-[-200px] top-[150px] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Inteligencia para operaciones de transporte
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-[#0b1220] sm:text-6xl lg:text-[72px]">
                Menos incidencias.
                <br />
                <span className="text-blue-600">Más control.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Transport AI ayuda a las empresas de transporte y logística a
                detectar incidencias en sus repartos, organizarlas y actuar
                antes de que se conviertan en problemas.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setFormOpen(true)}
                  className="rounded-xl bg-[#111827] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-1 hover:bg-black"
                >
                  Solicitar una demostración →
                </button>

                <a
                  href="#funciona"
                  className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-center text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Ver cómo funciona
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                <span>✓ Sin cambiar tu operativa de golpe</span>
                <span>✓ Adaptable a tu empresa</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[32px] bg-blue-200/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
                <div className="rounded-2xl bg-[#0b1220] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        TRANSPORT AI
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        Centro de operaciones
                      </div>
                    </div>

                    <div className="rounded-lg bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-400">
                      ● Sistema activo
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">
                        En reparto
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">
                        24
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">
                        Incidencias
                      </div>
                      <div className="mt-2 text-2xl font-bold text-amber-400">
                        3
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">
                        Resueltas
                      </div>
                      <div className="mt-2 text-2xl font-bold text-emerald-400">
                        18
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-4 h-56 overflow-hidden rounded-xl border border-white/10 bg-[#162033]">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute left-[15%] top-[20%] h-20 w-20 rounded-full border border-blue-400" />
                      <div className="absolute left-[55%] top-[35%] h-32 w-32 rounded-full border border-blue-400" />
                      <div className="absolute right-[10%] top-[15%] h-14 w-14 rounded-full border border-blue-400" />
                      <div className="absolute bottom-[15%] left-[35%] h-24 w-24 rounded-full border border-blue-400" />
                    </div>

                    <div className="absolute left-[18%] top-[35%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                    <div className="absolute left-[50%] top-[55%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                    <div className="absolute right-[20%] top-[28%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

                    <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-[#0b1220]/90 px-3 py-2 text-xs text-white backdrop-blur">
                      3 incidencias requieren atención
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-sm font-medium text-slate-500">
              Diseñado para operaciones de transporte reales.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Mensajería</span>
              <span>•</span>
              <span>Distribución</span>
              <span>•</span>
              <span>Transporte</span>
              <span>•</span>
              <span>Logística</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="solucion" className="scroll-mt-24 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              El problema
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#0b1220] sm:text-5xl">
              Una pequeña incidencia puede convertirse en mucho trabajo.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una dirección incorrecta, un teléfono que no responde o un
              pedido que no encaja con la ruta puede obligar a tu equipo a
              revisar información, hacer llamadas y coordinar varias personas.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Información dispersa",
                text: "Pedidos, llamadas, hojas de cálculo, correos y diferentes herramientas pueden dificultar el seguimiento."
              },
              {
                number: "02",
                title: "Incidencias que aparecen tarde",
                text: "Cuando un problema se detecta durante el reparto, la capacidad de reacción ya es menor."
              },
              {
                number: "03",
                title: "Tiempo administrativo",
                text: "Cada incidencia requiere comprobar información, contactar y actualizar el pedido."
              }
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="text-sm font-bold text-blue-600">
                  {item.number}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="overflow-hidden bg-[#0b1220] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                La solución
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Transport AI convierte las incidencias en un proceso controlado.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                La plataforma analiza la información de los pedidos, identifica
                posibles anomalías y permite a tu equipo investigar y resolver
                cada caso desde un mismo lugar.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  "Detecta posibles anomalías.",
                  "Organiza las incidencias automáticamente.",
                  "Facilita el contacto con el cliente.",
                  "Permite actualizar el estado del pedido.",
                  "Mantiene al equipo informado."
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="rounded-2xl border border-white/10 bg-[#111a2b] p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm font-bold">
                      Incidencia detectada
                    </span>
                    <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      Pendiente
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-xs text-slate-500">Pedido</div>
                      <div className="mt-1 text-sm font-semibold">
                        #TA-10482
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Cliente</div>
                      <div className="mt-1 text-sm font-semibold">
                        Cliente de ejemplo
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">
                        Posible anomalía
                      </div>
                      <div className="mt-1 rounded-lg bg-amber-400/10 p-3 text-sm text-amber-200">
                        La dirección del pedido no coincide con la información
                        esperada para la ruta.
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-xs font-bold">
                        Revisar incidencia
                      </button>
                      <button className="rounded-lg border border-white/10 px-4 py-3 text-xs font-bold text-slate-300">
                        Ver pedido
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="funciona" className="scroll-mt-24 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Cómo funciona
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              De un pedido a una incidencia resuelta.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Transport AI organiza el proceso para que tu equipo pueda actuar
              con la información necesaria.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Recibe",
                  text: "La información del pedido entra en el sistema."
                },
                {
                  n: "02",
                  title: "Detecta",
                  text: "Transport AI identifica posibles anomalías."
                },
                {
                  n: "03",
                  title: "Investiga",
                  text: "Tu equipo revisa la incidencia y contacta cuando sea necesario."
                },
                {
                  n: "04",
                  title: "Resuelve",
                  text: "Se actualiza el pedido y queda registrado el resultado."
                }
              ].map((item) => (
                <div key={item.n} className="relative text-center">
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-blue-600 shadow-lg shadow-slate-900/5">
                    {item.n}
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f7f9fc] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:col-span-2 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                AI
              </div>

              <h3 className="mt-7 text-3xl font-bold tracking-tight">
                Detección inteligente de anomalías
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Identifica situaciones que pueden requerir atención y permite
                que tu equipo se centre en resolverlas en lugar de buscarlas
                manualmente.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Direcciones incorrectas",
                  "Teléfonos problemáticos",
                  "Pedidos con información inconsistente",
                  "Falta de respuesta"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[#111827] p-8 text-white lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                ↗
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Control centralizado
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Consulta pedidos, incidencias y estados desde un único entorno
                operativo.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-xl bg-white/5 p-4 text-sm">
                  Pedidos activos
                </div>
                <div className="rounded-xl bg-white/5 p-4 text-sm">
                  Incidencias pendientes
                </div>
                <div className="rounded-xl bg-white/5 p-4 text-sm">
                  Seguimiento de resolución
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                ✓
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Menos trabajo manual
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Reduce tareas repetitivas y facilita que cada incidencia tenga
                un seguimiento claro.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-600">
                  🚚
                </div>

                <div>
                  <h3 className="text-2xl font-bold">App para conductores</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Información clara durante el reparto
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl leading-7 text-slate-600">
                Los conductores pueden consultar sus pedidos y comunicar
                incidencias desde una interfaz sencilla diseñada para utilizar
                durante la operativa diaria.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                  Pedidos asignados
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                  Estado del pedido
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                  Incidencias
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
                  Contacto
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section
        id="integracion"
        className="scroll-mt-24 border-y border-slate-200 bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Integración
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                No tienes que tirar por la borda lo que ya utilizas.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Transport AI está pensado para adaptarse a la operativa de
                cada empresa y trabajar junto a las herramientas que ya utiliza
                el equipo.
              </p>

              <button
                onClick={() => setFormOpen(true)}
                className="mt-8 rounded-xl bg-[#111827] px-6 py-4 text-sm font-bold text-white transition hover:bg-black"
              >
                Hablar sobre una integración →
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Tu plataforma actual",
                  text: "Conectamos el flujo de información necesario."
                },
                {
                  title: "Google Sheets",
                  text: "Podemos estudiar cómo incorporar tus datos."
                },
                {
                  title: "Software propio",
                  text: "Adaptamos la solución a necesidades concretas."
                },
                {
                  title: "Operativa personalizada",
                  text: "Cada empresa tiene procesos diferentes."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6"
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-blue-600" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="scroll-mt-24 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-[#111827] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                Empieza a conocer Transport AI
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Descubre cómo podría encajar en tu operativa.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Cuéntanos cómo gestionáis actualmente los pedidos y las
                incidencias y estudiamos contigo una solución adaptada.
              </p>

              <button
                onClick={() => setFormOpen(true)}
                className="mt-9 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#111827] shadow-xl transition hover:-translate-y-1"
              >
                Solicitar demostración
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-bold">Transport AI</div>
            <p className="mt-1 text-sm text-slate-500">
              Inteligencia para operaciones de transporte.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#solucion" className="hover:text-slate-900">
              Solución
            </a>
            <a href="#funciona" className="hover:text-slate-900">
              Cómo funciona
            </a>
            <a href="#integracion" className="hover:text-slate-900">
              Integración
            </a>
            <button
              onClick={() => setFormOpen(true)}
              className="hover:text-slate-900"
            >
              Contacto
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Transport AI. Todos los derechos
          reservados.
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-5 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setFormOpen(false)
            }
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            {!sent ? (
              <>
                <div className="flex items-start justify-between border-b border-slate-100 p-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      Transport AI
                    </div>
                    <h3 className="mt-2 text-2xl font-bold">
                      Solicitar demostración
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Déjanos tus datos y nos pondremos en contacto contigo.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormOpen(false)}
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 p-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Nombre
                    </label>
                    <input
                      required
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Empresa
                    </label>
                    <input
                      required
                      type="text"
                      name="empresa"
                      placeholder="Nombre de la empresa"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+34 600 000 000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Cuéntanos brevemente vuestra operativa
                    </label>
                    <textarea
                      rows={4}
                      name="operativa"
                      placeholder="¿Cómo gestionáis actualmente los pedidos e incidencias?"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#111827] px-5 py-4 text-sm font-bold text-white transition hover:bg-black"
                  >
                    Solicitar demostración →
                  </button>
                </form>
              </>
            ) : (
              <div className="p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Solicitud recibida
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Gracias por contactar con Transport AI. Nos pondremos en
                  contacto contigo para hablar sobre vuestra operativa.
                </p>

                <button
                  onClick={() => {
                    setFormOpen(false)
                    setSent(false)
                  }}
                  className="mt-7 rounded-xl bg-[#111827] px-6 py-3 text-sm font-bold text-white"
                >
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
