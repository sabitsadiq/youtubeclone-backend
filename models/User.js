import { timeStamp } from "console";
import { subscribe } from "diagnostics_channel";
import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
  },
  { timeStamp: true }
);

export default mongoose.model("User", UserShema);
