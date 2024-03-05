const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
    },
  ],
});
