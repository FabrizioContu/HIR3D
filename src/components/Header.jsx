import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    title: "Ejemplos",
    label: "ejemplos",
    url: "/#ejemplos",
  },
];

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

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
      <nav className="col-span-3 col-start-8">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="rounded-lg w-20 sm:w-24 text-xs sm:text-base px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className=" rounded-lg w-20 sm:w-24 text-xs sm:text-base px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            LOGIN
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
