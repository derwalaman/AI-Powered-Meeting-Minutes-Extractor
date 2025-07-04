# 📝 AI-Powered Meeting Minutes Extractor

A Node.js Express backend service that processes raw meeting text or `.txt` files, and uses **Google Gemini API** to extract:

- ✅ A **2–3 sentence summary**
- ✅ A list of **key decisions**
- ✅ A list of **structured action items** with task, owner, and deadline

---

## 🚀 Features

- Accepts raw text or `.txt` file via API
- Integrates with **Gemini 1.5 Flash** model
- Returns clean, structured JSON
- Free to use with Google Gemini API key
- Handles edge cases and bad formats gracefully

---

## 📂 Gemini VS OpenAI

### 1. Gemini 
- To use Gemini api, just clone this repository.
- Make sure to upload your api key in .env file.

### 2. OpenAI
- To use OpenAI api, change the `extractInsights` import from `../gemini.js` to `../openai.js`.
- Make sure to update your api key in .env file.

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/derwalaman/AI-Powered-Meeting-Minutes-Extractor.git
cd AI-Powered-Meeting-Minutes-Extractor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create or Update .env File

```bash
PORT=5001
GEMINI_API_KEY=AIza...your_google_gemini_api_key
```
- 🔑 Get your free API key at: https://aistudio.google.com

### 4. Command to run on terminal for reuslt 

```bash 
curl -X POST http://localhost:5001/process-meeting \
  -H "Content-Type: application/json" \
  -d '{"text": "- Launch on July 10\n- Raj to finalize testing report by July 7\n- Team agrees to focus on performance issues."}'

curl -X POST http://localhost:5001/process-meeting \
  -F "file=@samples/meeting1.txt"
```

### 5. Run the Server

```bash
npm run dev
# or
node app.js
```