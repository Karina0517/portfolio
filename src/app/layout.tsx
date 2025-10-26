import "./globals.css";
import { Navbar } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { FloralBackground } from "@/components/FloralBackground";

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
      <body className="relative min-h-screen flex flex-col bg-white text-gray-800 overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          <FloralBackground />
        </div>
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
