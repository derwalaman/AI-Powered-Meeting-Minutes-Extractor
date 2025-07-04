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

## 📂 Project Structure

AI-Powered-Meeting-Minutes-Extractor/
    |---backend
        |---controllers/meetingController.js
        |---routes/meetingRoutes.js
        |---samples/
        |---uploads/
        |---.env
        |---app.js
        |---gemini.js
        |---openai.js
        |---package-lock.json
        |---package.json

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

### 3. Create .env File

```bash
PORT=5001
GEMINI_API_KEY=AIza...your_google_gemini_api_key
```
- - 🔑 Get your free API key at: https://aistudio.google.com

### 4. Run the Server

```bash
npm run dev
# or
node app.js
```