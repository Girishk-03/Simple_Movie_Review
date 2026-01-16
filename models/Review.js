import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieId: mongoose.Schema.Types.ObjectId,
  reviewer: String,
  rating: Number,
  comment: String,
  edited: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", reviewSchema);
