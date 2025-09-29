import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

export const Project = model<IProject>("Project", projectSchema);
