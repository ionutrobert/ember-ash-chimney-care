
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getSafetyAdvice = async (history: ChatMessage[], userInput: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('No API key configured');
  }
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `You are a professional, friendly, and expert Chimney Safety Advisor for "Ember & Ash Chimney Care". 
  Answer the user's questions about chimney maintenance, wood types, safety signs (like chimney fire indicators), and general fireplace care.
  Keep your responses concise, safe, and helpful. 
  If a user describes a dangerous situation (e.g., active fire, strong smell of smoke), strongly advise them to call emergency services or a professional immediately.
  
  User message: ${userInput}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our human team for critical safety advice.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our Safety AI is currently cooling off. Please call us directly for any urgent chimney queries.";
  }
};
