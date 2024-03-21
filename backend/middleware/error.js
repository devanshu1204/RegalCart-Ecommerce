const ErrorHander = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Ivalid: ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Account already exists`;
    err = new ErrorHander(message, 400);
  }

  // JWT expire error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
