"use client";

import { useEffect, useState } from "react";
import { Layers3 } from "lucide-react";

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
      className="welcome-screen fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#071225] text-white"
    >
      <div className="welcome-content flex flex-col items-center px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-blue-600 shadow-[0_18px_60px_rgba(37,99,235,.35)]">
          <Layers3 className="h-10 w-10 text-white" strokeWidth={1.8} />
        </div>
        <p className="mt-7 text-2xl font-bold tracking-[0.12em] sm:text-3xl">
          TRANSPORT<span className="text-blue-400"> AI</span>
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Bienvenido
        </h1>
        <p className="mt-3 text-sm tracking-wide text-blue-100/70">
          Tecnología · Inteligencia artificial · Automatización
        </p>
        <div className="mt-9 h-1 w-36 overflow-hidden rounded-full bg-white/15">
          <div className="welcome-progress h-full rounded-full bg-blue-400" />
        </div>
      </div>
      <style jsx>{`
        .welcome-content { animation: welcome-in 650ms cubic-bezier(.2,.8,.2,1) both; }
        .welcome-progress { transform-origin: left; animation: welcome-load 3s linear both; }
        .welcome-screen { animation: welcome-out 450ms ease 2.55s both; }
        @keyframes welcome-in { from { opacity: 0; transform: translateY(12px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes welcome-load { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes welcome-out { to { opacity: 0; visibility: hidden; pointer-events: none; } }
        @media (prefers-reduced-motion: reduce) {
          .welcome-content, .welcome-progress, .welcome-screen { animation-duration: 1ms; animation-delay: 0ms; }
        }
      `}</style>
    </div>
  );
}
