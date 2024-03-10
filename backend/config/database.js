const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongodb connected with server: ${conn.connection.host}`);
};

module.exports = connectDB;
