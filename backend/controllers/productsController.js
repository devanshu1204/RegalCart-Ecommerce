const products = require("../models/productsModel");

// Create New Product --Admin
exports.createProduct = async (req, res, next) => {
  const product = await products.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get all products
exports.getAllProducts = async (req, res) => {
  const product = await products.find();

  res.status(200).json({
    success: true,
    product,
  });
};

// Update Product --admin
exports.updateProduct = async (req, res, next) => {
  let product = await products.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
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
};

// Delete Product --admin
exports.deleteProduct = async (req, res, next) => {
  const product = await products.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await products.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};
