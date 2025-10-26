"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "About me", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`flex justify-between items-center ${styles.nav}`}>

      <div className="flex gap-4 items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all px-3 py-1.5 rounded-full ${
                isActive
                  ? " text-[#c25a5a91] shadow-[0_0_10px_#faebd798] bg-white/30" 
                  : "text-[#c25a5a91] hover:bg-white/30"
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
