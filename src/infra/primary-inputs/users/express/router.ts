import { container } from '@infra/shared/awilix';
import { Router } from 'express';

const router = Router();
const createUserController = container.resolve('createUserController');
const loginUserController = container.resolve('loginUserController');

router.post('/register', (req, res) => createUserController.handle(req, res));
router.post('/login', (req, res) => loginUserController.handle(req, res));

export { router as usersRouter };
