import express from "express";
import { addFav, deleteFav, getFav } from "../controllers/readers.js";
import { protect } from "../middlewares/protect.js";

const readers = express.Router();

readers.use(protect);

readers.get("/", getFav);
readers.post("/:postId", addFav);
//readers.post("/:readerId/:postId", addFav);
readers.delete("/:favpostId", deleteFav);

export default readers;
