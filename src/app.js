import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// Error handler (WAJIB PALING BAWAH)
app.use(errorHandler);

export default app;
