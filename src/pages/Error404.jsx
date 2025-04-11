import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 gap-12">
      <h1 className="text-8xl font-bold text-lime-500 font-mono">Error 404</h1>

      <Link
        to="/"
        className=" min-w-8 rounded-md bg-blue-500 px-2 md:px-3 py-2 text-sm md:text-base font-medium text-white hover:bg-blue-600"
      >
        BACK TO HIR3D
      </Link>
    </div>
  );
}

export default Error404;
