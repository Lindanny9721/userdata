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
router.post("/signUp", async (req, res) => {
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
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        user.comparePassword(password, (err,isMatch) => {
            if(err) return res.send("Server Error").status(500)
            if(!isMatch) return res.send("Invalid password or email").status(404);
        })
        res.send("Login Successful").status(200);
    } catch(e) {
        console.error(e);
        res.send("Error logining").status(404);
    }
})


export default router;