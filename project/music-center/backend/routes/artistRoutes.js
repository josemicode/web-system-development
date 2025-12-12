import { Router } from 'express';
import * as ArtistController from '../controllers/artistController.js';

const router = Router();

router.get('/', ArtistController.listArtists);
router.get('/:id', ArtistController.getArtist);
router.post('/', ArtistController.createArtist);
router.put('/:id', ArtistController.updateArtist);
router.delete('/:id', ArtistController.deleteArtist);

export default router;
