import mongoose from "mongoose";

const gemstonesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User,",
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    cut: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    clarity: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const gemstones = mongoose.model("gemstones", gemstonesSchema);

export default gemstones;