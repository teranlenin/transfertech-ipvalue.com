import "./globals.css";

export const metadata = {
  title: "TransferTech IPValue | Capital Intelectual",
  description: "Ingeniería de valoración de activos intangibles y soberanía tecnológica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}