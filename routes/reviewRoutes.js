import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// Add review
router.post("/", async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
});

// Get reviews
router.get("/:movieId", async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.movieId })
    .sort({ createdAt: -1 });
  res.json(reviews);
});

// Edit review
router.put("/:id", async (req, res) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { ...req.body, edited: true },
    { new: true }
  );
  res.json(review);
});

// Delete review
router.delete("/:id", async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
