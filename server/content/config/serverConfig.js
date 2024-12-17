import express from "express";
import "dotenv/config";
import { createServer } from "https";
import cors from "cors";
import multer, { diskStorage } from "multer";
import helment from "helmet";

const app = express();

const corsOptions = {
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  origin: ["https://127.0.0.1:5173"],
};
app.use(express.json());
app.use(cors(corsOptions));
app.options("*",cors(corsOptions));
app.use(helment());

const options = {
  key: process.env.SSL_KEY,
  cert: process.env.SSL_CERT,
};

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/Users/Win/Pulpit/Aplikacje/Darken/Server/videos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}- ${uniqueSuffix}.mp4`);
  },
});

const uploadMulter = multer({ storage: storage });
const server = createServer(options, app);

export { server, app, uploadMulter };
