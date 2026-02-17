import ClientError from '../exceptions/ClientError.js';

const errorHandler = (err, req, res, _next) => {
  console.error(err);

  // Client Error (400, 401, 403, 404)
  if (err instanceof ClientError) {
    return res.status(err.statusCode).json({
      status: 'fail',
      message: err.message,
    });
  }

  // Server Error (500)
  return res.status(500).json({
    status: 'error',
    message: 'Terjadi kegagalan pada server kami.',
  });
};

export default errorHandler;
