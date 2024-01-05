import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./DB/conn.js";
const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();

//router import
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

//middleware
app.use(express.json());
app.use(cors());

//DB Conn
connectDB();

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
