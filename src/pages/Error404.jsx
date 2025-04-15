import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 gap-12">
      <p className="text-3xl font-semibold text-blue-500">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
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
