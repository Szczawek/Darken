import express from "express";
import "dotenv/config";
import { createServer } from "https";
import cors from "cors";
import helment from "helmet";

const app = express();

const corsOptions = {
  origin: ["https://127.0.0.1:5173"],
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(helment());

const options = {
  key: process.env.SSL_KEY,
  cert: process.env.SSL_CERT,
};

const server = createServer(options, app);

export { server, app };
