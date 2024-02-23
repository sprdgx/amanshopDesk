const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  { 
    img: { type: String, required: true },
    cat: { type: String, required: true },
    gradiantColorOne:{ type: String, required: true},
    gradiantColorTwo:{ type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", CategoriesSchema);