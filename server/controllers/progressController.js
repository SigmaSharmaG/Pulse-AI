import Progress from "../models/Progress.js";

// Add progress
export const addProgress = async (req, res) => {
  try {
    // TODO : Add validation
    const progress = new Progress(req.body);
    const saved = await progress.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get progress
export const getProgress = async (req, res) => {
  try {
    const data = await Progress.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};