import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-pink-100/40 py-8 px-10 bg-white/40 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-blue-300 bg-clip-text text-transparent">
            Mi Portafolio
          </h2>
          <p className="text-sm text-gray-600">Desarrolladora Web Fullstack</p>
        </div>

        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="p-2 border border-pink-200 rounded-full hover:bg-pink-100 hover:border-pink-300 transition-all">
            <Github size={18} className="text-gray-700" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-2 border border-pink-200 rounded-full hover:bg-pink-100 hover:border-pink-300 transition-all">
            <Linkedin size={18} className="text-gray-700" />
          </Link>
          <Link href="mailto:tucorreo@mail.com" className="p-2 border border-pink-200 rounded-full hover:bg-pink-100 hover:border-pink-300 transition-all">
            <Mail size={18} className="text-gray-700" />
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2025 Hecho por{" "}
          <span className="bg-gradient-to-r from-pink-400 to-blue-300 bg-clip-text text-transparent font-medium">Karina Henao </span>
          <Heart size={14} className="inline text-pink-400" />
        </p>
      </div>
    </footer>
  );
};
