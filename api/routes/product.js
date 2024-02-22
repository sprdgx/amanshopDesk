const Product = require("../models/Product");
const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");


//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:productId", verifyTokenAndAdmin, async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProductData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//DELETE
router.delete("/:productId", verifyTokenAndAdmin, async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//GET PRODUCT
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCTS BY CATEGORYS

router.get("/category/:categoryName", async (req, res) => {
  const categoryName = req.params.categoryName;

  try {
    const products = await Product.find({
      categories: { $regex: new RegExp(categoryName, "i") },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching products by category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//GET PRODUCTS BY TITLE SEARCH
router.get("/search/:searchValue", async (req, res) => {
  const searchValue = req.params.searchValue;

  try {
    const products = await Product.find({
      title: { $regex: new RegExp(searchValue, "i") },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found matching the search" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching products by title:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;