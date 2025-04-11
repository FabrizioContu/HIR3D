import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Funciones",
    label: "features",
    url: "/features",
  },
  {
    title: "Ejems",
    label: "ejemplos",
    url: "/#ejemplos",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-10 grid grid-cols-9 justify-center items-center w-full mx-auto bg-gray-50 py-3">
      <Link className="col-span-1 col-start-2 font-bold" to="/">
        HIR3D
      </Link>

      <nav className="col-span-3 col-start-4 flex gap-4 px-8 text-sm font-medium text-gray-600 dark:text-gray-200 justify-center items-center">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative inline-block px-2 py-2 transition hover:text-gray-800 dark:hover:text-blue-400"
            aria-label={link.label}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
