import { Router } from 'express';
import { UserController } from '../controllers/user.js';

export const router: Router = Router();

router.post('/', UserController.create);

router.get('/:id', UserController.getById);

/* router.get("/", UserController.getAll); */
