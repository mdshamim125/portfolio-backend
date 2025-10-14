"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = void 0;
// validations/blog.validation.ts
const zod_1 = require("zod");
exports.createBlogSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(200, "Title cannot exceed 200 characters"),
    content: zod_1.z.string().min(10, "Content must be at least 10 characters"),
    author: zod_1.z.string().min(2, "Author name must be at least 2 characters"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z
        .union([
        zod_1.z.string(), // allow single string
        zod_1.z.array(zod_1.z.string()), // allow array of strings
    ])
        .optional(),
    thumbnail: zod_1.z.string().url("Thumbnail must be a valid URL").optional(),
});
// Update schema (all fields optional)
exports.updateBlogSchema = exports.createBlogSchema.partial();
