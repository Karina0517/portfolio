"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Sobre mí", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-2xl px-4`}
    >
      <div className={styles.navContainer}>
        <div className="flex items-center justify-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${
                  isActive ? styles.activeLink : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
