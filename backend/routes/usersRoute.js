const express = require("express");
const {
  register,
  loginUser,
  logout,
  forgotPassword,
  checkemail,
} = require("../controllers/usersController");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

module.exports = router;
