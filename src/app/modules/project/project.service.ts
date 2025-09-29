import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status";
import { Project } from "./project.mode";

const getAllProjects = async () => {
  const projects = await Project.find().sort();
  return projects;
};

const getProjectById = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return project;
};

export const ProjectServices = {
  getAllProjects,
  getProjectById,
};
