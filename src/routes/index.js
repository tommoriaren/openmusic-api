import express from 'express';
import albumsRoutes from './albums.js';
import songsRoutes from './songs.js';

const router = express.Router();

router.use(albumsRoutes);
router.use(songsRoutes);

export default router;
