import { Router } from 'express';
import * as TrackController from '../controllers/trackController.js';

const router = Router();

router.get('/', TrackController.listTracks);
router.get('/:id', TrackController.getTrack);
router.post('/', TrackController.createTrack);
router.put('/:id', TrackController.updateTrack);
router.delete('/:id', TrackController.deleteTrack);

export default router;
