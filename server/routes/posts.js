import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const posts = express.Router();

posts.get("/", getPosts);
posts.get("/:id", getPost);
posts.post("/", addPost);
posts.delete("/:id", deletePost);
posts.put("/:id", updatePost);

export default posts;
