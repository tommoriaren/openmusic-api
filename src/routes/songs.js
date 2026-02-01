import express from 'express';
import SongsHandler from '../handlers/SongsHandler.js';

const router = express.Router();

// POST /songs
router.post('/songs', SongsHandler.postSongHandler);

// GET /songs
router.get('/songs', SongsHandler.getSongsHandler);

// GET /songs/:id
router.get('/songs/:id', SongsHandler.getSongByIdHandler);

// PUT /songs/:id
router.put('/songs/:id', SongsHandler.putSongByIdHandler);

// DELETE /songs/:id
router.delete('/songs/:id', SongsHandler.deleteSongByIdHandler);

export default router;
