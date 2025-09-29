/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const getAllProjects = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const projects = await ProjectServices.getAllProjects();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Projects retrieved successfully",
      data: projects,
    });
  }
);

const getProjectById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const project = await ProjectServices.getProjectById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project retrieved successfully",
      data: project,
    });
  }
);

export const ProjectControllers = {
  getAllProjects,
  getProjectById,
};
