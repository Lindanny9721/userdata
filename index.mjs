import express from "express";
import mongoose from "mongoose";
import dbConnection from "./db/conn.mjs";
import users from "./routes/users.mjs";
import events from "./routes/events.mjs";
import attendees from "./routes/attendees.mjs";
import fakeData from "./routes/fakeData.mjs";
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
app.use("/fakeData", fakeData);
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});