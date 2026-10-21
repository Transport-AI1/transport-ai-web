
"use client";

import { useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  X,
  ArrowUpRight,
} from "lucide-react";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const initialMessage =
  "¡Hola! 👋 Soy el asistente virtual de Transport AI. Puedo explicarte nuestros servicios, orientarte sobre precios y ayudarte a contactar con Álvaro. ¿Qué te gustaría saber?";

function getAnswer(question: string): string {
  const text = question.toLowerCase();

  if (
    text.includes("precio") ||
    text.includes("cuesta") ||
    text.includes("presupuesto") ||
    text.includes("coste") ||
    text.includes("€")
  ) {
    return "Como orientación, la automatización de procesos parte de 1.500–4.000 €, las integraciones de CRM con IA de 4.000–8.000 € y las plataformas operativas a medida desde 15.000 €. Son importes orientativos, más IVA. El presupuesto final depende del proyecto.";
  }

  if (
    text.includes("transporte") ||
    text.includes("logística") ||
    text.includes("logistica") ||
    text.includes("mensajería") ||
    text.includes("mensajeria") ||
    text.includes("repart")
  ) {
    return "Trabajamos con empresas de transporte, logística, mensajería, mudanzas y servicios con vehículos. Podemos estudiar la automatización de incidencias, la coordinación de equipos, las notificaciones y la conexión entre sistemas.";
  }

  if (
    text.includes("servicio") ||
    text.includes("hacéis") ||
    text.includes("haceis") ||
    text.includes("solución") ||
    text.includes("solucion") ||
    text.includes("automatiz")
  ) {
    return "En Transport AI desarrollamos automatización de procesos, asistentes de IA, integraciones con CRM y APIs, y plataformas de software a medida. La solución se define según las necesidades de cada empresa.";
  }

  if (
    text.includes("demo") ||
    text.includes("demostración") ||
    text.includes("demostracion") ||
    text.includes("ver")
  ) {
    return "Puedes consultar nuestros ejemplos y módulos en la sección de demostraciones de la web.";
  }

  if (
    text.includes("contact") ||
    text.includes("hablar") ||
    text.includes("teléfono") ||
    text.includes("telefono") ||
    text.includes("whatsapp") ||
    text.includes("álvaro") ||
    text.includes("alvaro")
  ) {
    return "Puedes contactar directamente con Álvaro por WhatsApp o teléfono en el 659 980 603, o escribir a alvarochaveinte1@gmail.com. ¡Cuéntanos qué necesita tu empresa!";
  }

  if (
    text.includes("hola") ||
    text.includes("buenas") ||
    text.includes("buenos días") ||
    text.includes("buenos dias")
  ) {
    return "¡Hola! Gracias por visitar Transport AI. ¿Quieres conocer nuestros servicios, consultar precios o hablar con Álvaro?";
  }

  return "Puedo darte información general sobre nuestros servicios, precios orientativos y formas de contacto. Si necesitas estudiar un caso concreto, puedes escribir directamente a Álvaro por WhatsApp.";
}

export default function FreeAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  function sendMessage(value: string) {
    const question = value.trim();
    if (!question) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "assistant", text: getAnswer(question) },
    ]);

    setInput("");
    setShowSuggestions(false);
  }

  const whatsappUrl =
    "https://wa.me/34659980603?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Transport%20AI";

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="Asistente virtual de Transport AI"
          className="flex w-[min(370px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Transport AI Assistant</p>
                <p className="mt-1 text-xs text-slate-300">
                  Asistente virtual · Respuestas guiadas
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar asistente"
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex max-h-[min(420px,55vh)] min-h-64 flex-col gap-3 overflow-y-auto p-4"
            aria-live="polite"
          >
            <div className="max-w-[90%] self-start rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm leading-6 text-slate-800">
              {initialMessage}
            </div>

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl p-3 text-sm leading-6 ${
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
                  "¿Qué servicios ofrecéis?",
                  "¿Cuáles son los precios?",
                  "Trabajo en transporte",
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
            ¿Prefieres hablar con Álvaro por WhatsApp?
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
