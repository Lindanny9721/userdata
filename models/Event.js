import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventDate: {type: Date, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    location: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    userAttending: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})
favoriteSchema.index({userId: 1, location: 1})
const Event = mongoose.model("Event", Event);
export default Event;