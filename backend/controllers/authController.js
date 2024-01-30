import { hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";

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

const loginController = async (req, res) => {};

export { registerController, loginController };
