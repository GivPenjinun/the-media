import express from "express";

import { registerWriter, loginWriter, logout } from "../controllers/auth.js";

const auth = express.Router();

auth.post("/registerWriter", registerWriter);
auth.post("/loginWriter", loginWriter);
auth.post("/logout", logout);

export default auth;
