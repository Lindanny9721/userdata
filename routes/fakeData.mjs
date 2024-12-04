import express from "express";
import Attendee from "../models/Attendee.mjs";
import Event from "../models/Event.mjs";
import User from "../models/User.mjs";

const router = express.Router();
const savedId = [];
const savedEventId = [];
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
const eventData = [
    new Event({eventName: "Singing Musical", eventDate: Date, user_id: savedId[0], userAttending: [savedId[3],savedId[2]], location: "My Home", description: "Epic Jazz Music" }),
    new Event({eventName: "Dance Off", eventDate: Date, user_id: savedId[1], userAttending: [savedId[0],savedId[8]], location: "Central Park", description: "Crazy Dance Off " }),
    new Event({eventName: "Yoga Session", eventDate: Date, user_id: savedId[2], userAttending: [], location: "Somewhere in New York", description: "We doing yoga in the streets" }),
    new Event({eventName: "David Lookalike", eventDate: Date, user_id: savedId[3], userAttending: [savedId[4],savedId[9]], location: "My Basement", description: "Winner wins 100 dollars" }),
    new Event({eventName: "Rat Comparsion", eventDate: Date, user_id: savedId[4], userAttending: [savedId[2],savedId[5]], location: "Sewer", description: "Biggest Rat Win" }),
    new Event({eventName: "Farming Corn", eventDate: Date, user_id: savedId[5], userAttending: [savedId[8],savedId[4]], location: "Some garden", description: "We're gonna farm corn and I keep it" }),
    new Event({eventName: "Flower Sale", eventDate: Date, user_id: savedId[6], userAttending: [savedId[0],savedId[1]], location: "Central Park", description: "Selling Central Park Flowers" }),
    new Event({eventName: "Rap Battle", eventDate: Date, user_id: savedId[7], userAttending: [savedId[3],savedId[4]], location: "My School", description: "Biggest Rap battle of the year" }),
    new Event({eventName: "Donut Eating Contest", eventDate: Date, user_id: savedId[8], userAttending: [savedId[1],savedId[9]], location: "Some random krispy kreme", description: "Winner wins a coupon to krispy kreme" }),
    new Event({eventName: "Costume Contest", eventDate: Date, user_id: savedId[9], userAttending: [savedId[5],savedId[2]], location: "My neighbor", description: "He's scared of trex" }),
]
router.get("/", async (req, res) => {
    try {
        for (let user of userData) {
            await user.save();
            savedId.push(user.id);
        }
        const eventData = [
            new Event({eventName: "Singing Musical", eventDate: new Date(), user_id: savedId[0], userAttending: [savedId[3],savedId[2]], location: "My Home", description: "Epic Jazz Music" }),
            new Event({eventName: "Dance Off", eventDate: new Date(), user_id: savedId[1], userAttending: [savedId[0],savedId[8]], location: "Central Park", description: "Crazy Dance Off " }),
            new Event({eventName: "Yoga Session", eventDate: new Date(), user_id: savedId[2], userAttending: [], location: "Somewhere in New York", description: "We doing yoga in the streets" }),
            new Event({eventName: "David Lookalike", eventDate: new Date(), user_id: savedId[3], userAttending: [savedId[4],savedId[9]], location: "My Basement", description: "Winner wins 100 dollars" }),
            new Event({eventName: "Rat Comparsion", eventDate: new Date(), user_id: savedId[4], userAttending: [savedId[2],savedId[4]], location: "Sewer", description: "Biggest Rat Win" }),
            new Event({eventName: "Farming Corn", eventDate: new Date(), user_id: savedId[5], userAttending: [savedId[8],savedId[5]], location: "Some garden", description: "We're gonna farm corn and I keep it" }),
            new Event({eventName: "Flower Sale", eventDate: new Date(), user_id: savedId[6], userAttending: [savedId[0],savedId[1]], location: "Central Park", description: "Selling Central Park Flowers" }),
            new Event({eventName: "Rap Battle", eventDate: new Date(), user_id: savedId[7], userAttending: [savedId[3],savedId[4]], location: "My School", description: "Biggest Rap battle of the year" }),
            new Event({eventName: "Donut Eating Contest", eventDate: new Date(), user_id: savedId[8], userAttending: [savedId[1],savedId[9]], location: "Some random krispy kreme", description: "Winner wins a coupon to krispy kreme" }),
            new Event({eventName: "Costume Contest", eventDate: new Date(), user_id: savedId[9], userAttending: [savedId[5],savedId[2]], location: "My neighbor", description: "He's scared of trex" }),
        ]
        for(let event of eventData) {
            await event.save();
            savedEventId.push(event._id);
        }
        const attendeeData = [
            new Attendee({event_id: savedEventId[0], user_id: savedId[3], status: "confirmed"}),
            new Attendee({event_id: savedEventId[0], user_id: savedId[2], status: "confirmed"}),
            new Attendee({event_id: savedEventId[1], user_id: savedId[0], status: "confirmed"}),
            new Attendee({event_id: savedEventId[1], user_id: savedId[8], status: "confirmed"}),
            new Attendee({event_id: savedEventId[3], user_id: savedId[4], status: "confirmed"}),
            new Attendee({event_id: savedEventId[3], user_id: savedId[9], status: "confirmed"}),
            new Attendee({event_id: savedEventId[4], user_id: savedId[2], status: "confirmed"}),
            new Attendee({event_id: savedEventId[4], user_id: savedId[5], status: "confirmed"}),
            new Attendee({event_id: savedEventId[5], user_id: savedId[8], status: "confirmed"}),
            new Attendee({event_id: savedEventId[5], user_id: savedId[4], status: "confirmed"}),
            new Attendee({event_id: savedEventId[6], user_id: savedId[0], status: "confirmed"}),
            new Attendee({event_id: savedEventId[6], user_id: savedId[1], status: "confirmed"}),
            new Attendee({event_id: savedEventId[7], user_id: savedId[3], status: "confirmed"}),
            new Attendee({event_id: savedEventId[7], user_id: savedId[4], status: "confirmed"}),
            new Attendee({event_id: savedEventId[8], user_id: savedId[1], status: "confirmed"}),
            new Attendee({event_id: savedEventId[8], user_id: savedId[9], status: "confirmed"}),
            new Attendee({event_id: savedEventId[9], user_id: savedId[5], status: "confirmed"}),
            new Attendee({event_id: savedEventId[9], user_id: savedId[2], status: "confirmed"}),
        ]
        for(let attendee of attendeeData) {
            await attendee.save();
        }
        res.status(200).send(userData);
    } catch (e) {
        console.error(e);
        res.status(404).send("Error Posting Data");
    }
});
export default router;