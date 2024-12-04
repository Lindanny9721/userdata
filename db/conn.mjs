import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error(e);
  }
}
export default dbConnection;
