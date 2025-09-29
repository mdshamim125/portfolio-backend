"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogUpdateSchema = exports.blogCreateSchema = void 0;
const zod_1 = require("zod");
exports.blogCreateSchema = zod_1.z.object({
    title: zod_1.z
        .string({ required_error: "Title is required" })
        .min(3, "Title must be at least 3 characters long"),
    content: zod_1.z
        .string({ required_error: "Content is required" })
        .min(10, "Content must be at least 10 characters long"),
    author: zod_1.z
        .string({ required_error: "Author is required" })
        .min(2, "Author name must be at least 2 characters long"),
    category: zod_1.z
        .string()
        .optional(), // optional field
    tags: zod_1.z
        .array(zod_1.z.string())
        .optional(), // optional tags
});
exports.blogUpdateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, "Title must be at least 3 characters long").optional(),
    content: zod_1.z.string().min(10, "Content must be at least 10 characters long").optional(),
    author: zod_1.z.string().min(2, "Author name must be at least 2 characters long").optional(),
    category: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
