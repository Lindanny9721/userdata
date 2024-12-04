import express from "express";
import mongoose from "mongoose";
import dbConnection from "./db/conn.mjs";
import users from "./routes/users.mjs";
import events from "./routes/events.mjs";
import attendees from "./routes/attendees.mjs";
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
app.use("/events", events);
app.use("/attendees", attendees);
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