import React, { useState, useEffect } from "react";
import { PREGUNTAS, TAGS } from "../data/ProfessionalQuesions";
import { useQuestions } from "../hooks/useQuestions";
import { useAIAnalysis } from "../hooks/useAIAnalysis";
import AnalysisResult from "./AnalysisResult";

export default function Features() {
  const [especialidad, setEspecialidad] = useState("");
  const [nivel, setNivel] = useState("");

  const { isAnalyzing, analysis, error, analyzeResponse, clearAnalysis } =
    useAIAnalysis();

  const {
    questions,
    currentQuestion,
    isGenerating,
    createQuestions,
    nextQuestion,
    prevQuestion,
    freeAnswer,
    setFreeAnswer,
  } = useQuestions();

  // 🔄 Limpiar respuesta y análisis cuando cambia la pregunta
  useEffect(() => {
    clearAnalysis();
  }, [currentQuestion, clearAnalysis, setFreeAnswer]);

  const handleSubmit = () => {
    if (especialidad && nivel) {
      createQuestions(especialidad, nivel);
    }
  };

  const handleAnalyzeResponse = () => {
    const respuestaTrimmed = freeAnswer || "";

    if (!respuestaTrimmed) {
      alert("Por favor, escribe una respuesta antes de analizar.");
      return;
    }

    // Limpiar análisis previo
    clearAnalysis();

    // Pequeño delay para asegurar que el estado se limpió
    setTimeout(() => {
      analyzeResponse(
        questions[currentQuestion].pregunta,
        freeAnswer,
        especialidad,
        nivel
      );
    }, 100);
  };

  return (
    <div className="mt-24 flex flex-col gap-4 justify-center bg-gray-50 px-28 py-10 max-w-7xl">
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
              className="w-full text-base rounded-md py-2 px-3 border-2 border-blue-400 focus:ring-2 focus:ring-blue-400"
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
              <option value="Senior">5-8 años - Senior</option>
              <option value="Expert">8+ años - Experto</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            size="lg"
            onClick={handleSubmit}
            disabled={!especialidad || !nivel || isGenerating}
            className={`w-full rounded-lg py-2 px-4 transition ${
              !especialidad || !nivel || isGenerating
                ? "bg-blue-500/70 cursor-not-allowed text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isGenerating ? "Generando..." : "Generar Preguntas"}
          </button>
        </div>

        {questions.length > 0 && (
          <div className="mt-6 bg-white p-6 rounded-xl shadow-sm flex flex-col gap-6">
            {/* Pregunta */}
            <h2
              className="text-base sm:text-lg font-bold text-gray-800 text-center"
              aria-live="polite"
            >
              {questions[currentQuestion].pregunta}
            </h2>

            {/* Respuesta libre */}
            <div>
              <label htmlFor="respuesta-libre" className="sr-only">
                Escribe tu respuesta
              </label>
              <textarea
                id="respuesta-libre"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 min-h-32"
                value={freeAnswer}
                onChange={(e) => setFreeAnswer(e.target.value)}
                placeholder="Escribe tu respuesta aquí..."
                aria-label="Respuesta libre"
              ></textarea>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleAnalyzeResponse}
                  disabled={isAnalyzing}
                  className={`rounded-lg w-40 text-xs py-2 px-4 text-white transition ${
                    isAnalyzing
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {isAnalyzing ? "Analizando..." : "ANALIZAR RESPUESTA"}
                </button>

                {analysis && (
                  <button
                    onClick={clearAnalysis}
                    className="rounded-lg w-32 text-xs py-2 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
                  >
                    LIMPIAR ANÁLISIS
                  </button>
                )}
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`rounded-lg w-20 sm:w-24 px-3 py-2 text-xs sm:text-base transition ${
                  currentQuestion === 0
                    ? "text-gray-400 bg-gray-100 cursor-not-allowed border border-gray-300"
                    : "text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400"
                }`}
                aria-label="Pregunta anterior"
              >
                ANTERIOR
              </button>

              {currentQuestion < questions.length - 1 && (
                <button
                  onClick={nextQuestion}
                  className="rounded-lg w-20 sm:w-24 text-xs px-3 py-2 sm:text-base text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400 transition"
                  aria-label="Siguiente pregunta"
                >
                  SIGUIENTE
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mostrar error */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Mostrar análisis */}
        {analysis && (
          <div className="mt-6">
            <AnalysisResult analysis={analysis} onClose={clearAnalysis} />
          </div>
        )}
      </div>
    </div>
  );
}
