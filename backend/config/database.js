const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${conn.connection.host}`);
    });
};

module.exports = connectDB;
