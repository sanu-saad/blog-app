import express from "express";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogController,
  getSingleBlogController,
  updateBlogController,
} from "../controllers/blogController.js";

const router = express.Router();

//GET ALL BLOG
router.get("/all-blog", getAllBlogController);

//CREATE BLOG
router.post("/create-blog", createBlogController);

//UPDATE BLOG
router.put("/update-blog/:id", updateBlogController);

//GET SINGLE BLOG
router.get("/get-blog/:id", getSingleBlogController);

//DELETE BLOG
router.delete("/delete-blog/:id", deleteBlogController);

export default router;
