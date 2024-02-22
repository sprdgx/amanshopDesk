const Category = require("../models/Category");
const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");


// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const { title,cat, img, gradiantColorOne, gradiantColorTwo } = req.body;

    const newCategory = new Category({
      title,
      cat,
      img,
      gradiantColorOne,
      gradiantColorTwo,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});



router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting all categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// UPDATE CATEGORY
router.put("/:categoryId", verifyTokenAndAdmin, async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updatedCategoryData = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updatedCategoryData,
      {
        new: true,
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET CATEGORY BY NAME
router.get("/:categoryName", async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    const category = await Category.findOne({ cat: categoryName });
    
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error getting category by name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE CATEGORY
router.delete("/:categoryId", verifyTokenAndAdmin, async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndRemove(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
