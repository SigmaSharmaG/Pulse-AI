import Diet from "../models/Diet.js";

// Save diet
export const saveDiet = async (req, res) => {
  try {
    // TODO : Add Validation
    const diet = new Diet(req.body);
    const saved = await diet.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get diet
export const getDiet = async (req, res) => {
  try {
    const diet = await Diet.find({ userId: req.params.userId });
    res.json(diet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};