import express from 'express';
import AlbumsHandler from '../handlers/AlbumsHandler.js';

const router = express.Router();

router.post('/', AlbumsHandler.postAlbumHandler);
router.get('/:id', AlbumsHandler.getAlbumByIdHandler);
router.put('/:id', AlbumsHandler.putAlbumByIdHandler);
router.delete('/:id', AlbumsHandler.deleteAlbumByIdHandler);

export default router;
