import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventDate: {type: Date, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    userAttending: {type: [mongoose.Schema.Types.ObjectId], ref: "User"},
    location: {type: String, required: true},
    description: {type: String, required: true}
})
eventSchema.index({user_id: 1, location: 1})
const Event = mongoose.model("Event", eventSchema);
export default Event;