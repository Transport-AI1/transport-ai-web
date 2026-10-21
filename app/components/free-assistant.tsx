
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Send,
  X,
  Mic,
  Volume2,
  UserRound,
  Building2,
  Mail,
  Phone,
  Sparkles,
  LoaderCircle,
  CheckCircle2,
  ChevronLeft,
  BrainCircuit,
  ShieldCheck,
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

type ConversationProfile = {
  companySize: string;
  sector: string;
  software: string;
  solution: string;
  channels: string;
  volume: string;
  objective: string;
  budget: string;
  deadline: string;
  problem: string;
};

const initialMessage =
  "¡Hola! Soy el asistente comercial de Transport AI. Puedo ayudarte a estudiar automatizaciones, agentes de IA, asistentes de voz, integraciones y software a medida. Cuéntame qué hace tu empresa y qué te gustaría mejorar.";

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

const emptyProfile: ConversationProfile = {
  companySize: "",
  sector: "",
  software: "",
  solution: "",
  channels: "",
  volume: "",
  objective: "",
  budget: "",
  deadline: "",
  problem: "",
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!,.;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contains(text: string, expressions: RegExp[]) {
  return expressions.some((expression) => expression.test(text));
}

function getProfile(history: ChatMessage[]): ConversationProfile {
  const profile = { ...emptyProfile };

  const userMessages = history
    .filter((message) => message.role === "user")
    .map((message) => normalizeText(message.text));

  const fullText = userMessages.join(" ");

  const sizeMatches = [
    ...fullText.matchAll(
      /(\d{1,7})\s*(franquicias|delegaciones|sucursales|oficinas|vehiculos|vehiculos|conductores|repartidores|empleados|trabajadores|usuarios|pedidos|paquetes|llamadas)/g,
    ),
  ];

  if (sizeMatches.length > 0) {
    profile.companySize = sizeMatches
      .slice(-3)
      .map((match) => `${match[1]} ${match[2]}`)
      .join(", ");
  }

  if (
    contains(fullText, [
      /\btransporte\b/,
      /\blogistica\b/,
      /\bmensajeria\b/,
      /\bpaqueteria\b/,
      /\breparto\b/,
      /\bpaquetes\b/,
      /\benvios\b/,
    ])
  ) {
    profile.sector = "transporte y logística";
  } else if (/\bmudanzas?\b/.test(fullText)) {
    profile.sector = "mudanzas";
  } else if (/\babogados?\b|\blegal\b/.test(fullText)) {
    profile.sector = "servicios jurídicos";
  } else if (/\brestaurante\b|\bhosteleria\b/.test(fullText)) {
    profile.sector = "hostelería";
  }

  const softwarePatterns: [RegExp, string][] = [
    [/\bexcel\b|\bhojas de calculo\b/, "Excel"],
    [/\bwhatsapp\b/, "WhatsApp"],
    [/\bsalesforce\b/, "Salesforce"],
    [/\bhubspot\b/, "HubSpot"],
    [/\bdynamics\b|\bmicrosoft dynamics\b/, "Microsoft Dynamics"],
    [/\bsap\b/, "SAP"],
    [/\bholded\b/, "Holded"],
    [/\bzoho\b/, "Zoho"],
    [/\bdrive\b|\bgoogle sheets\b/, "Google Workspace"],
    [/\bcrm\b/, "un CRM"],
    [/\berp\b/, "un ERP"],
    [/\bsoftware propio\b|\bsistema propio\b/, "un sistema propio"],
    [/\bningun programa\b|\bningun sistema\b/, "ningún sistema específico"],
  ];

  for (const [pattern, name] of softwarePatterns) {
    if (pattern.test(fullText)) {
      profile.software = name;
    }
  }

  if (
    contains(fullText, [
      /\bagente de voz\b/,
      /\basistente de voz\b/,
      /\bllamadas automaticas\b/,
      /\bvoz\b/,
    ])
  ) {
    profile.solution = "agente de voz con IA";
  } else if (
    contains(fullText, [
      /\bchatbot\b/,
      /\bagente web\b/,
      /\basistente web\b/,
      /\bweb con agente\b/,
    ])
  ) {
    profile.solution = "agente de IA para web";
  } else if (/\bautomatiz/.test(fullText)) {
    profile.solution = "automatización de procesos";
  } else if (/\bplataforma\b|\bsoftware a medida\b/.test(fullText)) {
    profile.solution = "plataforma de software a medida";
  }

  if (/\bllamadas\b|\btelefono\b|\btelefonica\b/.test(fullText)) {
    profile.channels = "teléfono";
  }

  if (/\bcorreo\b|\bemail\b|\bgmail\b/.test(fullText)) {
    profile.channels = profile.channels
      ? `${profile.channels} y correo electrónico`
      : "correo electrónico";
  }

  if (/\bwhatsapp\b/.test(fullText)) {
    profile.channels = profile.channels
      ? `${profile.channels} y WhatsApp`
      : "WhatsApp";
  }

  if (
    contains(fullText, [
      /\bahorrar tiempo\b/,
      /\breducir costes\b/,
      /\breducir tareas manuales\b/,
      /\bser mas eficientes\b/,
    ])
  ) {
    profile.objective = "ahorrar tiempo y reducir trabajo manual";
  }

  if (
    contains(fullText, [
      /\bincidencias\b/,
      /\breclamaciones\b/,
      /\bproblemas con los envios\b/,
    ])
  ) {
    profile.problem = "gestión de incidencias y reclamaciones";
  } else if (
    contains(fullText, [
      /\batencion al cliente\b/,
      /\bconsultas de clientes\b/,
      /\bsoporte al cliente\b/,
    ])
  ) {
    profile.problem = "atención al cliente";
  } else if (
    contains(fullText, [
      /\bpedidos\b/,
      /\bseguimiento de envios\b/,
      /\blocalizar paquetes\b/,
    ])
  ) {
    profile.problem = "gestión y seguimiento de pedidos";
  }

  const budgetMatch = fullText.match(
    /(?:presupuesto|disponemos de|podemos invertir|invertir)\s*(?:de|unos|aproximado de)?\s*(\d[\d.,]*)\s*(euros|eur|€)/,
  );

  if (budgetMatch) {
    profile.budget = `${budgetMatch[1]} €`;
  } else if (/\bpresupuesto limitado\b|\bpoco presupuesto\b/.test(fullText)) {
    profile.budget = "limitado";
  }

  const deadlineMatch = fullText.match(
    /(?:antes de|para el|fecha limite|necesitamos tenerlo para)\s+(.{2,45})/,
  );

  if (deadlineMatch) {
    profile.deadline = deadlineMatch[0].slice(0, 100);
  }

  const volumeMatch = fullText.match(
    /(\d{1,7})\s*(llamadas|pedidos|paquetes|consultas|incidencias)\s*(?:al dia|diarias|por dia|al mes|mensuales)?/,
  );

  if (volumeMatch) {
    profile.volume = volumeMatch[0];
  }

  return profile;
}

function getAnswer(
  question: string,
  history: ChatMessage[],
): string {
  const text = normalizeText(question);
  const profile = getProfile(history);

  const userMessages = history.filter((m) => m.role === "user");
  const assistantMessages = history.filter((m) => m.role === "assistant");

  const lastAssistant = assistantMessages.at(-1)?.text ?? "";
  const lastUser = userMessages.at(-1)?.text ?? "";

  const previousContext = normalizeText(
    history.slice(-12).map((m) => m.text).join(" "),
  );

  const hasEnterpriseScale =
    /\b(300|500|1000|10000)\s*(franquicias|delegaciones|sucursales|oficinas|usuarios|empleados|repartidores|conductores)\b/.test(
      previousContext,
    ) ||
    /\bempresa mas grande\b|\bmultinacional\b|\bgran empresa\b|\bred nacional\b|\bred internacional\b/.test(
      previousContext,
    );

  const isCorrection = contains(text, [
    /\bno me has entendido\b/,
    /\bno has entendido\b/,
    /\bno es eso\b/,
    /\bte he preguntado\b/,
    /\bme refiero a\b/,
    /\bno has respondido\b/,
    /\bquiero una respuesta\b/,
  ]);

  const asksPrice = contains(text, [
    /\bprecio\b/,
    /\bprecios\b/,
    /\bcuanto cuesta\b/,
    /\bcuanto vale\b/,
    /\bpresupuesto\b/,
    /\bcoste\b/,
    /\bcostes\b/,
    /\bcuanto cobrais\b/,
    /\bcuanto costaria\b/,
    /\bcuanto seria\b/,
    /\beuros\b/,
  ]);

  const asksTime = contains(text, [
    /\bcuanto tarda\b/,
    /\bcuanto tardaria\b/,
    /\bcuanto tiempo\b/,
    /\bplazo\b/,
    /\bfecha de entrega\b/,
    /\bsemanas\b/,
    /\bmeses\b/,
    /\bcuando estaria\b/,
    /\btiempo de desarrollo\b/,
  ]);

  const asksContact = contains(text, [
    /\bcontacto\b/,
    /\bwhatsapp\b/,
    /\bhablar con alvaro\b/,
    /\bhablar con una persona\b/,
    /\bhablar con alguien\b/,
    /\breunion\b/,
    /\bcita\b/,
    /\btelefono\b/,
    /\bquiero contratar\b/,
    /\bpropuesta comercial\b/,
  ]);

  const asksIdentity = contains(text, [
    /\bquien eres\b/,
    /\bque es transport ai\b/,
    /\bque hace transport ai\b/,
    /\bque haceis\b/,
    /\bquienes sois\b/,
  ]);

  const asksSecurity = contains(text, [
    /\bseguridad\b/,
    /\bprivacidad\b/,
    /\brgpd\b/,
    /\bproteccion de datos\b/,
    /\bdonde se guardan los datos\b/,
    /\bmis datos\b/,
  ]);

  const asksDemo = contains(text, [
    /\bdemo\b/,
    /\bdemostracion\b/,
    /\bver un ejemplo\b/,
    /\bprototipo\b/,
    /\bpuedo verlo\b/,
  ]);

  const asksHow = contains(text, [
    /\bcomo funciona\b/,
    /\bcomo lo hariais\b/,
    /\bcomo se implementa\b/,
    /\bque incluiria\b/,
    /\bque incluye\b/,
    /\bcomo empezamos\b/,
    /\bque necesitais\b/,
  ]);

  const asksSavings = contains(text, [
    /\bahorrar tiempo\b/,
    /\bahorro de tiempo\b/,
    /\bcuanto ahorraria\b/,
    /\breducir costes\b/,
    /\bretorno de inversion\b/,
    /\bcuanto podria ahorrar\b/,
  ]);

  const asksVoice = contains(text, [
    /\bagente de voz\b/,
    /\basistente de voz\b/,
    /\bvoz con ia\b/,
    /\batienda llamadas\b/,
    /\bautomatizar llamadas\b/,
    /\bllamadas telefonicas\b/,
  ]);

  const asksAutomation = contains(text, [
    /\bautomatizar\b/,
    /\bautomatizacion\b/,
    /\binteligencia artificial\b/,
    /\bque podeis hacer\b/,
    /\bservicios\b/,
    /\bsoluciones\b/,
    /\bque se puede automatizar\b/,
  ]);

  const isGreeting = /^(hola|buenas|hey|buenos dias|buenas tardes|buenas noches)$/.test(text);

  const isThanks = /^(gracias|muchas gracias|perfecto|genial|entendido|vale gracias)$/.test(text);

  const isNegative = /^(no|no gracias|no lo se|ni idea|todavia no|aun no|ninguno|ninguna)$/.test(text);

  const isPositive = /^(si|sí|vale|correcto|exacto|eso es|de acuerdo)$/.test(text);

  const isShortAnswer = text.length < 45;

  if (isCorrection) {
    return "Perdona, voy a centrarme en tu pregunta concreta. No quiero darte una respuesta genérica. ¿Qué necesitas que aclare exactamente?";
  }

  if (isGreeting) {
    return "¡Hola! Soy el asistente comercial de Transport AI. Podemos estudiar agentes de voz, atención al cliente con IA, automatizaciones, integraciones con CRM y software a medida. ¿Qué tipo de empresa tienes y qué proceso te gustaría mejorar?";
  }

  if (asksContact) {
    return "Puedes hablar directamente con Álvaro, fundador de Transport AI, por WhatsApp. Al escribirle, cuéntale brevemente qué empresa tienes y qué necesitas. Si tu proyecto es grande, es mejor revisar los requisitos contigo antes de darte una cifra o prometer una integración.\n\nPulsa el botón «Hablar con Álvaro por WhatsApp» que aparece debajo de esta conversación.";
  }

  if (asksIdentity) {
    return "Transport AI desarrolla soluciones de inteligencia artificial, automatización e integración de software para empresas. Estudiamos cómo reducir tareas manuales, atender consultas, conectar sistemas y mejorar procesos operativos. El objetivo es complementar las herramientas que ya utiliza cada empresa, siempre que las integraciones sean técnicamente viables.";
  }

  if (asksSecurity) {
    return "La seguridad se debe definir según cada proyecto. Hay que revisar qué datos se procesan, quién puede acceder, qué permisos tiene la solución, cuánto tiempo se conservan los datos y qué proveedores intervienen. No puedo confirmar que una integración concreta cumpla todos los requisitos sin revisar su arquitectura. Puedes hablar con Álvaro para estudiar las necesidades de seguridad y protección de datos de tu empresa.";
  }

  if (asksDemo) {
    return "Puedes ver las demostraciones de Transport AI aquí:\nhttps://transport-ai-web.vercel.app/demostraciones\n\nSon ejemplos visuales de posibles soluciones. No significa que todas las funciones estén conectadas a sistemas reales ni que cada integración esté disponible para cualquier empresa. La solución definitiva se define según tus requisitos.";
  }

  if (asksPrice) {
    if (hasEnterpriseScale) {
      return "Para una empresa con una red de ese tamaño, no sería responsable aplicar directamente el precio de una automatización sencilla. Los precios orientativos publicados son 1.500–4.000 € para automatizaciones, 4.000–8.000 € para proyectos de CRM e IA y desde 15.000 € para plataformas operativas a medida, antes de IVA. Un proyecto empresarial con muchas franquicias, permisos e integraciones puede requerir un alcance y presupuesto distintos. Lo adecuado es estudiar primero el CRM, el volumen de actividad y las funciones necesarias con Álvaro.";
    }

    if (profile.solution === "agente de voz con IA") {
      return "El coste de un agente de voz depende de si solo responde preguntas o también atiende llamadas reales, consulta datos, actualiza el CRM y transfiere llamadas. Los proyectos de integración con IA se sitúan orientativamente entre 4.000 y 8.000 € antes de IVA, pero un agente telefónico puede tener costes adicionales de telefonía, proveedores de voz y uso. Para estimarlo correctamente necesito saber qué debería hacer el agente y qué sistema utilizáis.";
    }

    return "Los precios orientativos de Transport AI son:\n\n• Automatización de procesos: 1.500–4.000 €.\n• CRM e integraciones con IA: 4.000–8.000 €.\n• Plataforma operativa a medida: desde 15.000 €.\n\nImportes antes de IVA. El presupuesto definitivo depende del alcance, las integraciones, las pruebas y los proveedores externos que hagan falta. Si me explicas el proceso que quieres mejorar, puedo orientarte sobre qué categoría encaja mejor.";
  }

  if (asksTime) {
    if (hasEnterpriseScale) {
      return "Para una implantación empresarial con muchas franquicias, el plazo depende del CRM, las APIs disponibles, los permisos, las pruebas y la necesidad de desplegar por fases. Puede ser necesario planificar un piloto y ampliar después al resto de la red. No sería serio prometer una fecha sin revisar esos puntos. ¿Qué sistema central utilizáis y qué debería hacer exactamente la solución?";
    }

    return "Como referencia preliminar, una automatización sencilla puede requerir entre 1 y 3 semanas; una integración con CRM y varios flujos, entre 3 y 8 semanas; y una plataforma completa, varios meses. Son estimaciones orientativas, no compromisos de entrega. El plazo real depende del alcance, las APIs, los proveedores y las pruebas necesarias.";
  }

  if (asksSavings) {
    return "El ahorro debe calcularse con datos reales, no prometerse de antemano. Por ejemplo, si una tarea ocupa 2 horas diarias y una automatización elimina la mitad de ese trabajo, el ahorro teórico sería de 1 hora al día. Para estimarlo en tu empresa necesito saber qué tarea se repite, cuánto tarda y cuántas veces se realiza.";
  }

  if (asksVoice) {
    if (hasEnterpriseScale) {
      return `Para una red empresarial de ese tamaño, estudiaría un agente de voz conectado al sistema central, con permisos por franquicia y derivación a una persona cuando no pueda resolver una consulta. Podría atender preguntas frecuentes y, si el CRM y las APIs lo permiten, consultar información o registrar solicitudes. Primero habría que validar la integración, el volumen de llamadas y los requisitos de seguridad. ¿Qué CRM utilizáis actualmente?${profile.software ? ` Tengo anotado que utilizáis ${profile.software}.` : ""}`;
    }

    return "Un agente de voz puede atender consultas, responder preguntas frecuentes, recoger datos, clasificar solicitudes y derivar casos complejos a una persona. Si debe consultar pedidos, modificar registros o realizar llamadas telefónicas reales, hay que comprobar las APIs y los proveedores necesarios. ¿Quieres que atienda llamadas telefónicas, que hable con los visitantes de tu web o ambas cosas?";
  }

  if (asksAutomation) {
    return "Podemos estudiar clasificación de correos, atención al cliente, gestión de incidencias, agentes de voz, integración con CRM, automatización administrativa y software a medida. Para elegir una solución útil, conviene identificar la tarea que más tiempo consume, las herramientas que intervienen y las excepciones que necesitan supervisión humana. ¿Cuál es el principal problema que quieres resolver?";
  }

  // Seguimiento de la conversación: respuestas breves como "CRM", "Excel" o "no lo sé".
  if (isShortAnswer && lastAssistant) {
    const previous = normalizeText(lastAssistant);

    if (
      /\bcrm\b|\bexcel\b|\bprograma\b|\bsistema\b|\bsoftware\b/.test(previous) &&
      /\bcrm\b|\bexcel\b|\bsap\b|\bhubspot\b|\bsalesforce\b|\bzoho\b|\berp\b|\bwhatsapp\b|\bninguno\b|\bninguna\b/.test(text)
    ) {
      const softwareName =
        /\bexcel\b/.test(text) ? "Excel" :
        /\bsalesforce\b/.test(text) ? "Salesforce" :
        /\bhubspot\b/.test(text) ? "HubSpot" :
        /\bsap\b/.test(text) ? "SAP" :
        /\bzoho\b/.test(text) ? "Zoho" :
        /\bwhatsapp\b/.test(text) ? "WhatsApp" :
        /\berp\b/.test(text) ? "un ERP" :
        /\bcrm\b/.test(text) ? "un CRM" :
        "ningún sistema específico";

      return `Perfecto, tomo nota de que utilizáis ${softwareName}. El siguiente paso es identificar qué debería hacer la solución con ese sistema. Por ejemplo, podría consultar información, registrar incidencias, actualizar datos o derivar casos a vuestro equipo, siempre que el sistema permita esas operaciones.\n\n¿Qué tarea concreta os gustaría automatizar primero?`;
    }

    if (
      isNegative ||
      /\bno lo se\b|\bno tengo claro\b|\bno estoy seguro\b/.test(text)
    ) {
      return "No pasa nada. No necesitas tener todos los requisitos definidos todavía. Podemos empezar por el problema y descubrir juntos qué solución tendría sentido. ¿Qué tarea os hace perder más tiempo actualmente: atender consultas, gestionar incidencias, introducir datos o coordinar al equipo?";
    }

    if (isPositive) {
      if (/\bque tarea\b|\bque proceso\b|\bque necesitas\b/.test(previous)) {
        return "Perfecto. Cuéntame un ejemplo concreto de una tarea que quieras simplificar y qué ocurre actualmente desde que empieza hasta que termina.";
      }

      return "Perfecto. Para avanzar sin dar nada por supuesto, ¿qué dato puedes concretarme ahora: el sistema que utilizáis, la tarea que queréis automatizar o el volumen de trabajo?";
    }

    if (
      /\bllamadas\b|\btelefono\b/.test(text) &&
      profile.solution === "agente de voz con IA"
    ) {
      return "Entendido. Para valorar un agente de voz necesito conocer el volumen aproximado de llamadas, qué consultas debe resolver y si debe consultar o modificar información del CRM. Si no conoces el volumen exacto, una estimación aproximada también sirve. ¿Cuántas llamadas recibís al día, aproximadamente?";
    }
  }

  if (hasEnterpriseScale) {
    const knownDetails = [
      profile.solution ? `Solución: ${profile.solution}` : "",
      profile.software ? `Sistema: ${profile.software}` : "",
      profile.sector ? `Sector: ${profile.sector}` : "",
      profile.volume ? `Volumen: ${profile.volume}` : "",
    ].filter(Boolean).join(". ");

    return `Por lo que me has contado, estamos hablando de un proyecto empresarial que necesita analizarse con cuidado. ${knownDetails ? `Tengo presentes estos datos: ${knownDetails}. ` : ""}Para una red de ese tamaño, conviene estudiar la arquitectura, los permisos, la integración con el sistema central, la seguridad y un posible despliegue por fases. No quiero inventar una solución ni prometer una integración sin comprobarla. ¿Cuál sería la función más importante que debería resolver el sistema desde el primer día?`;
  }

  if (
    /\bcrm\b|\bapi\b|\bintegracion\b|\bintegrar\b|\berp\b|\bsoftware\b|\bprograma\b/.test(text)
  ) {
    return "Podemos estudiar una integración con tu CRM, ERP o API para reducir tareas manuales y duplicidades. Antes de confirmar la viabilidad hay que revisar la documentación del proveedor, los permisos y las operaciones que permite. ¿Qué sistema utilizas y qué necesitas que haga la integración?";
  }

  if (
    /\btransporte\b|\blogistica\b|\bmensajeria\b|\bpaqueteria\b|\breparto\b|\brepartidores\b|\bincidencias\b|\bpaquetes\b/.test(text)
  ) {
    return "En transporte y logística podemos estudiar la automatización de consultas, incidencias, seguimiento de envíos, validación de datos y coordinación de equipos. La viabilidad depende de los sistemas y permisos disponibles. Para no recomendarte algo genérico, ¿cómo gestionáis ahora los pedidos e incidencias: con Excel, WhatsApp, correo electrónico o un CRM?";
  }

  if (asksHow) {
    return "Normalmente empezamos analizando el proceso actual, definimos el alcance y las dependencias técnicas, desarrollamos una primera versión, probamos los casos normales y excepcionales y acordamos la puesta en marcha. Antes de comprometer un presupuesto o un plazo hay que confirmar los requisitos y la viabilidad de las integraciones. ¿Qué resultado te gustaría conseguir primero?";
  }

  if (isThanks) {
    return "¡De nada! Si quieres, seguimos concretando tu caso y vemos qué solución podría encajar, qué herramientas habría que conectar y qué información necesitamos para preparar una estimación realista.";
  }

  if (userMessages.length === 0) {
    return initialMessage;
  }

  // Respuesta de reserva: no inventa información ni finge tener acceso a sistemas.
  return "Quiero darte una respuesta útil y no inventarme información. Con lo que sé ahora no puedo confirmar ese detalle con seguridad. Podemos revisarlo directamente contigo a través de Álvaro, fundador de Transport AI, por WhatsApp. Si prefieres continuar aquí, cuéntame un poco más del contexto y trataré de orientarte con la información disponible.";
}

function getSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find((voice) => /^es[-_]ES$/i.test(voice.lang)) ??
    voices.find((voice) => /^es[-_]/i.test(voice.lang)) ??
    voices.find((voice) => /spanish|español/i.test(voice.name)) ??
    null
  );
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
  const [lastVoiceAnswer, setLastVoiceAnswer] = useState("");
  const [lead, setLead] = useState<LeadForm>(initialLead);

  const recognitionRef = useRef<RecognitionLike | null>(null);
  const messagesRef = useRef<ChatMessage[]>([]);
  const voiceModeRef = useRef(false);
  const mountedRef = useRef(false);
  const speechRequestRef = useRef(0);

  useEffect(() => {
    mountedRef.current = true;

    const synthesis =
      "speechSynthesis" in window ? window.speechSynthesis : null;

    synthesis?.getVoices();

    return () => {
      mountedRef.current = false;
      speechRequestRef.current += 1;

      try {
        recognitionRef.current?.abort();
      } catch {
        // El reconocimiento puede haberse detenido.
      }

      synthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    voiceModeRef.current = voiceMode;
  }, [voiceMode]);

  const stopSpeaking = useCallback(() => {
    speechRequestRef.current += 1;

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
        // El micrófono puede haberse detenido ya.
      }
    }

    setListening(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      setSpeaking(false);
      setVoiceError(
        "Tu navegador no permite reproducir la voz. Puedes seguir usando el chat.",
      );
      return;
    }

    const synthesis = window.speechSynthesis;

    speechRequestRef.current += 1;
    const requestId = speechRequestRef.current;

    setSpeaking(false);
    setVoiceError("");

    try {
      synthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "es-ES";
      utterance.rate = 0.94;
      utterance.pitch = 1;
      utterance.volume = 1;

      const spanishVoice = getSpanishVoice();
      if (spanishVoice) utterance.voice = spanishVoice;

      utterance.onstart = () => {
        if (requestId !== speechRequestRef.current) return;
        setSpeaking(true);
        setVoiceError("");
      };

      utterance.onend = () => {
        if (requestId !== speechRequestRef.current) return;
        setSpeaking(false);
      };

      utterance.onerror = (event) => {
        if (requestId !== speechRequestRef.current) return;

        setSpeaking(false);

        if (event.error !== "canceled" && event.error !== "interrupted") {
          setVoiceError(
            "No se ha podido reproducir el audio. Pulsa «Reproducir respuesta» para intentarlo otra vez.",
          );
        }
      };

      synthesis.resume();
      synthesis.speak(utterance);
    } catch {
      setSpeaking(false);
      setVoiceError(
        "No se ha podido reproducir el audio. Comprueba el volumen y los permisos del navegador.",
      );
    }
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
        setLastVoiceAnswer(answer);

        window.setTimeout(() => {
          if (!mountedRef.current || !voiceModeRef.current) return;
          speak(answer);
        }, 300);
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
        "El reconocimiento de voz no está disponible en este navegador. Prueba con Chrome o Edge.",
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

        recognitionRef.current = null;
        setListening(false);

        if (transcript) {
          sendMessage(transcript, true);
        } else {
          setVoiceError("No he detectado ninguna frase. Inténtalo otra vez.");
        }
      };

      recognition.onerror = (event) => {
        recognitionRef.current = null;
        setListening(false);

        if (event.error === "no-speech") {
          setVoiceError(
            "No he detectado voz. Pulsa la bola y vuelve a intentarlo.",
          );
        } else if (event.error !== "aborted") {
          setVoiceError(
            "No he podido acceder al micrófono. Comprueba los permisos del navegador.",
          );
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
      recognition.start();
      setListening(true);
    } catch {
      recognitionRef.current = null;
      setListening(false);
      setVoiceError(
        "No se ha podido activar el micrófono. Inténtalo de nuevo.",
      );
    }
  }, [sendMessage, stopListening, stopSpeaking]);

  function closeVoiceMode() {
    stopListening();
    stopSpeaking();
    setVoiceMode(false);
    setVoiceError("");
  }

  function updateLead<K extends keyof LeadForm>(
    key: K,
    value: LeadForm[K],
  ) {
    setLead((previous) => ({ ...previous, [key]: value }));
  }

  async function saveLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadStatus("");

    if (!lead.consent) {
      setLeadStatus(
        "Debes aceptar el aviso de privacidad para enviar tus datos.",
      );
      return;
    }

    if (!lead.email.trim() && !lead.phone.trim()) {
      setLeadStatus("Introduce al menos un email o teléfono de contacto.");
      return;
    }

    setSaving(true);

    const summary = messagesRef.current
      .slice(-12)
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

  const waSummary = messagesRef.current
    .filter((message) => message.role === "user")
    .slice(-5)
    .map((message) => message.text)
    .join("; ")
    .slice(0, 500);

  const contextualWhatsAppUrl = waSummary
    ? `https://wa.me/34659980603?text=${encodeURIComponent(
        `Hola Álvaro, he hablado con el asistente de Transport AI. Me gustaría estudiar este proyecto: ${waSummary}`,
      )}`
    : whatsappUrl;

  return (
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
                  <BrainCircuit className="h-3 w-3" />
                  Asistente comercial
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                stopListening();
                stopSpeaking();
                setVoiceMode(false);
                setOpen(false);
              }}
              aria-label="Cerrar asistente"
              className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {voiceMode ? (
            <div className="flex flex-col items-center px-5 py-6 text-center">
              <button
                type="button"
                onClick={closeVoiceMode}
                className="mb-5 flex items-center gap-2 self-start text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                <ChevronLeft className="h-4 w-4" />
                Volver al chat
              </button>

              <p className="mb-2 text-xs font-bold tracking-[0.22em] text-blue-700">
                TRANSPORT AI · VOZ
              </p>

              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Hablemos de tu empresa
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Pulsa la bola y cuéntame qué necesitas.
              </p>

              <button
                type="button"
                onClick={() => {
                  if (listening) {
                    stopListening();
                  } else if (speaking) {
                    stopSpeaking();
                  } else if (lastVoiceAnswer && voiceError) {
                    speak(lastVoiceAnswer);
                  } else {
                    startVoice();
                  }
                }}
                aria-label={
                  listening
                    ? "Detener micrófono"
                    : speaking
                      ? "Detener respuesta de voz"
                      : lastVoiceAnswer && voiceError
                        ? "Reproducir última respuesta"
                        : "Hablar con Transport AI"
                }
                className={`group relative my-7 flex h-40 w-40 items-center justify-center rounded-full transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                  listening
                    ? "bg-cyan-500 shadow-[0_0_55px_rgba(34,211,238,0.38)]"
                    : speaking
                      ? "bg-indigo-600 shadow-[0_0_55px_rgba(99,102,241,0.36)]"
                      : "bg-blue-700 shadow-[0_0_45px_rgba(59,130,246,0.3)]"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full border border-blue-300/60 ${
                    listening || speaking ? "animate-ping" : ""
                  }`}
                />
                <span className="absolute inset-3 rounded-full border border-white/30" />
                <span className="absolute inset-6 rounded-full bg-white/10" />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-blue-500 to-indigo-900 shadow-inner">
                  {listening ? (
                    <Mic className="h-10 w-10 text-white" />
                  ) : speaking ? (
                    <Volume2 className="h-10 w-10 text-white" />
                  ) : (
                    <Bot className="h-10 w-10 text-white" />
                  )}
                </span>
              </button>

              <p className="text-base font-semibold text-slate-900">
                {listening
                  ? "Te estoy escuchando…"
                  : speaking
                    ? "Estoy hablando…"
                    : "Pulsa la bola para hablar"}
              </p>

              <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                {listening
                  ? "Habla con normalidad. El micrófono se detendrá al terminar tu frase."
                  : speaking
                    ? "Escucha la respuesta o pulsa la bola para detenerla."
                    : "Pregunta por precios, plazos, automatizaciones o integraciones."}
              </p>

              {voiceError && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-blue-50 p-3 text-xs leading-5 text-blue-900"
                >
                  {voiceError}
                </p>
              )}

              {lastVoiceAnswer && (
                <button
                  type="button"
                  onClick={() => speak(lastVoiceAnswer)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-100"
                >
                  <Volume2 className="h-4 w-4" />
                  Reproducir respuesta
                </button>
              )}

              {leadStatus && (
                <p role="status" className="mt-2 text-xs text-slate-700">
                  {leadStatus}
                </p>
              )}

              {messages.length > 0 && (
                <div className="mt-5 w-full rounded-2xl bg-slate-50 p-3 text-left">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Última respuesta
                  </p>
                  <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {messages[messages.length - 1]?.text}
                  </p>
                </div>
              )}

              <div className="mt-5 flex w-full flex-col gap-2">
                {speaking && (
                  <button
                    type="button"
                    onClick={stopSpeaking}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
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
                    setShowLeadForm(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Quiero información comercial
                </button>
              </div>
            </div>
          ) : (
            <>
              <div
                className="flex max-h-[min(400px,45vh)] min-h-56 flex-col gap-3 overflow-y-auto p-4"
                aria-live="polite"
              >
                <div className="max-w-[92%] self-start whitespace-pre-wrap rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm leading-6 text-slate-800">
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
                      "¿Cuánto tardaría?",
                      "Tengo una empresa de transporte",
                      "Quiero un agente de voz",
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
                    setVoiceError("");
                    setVoiceMode(true);
                    setSource("voice");
                  }}
                  className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800 transition hover:bg-blue-100"
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
                  className="ml-auto rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
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
                      onChange={(event) =>
                        updateLead("name", event.target.value)
                      }
                      placeholder="Tu nombre"
                      maxLength={120}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                    />
                  </label>

                  <label className="relative block">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      value={lead.company}
                      onChange={(event) =>
                        updateLead("company", event.target.value)
                      }
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
                      onChange={(event) =>
                        updateLead("email", event.target.value)
                      }
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
                      onChange={(event) =>
                        updateLead("phone", event.target.value)
                      }
                      placeholder="Teléfono"
                      maxLength={40}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500"
                    />
                  </label>

                  <label className="block text-xs font-medium text-slate-700">
                    ¿Qué necesitas mejorar?
                    <textarea
                      value={lead.need}
                      onChange={(event) =>
                        updateLead("need", event.target.value)
                      }
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
                      onChange={(event) =>
                        updateLead("budget", event.target.value)
                      }
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
                      onChange={(event) =>
                        updateLead("consent", event.target.checked)
                      }
                      className="mt-1"
                      required
                    />
                    <span>
                      Acepto que Transport AI utilice mis datos para responder
                      a mi solicitud. He leído la{" "}
                      <a
                        href="/privacidad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 underline"
                      >
                        política de privacidad
                      </a>
                      .
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
                    {saving && (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    )}
                    {saving ? "Enviando..." : "Solicitar contacto"}
                  </button>

                  {leadStatus.startsWith("¡Gracias!") && (
                    <p className="flex items-center gap-2 text-sm text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Solicitud enviada.
                    </p>
                  )}
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
            </>
          )}

          <a
            href={contextualWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar con Álvaro por WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="flex items-center justify-center gap-1 bg-slate-50 px-3 py-2 text-[10px] text-slate-500">
            <ShieldCheck className="h-3 w-3" />
            Asistente automatizado · Las estimaciones deben confirmarse
          </div>
        </section>
      )}

      <div className="flex flex-col items-end gap-3">
        <a
          href={contextualWhatsAppUrl}
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
