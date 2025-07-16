const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    merk: { type: String, required: true },
    model: { type: String },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    specs: {
      engine: String,
      transmission: String,
      fuel: String,
    },
    images: [String], // path gambar
    description: String,
    location: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
