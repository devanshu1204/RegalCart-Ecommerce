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

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
