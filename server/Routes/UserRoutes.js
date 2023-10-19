import express from 'express';
import { signin, signup } from '../Controllers/UserController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

/** EXPORT THE SUB ROUTERS */
const userRouter = router;
export default userRouter;