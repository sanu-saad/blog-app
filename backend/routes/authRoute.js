import express from "express";
import {
  signUpController,
  signInController,
} from "../controllers/authController.js";

const router = express.Router();

//REGISTER || METHOD : POST
router.post("/signup", signUpController);

//LOGIN || METHOD : POST
router.post("/signin", signInController);

export default router;
