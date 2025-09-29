import { z } from "zod";

export const blogCreateSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, "Title must be at least 3 characters long"),
  content: z
    .string({ required_error: "Content is required" })
    .min(10, "Content must be at least 10 characters long"),
  author: z
    .string({ required_error: "Author is required" })
    .min(2, "Author name must be at least 2 characters long"),
  category: z
    .string()
    .optional(), // optional field
  tags: z
    .array(z.string())
    .optional(), // optional tags
});

export const blogUpdateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").optional(),
  content: z.string().min(10, "Content must be at least 10 characters long").optional(),
  author: z.string().min(2, "Author name must be at least 2 characters long").optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
