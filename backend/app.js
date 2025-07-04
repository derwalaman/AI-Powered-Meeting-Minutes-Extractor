import express from 'express';
import dotenv from 'dotenv';
import meetingRoutes from './routes/meetingRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// ✅ ADD THIS TEST ROUTE
app.get('/', (req, res) => {
  res.send('✅ Server is live!');
});

// Main API route
app.use('/process-meeting', meetingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
