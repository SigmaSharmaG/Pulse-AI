import express from "express";
import { saveWorkout,getWorkouts } from "../controllers/workoutController.js";
const router = express.Router();



router.post("/",saveWorkout);
router.get("/:userId",getWorkouts);

export default router;