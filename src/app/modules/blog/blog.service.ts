import AppError from "../../errorHelpers/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import httpStatus from "http-status";

const createBlog = async (payload: IBlog) => {
  const blog = await Blog.create(payload);
  return blog;
};

const getAllBlogs = async () => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return blogs;
};

const getBlogById = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return blog;
};

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const blog = await Blog.findByIdAndUpdate(id, payload, { new: true });
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return blog;
};

const deleteBlog = async (id: string) => {
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return blog;
};

export const BlogServices = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
