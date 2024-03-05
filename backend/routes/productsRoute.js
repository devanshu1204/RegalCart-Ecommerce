const express = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productsController");

const router = express.Router();

// Route for getting all Products
router.route("/").get(getAllProducts);

// Route for adding new Product
router.route("/createProduct").post(createProduct);

module.exports = router;
