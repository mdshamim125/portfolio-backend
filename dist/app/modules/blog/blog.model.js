"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
// models/blog.model.ts
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true, // auto adds createdAt & updatedAt
});
exports.Blog = mongoose_1.models.Blog || (0, mongoose_1.model)("Blog", BlogSchema);
