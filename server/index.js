import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import writerRoutes from "./routes/writers.js";
import readerRoutes from "./routes/readers.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import "dotenv/config";
const PORT = process.env.PORT || 8800;

const app = express();
//to use middleware for all API
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);
app.use("/writer", writerRoutes);
app.use("/reader", readerRoutes);

//Upload API
//decide where to storage
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/upload");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

//API for upload one image
app.post("/uploadImage", upload.single("image"), function (req, res) {
  const file = req.file;

  res.status(200).json(file.filename);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
