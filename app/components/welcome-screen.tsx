"use client";

import { useEffect, useState } from "react";

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("transport-ai-welcomed") === "1") {
        setVisible(false);
        return;
      }
    } catch {
      // If storage is unavailable, still show the welcome screen once per mount.
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        window.sessionStorage.setItem("transport-ai-welcomed", "1");
      } catch {
        // The experience still works without storage.
      }
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Bienvenido a Transport AI"
      className="welcome-screen fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#071225] text-white"
    >
      <div className="welcome-orbit pointer-events-none absolute h-[min(78vw,620px)] w-[min(78vw,620px)] rounded-full border border-cyan-300/10" />
      <div className="welcome-content relative flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <div className="welcome-logo-shell w-full overflow-hidden rounded-2xl bg-white p-3 shadow-[0_22px_90px_rgba(0,190,235,.16)] sm:rounded-3xl sm:p-5">
          <img
            src="/logo-transport-ai.svg"
            alt="Transport AI — Logistics Automation"
            className="welcome-logo block h-auto w-full"
          />
        </div>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Bienvenido
        </h1>
        <p className="mt-3 text-sm tracking-wide text-blue-100/70 sm:text-base">
          Tecnología · Inteligencia artificial · Automatización
        </p>
        <div className="mt-9 h-1 w-40 overflow-hidden rounded-full bg-white/15">
          <div className="welcome-progress h-full rounded-full bg-cyan-300" />
        </div>
      </div>
      <style jsx>{`
        .welcome-content { animation: welcome-in 650ms cubic-bezier(.2,.8,.2,1) both; }
        .welcome-logo-shell { animation: logo-float 2.4s ease-in-out infinite, logo-glow 2s ease-in-out infinite; }
        .welcome-logo { animation: logo-reveal 1.1s cubic-bezier(.2,.8,.2,1) both; }
        .welcome-orbit { animation: orbit-pulse 3s ease-in-out infinite; }
        .welcome-progress { transform-origin: left; animation: welcome-load 3s linear both; }
        .welcome-screen { animation: welcome-out 450ms ease 2.55s both; }
        @keyframes welcome-in { from { opacity: 0; transform: translateY(12px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes logo-float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-7px) scale(1.012); } }
        @keyframes logo-glow { 0%,100% { box-shadow: 0 18px 65px rgba(0,190,235,.10); } 50% { box-shadow: 0 24px 95px rgba(0,190,235,.28); } }
        @keyframes logo-reveal { from { opacity: 0; transform: scale(.94); filter: blur(5px); } to { opacity: 1; transform: scale(1); filter: blur(0); } }
        @keyframes orbit-pulse { 0%,100% { opacity: .25; transform: scale(.94); } 50% { opacity: .8; transform: scale(1.04); } }
        @keyframes welcome-load { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes welcome-out { to { opacity: 0; visibility: hidden; pointer-events: none; } }
        @media (prefers-reduced-motion: reduce) {
          .welcome-content, .welcome-logo-shell, .welcome-logo, .welcome-orbit, .welcome-progress, .welcome-screen { animation-duration: 1ms; animation-delay: 0ms; }
        }
      `}</style>
    </div>
  );
}
