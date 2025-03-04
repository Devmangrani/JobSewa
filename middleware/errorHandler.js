const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // MongoDB connection errors
  if (err.name === "MongooseServerSelectionError") {
    return res.status(500).json({
      success: false,
      message: "Unable to connect to database. Please try again later.",
    });
  }

  // MongoDB validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: Object.values(err.errors).map((val) => val.message),
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid token. Please log in again.",
    });
  }

  // Default error
  return res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
};

export default errorHandler;
