const mongoose = require("mongoose");

const SlidersSchema = new mongoose.Schema(
  { 
    imgs: { type: Array , required: true },
    imgsR: { type: Array},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sliders", SlidersSchema);
