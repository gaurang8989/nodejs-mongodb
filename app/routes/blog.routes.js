module.exports = app => {
const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;

app.use("/api/blogs", router);

}