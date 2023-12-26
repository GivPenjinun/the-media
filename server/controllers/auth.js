import { db } from "../db.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const registerWriter = (req, res) => {
  //CHECK EXISTING USER
  const query = "SELECT * FROM writers WHERE email = ? OR username = ?";

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const id = uuidv4();
    const q =
      "INSERT INTO writers(`writer_id`,`username`,`email`,`password`) VALUES (?)";
    const values = [id, req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const loginWriter = (req, res) => {
  //CHECK USER
  try {
    const q = "SELECT * FROM writers WHERE email = ?";

    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");

      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );

      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");

      const token = jwt.sign({ id: data[0].writer_id }, "jwtkey", {
        expiresIn: "1hr",
      });

      //For not sending password with json
      const { password, ...other } = data[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: true, // Set to true if your application is served over HTTPS
          sameSite: "None", // Set to "None" for cross-site requests
        })
        .status(200)
        .json({ other, token });
    });
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
