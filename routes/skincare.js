const express = require("express");
const router = express.Router();
const Skincare = require("../models/Skincare");
// const verifyToken = require('../config/verifyToken')

router.post("/create", async (req, res) => {
  const dataSkincare = new Skincare({
    name: req.body.name,
    type: req.body.type,
    expiredYear: req.body.expiredYear,
    stock: req.body.stock,
    amountLeft: req.body.amountLeft,
    uofmeasurement: req.body.uofmeasurement,
    position: req.body.position,
    review: req.body.review,
  });

  try {
    const skincare = await dataSkincare.save();
    res.json(skincare);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const skincare = await Skincare.find();
    res.json(skincare);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const skincare = await Skincare.deleteOne({
      _id: req.params.ID,
    });
    res.json(skincare);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});
module.exports = router;
