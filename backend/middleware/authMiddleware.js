import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

//Protected routes token base
const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//Admin access
const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user.role !== 1) {
    return res.status(500).send({
      status: false,
      message: "Unauthorized access",
    });
  } else {
    next();
  }
};
export { requireSignIn, isAdmin };
