import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/create-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Nakul Gupta",
      email: "nakul@gmail.com",
      password: "123456",
      role: "admin",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;