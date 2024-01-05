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
const createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).send({
        message: "All fields require",
      });
    }
    const newBlog = new Blog({ title, description, image });
    await newBlog.save();
    return res.status(201).send({
      message: "Blog created",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Error while creating blog",
      error,
    });
  }
};

//UPDATE BLOG
const updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(201).send({
      message: "Blog updated",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error while updating blog",
      error,
    });
  }
};

//GET SINGLE BLOG
const getSingleBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(400).send({
        message: "not found blog",
      });
    }

    return res.status(201).send({
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error while get single blog",
      error,
    });
  }
};

//DELETE BLOG
const deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    return res.status(200).send({
      message : 'Delete blog'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error while deleting blog",
      error,
    });
  }
};

export {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
};
