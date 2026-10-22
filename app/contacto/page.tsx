
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Eyebrow, SiteShell } from "../components/site-shell";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Análisis de tu operativa",
    text: "Estudiamos el proceso actual, los problemas y las oportunidades de mejora.",
  },
  {
    icon: Clock3,
    title: "Propuesta adaptada",
    text: "Definimos alcance, integraciones, fases y presupuesto según tus necesidades.",
  },
  {
    icon: ShieldCheck,
    title: "Integración responsable",
    text: "Diseñamos soluciones teniendo en cuenta los accesos, los datos y los sistemas existentes.",
  },
];

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

const labelClass = "mb-2 block text-sm font-medium text-slate-700";

const contactEmail = "alvarochaveinte1@gmail.com";
const whatsappUrl =
  "https://wa.me/34659980603?text=Hola%20Transport%20AI%2C%20quiero%20informaci%C3%B3n%20sobre%20vuestros%20servicios.";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xoevbvpy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo confirmar el envío del formulario.");
      }

      // Registrar la conversión solo después de confirmar el envío.
      try {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-18523833927/opwWCL26xKIdEMeM7YBF",
            value: 1.0,
            currency: "EUR",
          });
        }
      } catch {
        // Un fallo de medición no debe impedir confirmar el envío.
      }

      setSent(true);
      form.reset();
    } catch {
      setError(
        "No hemos podido confirmar el envío. Comprueba tu conexión e inténtalo de nuevo, o contacta directamente por WhatsApp o correo electrónico."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[35rem] h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-14 max-w-3xl">
            <Eyebrow>Contacto · Nuevos proyectos</Eyebrow>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl">
              Transformemos tus procesos en una{" "}
              <span className="text-blue-600">ventaja competitiva.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Cuéntanos cómo trabaja tu empresa, qué te está frenando y qué
              quieres conseguir. Diseñamos soluciones de inteligencia
              artificial, automatización e integración de sistemas orientadas
              a resultados reales.
            </p>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Sparkles className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                  Tecnología con un propósito.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  No se trata de añadir herramientas porque sí. Se trata de
                  reducir tareas manuales, conectar información y ayudar a tu
                  equipo a trabajar mejor.
                </p>

                <div className="mt-8 space-y-6">
                  {benefits.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-medium text-slate-900">
                    ¿Quieres conocer nuestras soluciones?
                  </p>
                  <Link
                    href="/servicios"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Explorar servicios
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    ¿Tienes un proyecto complejo?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Describe las herramientas implicadas, las áreas de tu
                    empresa y el resultado esperado para que podamos valorar
                    mejor el alcance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
              <div className="border-b border-slate-100 pb-6">
                <p className="text-sm font-semibold text-blue-600">
                  Hablemos de tu empresa
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Cuéntanos tu proyecto
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Completa el formulario y facilita la información necesaria
                  para valorar tu consulta. Los campos con * son obligatorios.
                </p>
              </div>

              {sent ? (
                <div
                  className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-6"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-700" />
                  <h3 className="mt-4 text-lg font-semibold text-green-950">
                    ¡Consulta enviada correctamente!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-green-900">
                    Gracias por contactar con Transport AI. Hemos recibido tu
                    consulta y podremos valorar los siguientes pasos.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 text-sm font-semibold text-green-800 underline underline-offset-4"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva consulta desde la web de Transport AI"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Nombre *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Nombre de tu empresa"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email profesional *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="nombre@empresa.com"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>
                      ¿Qué necesitas? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Selecciona una solución
                      </option>
                      <option value="IA">Inteligencia artificial</option>
                      <option value="Automatizacion">
                        Automatización de procesos
                      </option>
                      <option value="Integraciones">
                        CRM, API e integraciones
                      </option>
                      <option value="Software a medida">
                        Software y paneles a medida
                      </option>
                      <option value="Atencion al cliente">
                        Atención al cliente con IA
                      </option>
                      <option value="Operaciones y logistica">
                        Operaciones y logística
                      </option>
                      <option value="Proyecto integral">
                        Proyecto integral
                      </option>
                      <option value="No lo tengo claro">
                        Necesito asesoramiento
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Presupuesto orientativo
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="">Prefiero hablarlo</option>
                      <option value="Menos de 3000 euros">
                        Menos de 3.000 €
                      </option>
                      <option value="3000 a 6000 euros">
                        3.000–6.000 €
                      </option>
                      <option value="6000 a 12000 euros">
                        6.000–12.000 €
                      </option>
                      <option value="12000 a 25000 euros">
                        12.000–25.000 €
                      </option>
                      <option value="Mas de 25000 euros">
                        Más de 25.000 €
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      ¿Qué proceso quieres mejorar? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      placeholder="¿Qué ocurre actualmente? ¿Qué tareas quieres automatizar? ¿Qué herramientas utiliza tu equipo?"
                      className={`${fieldClass} resize-y leading-6`}
                    />
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
                      <input
                        type="checkbox"
                        name="privacy_acknowledgement"
                        value="accepted"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                      />
                      <span>
                        He leído la{" "}
                        <Link
                          href="/privacidad"
                          className="font-semibold text-blue-600 underline underline-offset-2"
                        >
                          política de privacidad
                        </Link>{" "}
                        y acepto el tratamiento de mis datos para gestionar
                        esta consulta.
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                    >
                      <p>{error}</p>
                      <div className="mt-3 flex flex-wrap gap-4">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4"
                        >
                          Contactar por WhatsApp
                        </a>
                        <a
                          href={`mailto:${contactEmail}`}
                          className="font-semibold underline underline-offset-4"
                        >
                          Enviar un correo
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Enviando consulta..." : "Enviar consulta"}
                    {!sending && <ArrowRight className="h-4 w-4" />}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    No incluyas contraseñas ni información confidencial en
                    este formulario.
                  </p>
                </form>
              )}

              {/* Contacto directo al final del formulario */}
              <div className="mt-8 border-t border-slate-200 pt-7">
                <div className="mb-5 text-center">
                  <h3 className="text-lg font-semibold text-slate-950">
                    ¿Prefieres contactar directamente?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Si tienes una pregunta rápida o prefieres hablar de tu
                    proyecto directamente, puedes escribirme por WhatsApp o
                    correo electrónico.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablar por WhatsApp · 659 980 603
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                  {contactEmail}
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Al contactar, evita compartir contraseñas, datos bancarios
                  u otra información sensible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
