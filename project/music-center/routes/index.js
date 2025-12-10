import { Router } from 'express';
import artistRoutes from './artistRoutes.js';
import albumRoutes from './albumRoutes.js';
import trackRoutes from './trackRoutes.js';

const router = Router();

router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);
router.use('/tracks', trackRoutes);

export default router;
