import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";
import { protect } from "../middlewares/protect.js";

const posts = express.Router();

//posts.use(protect);

posts.get("/", getPosts);
posts.get("/:id", protect, getPost);
posts.post("/", protect, addPost);
posts.delete("/:id", protect, deletePost);
posts.put("/:id", protect, updatePost);

export default posts;
