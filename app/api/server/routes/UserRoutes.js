import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/:id', UserController.getAUser);
router.get('/:id/friends', UserController.getFriends);

export default router;
