"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "transport-ai-cookie-consent";
const GOOGLE_ADS_ID = "AW-18523833927";

type Choice = "granted" | "denied" | null | "loading";

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice>("loading");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      setChoice(saved === "granted" || saved === "denied" ? saved : null);
    } catch {
      setChoice(null);
    }
  }, []);

  function save(value: "granted" | "denied") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Si el navegador bloquea el almacenamiento, la elección solo dura esta visita.
    }
    setChoice(value);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}

      {choice === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-2xl sm:right-auto"
        >
          <p className="leading-6">
            Usamos cookies de medición y publicidad (Google) solo si las
            aceptas. Puedes ver los detalles en la{" "}
            <Link href="/privacidad" className="font-medium text-blue-700 underline">
              política de privacidad
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => save("denied")}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:bg-slate-50"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => save("granted")}
              className="flex-1 rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
