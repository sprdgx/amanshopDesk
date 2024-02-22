const Sliders = require("../models/sliders");
const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");


// CREATE Slider
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const { imgs, imgsR } = req.body;

  try {
    const newSlider = new Sliders({ imgs, imgsR });
    const savedSlider = await newSlider.save();
    res.status(200).json(savedSlider);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE Slider
router.put("/:sliderId/addImage", verifyTokenAndAdmin, async (req, res) => {
  try {
    const sliderId = req.params.sliderId;
    const updatedSliderData = req.body;
    const updatedSlider = await Sliders.findByIdAndUpdate(
      sliderId,
      updatedSliderData,
      { new: true }
    );

    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    res.status(200).json(updatedSlider);
  } catch (error) {
    console.error("Error updating slider by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:sliderId/deleteImage", verifyTokenAndAdmin, async (req, res) => {
  try {
    console.log("Delete image request received");
    const sliderId = req.params.sliderId;
    const { imgIndex, isResponsive } = req.body;
    console.log("Slider ID:", sliderId);
    console.log("Image Index:", imgIndex);
    console.log("Is Responsive:", isResponsive);

    // Find the slider by ID
    const slider = await Sliders.findById(sliderId);

    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    // Determine the array to update based on isResponsive flag
    const imgArray = isResponsive ? 'imgsR' : 'imgs';
    // Remove the image at the specified index from the appropriate array
    slider[imgArray].splice(imgIndex, 1);

    // Save the updated slider
    const updatedSlider = await slider.save();

    res.status(200).json(updatedSlider);
  } catch (error) {
    console.error("Error deleting image from slider:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// GET Slider
router.get("/:sliderId", async (req, res) => {
  try {
    const sliderId = req.params.sliderId;
    const slider = await Sliders.findById(sliderId);

    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    res.status(200).json(slider);
  } catch (error) {
    console.error("Error getting slider by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET ALL Sliders
router.get("/", async (req, res) => {
  try {
    const sliders = await Sliders.find();
    res.status(200).json(sliders);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
