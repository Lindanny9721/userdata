import express from "express";
import User from "../models/User.mjs";

const router = express.Router();
const userData = [
    new User({name: "Bobby Lee", email: "bobbyleeiscool22@gmail.com", password: "bobbyleeiscool"}),
    new User({name: "Billy Lee", email: "billybilly@gmail.com", password: "honkhonk"}),
    new User({name: "Chris Mott", email: "chrissypop22@gmail.com", password: "dragonslayer22"}),
    new User({name: "Nedra Krantz", email: "NedraRKrantz@dayrep.com", password: "busvroom4@"}),
    new User({name: "Donald Hubbard", email: "DonaldJHubbard@jourrapide.com", password: "mathiscool"}),
    new User({name: "Joshua Perry", email: "joshuaiperry@jourrapide.com", password: "rushhour4"}),
    new User({name: "Sidney Mitchell", email: "AshleyCMaldonado@rhyta.com", password: "venusisreal"}),
    new User({name: "Trent Manzano", email: "ChelseaSPurdy@rhyta.com", password: "ghostsarereal42"}),
    new User({name: "Sarah Ames", email: "CatarinaRHughes@rhyta.com", password: "xxmastersniperxx420"}),
    new User({name: "Estelle Riggins", email: "AdamCNelson@teleworm.us", password: "fasttruck"})
]
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error recieving users").status(404);
    }
})
router.get("/user/:id", async (req, res) => {
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
router.get("/postUsers", async (req, res) => {
    try {
        for (let user of userData) {
            await user.save();
        }
        res.status(200).send(userData);
    } catch (e) {
        console.error(e);
        res.status(404).send("Error Posting User Data");
    }
});


export default router;