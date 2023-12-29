import express from "express";

import {
  registerWriter,
  loginWriter,
  registerReader,
  loginReader,
  logout,
} from "../controllers/auth.js";

const auth = express.Router();

auth.post("/registerReader", registerReader);
auth.post("/loginReader", loginReader);
auth.post("/registerWriter", registerWriter);
auth.post("/loginWriter", loginWriter);
auth.post("/logout", logout);

export default auth;
