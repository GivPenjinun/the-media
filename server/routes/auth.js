import express from "express";

//const { registerWriter, login, logout } = require("../controllers/auth.js");
import { registerWriter, login, logout } from "../controllers/auth.js";

const auth = express.Router();

auth.post("/registerWriter", registerWriter);
auth.post("/login", login);
auth.post("/logout", logout);

export default auth;
