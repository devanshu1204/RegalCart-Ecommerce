const express = require("express");
const { register } = require("../controllers/usersController");
const router = express.Router();

router.route("/register").post(register);

module.exports = router;
