import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  let q;
  let queryParams;

  const title = req.query.title;

  if (req.query.category && title) {
    // Search by both category and partial title match (case-insensitive)
    q =
      "SELECT * FROM posts WHERE category = ? AND LOWER(title) LIKE LOWER(?) AND status=? ORDER BY updated_at DESC";
    queryParams = [req.query.category, `%${title}%`, "publish"]; // Use '%' as wildcard for partial match
  } else if (req.query.category) {
    // Search only by category
    q =
      "SELECT * FROM posts WHERE category = ? AND status=? ORDER BY updated_at DESC";
    queryParams = [req.query.category, "publish"];
  } else if (title) {
    // Search only by partial title match (case-insensitive)
    q =
      "SELECT * FROM posts WHERE LOWER(title) LIKE LOWER(?) AND status=? ORDER BY updated_at DESC";
    queryParams = [`%${title}%`, "publish"]; // Use '%' as wildcard for partial match
  } else {
    // Retrieve all posts if no category or title specified
    q = "SELECT * FROM posts WHERE status=? ORDER BY updated_at DESC";

    queryParams = ["publish"];
  }

  db.query(q, queryParams, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `content`, p.post_id , p.image, w.image AS writerImg, `category`,`updated_at` FROM writers w JOIN posts p ON w.writer_id = p.created_by WHERE p.post_id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const q =
    "INSERT INTO posts(`title`, `content`, `image`, `category`, `created_at`, `updated_at`, `status`,`created_by`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.content,
    req.body.image,
    req.body.category,
    req.body.created_at,
    req.body.updated_at,
    req.body.status,
    req.user.id,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created.");
  });
};

//to delete post
export const deletePost = (req, res) => {
  const postId = req.params.id;

  const q = "DELETE FROM posts WHERE `post_id` = ? AND `created_by` = ?";

  db.query(q, [postId, req.user.id], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post!");

    return res.json("Post has been deleted!");
  });
};

export const updatePost = (req, res) => {
  const postId = req.params.id;
  const q =
    "UPDATE posts SET `title`=?,`content`=?,`image`=?,`category`=?, `status`=?,`updated_at`=? WHERE `post_id` = ? AND `created_by` = ?";

  const values = [
    req.body.title,
    req.body.content,
    req.body.image,
    req.body.category,
    req.body.status,
    req.body.updated_at,
  ];

  db.query(q, [...values, postId, req.user.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been updated.");
  });
};
