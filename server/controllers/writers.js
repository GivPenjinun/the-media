import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getWriter = (req, res) => {
  const q = "SELECT * FROM writers WHERE writer_id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, email, image, ...other } = data[0];
    return res.status(200).json(other);
  });
};

export const updateWriter = (req, res) => {
  const q = "UPDATE writers SET `image` = ? WHERE `writer_id` = ? ";
  //console.log(req.body.image);
  //console.log(req.params.id);
  db.query(q, [req.body.image, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Writer's data has been updated.");
  });
};
