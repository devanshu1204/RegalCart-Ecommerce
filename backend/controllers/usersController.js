const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const users = require("../models/usersModel");

// Register a User
exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await users.create({
    name,
    email,
    password,
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
});
