import express from 'express';
import { DEFAULT_PORT } from './config/env.js';
import { router } from './routes/taks.js';

const PORT = DEFAULT_PORT;

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Working' });
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
