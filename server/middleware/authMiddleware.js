import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  try {
    // Check header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user (without password)
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } else {
      res.status(401).json({ error: "Not authorized, no token" });
    }
  } catch (err) {
    res.status(401).json({ error: "Token failed" });
  }
};