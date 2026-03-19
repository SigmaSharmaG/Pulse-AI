import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: {
    type: Date,
    default: Date.now,
  },

  weight: Number,

  workoutCompleted: Boolean,

  feedback: {
    type: String,
    enum: ["too_easy", "too_hard", "perfect"],
  },

  notes: String,
});

export default mongoose.model("Progress", progressSchema);