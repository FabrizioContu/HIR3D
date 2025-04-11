import React, { useState } from "react";
import { PREGUNTAS, TAGS } from "../data/ProfessionalQuesions";

export default function Features() {
  const [especialidad, setEspecialidad] = useState("");
  const [nivel, setNivel] = useState("");
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [escribiendo, setEscribiendo] = useState(false);
  const [respuestaLibre, setRespuestaLibre] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = () => {
    if (especialidad && nivel) {
      setIsGenerating(true);

      setTimeout(() => {
        const seleccion = PREGUNTAS.find(
          (p) => p.especialidad === especialidad && p.nivel === nivel
        );
        setPreguntas(seleccion ? seleccion.preguntas : []);
        setPreguntaActual(0);
        setIsGenerating(false);
      }, 500);
    }
  };

  const handleNextQuestion = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setEscribiendo(false);
      setRespuestaLibre("");
    }
  };

  const handlePreviousQuestion = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
      setEscribiendo(false);
      setRespuestaLibre("");
    }
  };

  return (
    <div className="mt-24 flex flex-col gap-4 justify-center bg-gray-50 px-28 py-10 max-w-screen-xl">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-center sm:text-start">
          Descripción del puesto solicitado
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Especialización */}
          <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-4">
            <p className="text-sm font-semibold mb-2 text-gray-700">
              ESPECIALIZACIÓN
            </p>
            <select
              onChange={(e) => setEspecialidad(e.target.value)}
              className="w-full text-base rounded-md py-2 px-3 border-2 border-blue-400 focus:ring-2  focus:ring-blue-400"
            >
              <option value="">Selecciona una profesión</option>
              {TAGS.map((tag) => (
                <option key={tag.name} value={tag.name}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {/* Experiencia */}
          <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-4">
            <p className="text-sm font-semibold mb-2 text-gray-700">
              EXPERIENCIA REQUERIDA
            </p>
            <select
              onChange={(e) => setNivel(e.target.value)}
              className="w-full text-base rounded-lg py-2 px-3 border border-gray-300 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Selecciona el nivel</option>
              <option value="Junior">0-2 años - Junior</option>
              <option value="Mid">2-5 años - Intermedio</option>
              <option value="Senior">5-8 años - Senior</option>{" "}
              <option value="Senior">8+ años - Experto</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            size="lg"
            onClick={handleSubmit}
            disabled={!especialidad || !nivel || isGenerating}
            className={`w-full  rounded-lg py-2 px-4 transition ${
              !especialidad || !nivel || isGenerating
                ? "bg-blue-500/70 cursor-not-allowed text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isGenerating ? "Generando..." : "Generar Preguntas"}
          </button>
        </div>
        <div className="flex justify-end gap-4"></div>

        {preguntas.length > 0 && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-sm flex flex-col gap-6">
            {/* Pregunta */}
            <h2 className=" text-base sm:text-lg font-bold text-gray-800 text-center">
              {preguntas[preguntaActual].pregunta}
            </h2>

            {/* Opciones de respuesta */}
            {!escribiendo && (
              <div className="flex flex-col gap-3">
                {preguntas[preguntaActual].opciones.map((opcion, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="respuesta"
                      className="accent-blue-500"
                    />
                    <span className="text-gray-700">{opcion}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Respuesta libre */}
            {escribiendo && (
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                value={respuestaLibre}
                onChange={(e) => setRespuestaLibre(e.target.value)}
                placeholder="Escribe tu respuesta aquí..."
              ></textarea>
            )}

            {/* Botón de cambio entre opciones y respuesta libre */}
            <button
              onClick={() => setEscribiendo(!escribiendo)}
              className="rounded-lg mx-auto w-40 bg-blue-500 py-2 text-white text-sm sm:text-base hover:bg-blue-600 transition"
            >
              {escribiendo ? "OPCIONES" : "RESPUESTA LIBRE"}
            </button>

            {/* Botones de navegación */}
            <div className="flex justify-between">
              {preguntaActual > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="rounded-lg w-20 sm:w-24 px-3 py-2 text-xs sm:text-base text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400 transition"
                >
                  ANTERIOR
                </button>
              )}

              {preguntaActual < preguntas.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="rounded-lg w-20 sm:w-24 text-xs    px-3 py-2 sm:text-base text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400 transition"
                >
                  SIGUIENTE
                </button>
              ) : (
                <button className="rounded-lg w-20 sm:w-24 text-xs sm:text-base px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 transition">
                  TERMINAR
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
