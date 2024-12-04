import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error recieving users").status(404);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        if (!users) res.send("User not found").status(404);
        res.send(users).status(200);
    } catch (e) {
        console.error(e);
        res.send("Error recieving users").status(404);
    }
})