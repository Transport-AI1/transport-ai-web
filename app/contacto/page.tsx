import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
} from "lucide-react";
import {
  Eyebrow,
  SiteShell,
} from "../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Eyebrow>Contacto · Nuevos proyectos</Eyebrow>

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
                Hablemos de lo que tu empresa
                <span className="block text-blue-400">podría hacer mejor.</span>
              </h1>

              <p className="mt-7 max-w-xl leading-8 text-slate-400">
                Cuéntanos qué proceso quieres automatizar, qué herramientas
                utilizas y qué resultado buscas. Revisaremos la información
                para valorar el encaje y los siguientes pasos.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Primero entendemos el problema",
                    text: "La propuesta parte de tu necesidad, no de venderte una herramienta concreta.",
                  },
                  {
                    icon: Clock3,
                    title: "Alcance claro",
                    text: "Las integraciones, fases, plazos y costes se definen según cada proyecto.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Tratamiento responsable de la información",
                    text: "No incluyas contraseñas, datos sensibles ni información confidencial en el formulario.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-sm font-semibold">{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-white/[0.08] pt-7">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">¿Prefieres conocer los servicios?</p>
                  <Link href="/servicios" className="mt-1 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                    Explorar soluciones
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.09] bg-[#0c111a] p-6 shadow-2xl shadow-blue-950/20 sm:p-9">
              <h2 className="text-2xl font-semibold">Cuéntanos tu proyecto</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Los campos con asterisco son obligatorios.
              </p>

              <form
                action="https://formspree.io/f/xoevbvpy"
                method="POST"
                className="mt-8 space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta desde la web de Transport AI"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Nombre de la empresa"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email profesional *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="nombre@empresa.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                    ¿Qué necesitas? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#101722] px-4 py-3.5 text-sm text-slate-300 outline-none focus:border-blue-400/60"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="IA">Inteligencia artificial</option>
                    <option value="Automatizacion">Automatización de procesos</option>
                    <option value="Integraciones">CRM e integraciones</option>
                    <option value="Software a medida">Software o paneles a medida</option>
                    <option value="Proyecto integral">Proyecto integral</option>
                    <option value="No lo tengo claro">Necesito asesoramiento</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">
                    Presupuesto orientativo
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#101722] px-4 py-3.5 text-sm text-slate-300 outline-none focus:border-blue-400/60"
                  >
                    <option value="">Prefiero hablarlo</option>
                    <option value="Menos de 3000 euros">Menos de 3.000 €</option>
                    <option value="3000 a 6000 euros">3.000–6.000 €</option>
                    <option value="6000 a 12000 euros">6.000–12.000 €</option>
                    <option value="12000 a 25000 euros">12.000–25.000 €</option>
                    <option value="Mas de 25000 euros">Más de 25.000 €</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    ¿Qué proceso quieres mejorar? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Cuéntanos qué ocurre actualmente y qué resultado te gustaría conseguir..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs leading-5 text-slate-400">
                  <input
                    type="checkbox"
                    name="privacy_acknowledgement"
                    value="accepted"
                    required
                    className="mt-1 accent-blue-500"
                  />
                  <span>
                    Confirmo que he leído la información de privacidad y autorizo
                    el uso de mis datos para gestionar esta consulta. Antes de
                    publicar el formulario, añade aquí un enlace a tu política
                    de privacidad.
                  </span>
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-sm font-semibold transition hover:bg-blue-400"
                >
                  Enviar consulta
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-500">
                  El envío depende de que el formulario de Formspree esté activo
                  y correctamente configurado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
