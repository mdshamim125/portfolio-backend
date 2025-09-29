import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    coverImage: { type: String },
    published: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

export const Blog = model("Blog", blogSchema);
