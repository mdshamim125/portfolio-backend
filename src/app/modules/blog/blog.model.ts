// models/blog.model.ts
import { Schema, model, models, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  category?: string;
  tags?: string[];
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    category: {
      type: String,
      default: "General",
    },
    tags: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

export const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);
