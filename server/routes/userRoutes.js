import express from "express";
import {getProfile,registerUser,loginUser,} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// router.post("/",createUser);
// router.get("/profile", protect, getProfile);
// router.get("/:id",protect,getUser);

// To register new user
router.post("/register", registerUser);

// To login user
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, getProfile);


export default router;