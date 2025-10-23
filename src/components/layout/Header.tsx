"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "About me", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-100">
      <h1 className="text-lg font-bold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
        Mi Portafolio
      </h1>

      <div className="flex gap-6 items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all px-3 py-1 rounded-full ${
                isActive
                  ? "bg-pink-300/60 text-white"
                  : "text-gray-800 hover:text-pink-400"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
