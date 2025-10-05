// validations/blog.validation.ts
import { z } from "zod";

export const createBlogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title cannot exceed 200 characters"),

  content: z.string().min(10, "Content must be at least 10 characters"),

  author: z.string().min(2, "Author name must be at least 2 characters"),

  category: z.string().min(1, "Category is required"),
  tags: z
    .union([
      z.string(), // allow single string
      z.array(z.string()), // allow array of strings
    ])
    .optional(),

  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
});

// Update schema (all fields optional)
export const updateBlogSchema = createBlogSchema.partial();

// TypeScript types
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
