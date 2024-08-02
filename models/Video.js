import { timeStamp } from "console";
import { subscribe } from "diagnostics_channel";
import mongoose from "mongoose";

const VideoShema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    videoUrl: {
      type: String,
      require: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timeStamp: true }
);

export default mongoose.model("Video", VideoShema);
