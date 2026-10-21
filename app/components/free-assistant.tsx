
"use client";

import { useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  X,
  ArrowUpRight,
  Mic,
  MicOff,
  Volume2,
  UserRound,
  Building2,
  Mail,
  Phone,
  Sparkles,
  LoaderCircle,
} from "lucide-react";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

type LeadSource = "chat" | "voice";

type RecognitionResult = {
  0: { transcript: string };
  isFinal: boolean;
};

type RecognitionEvent = {
  resultIndex: number;
  results: ArrayLike<RecognitionResult>;
};

type RecognitionLike = {
  lang: string;
  interimResults: boolean;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type BrowserSpeech = {
  SpeechRecognition?: new () => RecognitionLike;
  webkitSpeechRecognition?: new () => RecognitionLike;
};

const initialMessage =
  "¡Hola! 👋 Soy el asistente virtual de Transport AI. Puedo ayudarte a identificar procesos que se pueden automatizar, explicarte nuestras soluciones y orientarte sobre precios. También puedes hablar conmigo por voz. ¿Qué problema te gustaría resolver en tu empresa?";

const whatsappUrl =
  "https://wa.me/34659980603?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Transport%20AI";

function getAnswer(question: string, history: ChatMessage[]): string {
  const text = question.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const previous = history
    .slice(-8)
    .map((message) => message.text.toLowerCase())
    .join(" ");

  if (/\b(hola|buenas|buenos dias|buenas tardes)\b/.test(text)) {
    return "¡Hola! Encantado de ayudarte. Para orientarte mejor, ¿tu empresa se dedica al transporte, mensajería, logística, mudanzas u otro sector con vehículos?";
  }

  if (
    /(precio|precios|cuanto cuesta|cuanto vale|presupuesto|coste|costes|euros|€)/.test(text)
  ) {
    return "Como orientación, nuestros proyectos se sitúan en estos rangos: automatización de procesos, 1.500–4.000 €; CRM e integraciones con IA, 4.000–8.000 €; plataformas operativas a medida, desde 15.000 €. Importes orientativos, más IVA. Para recomendarte una opción necesito conocer qué proceso quieres mejorar y el alcance del proyecto.";
  }

  if (
    /(que haceis|que servicios|servicios|que ofreceis|soluciones|automatiz|inteligencia artificial|ia para)/.test(text)
  ) {
    return "Transport AI diseña soluciones de software y automatización para empresas. Podemos conectar herramientas existentes, automatizar tareas repetitivas, gestionar incidencias, integrar CRM y APIs, coordinar notificaciones y desarrollar plataformas a medida. La idea es complementar tus sistemas actuales, no obligarte a sustituirlos. ¿Qué tarea os consume más tiempo actualmente?";
  }

  if (
    /(incidencia|reclamacion|paquete|envio|entrega|repartidor|mensajeria|transporte|logistica|mudanza|flota|vehiculo|conductor|direccion incorrecta|cliente ausente)/.test(text)
  ) {
    return "En transporte y logística podemos estudiar flujos para detectar datos incompletos, direcciones incorrectas, entregas retrasadas o clientes que no responden; registrar incidencias, avisar al responsable y coordinar comunicaciones con el conductor. La viabilidad depende de los datos y sistemas que utilice tu empresa. ¿Cómo gestionáis ahora esas incidencias: Excel, WhatsApp, email o un programa propio?";
  }

  if (
    /(crm|api|integracion|integrar|erp|software|programa|sistema actual|base de datos)/.test(text)
  ) {
    return "Podemos estudiar una integración con tu CRM, ERP o API para reducir la duplicación de datos y automatizar tareas. Primero necesitamos conocer el proveedor, su API y los permisos disponibles. No hace falta cambiar todo el sistema de golpe. ¿Qué programa utilizáis actualmente?";
  }

  if (
    /(tiempo|horas|repetitiv|manual|excel|whatsapp|correos|emails|tarea|tareas|trabajo administrativo)/.test(text)
  ) {
    return "Es un buen candidato para analizar una automatización. Primero identificaríamos los pasos repetidos, las excepciones y las herramientas que intervienen; después estimaríamos el ahorro y el coste antes de desarrollar nada. ¿Cuántas personas realizan esa tarea y con qué frecuencia?";
  }

  if (
    /(demo|demostracion|ver ejemplo|muestra|prueba)/.test(text)
  ) {
    return "Puedes ver ejemplos en la sección de demostraciones de nuestra web. Para preparar una demostración relevante, dime qué quieres ver: gestión de incidencias, atención al cliente, coordinación de mensajeros, integraciones o un flujo personalizado.";
  }

  if (
    /(contacto|hablar|llamar|telefono|whatsapp|alvaro|reunion|reunir|cita|interesa|quiero contratar|quiero que me contacte|propuesta comercial)/.test(text)
  ) {
    return "Perfecto. Puedes hablar directamente con Álvaro por WhatsApp en el 659 980 603 o escribir a alvarochaveinte1@gmail.com. Si lo prefieres, puedes dejar tus datos en el formulario de este asistente y explicar brevemente qué necesita tu empresa.";
  }

  if (
    /(seguridad|privacidad|datos personales|gdpr|rgpd|proteccion de datos)/.test(text)
  ) {
    return "La información de contacto solo se enviará a nuestro sistema cuando completes el formulario, facilites un email o teléfono y aceptes el aviso de privacidad. No guardamos automáticamente toda la conversación ni grabamos el audio. Puedes consultar nuestra política de privacidad desde el enlace del formulario.";
  }

  if (
    /(precio|presupuesto|coste|€)/.test(previous) &&
    /(empresa|proyecto|servicio)/.test(text)
  ) {
    return "Para afinar el presupuesto, necesitamos conocer el proceso, los sistemas que habría que conectar, el número de usuarios y las excepciones que deben gestionarse. Cuéntame qué resultado quieres conseguir y te orientaré sobre el tipo de proyecto adecuado.";
  }

  if (
    /(gracias|perfecto|vale|entendido|genial)/.test(text)
  ) {
    return "¡De nada! Si me cuentas un poco más sobre tu empresa y el problema que quieres resolver, podré orientarte mejor. Si prefieres hablar con una persona, también tienes el botón de WhatsApp.";
  }

  return "Quiero orientarte de forma útil, no recomendarte una solución a ciegas. En Transport AI estudiamos automatizaciones, asistentes, integraciones y software a medida. Para entender tu caso: ¿qué tarea te gustaría eliminar o simplificar, qué herramientas utilizáis y qué resultado esperas conseguir?";
}

export default function FreeAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [source, setSource] = useState<LeadSource>("chat");
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [saving, setSaving] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const [consent, setConsent] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");

  function sendMessage(value: string, fromVoice = false) {
    const question = value.trim();
    if (!question) return;

    const answer = getAnswer(question, messages);

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);

    setInput("");
    setShowSuggestions(false);
    setSource(fromVoice ? "voice" : "chat");

    if (fromVoice) speak(answer);
  }

  function speak(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setLeadStatus("Tu navegador no permite reproducir voz.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }

  function startVoice() {
    if (typeof window === "undefined") return;

    const browser = window as unknown as BrowserSpeech;
    const SpeechRecognition =
      browser.SpeechRecognition ?? browser.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setLeadStatus(
        "El reconocimiento de voz no está disponible en este navegador. Prueba Chrome o Edge, o escribe tu mensaje."
      );
      return;
    }

    stopSpeaking();

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .slice(event.resultIndex)
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();

      if (transcript) sendMessage(transcript, true);
    };

    recognition.onerror = () => {
      setListening(false);
      setLeadStatus("No he podido reconocer la voz. Comprueba el permiso del micrófono.");
    };

    recognition.onend = () => setListening(false);

    try {
      setSource("voice");
      setLeadStatus("");
      setListening(true);
      recognition.start();
    } catch {
      setListening(false);
      setLeadStatus("No se pudo activar el micrófono. Inténtalo de nuevo.");
    }
  }

  async function saveLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadStatus("");

    if (!consent) {
      setLeadStatus("Necesitas aceptar el aviso de privacidad para enviar tus datos.");
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setLeadStatus("Indica al menos un email o teléfono.");
      return;
    }

    setSaving(true);

    const summary = messages
      .slice(-10)
      .map((message) =>
        `${message.role === "user" ? "Visitante" : "Asistente"}: ${message.text}`
      )
      .join("\n")
      .slice(0, 1800);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          source,
          need,
          budget,
          summary,
          consent: true,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se pudo enviar el formulario.");
      }

      setLeadStatus("¡Gracias! Hemos recibido tus datos. Álvaro podrá contactar contigo.");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setNeed("");
      setBudget("");
      setConsent(false);
    } catch (error) {
      setLeadStatus(
        error instanceof Error
          ? error.message
          : "Ha ocurrido un error. Prueba de nuevo o contacta por WhatsApp."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="Asistente virtual de Transport AI"
          className="flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Transport AI</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-300">
                  <Sparkles className="h-3 w-3" />
                  Asistente comercial
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                stopSpeaking();
              }}
              aria-label="Cerrar asistente"
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex max-h-[min(420px,48vh)] min-h-64 flex-col gap-3 overflow-y-auto p-4"
            aria-live="polite"
          >
            <div className="max-w-[92%] self-start rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm leading-6 text-slate-800">
              {initialMessage}
            </div>

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`max-w-[92%] whitespace-pre-wrap rounded-2xl p-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "self-end rounded-tr-sm bg-blue-700 text-white"
                    : "self-start rounded-tl-sm bg-slate-100 text-slate-800"
                }`}
              >
                {message.text}
              </div>
            ))}

            {showSuggestions && (
              <div className="mt-1 flex flex-wrap gap-2">
                {[
                  "¿Qué podéis automatizar?",
                  "¿Cuáles son los precios?",
                  "Tengo una empresa de transporte",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-slate-200 px-3 py-2 text-left text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 px-3 py-2">
            <button
              type="button"
              onClick={listening ? () => setListening(false) : startVoice}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
                listening
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-50 text-blue-800 hover:bg-blue-100"
              }`}
            >
              {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              {listening ? "Escuchando…" : "Hablar"}
            </button>

            <button
              type="button"
              onClick={() => {
                if (speaking) stopSpeaking();
                else speak(messages.at(-1)?.text || initialMessage);
              }}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
            >
              <Volume2 className="h-4 w-4" />
              {speaking ? "Parar voz" : "Escuchar"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowLeadForm((previous) => !previous);
                setLeadStatus("");
              }}
              className="ml-auto rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              Quiero información
            </button>
          </div>

          {leadStatus && !showLeadForm && (
            <p role="status" className="px-4 pb-2 text-xs text-slate-600">
              {leadStatus}
            </p>
          )}

          {showLeadForm && (
            <form
              onSubmit={saveLead}
              className="flex max-h-[min(390px,45vh)] flex-col gap-3 overflow-y-auto border-t border-slate-200 bg-slate-50 p-4"
            >
              <div>
                <h3 className="font-semibold text-slate-900">Hablemos de tu proyecto</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Deja tus datos si quieres que Álvaro contacte contigo.
                </p>
              </div>

              <label className="relative block">
                <UserRound className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Tu nombre"
                  maxLength={120}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </label>

              <label className="relative block">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Empresa"
                  maxLength={160}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </label>

              <label className="relative block">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  maxLength={254}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </label>

              <label className="relative block">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Teléfono"
                  maxLength={40}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </label>

              <label className="block text-xs font-medium text-slate-700">
                ¿Qué necesitas mejorar?
                <textarea
                  value={need}
                  onChange={(event) => setNeed(event.target.value)}
                  placeholder="Ej.: automatizar incidencias o conectar mi CRM..."
                  maxLength={2000}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                />
              </label>

              <label className="block text-xs font-medium text-slate-700">
                Presupuesto aproximado (opcional)
                <select
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                >
                  <option value="">Prefiero hablarlo</option>
                  <option value="Menos de 1500 €">Menos de 1.500 €</option>
                  <option value="1500–4000 €">1.500–4.000 €</option>
                  <option value="4000–8000 €">4.000–8.000 €</option>
                  <option value="8000–15000 €">8.000–15.000 €</option>
                  <option value="Más de 15000 €">Más de 15.000 €</option>
                </select>
              </label>

              <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1"
                  required
                />
                <span>
                  Acepto que Transport AI utilice mis datos para responder a mi
                  solicitud. He leído la{" "}
                  <a
                    href="/privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 underline"
                  >
                    política de privacidad
                  </a>.
                </span>
              </label>

              {leadStatus && (
                <p role="status" className="text-xs text-slate-700">
                  {leadStatus}
                </p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
              >
                {saving && <LoaderCircle className="h-4 w-4 animate-spin" />}
                {saving ? "Enviando…" : "Solicitar contacto"}
              </button>
            </form>
          )}

          <form
            className="flex items-center gap-2 border-t border-slate-200 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta..."
              aria-label="Escribe tu pregunta"
              maxLength={2000}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Enviar mensaje"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar con Álvaro por WhatsApp
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </section>
      )}

      <div className="flex flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#1ebe5d]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-label={open ? "Cerrar asistente virtual" : "Abrir asistente virtual"}
          className="flex h-14 items-center gap-3 rounded-full bg-blue-700 px-5 text-sm font-bold text-white shadow-xl transition hover:scale-[1.03] hover:bg-blue-800"
        >
          {open ? <X className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
          {open ? "Cerrar chat" : "¿Te ayudo?"}
        </button>
      </div>
    </div>
  );
}
