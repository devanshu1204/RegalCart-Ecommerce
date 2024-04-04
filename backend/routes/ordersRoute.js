const express = require("express");
const router = express.Router();

const { newOrder } = require("../controllers/ordersController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/newOrder").post(isAuthenticatedUser ,newOrder);

module.exports = router
