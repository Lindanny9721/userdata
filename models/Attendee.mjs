import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema({
    event_id: {type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {type: String, enum: ["pending", "confirmed", "declined"]}
});
attendeeSchema.index({event_id: 1, user_id: 1});
const Attendee = mongoose.model("Attendee", attendeeSchema);
export default Attendee;

