"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Send,
  X,
  Mic,
  MicOff,
  Volume2,
  UserRound,
  Building2,
  Mail,
  Phone,
  Sparkles,
  LoaderCircle,
  CheckCircle2,
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

type RecognitionErrorEvent = {
  error: string;
};

type RecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: ((event: RecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type BrowserSpeech = {
  SpeechRecognition?: new () => RecognitionLike;
  webkitSpeechRecognition?: new () => RecognitionLike;
};

type LeadForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  consent: boolean;
};

const initialMessage =
  "¡Hola! Soy el asistente de Transport AI. Puedo ayudarte a descubrir cómo aplicar inteligencia artificial y automatizaciones en tu empresa, explicarte nuestros servicios y orientarte sobre precios. ¿Qué proceso te gustaría mejorar?";

const whatsappUrl =
  "https://wa.me/34659980603?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Transport%20AI";

const initialLead: LeadForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  need: "",
  budget: "",
  consent: false,
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getAnswer(question: string, history: ChatMessage[]): string {
  const text = normalizeText(question);

  if (/\b(hola|buenas|hey|buenos dias|buenas tardes|buenas noches)\b/.test(text)) {
    return "¡Hola! Encantado de ayudarte. Para orientarte mejor, ¿tu empresa se dedica al transporte, mensajería, logística, mudanzas u otro sector?";
  }

  if (/(quien eres|que eres|que hace transport ai|que haceis|que es transport ai)/.test(text)) {
    return "Transport AI desarrolla soluciones de inteligencia artificial, automatización e integración de software para empresas. Buscamos reducir tareas manuales, centralizar información y agilizar procesos sin obligarte a sustituir todos tus sistemas actuales. ¿Qué te gustaría mejorar en tu empresa?";
  }

  if (/(precio|precios|cuanto cuesta|cuanto vale|presupuesto|coste|costes|euros|€)/.test(text)) {
    return "Como orientación, las automatizaciones de procesos suelen costar entre 1.500 y 4.000 euros; los proyectos de CRM e integraciones con IA, entre 4.000 y 8.000 euros; y las plataformas operativas a medida, desde 15.000 euros. Son importes orientativos antes de IVA. El presupuesto definitivo depende del alcance y las integraciones necesarias. ¿Qué proceso quieres automatizar?";
  }

  if (/(servicios|soluciones|automatiz|inteligencia artificial|ia para|que ofreceis)/.test(text)) {
    return "Podemos estudiar automatización de tareas, clasificación de correos, gestión de incidencias, asistentes de atención al cliente, integración con CRM y APIs, coordinación de equipos y plataformas a medida. Primero analizamos tu proceso y las herramientas que ya utilizas para elegir una solución útil.";
  }

  if (/(transporte|logistica|mensajeria|paqueteria|reparto|repartidor|mudanza|flota|vehiculo|conductor|entrega|envio|paquete|direccion incorrecta|cliente ausente|reclamacion|incidencia)/.test(text)) {
    return "En transporte y logística podemos diseñar flujos que detecten datos incompletos, direcciones incoherentes, retrasos o destinatarios que no responden; registrar incidencias y avisar al responsable correspondiente. Las acciones reales dependen de las API y permisos de tus sistemas. ¿Cómo gestionáis ahora las incidencias: Excel, WhatsApp, email o un programa propio?";
  }

  if (/(crm|api|integracion|integrar|erp|software|programa|sistema actual|base de datos)/.test(text)) {
    return "Podemos estudiar integraciones con tu CRM, ERP o API para evitar duplicar datos y automatizar tareas. Primero necesitamos conocer el proveedor, las posibilidades de su API y los permisos disponibles. ¿Qué programa utilizáis actualmente?";
  }

  if (/(tiempo|horas|repetitiv|manual|excel|whatsapp|correo|email|tarea|trabajo administrativo)/.test(text)) {
    return "Podría ser un buen candidato para automatizar. Analizaríamos los pasos repetidos, las excepciones, las herramientas implicadas y el tiempo que consume. Después estimaríamos el ahorro potencial y el coste de implementación. ¿Cuántas personas realizan esa tarea y con qué frecuencia?";
  }

  if (/(demo|demostracion|ver ejemplo|muestra|prototipo)/.test(text)) {
    return "Puedes visitar la sección de demostraciones de nuestra web para ver ejemplos de gestión de incidencias, atención al cliente, mensajeros e integraciones. También podemos estudiar una demostración adaptada a tu proceso concreto.";
  }

  if (/(contacto|hablar con alguien|llamar|telefono|whatsapp|alvaro|reunion|cita|quiero contratar|propuesta comercial)/.test(text)) {
    return "Puedes contactar directamente con Álvaro por WhatsApp en el 659 980 603 o escribir a alvarochaveinte1@gmail.com. También puedes dejar tus datos en el formulario de este asistente para explicar qué necesita tu empresa.";
  }

  if (/(seguridad|privacidad|datos personales|rgpd|proteccion de datos)/.test(text)) {
    return "Los datos de contacto se envían cuando completas el formulario y aceptas el aviso de privacidad. Este asistente no guarda automáticamente toda la conversación ni graba el audio. Puedes consultar la política de privacidad desde el enlace del formulario.";
  }

  if (/(gracias|muchas gracias|perfecto|genial|entendido)/.test(text)) {
    return "¡De nada! Si me cuentas un poco más sobre tu empresa y el problema que quieres resolver, podré orientarte mejor. Si prefieres hablar con una persona, también tienes el botón de WhatsApp.";
  }

  const previousContext = history
    .filter((message) => message.role === "user")
    .slice(-4)
    .map((message) => message.text)
    .join(" ");

  if (previousContext.length > 0) {
    return "Vamos a concretarlo para encontrar una solución útil. ¿Qué herramientas utilizáis ahora y cuál es el resultado que más te interesa conseguir: ahorrar tiempo, reducir errores, responder antes a los clientes o mejorar el control de las operaciones?";
  }

  return "Para recomendarte algo útil necesito entender tu caso. Transport AI trabaja con automatizaciones, asistentes, integraciones y software a medida. ¿Qué tarea te gustaría eliminar o simplificar, y qué herramientas utilizáis actualmente?";
}

export default function FreeAssistant() {
  const [open, setOpen] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const [source, setSource] = useState<LeadSource>("chat");
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [saving, setSaving] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const [voiceError, setVoiceError] = useState("");
  const [lead, setLead] = useState<LeadForm>(initialLead);

  const recognitionRef = useRef<RecognitionLike | null>(null);
  const messagesRef = useRef<ChatMessage[]>([]);
  const voiceModeRef = useRef(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    voiceModeRef.current = voiceMode;
  }, [voiceMode]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      recognitionRef.current?.abort();

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setSpeaking(false);
  }, []);

  const stopListening = useCallback(() => {
    const recognition = recognitionRef.current;
    recognitionRef.current = null;

    if (recognition) {
      try {
        recognition.stop();
      } catch {
        // El reconocimiento puede haberse detenido ya.
      }
    }

    setListening(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setVoiceError("Tu navegador no permite reproducir voz. Puedes continuar por texto.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.96;
    utterance.pitch = 1;
    utterance.volume = 1;

    const chooseVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice =
        voices.find((voice) => voice.lang.toLowerCase() === "es-es") ??
        voices.find((voice) => voice.lang.toLowerCase().startsWith("es"));

      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }
    };

    chooseVoice();

    utterance.onstart = () => {
      if (mountedRef.current) setSpeaking(true);
    };

    utterance.onend = () => {
      if (mountedRef.current) setSpeaking(false);
    };

    utterance.onerror = () => {
      if (mountedRef.current) setSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const sendMessage = useCallback(
    (value: string, fromVoice = false) => {
      const question = value.trim();
      if (!question) return;

      stopSpeaking();

      const previousMessages = messagesRef.current;
      const answer = getAnswer(question, previousMessages);

      const nextMessages: ChatMessage[] = [
        ...previousMessages,
        { role: "user", text: question },
        { role: "assistant", text: answer },
      ];

      messagesRef.current = nextMessages;
      setMessages(nextMessages);
      setInput("");
      setShowSuggestions(false);
      setSource(fromVoice ? "voice" : "chat");
      setVoiceError("");

      if (fromVoice) {
        window.setTimeout(() => {
          if (mountedRef.current && voiceModeRef.current) {
            speak(answer);
          }
        }, 150);
      }
    },
    [speak, stopSpeaking],
  );

  const startVoice = useCallback(() => {
    if (typeof window === "undefined") return;

    setVoiceError("");
    setLeadStatus("");

    const browser = window as unknown as BrowserSpeech;
    const SpeechRecognition =
      browser.SpeechRecognition ?? browser.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError(
        "Este navegador no admite reconocimiento de voz. Prueba con Chrome o Edge, o utiliza el chat de texto.",
      );
      return;
    }

    stopSpeaking();
    stopListening();

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "es-ES";
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .slice(event.resultIndex)
          .map((result) => result[0].transcript)
          .join(" ")
          .trim();

        if (transcript) {
          recognitionRef.current = null;
          setListening(false);
          sendMessage(transcript, true);
        }
      };

      recognition.onerror = (event) => {
        recognitionRef.current = null;
        setListening(false);

        if (event.error !== "aborted" && event.error !== "no-speech") {
          setVoiceError(
            "No he podido reconocer tu voz. Comprueba el permiso del micrófono e inténtalo de nuevo.",
          );
        } else if (event.error === "no-speech") {
          setVoiceError("No he detectado voz. Pulsa la bola y vuelve a intentarlo.");
        }
      };

      recognition.onend = () => {
        if (recognitionRef.current === recognition) {
          recognitionRef.current = null;
        }
        setListening(false);
      };

      recognitionRef.current = recognition;
      setSource("voice");
      setListening(true);
      recognition.start();
    } catch {
      recognitionRef.current = null;
      setListening(false);
      setVoiceError("No se ha podido activar el micrófono. Inténtalo otra vez.");
    }
  }, [sendMessage, stopListening, stopSpeaking]);

  const closeVoiceMode = useCallback(() => {
    stopListening();
    stopSpeaking();
    setVoiceMode(false);
    setVoiceError("");
  }, [stopListening, stopSpeaking]);

  async function saveLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadStatus("");

    if (!lead.consent) {
      setLeadStatus("Debes aceptar el aviso de privacidad para enviar tus datos.");
      return;
    }

    if (!lead.email.trim() && !lead.phone.trim()) {
      setLeadStatus("Introduce al menos un email o teléfono de contacto.");
      return;
    }

    setSaving(true);

    const summary = messagesRef.current
      .slice(-10)
      .map(
        (message) =>
          `${message.role === "user" ? "Visitante" : "Asistente"}: ${message.text}`,
      )
      .join("\n")
      .slice(0, 1800);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          source,
          summary,
          consent: true,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "No se pudieron enviar los datos. Inténtalo de nuevo.",
        );
      }

      setLeadStatus("¡Gracias! Hemos recibido tus datos.");
      setLead(initialLead);
    } catch (error) {
      setLeadStatus(
        error instanceof Error
          ? error.message
          : "Ha ocurrido un error. Puedes contactar por WhatsApp.",
      );
    } finally {
      setSaving(false);
    }
  }

  function updateLead<K extends keyof LeadForm>(key: K, value: LeadForm[K]) {
    setLead((previous) => ({ ...previous, [key]: value }));
  }

  return (
    <>
      {/* Botones flotantes */}
      <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {open && (
          <section
            aria-label="Asistente virtual de Transport AI"
            className="flex w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 bg-slate-950 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
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
                  stopListening();
                  stopSpeaking();
                  setOpen(false);
                }}
                aria-label="Cerrar asistente"
                className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="flex max-h-[min(400px,45vh)] min-h-56 flex-col gap-3 overflow-y-auto p-4"
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
                    "¿Cuánto cuesta?",
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
                onClick={() => {
                  setVoiceMode(true);
                  setSource("voice");
                  setVoiceError("");
                }}
                className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800 hover:bg-blue-100"
              >
                <Mic className="h-4 w-4" />
                Modo voz
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

            {showLeadForm && (
              <form
                onSubmit={saveLead}
                className="flex max-h-[min(370px,42vh)] flex-col gap-3 overflow-y-auto border-t border-slate-200 bg-slate-50 p-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Hablemos de tu proyecto
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Deja tus datos para que podamos contactar contigo.
                  </p>
                </div>

                <label className="relative block">
                  <UserRound className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    value={lead.name}
                    onChange={(event) => updateLead("name", event.target.value)}
                    placeholder="Tu nombre"
                    maxLength={120}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="relative block">
                  <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    value={lead.company}
                    onChange={(event) => updateLead("company", event.target.value)}
                    placeholder="Empresa"
                    maxLength={160}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="relative block">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={lead.email}
                    onChange={(event) => updateLead("email", event.target.value)}
                    placeholder="Email"
                    maxLength={254}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="relative block">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    value={lead.phone}
                    onChange={(event) => updateLead("phone", event.target.value)}
                    placeholder="Teléfono"
                    maxLength={40}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="block text-xs font-medium text-slate-700">
                  ¿Qué necesitas mejorar?
                  <textarea
                    value={lead.need}
                    onChange={(event) => updateLead("need", event.target.value)}
                    placeholder="Ej.: automatizar incidencias o conectar mi CRM..."
                    maxLength={2000}
                    rows={3}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="block text-xs font-medium text-slate-700">
                  Presupuesto aproximado (opcional)
                  <select
                    value={lead.budget}
                    onChange={(event) => updateLead("budget", event.target.value)}
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
                    checked={lead.consent}
                    onChange={(event) => updateLead("consent", event.target.checked)}
                    className="mt-1"
                    required
                  />
                  <span>
                    Acepto que Transport AI utilice mis datos para responder a
                    mi solicitud. He leído la{" "}
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
                  {saving ? "Enviando..." : "Solicitar contacto"}
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
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
        )}

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

      {/* Modo de voz a pantalla completa */}
      {voiceMode && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-y-auto bg-[#080F24] px-6 py-12 text-white">
          <button
            type="button"
            onClick={closeVoiceMode}
            aria-label="Cerrar modo voz"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-3 flex items-center gap-2 text-sm font-bold tracking-[0.25em] text-blue-200">
            <Sparkles className="h-4 w-4" />
            TRANSPORT AI
          </div>

          <h2 className="mb-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos de tu empresa
          </h2>

          <p className="mb-10 max-w-sm text-center text-sm leading-6 text-slate-300">
            Cuéntame qué proceso quieres mejorar. Puedes hablar con el micrófono
            y escuchar la respuesta.
          </p>

          <button
            type="button"
            onClick={() => {
              if (listening) stopListening();
              else startVoice();
            }}
            aria-label={listening ? "Detener micrófono" : "Pulsar para hablar"}
            className={`group relative mb-8 flex h-56 w-56 items-center justify-center rounded-full transition duration-300 hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-blue-300/40 ${
              listening
                ? "bg-cyan-500 shadow-[0_0_100px_rgba(34,211,238,0.4)]"
                : speaking
                  ? "bg-indigo-600 shadow-[0_0_100px_rgba(99,102,241,0.45)]"
                  : "bg-blue-700 shadow-[0_0_90px_rgba(59,130,246,0.4)]"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-full border border-blue-200/50 ${
                listening || speaking ? "animate-ping" : ""
              }`}
            />

            <span className="absolute inset-4 rounded-full border border-white/20" />
            <span className="absolute inset-8 rounded-full bg-white/10" />

            <span className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-blue-500 to-indigo-900 shadow-inner">
              {listening ? (
                <Mic className="h-12 w-12 text-white" />
              ) : speaking ? (
                <Volume2 className="h-12 w-12 text-white" />
              ) : (
                <Bot className="h-12 w-12 text-white" />
              )}
            </span>
          </button>

          <p className="text-xl font-semibold">
            {listening
              ? "Te estoy escuchando..."
              : speaking
                ? "Estoy hablando..."
                : "Pulsa la bola para hablar"}
          </p>

          <p className="mt-3 max-w-sm text-center text-sm leading-6 text-slate-300">
            {listening
              ? "Habla con claridad y pulsa de nuevo para detener el micrófono."
              : speaking
                ? "Puedes detener la respuesta pulsando el botón de abajo."
                : "Pregunta por automatizaciones, incidencias, integraciones, precios o soluciones para tu empresa."}
          </p>

          {(voiceError || leadStatus) && (
            <p
              role="status"
              className="mt-5 max-w-md rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-blue-100"
            >
              {voiceError || leadStatus}
            </p>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {speaking && (
              <button
                type="button"
                onClick={stopSpeaking}
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <Volume2 className="h-4 w-4" />
                Parar voz
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                stopListening();
                stopSpeaking();
                setVoiceMode(false);
                setOpen(true);
                setShowLeadForm(true);
                setSource("voice");
              }}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100"
            >
              Quiero información comercial
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              stopListening();
              stopSpeaking();
              setVoiceMode(false);
              setOpen(true);
            }}
            className="mt-5 text-sm text-slate-300 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            Volver al chat de texto
          </button>

          <p className="mt-8 max-w-md text-center text-xs leading-5 text-slate-400">
            La voz utiliza las funciones de audio del navegador. La conversación
            de esta versión emplea respuestas programadas; no es todavía un
            modelo de IA conversacional en tiempo real.
          </p>
        </div>
      )}
    </>
  );
}
