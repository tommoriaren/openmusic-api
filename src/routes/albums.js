import express from 'express';
import AlbumsHandler from '../handlers/AlbumsHandler.js';

const router = express.Router();

router.post('/albums', AlbumsHandler.postAlbumHandler);
router.get('/albums/:id', AlbumsHandler.getAlbumByIdHandler);
router.put('/albums/:id', AlbumsHandler.putAlbumByIdHandler);
router.delete('/albums/:id', AlbumsHandler.deleteAlbumByIdHandler);

export default router;
