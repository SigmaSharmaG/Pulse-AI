import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },

  age: Number,
  height: Number, // cm
  weight: Number, // kg

  goal: {
    type: String,
    enum: ["fat_loss", "muscle_gain", "maintenance"],
  },

  experienceLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },

  dietPreference: {
    type: String,
    enum: ["veg", "non_veg", "vegan"],
  },

  gamification: {
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    streak: { type: Number, default: 0 },
    badges: [String],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);