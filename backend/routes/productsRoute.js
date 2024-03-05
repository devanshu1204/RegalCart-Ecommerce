const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productsController");

const router = express.Router();

// Route for getting all Products
router.route("/").get(getAllProducts);

// Route for adding new Product
router.route("/createProduct").post(createProduct);

router.route("/updateProduct/:id").put(updateProduct);

module.exports = router;
