import React from "react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-gray-50 h-dvh">
        <div className=" mx-auto max-w-screen-xl gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-blue-900 flex flex-col justify-center items-center rounded-sm">
          <div className="gap-4 pt-24 pb-16 grid grid-cols-6 text-center mb-5">
            <h1 className="col-span-4 col-start-2 md:text-6xl font-bold text-gray-50 text-3xl">
              Calienta motores con nuestra Entrevista de IA
            </h1>

            <p className="col-span-4 col-start-2 text-lg text-gray-50">
              Afina tus habilidades con preguntas y respuestas en AI Interview.
              Perfecciona tus respuestas, gana confianza y llega a tu entrevista
              real con seguridad. 🚀
            </p>
          </div>
          <div className="my-4 px-2 mx-96 flex justify-center">
            <Link
              to="/Interview"
              className=" min-w-8 rounded-md bg-blue-500 px-2 md:px-3 py-2 text-sm md:text-base font-medium text-white hover:bg-blue-600 mb-0"
            >
              Simulador
            </Link>
          </div>
        </div>
        <div
          className=" mx-auto max-w-screen-xl py-8 pt-8 bg-blue-900 text-gray-50"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4">
            <h2
              id="features-heading"
              className="text-3xl font-bold text-center mb-12 text-spacing-optimized"
            >
              Todo lo que necesitas para tu próxima entrevista
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-md text-gray-600">
                <h3 className="text-xl font-semibold mb-3">Preguntas IA</h3>
                <p className="">
                  Genera preguntas personalizadas basadas en la descripción del
                  puesto
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-md text-gray-600">
                <h3 className="text-xl font-semibold mb-3">Personalización</h3>
                <p className="">
                  Adapta las preguntas según el nivel de experiencia y el idioma
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-md text-gray-600">
                <h3 className="text-xl font-semibold mb-3">Profesiones</h3>
                <p className="">
                  Especializadas para diferentes profesiones y roles de trabajo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
