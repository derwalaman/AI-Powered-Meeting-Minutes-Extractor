import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const extractInsights = async (text) => {
  const prompt = `
You are an assistant that extracts structured insights from meeting notes.

Extract the following:
1. A 2–3 sentence summary
2. A list of key decisions
3. A list of action items (each with task, owner if mentioned, and due date if mentioned)

🔁 ONLY return raw valid JSON. DO NOT wrap the output in markdown or triple backticks.

Expected Format:
{
  "summary": "...",
  "decisions": ["..."],
  "actionItems": [
    { "task": "...", "owner": "...", "due": "..." }
  ]
}

Meeting Notes:
${text}
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const reply = response.text();

  console.log("Gemini raw reply:", reply);

  // 🧹 Remove backticks or ```json if Gemini wraps response
  const cleanedReply = reply
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/, "")
    .trim();

  try {
    return JSON.parse(cleanedReply);
  } catch (err) {
    console.error("❌ JSON parsing failed. Cleaned response:", cleanedReply);
    throw new Error("Gemini returned invalid JSON after cleaning.");
  }
};
