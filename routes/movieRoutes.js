import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// Save movie if not exists
router.post("/save", async (req, res) => {
  const { tmdbId, title, poster } = req.body;

  let movie = await Movie.findOne({ tmdbId });
  if (!movie) {
    movie = await Movie.create({ tmdbId, title, poster });
  }
  res.json(movie);
});

export default router;
