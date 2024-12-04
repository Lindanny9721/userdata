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
app.use("/users", users);
app.get("/test", async (req, res) => {
    try {
        const connected = mongoose.connection.readyState === 1;
        res.status(200).send({message: `MongoDB is ${connected ? `connected` : `not connected`}` })
    }
    catch (error) 
    {
        res.status(500).send({error: "Can't check with mongoDB"});
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});