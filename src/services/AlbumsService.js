import pool from './pool.js';
import generateId from '../utils/nanoid.js';
import NotFoundError from '../exceptions/NotFoundError.js';

class AlbumsService {
  async addAlbum({ name, year }) {
    const id = generateId('album');

    const query = {
      text: `
        INSERT INTO albums (id, name, year)
        VALUES ($1, $2, $3)
        RETURNING id
      `,
      values: [id, name, year],
    };

    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async getAlbumById(id) {
    const query = {
      text: `
        SELECT
          albums.id,
          albums.name,
          albums.year,
          songs.id AS song_id,
          songs.title,
          songs.performer
        FROM albums
        LEFT JOIN songs
          ON songs.album_id = albums.id
        WHERE albums.id = $1
      `,
      values: [id],
    };

    const result = await pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Album tidak ditemukan');
    }

    const album = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      year: result.rows[0].year,
      songs: result.rows
        .filter((row) => row.song_id)
        .map((row) => ({
          id: row.song_id,
          title: row.title,
          performer: row.performer,
        })),
    };

    return album;
  }

  async editAlbumById(id, { name, year }) {
    const query = {
      text: `
        UPDATE albums
        SET name = $1,
            year = $2
        WHERE id = $3
        RETURNING id
      `,
      values: [name, year, id],
    };

    const result = await pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui album. Id tidak ditemukan');
    }
  }

  async deleteAlbumById(id) {
    const query = {
      text: `
        DELETE FROM albums
        WHERE id = $1
        RETURNING id
      `,
      values: [id],
    };

    const result = await pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Album gagal dihapus. Id tidak ditemukan');
    }
  }
}

export default AlbumsService;
