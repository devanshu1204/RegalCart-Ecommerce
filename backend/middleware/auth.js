const users = require("../models/usersModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  console.log(token);

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await users.findById(decodedData.id);

  next();
});
