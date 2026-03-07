import { Router } from 'express';
import type { Request, Response } from 'express';
import { router as taskRoutes } from './tasks.js';
import { router as userRoutes } from './user.js';

const router: Router = Router();

router.get('/health', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Api is Healty' });
});

router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

export default router;
