const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post("/add-book", async (req, res) => {
  const dataBook = new Book({
    title: req.body.title,
    book: req.body.book,
    author: req.body.author,
    kind: req.body.kind,
    genre: req.body.genre,
    yearReleased: req.body.yearReleased,
    position: req.body.position,
    review: req.body.review,
  });

  try {
    const book = await dataBook.save();
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const book = await Book.deleteOne({
      _id: req.params.ID,
    });
    res.json(book);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Book Updated",
      Data: book,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
