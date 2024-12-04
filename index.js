import express from "express";
import mongoose from "mongoose";
import dbConnection from "./db/conn.js";
 
const PORT = 3000;
const app = express();

app.use(express.json());
dbConnection();
app.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
});
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});