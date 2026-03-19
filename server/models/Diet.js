import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  dailyPlan: {
    breakfast: String,
    lunch: String,
    dinner: String,
    snacks: String,
  },

  calories: Number,
  protein: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Diet", dietSchema);