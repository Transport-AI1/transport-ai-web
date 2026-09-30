export const metadata = {
  title: "Transport AI",
  description: "Automatiza la gestión de incidencias de tus repartos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
