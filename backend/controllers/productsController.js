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
