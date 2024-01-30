import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
const router = express.Router();

//REGISTE || METHOD : POST
router.post("/register", registerController);

//LOGIN || METHOD : POST
router.post("/login", loginController);

export default router;
