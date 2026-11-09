"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bot, Check, ImagePlus, MessageCircle, Sparkles, UploadCloud } from "lucide-react";

type FormData = {
  business: string; sector: string; description: string; services: string;
  audience: string; style: string; colors: string; pages: string;
  phone: string; email: string; address: string; hours: string; socials: string;
  domain: string; extra: string;
};

const initial: FormData = {
  business: "", sector: "", description: "", services: "", audience: "",
  style: "Moderno y elegante", colors: "", pages: "Inicio, servicios y contacto",
  phone: "", email: "", address: "", hours: "", socials: "", domain: "",
  extra: "",
};

const steps = [
  { title: "Conozcamos tu negocio", hint: "Empezamos por lo esencial." },
  { title: "Diseñemos su estilo", hint: "Cuéntanos qué imagen quieres transmitir." },
  { title: "Contenido y contacto", hint: "La información que aparecerá en tu web." },
  { title: "Tus fotografías", hint: "Las imágenes ayudan a personalizar el diseño." },
  { title: "Revisa tu solicitud", hint: "Comprueba los datos antes de enviarlos." },
];

export function WebBuilderWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [photos, setPhotos] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof FormData, value: string) => setData((old) => ({ ...old, [key]: value }));
  const photoNames = useMemo(() => photos.map((file) => file.name), [photos]);

  const message = [
    "Hola Transport AI. Quiero solicitar mi web profesional de 300 € + IVA.",
    "",
    "NEGOCIO", `Nombre: ${data.business}`, `Sector: ${data.sector}`,
    `Descripción: ${data.description}`, `Servicios: ${data.services}`,
    `Público objetivo: ${data.audience}`, "",
    "DISEÑO", `Estilo: ${data.style}`, `Colores: ${data.colors || "A criterio de diseño"}`,
    `Secciones: ${data.pages}`, "",
    "CONTACTO", `Teléfono: ${data.phone}`, `Email: ${data.email}`,
    `Dirección: ${data.address}`, `Horario: ${data.hours}`, `Redes: ${data.socials}`,
    `Dominio propio: ${data.domain || "Necesito asesoramiento"}`,
    `Notas: ${data.extra}`, "",
    `Fotografías seleccionadas: ${photoNames.join(", ") || "Aún no he añadido"}`,
    "Adjuntaré las fotografías en este chat para que podáis utilizarlas en la propuesta."
  ].join("\n");

  function sendWhatsApp() {
    if (!consent) { setError("Debes aceptar el aviso de privacidad para continuar."); return; }
    if (!data.business.trim() || !data.sector.trim() || (!data.phone.trim() && !data.email.trim())) {
      setError("Indica el nombre del negocio, el sector y al menos un medio de contacto.");
      setStep(0);
      return;
    }
    setError("");
    window.open(`https://wa.me/34659980603?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";
  const labelClass = "block text-sm font-semibold text-slate-800";

  return (
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_290px]">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
        <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white"><Bot size={23} /></div>
            <div><p className="font-semibold text-slate-950">Asistente de creación web</p><p className="mt-0.5 text-xs text-emerald-700">Guía interactiva · Transport AI</p></div>
            <span className="ml-auto rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">IA</span>
          </div>
          <div className="mt-5 flex gap-1.5">{steps.map((item, i) => <div key={item.title} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-slate-200"}`} />)}</div>
          <div className="mt-3 flex justify-between text-xs text-slate-500"><span>Paso {step + 1} de {steps.length}</span><span>{Math.round(((step + 1) / steps.length) * 100)} %</span></div>
        </div>

        <div className="min-h-[440px] px-6 py-7 sm:px-8 sm:py-9">
          <div className="mb-7 flex gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Sparkles size={17} /></div>
            <div className="max-w-xl rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3.5">
              <p className="text-sm font-semibold text-slate-900">{steps[step].title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{steps[step].hint}</p>
            </div>
          </div>

          {step === 0 && <div className="space-y-5">
            <div><label className={labelClass}>¿Cómo se llama tu negocio? *</label><input className={inputClass} value={data.business} onChange={e => update("business", e.target.value)} placeholder="Ej. Clínica Dental Sonrisa" /></div>
            <div><label className={labelClass}>¿A qué se dedica? *</label><input className={inputClass} value={data.sector} onChange={e => update("sector", e.target.value)} placeholder="Ej. Restaurante, clínica, taller, hotel..." /></div>
            <div><label className={labelClass}>Cuéntanos brevemente qué haces</label><textarea className={inputClass} rows={3} value={data.description} onChange={e => update("description", e.target.value)} placeholder="Qué ofreces, qué te diferencia y qué debería saber un cliente..." /></div>
            <div><label className={labelClass}>¿Qué servicios o productos ofreces?</label><textarea className={inputClass} rows={3} value={data.services} onChange={e => update("services", e.target.value)} placeholder="Puedes separarlos por comas o explicarlos libremente." /></div>
          </div>}

          {step === 1 && <div className="space-y-5">
            <div><label className={labelClass}>¿Qué estilo te gusta?</label><select className={inputClass} value={data.style} onChange={e => update("style", e.target.value)}>{["Moderno y elegante","Minimalista y limpio","Premium y exclusivo","Creativo y llamativo","Corporativo y profesional","Cercano y acogedor"].map(x => <option key={x}>{x}</option>)}</select></div>
            <div><label className={labelClass}>¿Tienes colores corporativos?</label><input className={inputClass} value={data.colors} onChange={e => update("colors", e.target.value)} placeholder="Ej. Negro y dorado, azul y blanco..." /></div>
            <div><label className={labelClass}>¿Qué secciones te gustaría incluir?</label><textarea className={inputClass} rows={3} value={data.pages} onChange={e => update("pages", e.target.value)} placeholder="Inicio, nosotros, servicios, galería, reservas, contacto..." /></div>
            <div><label className={labelClass}>¿A quién quieres llegar?</label><input className={inputClass} value={data.audience} onChange={e => update("audience", e.target.value)} placeholder="Ej. Familias de la zona, empresas, turistas..." /></div>
          </div>}

          {step === 2 && <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className={labelClass}>Teléfono / WhatsApp</label><input className={inputClass} value={data.phone} onChange={e => update("phone", e.target.value)} placeholder="+34..." /></div>
              <div><label className={labelClass}>Email de contacto</label><input type="email" className={inputClass} value={data.email} onChange={e => update("email", e.target.value)} placeholder="hola@tunegocio.es" /></div>
            </div>
            <div><label className={labelClass}>Dirección o zona</label><input className={inputClass} value={data.address} onChange={e => update("address", e.target.value)} placeholder="Calle, ciudad o zona de servicio" /></div>
            <div><label className={labelClass}>Horario de apertura</label><input className={inputClass} value={data.hours} onChange={e => update("hours", e.target.value)} placeholder="Lunes a viernes, 9:00–18:00..." /></div>
            <div><label className={labelClass}>Redes sociales y enlaces</label><input className={inputClass} value={data.socials} onChange={e => update("socials", e.target.value)} placeholder="Instagram, Facebook, Google Maps..." /></div>
            <div><label className={labelClass}>¿Tienes ya un dominio?</label><input className={inputClass} value={data.domain} onChange={e => update("domain", e.target.value)} placeholder="tunegocio.es o déjalo vacío si necesitas uno" /></div>
          </div>}

          {step === 3 && <div className="space-y-5">
            <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-6 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50">
              <UploadCloud size={30} className="text-blue-700" />
              <span className="mt-3 text-sm font-semibold text-slate-900">Selecciona las fotografías de tu negocio</span>
              <span className="mt-1 text-xs text-slate-500">Logo, instalaciones, productos, equipo o trabajos realizados</span>
              <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-semibold text-white"><ImagePlus size={15} /> Añadir imágenes</span>
              <input type="file" accept="image/*" multiple className="sr-only" onChange={e => setPhotos(Array.from(e.target.files ?? []).slice(0, 12))} />
            </label>
            {photos.length > 0 && <div className="rounded-xl bg-slate-50 p-4"><p className="text-sm font-semibold text-slate-800">{photos.length} archivo(s) seleccionados</p><ul className="mt-2 space-y-1">{photos.map((file, i) => <li key={i} className="truncate text-xs text-slate-600">{file.name}</li>)}</ul><p className="mt-3 text-xs leading-5 text-amber-700">Al abrir WhatsApp tendrás que adjuntar allí estas imágenes: el navegador no las envía automáticamente.</p></div>}
            <div><label className={labelClass}>¿Algo más que debamos tener en cuenta?</label><textarea className={inputClass} rows={3} value={data.extra} onChange={e => update("extra", e.target.value)} placeholder="Webs de referencia, promociones, funcionalidades o cualquier detalle..." /></div>
          </div>}

          {step === 4 && <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between"><h3 className="font-semibold text-slate-900">{data.business || "Tu negocio"}</h3><span className="text-lg font-bold text-blue-700">300 € + IVA</span></div>
              <p className="mt-1 text-sm text-slate-500">{data.sector || "Sector pendiente"}</p>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div><span className="text-xs font-semibold uppercase text-slate-400">Descripción</span><p className="mt-1 text-slate-700">{data.description || "Pendiente"}</p></div>
                <div><span className="text-xs font-semibold uppercase text-slate-400">Servicios</span><p className="mt-1 text-slate-700">{data.services || "Pendiente"}</p></div>
                <div><span className="text-xs font-semibold uppercase text-slate-400">Estilo</span><p className="mt-1 text-slate-700">{data.style} · {data.colors || "Colores por definir"}</p></div>
                <div><span className="text-xs font-semibold uppercase text-slate-400">Secciones</span><p className="mt-1 text-slate-700">{data.pages}</p></div>
                <div><span className="text-xs font-semibold uppercase text-slate-400">Contacto</span><p className="mt-1 text-slate-700">{data.phone || "Sin teléfono"} · {data.email || "Sin email"}</p></div>
                <div><span className="text-xs font-semibold uppercase text-slate-400">Imágenes</span><p className="mt-1 text-slate-700">{photos.length} seleccionadas</p></div>
              </div>
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-blue-700" /><span>He leído y acepto la <a href="/privacidad" target="_blank" className="font-semibold text-blue-700 underline">política de privacidad</a> y autorizo a Transport AI a utilizar estos datos para atender mi solicitud. *</span></label>
            {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
            {sent && <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">WhatsApp se ha abierto con tu solicitud. Adjunta allí las fotografías seleccionadas y envía el mensaje para que podamos revisar tu proyecto.</p>}
          </div>}

          {step !== 4 && error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
          <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-slate-100 pt-6">
            <button type="button" onClick={() => { setError(""); setStep(s => Math.max(0, s - 1)); }} disabled={step === 0} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft size={16} /> Atrás</button>
            {step < 4 ? <button type="button" onClick={() => { setError(""); setStep(s => Math.min(4, s + 1)); }} className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">Continuar <ArrowRight size={16} /></button> : <button type="button" onClick={sendWhatsApp} className="inline-flex items-center gap-2 rounded-xl bg-[#128C7E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d756a]"><MessageCircle size={17} /> Enviar solicitud por WhatsApp</button>}
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600"><Bot size={21} /></div>
          <h2 className="mt-5 text-lg font-semibold">Tu asistente te guía</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">No necesitas saber de diseño ni de programación. Responde con tus propias palabras y puedes dejar en blanco lo que todavía no tengas decidido.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold text-slate-900">¿Qué ocurre después?</h3>
          <ol className="mt-5 space-y-4">{["Recibimos tu información y las fotos por WhatsApp.", "Revisamos el alcance y confirmamos qué incluye el precio.", "Tras confirmar el pedido y el pago, preparamos una primera demo.", "Tú revisas la propuesta con nuestro equipo antes de publicarla."].map((item, i) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">{i + 1}</span>{item}</li>)}</ol>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-amber-900"><p className="font-semibold">Transparencia sobre el precio</p><p className="mt-1">Los 300 € + IVA corresponden a una web estándar con alcance confirmado. Dominio, alojamiento, correo profesional, textos legales y funciones avanzadas pueden tener costes adicionales. No se realiza ningún cobro automático en este formulario.</p></div>
      </aside>
    </div>
  );
}
