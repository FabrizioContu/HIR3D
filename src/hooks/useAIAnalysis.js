import { useState } from "react";
import { analyzeAnswer } from "../firebase/config";

export const useAIAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const analyzeResponse = async (pregunta, respuesta, especialidad, nivel) => {
    // Corrección: validación correcta de respuesta vacía
    // Convertir a string por si acaso y validar
    const respuestaStr = String(respuesta || "").trim();

    if (respuestaStr.length === 0) {
      setError("Por favor, escribe una respuesta antes de analizar");
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeAnswer({
        pregunta,
        respuesta,
        especialidad,
        nivel,
      });

      console.log("Resultado del análisis:", result); // Para debugging

      if (result.data.success) {
        setAnalysis(result.data.analisis);
      } else {
        // Manejo de caso cuando success es false
        setError(result.data.error || "No se pudo completar el análisis");
      }
    } catch (err) {
      console.error("Error al analizar:", err);
      setError("Error al analizar la respuesta. Intenta de nuevo.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysis(null);
    setError(null);
  };

  return {
    isAnalyzing,
    analysis,
    error,
    analyzeResponse,
    clearAnalysis,
  };
};
