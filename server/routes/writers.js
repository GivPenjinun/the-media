import express from "express";
import { getWriter, updateWriter } from "../controllers/writers.js";
import { protect } from "../middlewares/protect.js";

const writers = express.Router();

writers.use(protect);

writers.get("/:id", getWriter);
writers.put("/:id", updateWriter);

export default writers;
