import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Transport AI — Inteligencia artificial y automatización para empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #07111f 0%, #0b1d3a 55%, #102d55 100%)",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 58, height: 58, borderRadius: 16, background: "linear-gradient(135deg,#2563eb,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800 }}>T</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>TRANSPORT AI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, fontWeight: 800 }}>Inteligencia artificial<br/>y automatización empresarial</div>
          <div style={{ fontSize: 29, color: "#bfdbfe" }}>Web · Agentes IA · Voz · Integraciones · Software a medida</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#cbd5e1" }}>
          <span>Soluciones tecnológicas para empresas</span><span>www.transportai.es</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
