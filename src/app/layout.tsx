import "./globals.css";
import { Navbar } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal desarrollado con Next.js y TypeScript",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
