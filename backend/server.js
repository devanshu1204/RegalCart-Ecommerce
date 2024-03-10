const app = require("./app");
const dotenv = require("dotenv");
const ConnectDB = require("./config/database");
// Bringing env variables
dotenv.config({ path: "backend/config/config.env" });

// Connect to MongoDB
ConnectDB();

app.get("/", (req, res) => {
  res.status(200).json("Api is working");
});

// listen to the server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// Handling Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
