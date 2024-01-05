import express from "express";
import {
  getAllUsers,
  loginController,
  registerController,
} from "../controllers/userController.js";

const router = express.Router();

//GET USERS
router.get("/all-users", getAllUsers);

//CREATE USER
router.post("/register", registerController);

//LOGIN USER
router.post("/login", loginController);
export default router;
