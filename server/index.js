import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

app.get("/test", (req, res) => {
  res.json("works");
});

app.listen(8800, () => {
  console.log("connected");
});
