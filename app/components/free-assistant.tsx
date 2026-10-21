
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
  LoaderCircle,
  CheckCircle2,
  ChevronLeft,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

type Role = "assistant" | "user";

type ChatMessage = {
  role: Role;
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

type Profile = {
  companySize: string;
  sector: string;
  software: string;
  solution: string;
  channels: string[];
  volume: string;
  objective: string;
  budget: string;
  deadline: string;
  problem: string;
  details: string[];
};

const initialMessage =
  "¡Hola! Soy el asistente comercial de Transport AI. Puedo orientarte sobre automatización, agentes de IA, asistentes de voz, integraciones y software a medida. Cuéntame qué hace tu empresa y qué te gustaría mejorar.";

const whatsappUrl =
  "https://wa.me/34659980603?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Transport%20AI";

const emailAddress = "alvarochaveinte1@gmail.com";

const initialLead: LeadForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  need: "",
  budget: "",
  consent: false,
};

const emptyProfile: Profile = {
  companySize: "",
  sector: "",
  software: "",
  solution: "",
  channels: [],
  volume: "",
  objective: "",
  budget: "",
  deadline: "",
  problem: "",
  details: [],
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!,.;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matches(value: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(value));
}

function getProfile(history: ChatMessage[]): Profile {
  const profile: Profile = {
    ...emptyProfile,
    channels: [],
    details: [],
  };

  const userMessages = history
    .filter((message) => message.role === "user")
    .map((message) => normalize(message.text));

  const all = userMessages.join(" ");

  const sizeMatch = all.match(
    /\b(\d{1,7})\s*(franquicias|delegaciones|sucursales|oficinas|vehiculos|conductores|repartidores|empleados|trabajadores|usuarios|pedidos|paquetes|llamadas|clientes|incidencias)\b/,
  );

  if (sizeMatch) {
    profile.companySize = `${sizeMatch[1]} ${sizeMatch[2]}`;
  }

  if (
    matches(all, [
      /\btransporte\b/,
      /\blogistica\b/,
      /\bmensajeria\b/,
      /\bpaqueteria\b/,
      /\breparto\b/,
      /\benvios\b/,
      /\bpaquetes\b/,
    ])
  ) {
    profile.sector = "transporte y logística";
  } else if (/\bmudanzas?\b/.test(all)) {
    profile.sector = "mudanzas";
  } else if (/\babogados?\b|\blegal\b/.test(all)) {
    profile.sector = "servicios jurídicos";
  } else if (/\brestaurante\b|\bhosteleria\b/.test(all)) {
    profile.sector = "hostelería";
  } else if (/\bfranquicias?\b/.test(all)) {
    profile.sector = "empresa con franquicias";
  }

  const softwarePatterns: [RegExp, string][] = [
    [/\bexcel\b|\bhojas de calculo\b/, "Excel"],
    [/\bsalesforce\b/, "Salesforce"],
    [/\bhubspot\b/, "HubSpot"],
    [/\bmicrosoft dynamics\b|\bdynamics\b/, "Microsoft Dynamics"],
    [/\bsap\b/, "SAP"],
    [/\bholded\b/, "Holded"],
    [/\bzoho\b/, "Zoho"],
    [/\bgoogle sheets\b|\bgoogle workspace\b/, "Google Workspace"],
    [/\bwhatsapp\b/, "WhatsApp"],
    [/\bcrm\b/, "un CRM"],
    [/\berp\b/, "un ERP"],
    [/\bsoftware propio\b|\bsistema propio\b/, "un sistema propio"],
    [/\bningun programa\b|\bningun sistema\b/, "ningún sistema específico"],
  ];

  for (const [pattern, name] of softwarePatterns) {
    if (pattern.test(all)) profile.software = name;
  }

  if (
    matches(all, [
      /\bagente de voz\b/,
      /\basistente de voz\b/,
      /\bvoz con ia\b/,
      /\bautomatizar llamadas\b/,
      /\bllamadas telefonicas\b/,
    ])
  ) {
    profile.solution = "agente de voz con IA";
  } else if (
    matches(all, [
      /\bchatbot\b/,
      /\bagente web\b/,
      /\basistente web\b/,
      /\bweb con agente\b/,
    ])
  ) {
    profile.solution = "agente de IA para web";
  } else if (/\bautomatiz/.test(all)) {
    profile.solution = "automatización de procesos";
  } else if (/\bplataforma\b|\bsoftware a medida\b/.test(all)) {
    profile.solution = "software a medida";
  }

  const channelPatterns: [RegExp, string][] = [
    [/\bwhatsapp\b/, "WhatsApp"],
    [/\bcorreo\b|\bemail\b|\bgmail\b|\boutlook\b/, "correo electrónico"],
    [/\bllamadas?\b|\btelefono\b|\btelefonica\b/, "teléfono"],
    [/\bformulario\b/, "formularios web"],
    [/\bweb\b|\bpagina web\b/, "página web"],
    [/\bexcel\b/, "Excel"],
  ];

  for (const [pattern, channel] of channelPatterns) {
    if (pattern.test(all) && !profile.channels.includes(channel)) {
      profile.channels.push(channel);
    }
  }

  if (
    matches(all, [
      /\bahorrar tiempo\b/,
      /\breducir costes\b/,
      /\breducir tareas manuales\b/,
      /\bser mas eficientes\b/,
      /\bmenos trabajo manual\b/,
    ])
  ) {
    profile.objective = "ahorrar tiempo y reducir trabajo manual";
  }

  if (
    matches(all, [
      /\bincidencias?\b/,
      /\breclamaciones?\b/,
      /\bproblemas con los envios\b/,
    ])
  ) {
    profile.problem = "gestión de incidencias y reclamaciones";
  } else if (
    matches(all, [
      /\batencion al cliente\b/,
      /\bconsultas de clientes\b/,
      /\bsoporte al cliente\b/,
    ])
  ) {
    profile.problem = "atención al cliente";
  } else if (
    matches(all, [
      /\bseguimiento de envios\b/,
      /\blocalizar paquetes\b/,
      /\bpedidos\b/,
    ])
  ) {
    profile.problem = "gestión y seguimiento de pedidos";
  } else if (
    matches(all, [
      /\bintroducir datos\b/,
      /\bpasar datos\b/,
      /\bdatos manualmente\b/,
    ])
  ) {
    profile.problem = "introducción y gestión manual de datos";
  }

  const budgetMatch = all.match(
    /(?:presupuesto|disponemos de|podemos invertir|invertir)\s*(?:de|unos|aproximado de)?\s*(\d[\d.,]*)\s*(euros|eur|€)/,
  );

  if (budgetMatch) {
    profile.budget = `${budgetMatch[1]} €`;
  } else if (/\bpresupuesto limitado\b|\bpoco presupuesto\b/.test(all)) {
    profile.budget = "limitado";
  }

  const volumeMatch = all.match(
    /\b(\d{1,7})\s*(llamadas|pedidos|paquetes|consultas|incidencias)\b/,
  );

  if (volumeMatch) profile.volume = volumeMatch[0];

  const deadlineMatch = all.match(
    /\b(?:antes de|para el|fecha limite|necesitamos tenerlo para)\s+(.{2,45})/,
  );

  if (deadlineMatch) profile.deadline = deadlineMatch[0];

  if (/\bprioridad\b|\burgente\b|\bcritico\b/.test(all)) {
    profile.details.push("prioridad alta o urgente");
  }

  if (/\bnotificar\b|\bavisar\b|\balertas?\b/.test(all)) {
    profile.details.push("notificaciones y alertas");
  }

  if (/\bseguimiento\b|\bpendientes\b|\bseguimiento de casos\b/.test(all)) {
    profile.details.push("seguimiento de casos pendientes");
  }

  if (/\bfranquicias?\b|\bdelegaciones\b|\bsucursales\b/.test(all)) {
    profile.details.push("posible gestión de varias sedes");
  }

  return profile;
}

