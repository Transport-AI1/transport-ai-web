import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntanos tu necesidad y te proponemos una solución a medida. Respuesta por email o WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
