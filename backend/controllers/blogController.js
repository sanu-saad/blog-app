import Blog from "../models/blogModel.js";

//GET ALL BLOG
const getAllBlogController = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs) {
      return res.status(400).send({
        message: "No blog found",
      });
    }
    return res.status(200).send({
      BlogCount: blogs.length,
      message: "All blog list",
      blogs,
    });
  } catch (error) {
    return res.status(400).send({
      message: "error in get all blog",
      error,
    });
  }
};

//CREATE BLOG
const createBlogController = async (req, res) => {};

//UPDATE BLOG
const updateBlogController = async (req, res) => {};

//GET SINGLE BLOG
const getSingleBlogController = async (req, res) => {};

//DELETE BLOG
const deleteBlogController = async (req, res) => {};

export {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
};
