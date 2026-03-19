import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import dietRoutes from "./routes/dietRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

// Load dotenv
dotenv.config();

// Connect with database
connectDB();

// Create app instance
const app = express();


// Add middleware
app.use(express.json());

// console.log(process.env.OPENAI_API_KEY);
// Mount route
// const routes = require("./routes/taskRoutes");
// app.use("/api/",routes);

app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorHandler);


const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, () => {
    console.log(`App started at ${PORT}`);
})
