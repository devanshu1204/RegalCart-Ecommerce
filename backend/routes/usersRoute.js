const express = require("express");
const { register, loginUser } = require("../controllers/usersController");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(loginUser);

module.exports = router;
