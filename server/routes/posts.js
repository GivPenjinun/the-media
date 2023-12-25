import express from "express";

const posts = express.Router();

posts.get("/", (req, res) => {
  res.json("s");
});

export default posts;
