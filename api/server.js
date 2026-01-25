

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { getCollections } from './config/db.js';

dotenv.config();

const app = express();

// CORS — frontend only
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      process.env.FRONTEND_URL, // 👈 your Vercel frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

// API route
app.get('/getProjects', async (req, res) => {
  try {
    const projects = await getCollections();

    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Health check (IMPORTANT for Render)
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

const PORT = process.env.PORTSERVER || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
