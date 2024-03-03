import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "backend/config/config.env" });

app.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening on port 5000");
});
