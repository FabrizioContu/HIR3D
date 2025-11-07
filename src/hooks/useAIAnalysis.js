import { useState } from "react";
import { analyzeAnswer } from "../firebase/config";

export const useAIAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const analyzeResponse = async (pregunta, respuesta, especialidad, nivel) => {
    if (!respuesta || respuesta.trim().length === 0) {
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

      if (result.data.success) {
        setAnalysis(result.data.analisis);
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
