import express from "express";
import Event from "../models/Event.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
    const {eventName, eventDate, user_id, userAttending, location, description} = req.body;
    try {
        const newEvent = new Event({eventName, eventDate, user_id, userAttending, location, description});
        await newEvent.save();
        res.send(newEvent).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error posting event").status(404);
    }
})
router.patch("/:event_id", async (req, res) => {
    const {event_id} = req.params;
    const updateEvent = req.body;
    try {
        const event = await Event.findByIdAndUpdate(event_id, updateEvent);
        if(!event) res.send("Event not found").status(404);
        res.send(event).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error updating event").status(404);
    }
})

export default router;