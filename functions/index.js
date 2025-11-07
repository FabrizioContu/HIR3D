/* eslint-disable no-undef */
const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { defineString } = require("firebase-functions/params");

// Definir parámetro de entorno
const geminiApiKey = defineString("GEMINI_API_KEY");

// eslint-disable-next-line no-unused-vars
exports.analyzeAnswer = functions.https.onCall(async (data, context) => {
  try {
    const apiKey = geminiApiKey.value();

    if (!apiKey) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "API Key de Gemini no configurada"
      );
    }

    const { pregunta, respuesta, especialidad, nivel } = data;

    if (!pregunta || !respuesta || !especialidad || !nivel) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Faltan datos requeridos"
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Eres un experto en entrevistas técnicas para el rol de ${especialidad} nivel ${nivel}.

Analiza la siguiente respuesta a una pregunta de entrevista y proporciona feedback constructivo:

PREGUNTA: ${pregunta}

RESPUESTA DEL CANDIDATO: ${respuesta}

Por favor, proporciona:
1. **Puntos fuertes** (2-3 aspectos positivos específicos)
2. **Áreas de mejora** (2-3 sugerencias concretas)
3. **Puntuación** (del 1 al 10)
4. **Consejo principal** (una recomendación clave en 1-2 frases)

Sé constructivo, específico y enfócate en cómo el candidato puede mejorar su respuesta para este nivel.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analisis = response.text();

    return {
      success: true,
      analisis: analisis,
    };
  } catch (error) {
    console.error("Error al analizar respuesta:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Error al procesar el análisis: " + error.message
    );
  }
});
