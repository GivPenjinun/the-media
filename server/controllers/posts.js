import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  let q;
  let queryParams;

  const title = req.query.title;

  if (req.query.category && title) {
    // Search by both category and partial title match (case-insensitive)
    q =
      "SELECT * FROM posts WHERE category = ? AND LOWER(title) LIKE LOWER(?) AND status=? ORDER BY created_at DESC";
    queryParams = [req.query.category, `%${title}%`, "publish"]; // Use '%' as wildcard for partial match
  } else if (req.query.category) {
    // Search only by category
    q =
      "SELECT * FROM posts WHERE category = ? AND status=? ORDER BY created_at DESC";
    queryParams = [req.query.category, "publish"];
  } else if (title) {
    // Search only by partial title match (case-insensitive)
    q =
      "SELECT * FROM posts WHERE LOWER(title) LIKE LOWER(?) AND status=? ORDER BY created_at DESC";
    queryParams = [`%${title}%`, "publish"]; // Use '%' as wildcard for partial match
  } else {
    // Retrieve all posts if no category or title specified
    q = "SELECT * FROM posts WHERE status=? ORDER BY created_at DESC";

    queryParams = ["publish"];
  }

  db.query(q, queryParams, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `content`, p.post_id , p.image, w.image AS writerImg, `category`,`created_at` FROM writers w JOIN posts p ON w.writer_id = p.created_by WHERE p.post_id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

//to delete post
export const deletePost = (req, res) => {
  //to check if it has token or not
  //const token = req.cookies.authToken;
  const token = req.headers["authorization"].replace("Bearer ", "");
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;

    const q = "DELETE FROM posts WHERE `post_id` = ? AND `created_by` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};
