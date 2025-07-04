import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const extractInsights = async (text) => {
  const prompt = `
Extract the following from the meeting notes:
1. A 2–3 sentence summary
2. A list of key decisions
3. A structured list of action items (with task, owner (if any), and deadline (if any))

Respond in this JSON format:
{
  "summary": "...",
  "decisions": [...],
  "actionItems": [
    { "task": "...", "owner": "...", "due": "..." }
  ]
}

Meeting Notes:
${text}
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  });

  const reply = response.choices[0].message.content;

  try {
    return JSON.parse(reply);
  } catch (err) {
    console.error('AI response is not valid JSON:', reply);
    throw new Error('Failed to parse JSON output from AI');
  }
};
