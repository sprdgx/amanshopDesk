const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  { 
    title: {type:String,  unique:true },
    img: { type: String, required: true },
    cat: { type: String, required: true },
    gradiantColorOne:{ type: String, required: true},
    gradiantColorTwo:{ type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", CategoriesSchema);