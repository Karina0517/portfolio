import projectLibrary from "@/assets/libros.png";
import loginLib from "@/assets/login_lib.png";
import newLib from "@/assets/new_lib.png";
import new2_lib from "@/assets/new2_lib.png";
import loginP from "@/assets/login_p.png";
import dashP from "@/assets/dash_p.png";
import filterP from "@/assets/filter_p.png";
import logoutLib from "@/assets/logout_lib.png";
import dash_port from "@/assets/dash_port.png";
import proyectsPort from "@/assets/proyects_port.png";
import proyects2_port from "@/assets/proyects2_port.png";
import carouselPort from "@/assets/carousel_port.png";
import detailsPort from "@/assets/details_port.png";
import contactPort from "@/assets/contact_port.png";
import contact2_port from "@/assets/contact2_port.png";
import contact_error_port from "@/assets/contact_error_port.png";

export const projects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Portafolio web personal desarrollado con Next.js, TypeScript y MongoDB, que incluye tres vistas principales: Sobre mí, Proyectos con rutas dinámicas y Contacto con formulario conectado a Google Sheets mediante una API. Usa React Hooks, Tailwind, CSS Modules y componentes reutilizables tipados para lograr una aplicación moderna, funcional y visualmente atractiva.",
    image: dash_port,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "App Router",
      "React Hooks",
      "Yup",
      "Toastify",
      "Axios",
      "MongoDB",
      "Google Sheets API",
      "Tailwind CSS",
      "CSS Modules",
      "Componentes reutilizables con Props tipadas",
      "Diseño responsive"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Karina0517/portfolio.git",
      images: [dash_port,proyectsPort,proyects2_port,carouselPort,detailsPort,contactPort,contact2_port,contact_error_port],
    details:
      "Este proyecto es mi portafolio web personal, desarrollado con Next.js y TypeScript, donde presento mis habilidades como desarrolladora web y mis proyectos destacados. La aplicación está estructurada en tres vistas principales: Sobre mí, Proyectos y Contacto. En la vista Sobre mí, muestro una breve introducción sobre mi perfil y enfoque como desarrolladora. En la vista Proyectos, implementé una ruta dinámica que permite renderizar los detalles de cada proyecto desde parámetros personalizados, muestra un carrusel de imágenes y detalles precisos de cada proyecto. En la vista Contacto, desarrollé un formulario controlado, validaciones con yup, conectado a una base de datos MongoDB y a Google Sheets mediante una API personalizada, lo que permite que cada mensaje enviado se almacene automáticamente en una hoja de cálculo de Google. El proyecto fue construido con React y Next.js (App Router), utilizando Hooks como useState, useEffect, useContext y useRouter para el manejo del estado, la navegación y la lógica interna. En el diseño se emplearon Tailwind CSS y CSS Modules, junto con componentes reutilizables tipados con Props para asegurar consistencia y escalabilidad. En conjunto, este portafolio refleja tanto mis conocimientos técnicos como mi estilo personal de desarrollo: organizado, escalable y centrado en la experiencia del usuario.",
  },

  {
    slug: "library-management-system",
    title: "Library Management System",
    description:
      "Proyecto en desarrollo donde aplico Next.js, TypeScript y hooks de React para construir una app con autenticación y gestión completa de libros y autores.",
    image: projectLibrary,
    technologies: [
      "Next.js",
      "TypeScript",
      "Axios",
      "MongoDB",
      "Tailwind CSS",
      "CSS Modules",
      "Toastify",
      "React Hooks",
      "Componentes reutilizables con props",
      "Next Router"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Karina0517/simulacro.git",
    images: [projectLibrary,loginLib,newLib,new2_lib,logoutLib],
    details:
      "Library Management System es una aplicación en desarrollo creada con Next.js y TypeScript, donde implemento un flujo completo de autenticación y CRUDs funcionales para la gestión de Libros y Autores. El proyecto refleja mi proceso de aprendizaje y mi interés por construir interfaces limpias, reactivas y escalables. He trabajado con hooks de React como useState, useEffect, useContext y useRouter de Next.js, además de crear componentes reutilizables con props para lograr una arquitectura modular y mantenible. La aplicación utiliza Axios para las peticiones HTTP, LocalStorage para la persistencia de sesión y una estructura clara de rutas dinámicas para organizar las vistas, toatify para notificaciones. Actualmente, el proyecto sigue en construcción, evolucionando constantemente para mejorar la experiencia de usuario y la integración entre frontend y backend.",
  },
  {
    slug: "technology-system-management",
    title: "Products Management System",
    description:
      "Aplicación web desarrollada con Next.js y TypeScript, en la que se administran productos, CRUD y manejo de stock.",
    image: dashP,
    technologies: [
      "Next.js",
      "TypeScript",
      "React Hooks",
      "Axios",
      "MongoDB",
      "Next router",
      "Tailwind CSS",
      "CSS Modules",
      "Toastify",
      "Componentes reutilizables con props tipadas"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Karina0517/prueba_desempe-o_ts.git",
      images: [dashP,loginP,filterP, logoutLib],
    details:
      "Este proyecto fue desarrollado como parte de una prueba de desempeño técnica. La aplicación implementa un flujo completo de autenticación y CRUDs funcionales para la gestión de productos y usuarios. Utiliza Next.js con TypeScript, Axios para las solicitudes HTTP y una API interna conectada a MongoDB. Incorpora hooks de React (useState, useEffect, useContext, useRouter), manejo de errores del frontend y del backend, y componentes reutilizables con props tipadas. El sistema incluye vistas protegidas, filtrado dinámico de productos y un diseño responsivo con Tailwind CSS.",
  },
];