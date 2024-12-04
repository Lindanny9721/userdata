import express from "express";
import Attendee from "../models/Attendee.mjs";
import Event from "../models/Event.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
    const {event_id, user_id, status} = req.body;
    try {
        const event = await Event.findById(event_id);
        if(!event) res.send("Event not found").status(404);
        await event.save();
        const newAttendee = new Attendee({event_id, user_id, status});
        await newAttendee.save();
        event.userAttending.push(user_id);
        res.send(newAttendee).status(200);
    } catch(e) {
        console.error(e);
        res.send("Error posting attendee").status(404);
    }
})
router.get("/:user_id", async (req, res) => {
    try {
        const userId = req.params.user_id;
        console.log("test");
        const attendees = await Attendee.find({user_id: userId}).populate("event_id");
        if(attendees.length === 0) return res.send("User is attending no events!").status(404);
        res.send(attendees).status(200);
    } catch(e) {
        console.error(e)
        res.send("Server Error").status(500);
    }
})
router.delete("/:userId/:eventId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const eventId = req.params.eventId;
        const event = await Event.findById(eventId);
        const attendee = await Attendee.findOne({event_id: eventId, user_id: userId})
        if(!attendee) return res.send("User is not attending this event").status(404);
        if(!event) return res.send("Event not found").status(404);
        event.userAttending.pull(userId);
        await Attendee.deleteOne({event_id: eventId, user_id: userId});
        await event.save();
        res.send("Attendee is removed from the event!").status(200);
    } catch(e) {
        console.error(e);
        res.send("Server Error").status(500);
    }
})
export default router;