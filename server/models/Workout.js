import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  week: Number,
  plan: [
    {
      day: String,
      exercises: [
        {
          name: String,
          sets: Number,
          reps: Number,
        },
      ],
    },
  ],

  difficulty: {
    type: String,
    default: "normal",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Workout", workoutSchema);