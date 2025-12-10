import { Router } from 'express';
import * as AlbumController from '../controllers/albumController.js';

const router = Router();

router.get('/', AlbumController.listAlbums);
router.get('/:id', AlbumController.getAlbum);
router.post('/', AlbumController.createAlbum);
router.put('/:id', AlbumController.updateAlbum);
router.delete('/:id', AlbumController.deleteAlbum);

export default router;
