import { db } from "../db.js";

export const getFav = (req, res) => {
  const q = `
    SELECT
      w.username AS writerUsername,
      p.title,
      p.content,
      p.created_at,
      p.post_id,
      p.image AS postImage,
      w.image AS writerImage,
      p.category,
      p.updated_at,
      f.fav_posts_id
    FROM
      posts p
      JOIN fav_posts f ON p.post_id = f.post_id
      JOIN writers w ON p.created_by = w.writer_id
    WHERE
      f.reader_id = ?
      ORDER BY p.updated_at DESC;
  `;

  db.query(q, [req.user.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

//add new favorite post
export const addFav = (req, res) => {
  const postId = req.params.postId;
  const readerId = req.user.id;

  // Check if the post is already favorited
  const selectQuery =
    "SELECT * FROM fav_posts WHERE post_id = ? AND reader_id = ?";
  db.query(selectQuery, [postId, readerId], (selectErr, selectData) => {
    if (selectErr) {
      return res.status(500).json(selectErr);
    }

    if (selectData.length > 0) {
      // Post is already favorited
      return res.status(409).json("Favorite Post already exists!");
    }

    // Insert a new record into fav_posts
    const insertQuery =
      "INSERT INTO fav_posts (post_id, reader_id) VALUES (?, ?)";
    db.query(insertQuery, [postId, readerId], (insertErr, insertData) => {
      if (insertErr) {
        return res.status(500).json(insertErr);
      }

      return res.json("Favorite Post has been created.");
    });
  });
};

//to delete post
export const deleteFav = (req, res) => {
  const favpostId = req.params.favpostId;

  const q = "DELETE FROM fav_posts WHERE `fav_posts_id` = ? ";

  db.query(q, [favpostId], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post!");

    return res.json("Post has been deleted!");
  });
};
