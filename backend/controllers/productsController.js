const products = require("../models/productsModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");
const upload = require("../middleware/multerMiddleware");

// Create New Product --Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const {
    section,
    id,
    name,
    price,
    weight,
    description,
    category,
    cut,
    colour,
    clarity,
    countInStock,
  } = req.body;

  const image = req.files.map((file) => file.path);

  const product = await products.create({
    section,
    id,
    name,
    price,
    weight,
    image,
    description,
    category,
    cut,
    colour,
    clarity,
    countInStock,
    user: req.user.id,
  });

  res.status(201).json({
    success: true,
    product,
  });
});
// Uploading images
exports.uploadImages = upload.array("image");

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const resultPerPage = 20;

  const apiFeature = new ApiFeatures(products.find(), req.query)
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;

  res.status(200).json({
    success: true,
    product,
  });
});

// Get Product Details
exports.productDetails = catchAsyncError(async (req, res, next) => {
  const product = await products.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product --admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await products.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 500));
  }

  product = await products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product --admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await products.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 500));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
