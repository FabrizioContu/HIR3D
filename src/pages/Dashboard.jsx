import { useAuth } from "../context/AuthContext";

import React from "react";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className=" flex flex-col gap-4 justify-center bg-gray-50 px-28 py-10 max-w-screen-xl">
      <h1 className="text-3xl font-black py-10">Bienvenido al Dashboard</h1>
      <button
        onClick={logout}
        className="rounded-lg flex-auto w-24 sm:w-32 px-3 py-2 text-xs sm:text-base text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400 transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
