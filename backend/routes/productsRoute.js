const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productDetails,
  uploadImages,
  allproducts,
} = require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Route for getting all Products
router.route("/").get(getAllProducts);

// Route for Gemstones
router.route("/?section=Gemstones").get(getAllProducts);

// Route for Jewellery
router.route("/?section=Jewellery").get(getAllProducts);

// Route for getting Product details
router.route("/productDetails/:id").get(productDetails);

// Route for getting all products --admin  (opens in admin dashboard)
router
  .route("/allproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allproducts);

// Route for adding new Product --admin
router
  .route("/createProduct")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    uploadImages,
    createProduct
  );

// Route for updating a Product --admin
router
  .route("/updateProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

// Route for deleting a Product --admin
router
  .route("/deleteProduct/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
