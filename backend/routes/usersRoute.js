const express = require("express");
const {
  register,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  userProfile,
} = require("../controllers/usersController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, userProfile);
module.exports = router;
