import app from './server/server.js';
import { DEFAULT_PORT } from './config/env.js';

const PORT = DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
