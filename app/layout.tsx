
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://transport-ai-web.vercel.app"),

  title: {
    default:
      "IA y Automatización para Empresas de Transporte | Transport AI",
    template: "%s | Transport AI",
  },

  description:
    "Automatiza incidencias, atención al cliente y operaciones con IA. Desarrollamos software e integraciones a medida para empresas de transporte, logística, mensajería y servicios con vehículos.",

  applicationName: "Transport AI",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "IA y Automatización para Empresas de Transporte | Transport AI",
    description:
      "Reduce tareas manuales y automatiza incidencias, atención al cliente y operaciones con soluciones de inteligencia artificial a medida.",
    url: "/",
    siteName: "Transport AI",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "IA y Automatización para Empresas de Transporte | Transport AI",
    description:
      "Soluciones de IA para automatizar operaciones, incidencias y atención al cliente en empresas de transporte y logística.",
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

        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
        >
          {`
            (function(d, t) {
              var v = d.createElement(t);
              var s = d.getElementsByTagName(t)[0];

              v.onload = function() {
                if (!window.voiceflow || !window.voiceflow.chat) return;

                window.voiceflow.chat.load({
                  verify: { projectID: "6ada0175d629eb194f6268ad" },
                  url: "https://general-runtime.voiceflow.com",
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  },
                  environmentID: "main",
                  versionVariant: "published"
                });
              };

              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, "script");
          `}
        </Script>

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
