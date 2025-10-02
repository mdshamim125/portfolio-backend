import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBlogSchema, updateBlogSchema } from "./blog.validation";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post(
  "/",
  checkAuth(),
  validateRequest(createBlogSchema),
  BlogControllers.createBlog
);
router.get("/", BlogControllers.getAllBlogs);
router.get("/:blogId", BlogControllers.getBlogById);
router.put(
  "/:id",
  checkAuth(),
  validateRequest(updateBlogSchema),
  BlogControllers.updateBlog
);
router.delete("/:blogId", checkAuth(), BlogControllers.deleteBlog);

export const BlogRoutes = router;
