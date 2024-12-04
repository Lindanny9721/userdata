import express from "express";
import User from "../models/User.mjs";

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
router.post("/", async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const newUser = new User({name, email, password})
        await newUser.save();
        res.send(newUser).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error posting user").status(404);
    }
})

export default router;