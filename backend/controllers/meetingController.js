import fs from 'fs';
import { extractInsights } from '../gemini.js';

export const processMeeting = async (req, res) => {
    console.log('📩 Incoming request received!');

    try {
        let content = req.body.text;

        if (req.file) {
            console.log('📎 File uploaded:', req.file.path);
            content = fs.readFileSync(req.file.path, 'utf-8');
        }

        if (!content || content.trim() === '') {
            console.log('⚠️ Empty input received');
            return res.status(400).json({ error: 'No meeting text provided' });
        }

        const result = await extractInsights(content);
        res.json(result);
    } catch (error) {
        console.error('❌ Error:', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
};