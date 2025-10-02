// validations/blog.validation.ts
import { z } from "zod";

export const createBlogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title cannot exceed 200 characters"),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters"),
  author: z
    .string()
    .min(2, "Author name must be at least 2 characters"),
  category: z.string().optional(),
  tags: z
    .array(z.string())
    .optional(),
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
});

export const updateBlogSchema = createBlogSchema.partial(); // all fields optional for updates

// TypeScript types
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
