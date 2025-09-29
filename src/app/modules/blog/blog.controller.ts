/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await BlogServices.createBlog(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Blog created successfully",
      data: blog,
    });
  }
);

const getAllBlogs = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blogs = await BlogServices.getAllBlogs();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  }
);

const getBlogById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await BlogServices.getBlogById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog retrieved successfully",
      data: blog,
    });
  }
);

const updateBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await BlogServices.updateBlog(req.params.id, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog updated successfully",
      data: blog,
    });
  }
);

const deleteBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await BlogServices.deleteBlog(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blog deleted successfully",
      data: blog,
    });
  }
);

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
