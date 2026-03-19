import Workout from "../models/Workout.js";

// Save workout
export const saveWorkout = async (req, res) => {
  try {
    // TODO : Add Validation
    const workout = new Workout(req.body);
    const saved = await workout.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

