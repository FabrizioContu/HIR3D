import React from "react";

export default function AnalysisResult({ analysis, onClose }) {
  if (!analysis) return null;

  return (
    <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border-2 border-blue-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          📊 Análisis de tu respuesta
        </h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          aria-label="Cerrar análisis"
        >
          ×
        </button>
      </div>

      <div className="prose prose-sm max-w-none">
        <div
          className="text-gray-700 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: analysis.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </div>
    </div>
  );
}
