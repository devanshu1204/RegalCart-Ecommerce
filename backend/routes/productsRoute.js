const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productDetails,
} = require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Route for getting all Products
router.route("/").get(getAllProducts);

// Route for Gemstones
router.route("/?section=Gemstones").get(getAllProducts);

// Route for getting Product details
router.route("/productDetails/:id").get(productDetails);

// Route for adding new Product
router
  .route("/createProduct")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// Route for updating a Product
router
  .route("/updateProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

// Route for deleting a Product
router
  .route("/deleteProduct/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
