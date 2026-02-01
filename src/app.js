import express from 'express';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(routes);

// ❗ HARUS PALING BAWAH
app.use(errorHandler);

export default app;
