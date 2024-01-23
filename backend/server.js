import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./DB/conn.js";
const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();

//router import
import authRoute from "./routes/authRoute.js";

//middleware
app.use(express.json());
app.use(cors());

//DB Conn
connectDB();

//routes
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
