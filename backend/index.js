import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import jwt from "jsonwebtoken";
import authenticateToken from "./utils/util.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB()
});
