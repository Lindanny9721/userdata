import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true},
    favorites: { type: Array, required: true }
});

userSchema.index({ email: 1});
const User = mongoose.model("User", userSchema);
