import express from "express";
import {
  generateWorkout,
  generateDiet,
  chatAI,
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/workout", generateWorkout);
router.post("/diet", generateDiet);
router.post("/chat", chatAI);

export default router;