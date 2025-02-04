const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.post("/add-location", async (req, res) => {
  const dataLocation = new Location({
    name: req.body.name,
    image: req.body.image,
    
  });

  try {
    const location = await dataLocation.save();
    res.json(location);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const location = await Location.find();
    res.json(location);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const location = await Location.deleteOne({
      _id: req.params.ID,
    });
    res.json(location);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Location Updated",
      Data: location,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
