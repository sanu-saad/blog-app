import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

//REGISTER || METHOD : POST
router.post("/register", registerController);

//LOGIN || METHOD : POST
router.post("/login", loginController);

//Protected Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
