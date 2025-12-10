import { Header } from "@/src/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="bg-linear-to-r from-red-700 to-red-900 rounded-3xl p-8 mb-8 shadow-2xl border-4 border-yellow-400 relative"
      >
        <div className="max-w-7xl mx-auto">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
