import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in loginController",
      error,
    });
  }
};

export { registerController, loginController };
