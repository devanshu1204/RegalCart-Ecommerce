const express = require("express");
const app = express();

app.use(express.json());

// Route Imports
const product_route = require("./routes/productsRoute");
// this middleware will handle all the operations on products
app.use("/products", product_route);

module.exports = app;
