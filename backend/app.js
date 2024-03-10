const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());

// Route Imports
const product_route = require("./routes/productsRoute");
const user_route = require("./routes/usersRoute");
// this middleware will handle all the operations on products
app.use("/products", product_route);
app.use("/user", user_route);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
