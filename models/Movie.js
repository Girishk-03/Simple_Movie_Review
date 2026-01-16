import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  tmdbId: Number,
  title: String,
  poster: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Movie", movieSchema);
