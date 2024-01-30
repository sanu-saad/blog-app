import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }
    // CHECK USER
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exist",
      });
    }
    //REGISTER USER
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newUser.save();
    return res.status(200).send({
      success: true,
      message: "User registered",
      newUser,
    });
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }
    //CHECK USER
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not exist",
      });
    }
    //PASSWORD MATCH
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Incorrect email or password",
      });
    }
    //TOKEN
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "User login successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      token: token,
    });
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
