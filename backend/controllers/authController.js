import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(401).send({
        success: false,
        message: "User already exist",
      });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashPass });
    await newUser.save();
    return res.status(201).send({
      success: true,
      message: "new user created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in signup controller",
      error,
    });
  }
};

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(400).send({
        success: false,
        message: "user not valid",
      });
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(400).send({
        success: false,
        message: "password not valid",
      });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(validUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in signin Controller",
      error,
    });
  }
};

export { signUpController, signInController };
