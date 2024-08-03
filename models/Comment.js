import { timeStamp } from "console";
import { subscribe } from "diagnostics_channel";
import mongoose from "mongoose";

const CommentShema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    videoId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  { timeStamp: true }
);

export default mongoose.model("Comment", CommentShema);
