import { useState } from "react";
import { PREGUNTAS } from "../data/ProfessionalQuesions";

export function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [setFreeAnswer] = useState("");
  const [writing, setWriting] = useState(false);

  const createQuestions = (especialidad, nivel) => {
    setIsGenerating(true);
    setTimeout(() => {
      const selection = PREGUNTAS.find(
        (p) => p.especialidad === especialidad && p.nivel === nivel
      );
      setQuestions(selection ? selection.preguntas : []);
      setCurrentQuestion(0);
      setIsGenerating(false);
    }, 500);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setWriting(false);
      setFreeAnswer("");
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setWriting(false);
      setFreeAnswer("");
    }
  };

  return {
    questions,
    currentQuestion,
    isGenerating,
    createQuestions,
    nextQuestion,
    prevQuestion,
    writing,
    setWriting,
  };
}

useQuestions;
