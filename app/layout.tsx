import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://transport-ai-web.vercel.app"),
  title: {
    default: "Transport AI | Inteligencia Artificial para Transporte y Logística",
    template: "%s | Transport AI",
  },
  description:
    "Automatiza incidencias, atención al cliente y operaciones con inteligencia artificial. Soluciones para empresas de transporte, logística, mensajería y servicios con vehículos.",
  applicationName: "Transport AI",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Transport AI | IA para Transporte y Logística",
    description:
      "Optimiza las operaciones de tu empresa con inteligencia artificial: gestión de incidencias, automatización y atención al cliente.",
    url: "/",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport AI | IA para Transporte y Logística",
    description:
      "Inteligencia artificial para automatizar operaciones, incidencias y atención al cliente en empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18523833927"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18523833927');
          `}
        </Script>
      </body>
    </html>
  );
}
