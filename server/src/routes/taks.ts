import { Router } from 'express';

export const router: Router = Router();

router.get('/ping', (_req, res) => {
  res.send('Pong');
});
