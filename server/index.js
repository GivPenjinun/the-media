import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import writerRoutes from "./routes/writers.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
//to use middleware for all API
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);
app.use("/writer", writerRoutes);

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

app.listen(8800, () => {
  console.log("connected");
});
