
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database successfully");

    }
    catch(error){
        console.log(`Connection denied due to ${error}`);
    }
}

// module.exports = connectDB;