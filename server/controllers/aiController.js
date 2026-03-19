import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper function to extract text safely
const getText = (response) => {
  try {
    return response.output[0].content[0].text;
  } catch {
    return "No response generated";
  }
};

// ================= WORKOUT AI =================
export const generateWorkout = async (req, res) => {
  try {
    const { age, weight, goal, level } = req.body;

    // ✅ Validation
    if (!age || !weight || !goal || !level) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const prompt = `
    Create a detailed 7-day workout plan.
    Age: ${age}
    Weight: ${weight}
    Goal: ${goal}
    Level: ${level}
    
    Include:
    - Daily exercises
    - Sets and reps
    - Rest time
    - Tips for form
    `;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    res.json({ plan: getText(response) });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= DIET AI =================
export const generateDiet = async (req, res) => {
  try {
    const { weight, goal } = req.body;

    // ✅ Validation
    if (!weight || !goal) {
      return res.status(400).json({ error: "Weight and goal are required" });
    }

    const prompt = `
    Create a detailed Indian diet plan.
    Weight: ${weight}
    Goal: ${goal}
    
    Include:
    - Breakfast, lunch, dinner
    - Snacks
    - Calories per meal
    - Protein intake
    `;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    res.json({ diet: getText(response) });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= CHAT AI =================
export const chatAI = async (req, res) => {
  try {
    const { messages } = req.body;

    // ✅ Validation
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages must be an array" });
    }

    // Convert chat format → plain input
    const formattedInput = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: formattedInput,
    });

    res.json({ reply: getText(response) });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};