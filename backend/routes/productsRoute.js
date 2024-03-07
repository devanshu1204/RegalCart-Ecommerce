const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productDetails,
} = require("../controllers/productsController");

const router = express.Router();

// Route for getting all Products
router.route("/").get(getAllProducts);

// Route for getting Product details
router.route("/productDetails/:id").get(productDetails);

// Route for adding new Product
router.route("/createProduct").post(createProduct);

// Route for updating a Product
router.route("/updateProduct/:id").put(updateProduct);

// Route for deleting a Product
router.route("/deleteProduct/:id").delete(deleteProduct);

module.exports = router;
