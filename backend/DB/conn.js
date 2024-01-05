import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { DB_URL } = process.env;
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Not connected", error);
  }
};
export default connectDB;
