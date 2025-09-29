import { Router } from "express";
import { ProjectControllers } from "./project.controller";

const router = Router();

router.get("/", ProjectControllers.getAllProjects);
router.get("/:id", ProjectControllers.getProjectById);

export const ProjectRoutes = router;
