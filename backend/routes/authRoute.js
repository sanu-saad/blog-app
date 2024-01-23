import express from "express";
import { registerController } from "../controllers/authController.js";
const router = express.Router();

//REGISTE || METHOD : POST
router.post("/register", registerController);

export default router;
