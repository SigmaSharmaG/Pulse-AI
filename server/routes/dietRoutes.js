import express from "express";
import { saveDiet,getDiet } from "../controllers/dietController.js";
const router = express.Router();


router.post("/",saveDiet);
router.get("/:userId",getDiet);

export default router;