function getAnswer(question: string, history: ChatMessage[]): string {
  const text = normalize(question);
  const historyWithCurrent: ChatMessage[] = [
    ...history,
    { role: "user", text: question },
  ];

  const profile = getProfile(historyWithCurrent);
  const previousAssistant = [...history]
    .reverse()
    .find((message) => message.role === "assistant")?.text ?? "";

  const previousUser = [...history]
    .reverse()
    .find((message) => message.role === "user")?.text ?? "";

  const allUserText = normalize(
    historyWithCurrent
      .filter((message) => message.role === "user")
      .map((message) => message.text)
      .join(" "),
  );

  const previous = normalize(previousAssistant);

  const hasLargeNetwork =
    /\b\d{1,7}\s*(franquicias|delegaciones|sucursales|oficinas|usuarios|empleados|repartidores|conductores)\b/.test(
      allUserText,
    ) ||
    /\bmultinacional\b|\bred nacional\b|\bred internacional\b|\bgran empresa\b/.test(
      allUserText,
    );

  const asksPrice = matches(text, [
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
  ]);

  const asksTime = matches(text, [
    /\bcuanto tarda\b/,
    /\bcuanto tardaria\b/,
    /\bcuanto tiempo\b/,
    /\bplazo\b/,
    /\bsemanas\b/,
    /\bmeses\b/,
    /\bcuando estaria\b/,
    /\btiempo de desarrollo\b/,
  ]);

  const asksContact = matches(text, [
    /\bcontacto\b/,
    /\bwhatsapp\b/,
    /\bcorreo de alvaro\b/,
    /\bemail de alvaro\b/,
    /\bhablar con alvaro\b/,
    /\bhablar con una persona\b/,
    /\bhablar con alguien\b/,
    /\breunion\b/,
    /\bcita\b/,
    /\bquiero contratar\b/,
    /\bpropuesta comercial\b/,
  ]);

  const asksIdentity = matches(text, [
    /\bquien eres\b/,
    /\bque es transport ai\b/,
    /\bque hace transport ai\b/,
    /\bque haceis\b/,
    /\bquienes sois\b/,
  ]);

  const asksSecurity = matches(text, [
    /\bseguridad\b/,
    /\bprivacidad\b/,
    /\brgpd\b/,
    /\bproteccion de datos\b/,
    /\bdonde se guardan los datos\b/,
    /\bmis datos\b/,
  ]);

  const asksDemo = matches(text, [
    /\bdemo\b/,
    /\bdemostracion\b/,
    /\bver un ejemplo\b/,
    /\bprototipo\b/,
    /\bpuedo verlo\b/,
  ]);

  const asksSavings = matches(text, [
    /\bahorrar tiempo\b/,
    /\bcuanto ahorraria\b/,
    /\breducir costes\b/,
    /\bretorno de inversion\b/,
    /\bcuanto podria ahorrar\b/,
  ]);

  const asksVoice = matches(text, [
    /\bagente de voz\b/,
    /\basistente de voz\b/,
    /\bvoz con ia\b/,
    /\bautomatizar llamadas\b/,
    /\bllamadas telefonicas\b/,
  ]);

  const asksServices = matches(text, [
    /\bque podeis hacer\b/,
    /\bservicios\b/,
    /\bsoluciones\b/,
    /\bque se puede automatizar\b/,
    /\bque podeis automatizar\b/,
  ]);

  const asksHow = matches(text, [
    /\bcomo funciona\b/,
    /\bcomo lo hariais\b/,
    /\bcomo se implementa\b/,
    /\bque incluiria\b/,
    /\bque incluye\b/,
    /\bcomo empezamos\b/,
    /\bque necesitais\b/,
  ]);

  const isCorrection = matches(text, [
    /\bno me has entendido\b/,
    /\bno has entendido\b/,
    /\bno es eso\b/,
    /\bte he preguntado\b/,
    /\bme refiero a\b/,
    /\bno has respondido\b/,
  ]);

  const isGreeting = /^(hola|buenas|hey|buenos dias|buenas tardes|buenas noches)$/.test(text);
  const isThanks = /^(gracias|muchas gracias|perfecto|genial|entendido|vale gracias)$/.test(text);
  const isNegative = /^(no|no gracias|no lo se|ni idea|todavia no|aun no|ninguno|ninguna)$/.test(text);
  const isPositive = /^(si|vale|correcto|exacto|eso es|de acuerdo)$/.test(text);

  const isUncertain = matches(text, [
    /\bno lo se\b/,
    /\bno tengo claro\b/,
    /\bno estoy seguro\b/,
    /\bno estoy segura\b/,
    /\bni idea\b/,
    /\bno sabria decirte\b/,
  ]);

  const isShort = text.length <= 65;

  // 1. Resolver primero las peticiones explícitas.
  if (isCorrection) {
    return "Perdona. Voy a centrarme en lo que me has preguntado y en los datos que ya me has dado. Si me indicas qué parte no he respondido, lo revisaré sin volver a empezar desde cero.";
  }

  if (isGreeting) {
    return "¡Hola! Soy el asistente comercial de Transport AI. Podemos estudiar automatizaciones, agentes de IA, asistentes de voz, integraciones con CRM y software a medida. ¿Qué proceso te gustaría mejorar?";
  }

  if (asksContact) {
    return `Puedes hablar directamente con Álvaro, fundador de Transport AI.\n\nWhatsApp: ${whatsappUrl}\nCorreo electrónico: ${emailAddress}\n\nSi quieres, el mensaje de WhatsApp puede incluir el resumen de lo que ya me has contado para que no tengas que empezar de cero.`;
  }

  if (asksIdentity) {
    return "Transport AI desarrolla soluciones de inteligencia artificial, automatización e integración de software para empresas. Estudiamos cómo reducir tareas manuales, atender consultas, conectar sistemas y mejorar procesos operativos. La solución se adapta a cada caso y la viabilidad de las integraciones debe comprobarse.";
  }

  if (asksSecurity) {
    return `La seguridad depende de los datos, los permisos y los proveedores implicados. Antes de poner una solución en producción hay que revisar accesos, conservación de datos, medidas de seguridad y obligaciones de protección de datos. No puedo garantizar el cumplimiento de una integración sin revisar su arquitectura.\n\nPara estudiar tu caso concreto, contacta con Álvaro:\nWhatsApp: ${whatsappUrl}\nCorreo: ${emailAddress}`;
  }

  if (asksDemo) {
    return "Puedes consultar las demostraciones de Transport AI aquí:\nhttps://transport-ai-web.vercel.app/demostraciones\n\nSon ejemplos de posibles soluciones. La disponibilidad de cada función y su conexión con sistemas reales dependen del proyecto.";
  }

  if (asksPrice) {
    if (hasLargeNetwork) {
      return "Para una empresa con una red de ese tamaño, no sería responsable aplicar directamente el precio de una automatización sencilla. Como referencia, las automatizaciones se sitúan entre 1.500 y 4.000 €, los proyectos de CRM e IA entre 4.000 y 8.000 €, y las plataformas operativas a medida desde 15.000 €, antes de IVA. Un despliegue con muchas franquicias puede requerir otro alcance y presupuesto.\n\nPara estimarlo, habría que revisar el sistema central, las funciones, los permisos y el volumen de actividad. Puedes hablar con Álvaro por WhatsApp o escribir a alvarochaveinte1@gmail.com.";
    }

    if (profile.problem && profile.software) {
      return `Por lo que me has contado, quieres resolver ${profile.problem} utilizando ${profile.software}. Un proyecto de CRM e integración con IA puede encajar en la referencia de 4.000–8.000 € antes de IVA, aunque no es un presupuesto confirmado. El coste depende de las operaciones que permita el sistema, los canales de entrada y las excepciones que haya que gestionar.\n\nPara concretarlo, ¿qué debería ocurrir cuando se recibe una incidencia: registrarla, clasificarla, avisar a alguien, responder al cliente o hacer seguimiento?`;
    }

    if (profile.solution === "agente de voz con IA") {
      return "El coste de un agente de voz depende de si responde preguntas, atiende llamadas reales, consulta datos, actualiza el CRM o transfiere llamadas. Los proyectos de integración con IA se sitúan orientativamente entre 4.000 y 8.000 € antes de IVA; la telefonía y los proveedores de voz pueden añadir costes. Es necesario definir el alcance antes de dar un presupuesto.";
    }

    return "Los precios orientativos de Transport AI son:\n\n• Automatización de procesos: 1.500–4.000 €.\n• CRM e integraciones con IA: 4.000–8.000 €.\n• Plataforma operativa a medida: desde 15.000 €.\n\nImportes antes de IVA. No son presupuestos cerrados: dependen del alcance, las integraciones, las pruebas y los proveedores externos. ¿Qué proceso quieres mejorar y qué sistema utilizáis actualmente?";
  }

  if (asksTime) {
    if (hasLargeNetwork) {
      return "Para una implantación empresarial con muchas sedes, el plazo depende del CRM, las APIs, los permisos, las pruebas y el despliegue. Puede ser necesario empezar con un piloto y ampliar después al resto de la red. No puedo prometer una fecha sin revisar esos puntos. Puedes compartir los requisitos con Álvaro por WhatsApp o correo.";
    }

    return "Como referencia preliminar, una automatización sencilla puede requerir entre 1 y 3 semanas; una integración con CRM y varios flujos, entre 3 y 8 semanas; y una plataforma completa, varios meses. Son estimaciones orientativas, no compromisos de entrega. El plazo real depende del alcance, las APIs y las pruebas necesarias.";
  }

  if (asksSavings) {
    return "El ahorro debe calcularse con datos reales. Por ejemplo, si una tarea ocupa 2 horas diarias y se reduce a la mitad, el ahorro teórico sería de 1 hora al día. Para hacer una estimación útil, necesito saber qué tarea se repite, cuánto tarda y cuántas veces se realiza.";
  }

  if (asksVoice) {
    if (hasLargeNetwork) {
      return `Para una red empresarial de ese tamaño, estudiaría un agente de voz conectado al sistema central, con permisos por sede y derivación a una persona cuando no pueda resolver una consulta. Si el CRM y sus APIs lo permiten, podría consultar información o registrar solicitudes. Primero habría que validar la integración, el volumen de llamadas y la seguridad.\n\n${profile.software ? `Tengo anotado que utilizáis ${profile.software}. ` : ""}¿El agente debe limitarse a responder llamadas o también consultar y actualizar datos?`;
    }

    return "Un agente de voz puede atender consultas, responder preguntas frecuentes, recoger datos y derivar casos complejos. Si debe consultar pedidos, modificar registros o realizar llamadas reales, hay que comprobar las APIs y los proveedores necesarios. ¿Quieres que atienda llamadas telefónicas, que hable con visitantes de tu web o ambas cosas?";
  }

  if (asksServices) {
    return "Podemos estudiar clasificación de correos, atención al cliente, gestión de incidencias, agentes de voz, integración con CRM, automatización administrativa y software a medida. La solución debe partir de un problema real y de las herramientas que ya utiliza la empresa. ¿Qué tarea os hace perder más tiempo actualmente?";
  }

  // 2. Interpretar respuestas breves en función de la pregunta anterior.
  // No tratar "CRM" o "incidencias" como consultas aisladas.
  if (isShort && isUncertain) {
    if (profile.problem && profile.software) {
      return `No pasa nada. Tengo anotado que quieres mejorar ${profile.problem} y que utilizáis ${profile.software}. No hace falta conocer todos los detalles técnicos ahora. Puedes contarme qué ocurre hoy cuando aparece una incidencia, o hablar directamente con Álvaro por WhatsApp o en ${emailAddress}.`;
    }

    return "No pasa nada. Podemos definirlo juntos. Empecemos por el problema que más tiempo os quita: atender consultas, gestionar incidencias, introducir datos o coordinar al equipo. Si prefieres hablar con Álvaro, puedes escribir a alvarochaveinte1@gmail.com o usar el botón de WhatsApp.";
  }

  if (isPositive) {
    if (profile.problem && profile.software) {
      return `Perfecto. Mantengo el contexto: quieres automatizar ${profile.problem} utilizando ${profile.software}. Para definir el siguiente paso, ¿qué sucede actualmente cuando entra una incidencia: alguien la registra manualmente, se asigna a un responsable o se responde directamente al cliente?`;
    }

    return "Perfecto. Para avanzar sin repetir preguntas, dime qué tarea concreta quieres automatizar primero. Si todavía no lo tienes claro, podemos empezar por el proceso que más tiempo os consume.";
  }

  // Si la pregunta anterior solicitaba el software y el usuario contesta "CRM".
  if (
    isShort &&
    matches(previous, [
      /\bque sistema\b/,
      /\bque crm\b/,
      /\bcomo gestionais\b/,
      /\bcon excel\b/,
      /\bcorreo electronico\b/,
      /\bque herramientas\b/,
    ]) &&
    matches(text, [
      /\bcrm\b/,
      /\bexcel\b/,
      /\bsap\b/,
      /\bhubspot\b/,
      /\bsalesforce\b/,
      /\bzoho\b/,
      /\berp\b/,
      /\bwhatsapp\b/,
      /\bninguno\b/,
    ])
  ) {
    const system = profile.software || question;

    if (profile.problem) {
      return `Entendido: utilizáis ${system} y quieres mejorar ${profile.problem}. No te voy a volver a preguntar qué sistema utilizáis. ¿Qué debería hacer primero la solución cuando entra una incidencia: registrarla en el CRM, clasificarla, avisar al responsable o responder al cliente?`;
    }

    return `Entendido, utilizáis ${system}. Lo tengo presente. ¿Qué tarea concreta quieres automatizar con ese sistema: incidencias, atención al cliente, seguimiento de pedidos, actualización de datos u otra?`;
  }

  // Si el usuario contesta "incidencias" a la pregunta sobre qué tarea quiere mejorar.
  if (
    isShort &&
    matches(text, [
      /\bincidencias?\b/,
      /\breclamaciones?\b/,
      /\bpedidos\b/,
      /\batencion al cliente\b/,
      /\bseguimiento\b/,
      /\bdatos\b/,
    ]) &&
    matches(previous, [
      /\bque tarea\b/,
      /\bque proceso\b/,
      /\bque te gustaria mejorar\b/,
      /\bque tarea concreta\b/,
      /\bque problema\b/,
      /\bque necesitas\b/,
    ])
  ) {
    if (profile.software) {
      return `Entendido: quieres automatizar ${profile.problem || question} utilizando ${profile.software}. Por ejemplo, podríamos estudiar el registro automático, la clasificación, los avisos al responsable y el seguimiento de los casos, siempre que el sistema lo permita.\n\n¿Cómo os llegan ahora las incidencias: por correo electrónico, WhatsApp, llamadas o directamente dentro del CRM?`;
    }

    return `Entendido: quieres mejorar ${profile.problem || question}. Podemos estudiar cómo registrar los casos, clasificarlos, avisar al responsable y hacer seguimiento sin duplicar trabajo. ¿Qué herramienta utilizáis ahora para gestionarlos: un CRM, Excel, WhatsApp o correo electrónico?`;
  }

  // Respuesta contextual para proyectos de incidencias y CRM.
  // Tiene prioridad sobre las reglas generales de transporte.
  if (profile.problem && profile.software) {
    if (
      matches(text, [
        /\bcorreo\b/,
        /\bemail\b/,
        /\bgmail\b/,
        /\bwhatsapp\b/,
        /\btelefono\b/,
        /\bllamadas\b/,
        /\bformulario\b/,
        /\bcrm\b/,
      ]) &&
      isShort
    ) {
      const channel = matches(text, [/\bcorreo\b/, /\bemail\b/, /\bgmail\b/])
        ? "correo electrónico"
        : /\bwhatsapp\b/.test(text)
          ? "WhatsApp"
          : matches(text, [/\btelefono\b/, /\bllamadas\b/])
            ? "llamadas telefónicas"
            : matches(text, [/\bformulario\b/])
              ? "formularios"
              : profile.software;

      return `Perfecto: las incidencias llegan por ${channel} y el sistema que has indicado es ${profile.software}. Se podría estudiar un flujo que capture la información, cree o actualice el registro, avise al responsable y haga seguimiento de los casos abiertos. Aún habría que verificar las integraciones y los permisos del sistema.\n\n¿Quieres priorizar el registro automático, la comunicación con el cliente o el seguimiento interno?`;
    }

    if (
      matches(text, [
        /\bregistrar\b/,
        /\bclasificar\b/,
        /\bavisar\b/,
        /\bnotificar\b/,
        /\bseguimiento\b/,
        /\bresponder\b/,
        /\bcliente\b/,
        /\bresponsable\b/,
      ])
    ) {
      return `Entendido. El objetivo es automatizar ${profile.problem} desde ${profile.software}. La solución podría combinar registro, clasificación, notificaciones y seguimiento, según lo que permita el sistema. Para no prometer una función que quizá no admita, habría que comprobar la API y los permisos del CRM.\n\n¿Sabes qué CRM concreto utilizáis? Si no lo sabes o necesitas una valoración técnica, puedes hablar con Álvaro por WhatsApp o escribir a ${emailAddress}.`;
    }

    if (matches(text, [/\bcomo\b/, /\bse puede\b/, /\bes posible\b/, /\bfuncionaria\b/])) {
      return `En principio, se puede estudiar una automatización para ${profile.problem} utilizando ${profile.software}. El flujo podría registrar la incidencia, asignarla, enviar avisos y mantener el seguimiento. La viabilidad depende del sistema, sus APIs y los permisos disponibles; todavía no puedo confirmar que todas esas acciones sean posibles en vuestro caso.\n\nPara validarlo, podemos revisar el CRM y el proceso actual contigo. WhatsApp: ${whatsappUrl}\nCorreo: ${emailAddress}`;
    }

    return `Tengo presentes los datos que ya me has dado: quieres automatizar ${profile.problem} y utilizáis ${profile.software}${profile.companySize ? `, en una organización con ${profile.companySize}` : ""}. No necesitas repetirlos.\n\nEl siguiente paso es concretar qué debe ocurrir cuando llega una incidencia. ¿Quieres que la solución la registre, la clasifique, avise a un responsable, responda al cliente o haga seguimiento hasta cerrarla?`;
  }

  // Si el usuario aporta un número o tamaño empresarial en una respuesta corta.
  if (
    isShort &&
    /\b\d{1,7}\b/.test(text) &&
    matches(text, [
      /\bfranquicias\b/,
      /\bdelegaciones\b/,
      /\bsucursales\b/,
      /\bempleados\b/,
      /\busuarios\b/,
      /\bllamadas\b/,
      /\bpedidos\b/,
      /\bpaquetes\b/,
    ])
  ) {
    return `Entendido, tomo nota de ${question}. En una empresa de ese tamaño es importante definir permisos, volumen de trabajo, integraciones y despliegue por fases. ¿Qué proceso quieres resolver primero?`;
  }

  // Preguntas generales sobre cómo implantarlo.
  if (asksHow) {
    if (profile.problem && profile.software) {
      return `Con lo que me has contado, estudiaríamos ${profile.problem} mediante ${profile.software}. Primero revisaríamos el proceso actual y las operaciones que permite el sistema; después definiríamos el alcance, probaríamos casos normales y excepciones y prepararíamos la puesta en marcha. La integración concreta debe validarse antes de comprometer un resultado.\n\nPuedes hablar con Álvaro para revisar tu caso: ${whatsappUrl}`;
    }

    return "Normalmente empezamos analizando el proceso actual, definimos el alcance y las dependencias técnicas, desarrollamos una primera versión, probamos los casos normales y excepcionales y acordamos la puesta en marcha. Antes de comprometer un presupuesto o plazo hay que confirmar los requisitos y la viabilidad de las integraciones. ¿Qué resultado te gustaría conseguir primero?";
  }

  if (isThanks) {
    return "¡De nada! Podemos seguir concretando tu caso sin repetir los datos que ya me has dado. Si prefieres que Álvaro revise directamente tu proyecto, puedes escribir a alvarochaveinte1@gmail.com o contactar por WhatsApp.";
  }

  // Respuesta contextual de transporte: solo preguntar por los datos que faltan.
  if (
    matches(text, [
      /\btransporte\b/,
      /\blogistica\b/,
      /\bmensajeria\b/,
      /\bpaqueteria\b/,
      /\breparto\b/,
      /\bincidencias\b/,
      /\bpaquetes\b/,
    ])
  ) {
    if (profile.problem && profile.software) {
      return `Por lo que me has contado, quieres mejorar ${profile.problem} y utilizáis ${profile.software}. Podemos estudiar el registro, las alertas y el seguimiento, comprobando primero qué permite el sistema. ¿Qué parte del proceso es más manual ahora mismo?`;
    }

    if (profile.problem) {
      return `Entendido: el problema principal es ${profile.problem}. Para proponerte un flujo adecuado, necesito saber qué herramienta utilizáis ahora para gestionarlo: un CRM, Excel, WhatsApp o correo electrónico.`;
    }

    if (profile.software) {
      return `Entendido: utilizáis ${profile.software}. En transporte podemos estudiar la automatización de incidencias, seguimiento de envíos, atención al cliente y tareas administrativas. ¿Cuál de esas tareas os hace perder más tiempo?`;
    }

    return "En transporte y logística podemos estudiar la gestión de incidencias, el seguimiento de envíos, la atención al cliente y la coordinación de equipos. ¿Qué proceso concreto quieres mejorar y con qué herramientas lo gestionáis ahora?";
  }

  // Integraciones y sistemas: preguntar solo por el dato aún desconocido.
  if (
    matches(text, [
      /\bcrm\b/,
      /\bapi\b/,
      /\bintegracion\b/,
      /\bintegrar\b/,
      /\berp\b/,
      /\bsoftware\b/,
      /\bprograma\b/,
      /\bexcel\b/,
    ])
  ) {
    if (profile.problem && profile.software) {
      return `Tengo anotado que quieres mejorar ${profile.problem} y que utilizáis ${profile.software}. Para avanzar, el siguiente dato importante es el nombre concreto del sistema y qué operaciones permite. Si no conoces esa información técnica, Álvaro puede ayudarte a revisarla.\n\nWhatsApp: ${whatsappUrl}\nCorreo: ${emailAddress}`;
    }

    if (profile.problem) {
      return `Entendido: quieres mejorar ${profile.problem}. ¿Qué programa utilizáis actualmente para gestionarlo? Puede ser un CRM, Excel, un ERP u otra herramienta.`;
    }

    if (profile.software) {
      return `Entendido: utilizáis ${profile.software}. ¿Qué tarea concreta quieres automatizar con ese sistema?`;
    }

    return "Podemos estudiar una integración con tu CRM, ERP o API para reducir tareas manuales y duplicidades. Antes de confirmar la viabilidad hay que revisar la documentación, los permisos y las operaciones que permite el proveedor. ¿Qué sistema utilizas y qué necesitas que haga la integración?";
  }

  // Fallback seguro con contacto directo.
  return `No tengo información suficiente para responder a esa pregunta con seguridad y prefiero no inventarme una respuesta. Puedes consultar directamente con Álvaro, fundador de Transport AI:\n\nWhatsApp: ${whatsappUrl}\nCorreo electrónico: ${emailAddress}\n\nSi prefieres continuar aquí, dime un poco más de contexto y trataré de orientarte con la información disponible.`;
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

  const waSummary = messages
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
                    {saving && <LoaderCircle className="h-4 w-4 animate-spin" />}
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
