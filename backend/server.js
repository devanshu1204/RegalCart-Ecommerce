import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

// loading env variables
dotenv.config({ path: "backend/config/config.env" });

// Connect to MongoDB
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening on port 5000");
});
