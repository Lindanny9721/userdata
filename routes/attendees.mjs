import express from "express";
import Attendee from "../models/Attendee.mjs";
import Event from "../models/Event.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
    const {event_id, user_id, status} = req.body;
    try {
        const event = await Event.findById(event_id);
        console.log(event.user_id);
        if(!event) res.send("Event not found").status(404);
        await event.save();
        res.send(newAttendee).status(200);
        const newAttendee = new Attendee({event_id, user_id, status});
        await newAttendee.save();
        event.userAttending.push(user_id);
    } catch(e) {
        console.error(e);
        res.send("Error posting attendee").status(404);
    }
})

export default router;