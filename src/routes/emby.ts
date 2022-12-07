import { Router } from 'express';
import proxy from '../controllers/proxy';

const router = Router();

router.use([], proxy.addApiKey);

export default router;

