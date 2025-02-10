const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Location = require("../models/Location");

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// ✅ Add Location with Image Upload
router.post("/add-location", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Get image path

    const dataLocation = new Location({
      name: req.body.name,
      image: imageUrl, // Save image path
    });

    const location = await dataLocation.save();
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get All Locations
router.get("/", async (req, res) => {
  try {
    const location = await Location.find();
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Delete a Location
router.delete("/:ID", async (req, res) => {
  try {
    const location = await Location.deleteOne({ _id: req.params.ID });
    res.json({ message: "Location Deleted", Data: location });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Update Location
router.put("/:id", async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Location Updated", Data: location });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get Single Location by ID
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
