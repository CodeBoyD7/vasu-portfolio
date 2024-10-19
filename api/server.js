import express from "express";
import cors from "cors";
import { getCollections } from "./db.js"; // Ensure this path is correct
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://vasu-portfolio.onrender.com",
    ],
  })
);
app.use(express.json());
const __dirname = path.resolve();

app.get("/getProjects", async (req, res) => {
  try {
    const projects = await getCollections();
    if (projects.length === 0) {
      return res
        .status(404)
        .json({ message: "No projects found", success: false });
    }
    res.status(200).json({ projects, success: true });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: error.message, success: false });
  }
});
app.use(express.static(__dirname + "/client/dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});
const PORT = process.env.PORTSERVER;
// Start the server and analyze schema
app.listen(PORT, async () => {
  await getCollections(); // Wait for schema analysis to complete
  console.log("Server started on port : ", PORT);
});
