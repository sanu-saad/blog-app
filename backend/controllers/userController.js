import User from "../models/user.js";
import bcrypt from "bcrypt";

//register user
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({
        message: "Please fill all the fields",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        message: "user already exist",
      });
    }
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //save new user
    const user = new User({ username, email, password: hashPassword });
    await user.save();
    return res.status(201).send({
      message: "user created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in register callback",
      error,
    });
  }
};

//get all user
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(201).send({
      message: "All users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Err in get all users",
      error,
    });
  }
};

//login user
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: "All fields are req.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "email is not register.",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        message: "Invalid username or password.",
      });
    }
    return res.status(200).send({
      message: "login sucessfull",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Err in login users",
      error,
    });
  }
};

export { getAllUsers, registerController, loginController };
