const notFound = (req, res, next) => {
  console.log('Not Found Called');
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  console.log('Error handler called');

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(500).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

export { notFound, errorHandler };
