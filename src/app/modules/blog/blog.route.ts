import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { blogCreateSchema, blogUpdateSchema } from "./blog.validation";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post(
  "/",
  checkAuth(),
  validateRequest(blogCreateSchema),
  BlogControllers.createBlog
);
router.get("/", BlogControllers.getAllBlogs);
router.get("/:id", BlogControllers.getBlogById);
router.put(
  "/:id",
  checkAuth(),
  validateRequest(blogUpdateSchema),
  BlogControllers.updateBlog
);
router.delete("/:id", checkAuth(), BlogControllers.deleteBlog);

export const BlogRoutes = router;
