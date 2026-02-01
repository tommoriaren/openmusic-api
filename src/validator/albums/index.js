import { AlbumPayloadSchema } from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

const AlbumsValidator = {
  validateAlbumPayload(payload) {
    const { error } = AlbumPayloadSchema.validate(payload);

    if (error) {
      throw new InvariantError(error.message);
    }
  },
};

export default AlbumsValidator;
