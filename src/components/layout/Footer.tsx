import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-8 px-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
            Mi Portafolio
          </h2>
          <p className="text-sm text-blue-500">Desarrolladora Web Fullstack</p>
        </div>

        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="p-2 border rounded-full hover:bg-pink-100 transition">
            <Github size={18} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-2 border rounded-full hover:bg-pink-100 transition">
            <Linkedin size={18} />
          </Link>
          <Link href="mailto:tucorreo@mail.com" className="p-2 border rounded-full hover:bg-pink-100 transition">
            <Mail size={18} />
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2025 Hecho por{" "}
          <span className="text-blue-500">Karina Henao </span>
          <Heart size={14} className="inline text-pink-400" />
        </p>
      </div>
    </footer>
  );
};
