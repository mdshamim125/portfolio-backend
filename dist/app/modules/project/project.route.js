"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
router.get("/", project_controller_1.ProjectControllers.getAllProjects);
router.get("/:id", project_controller_1.ProjectControllers.getProjectById);
exports.ProjectRoutes = router;
