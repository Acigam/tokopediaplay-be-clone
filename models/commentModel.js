const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    videoID: {
      require: true,
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    username: {
      require: true,
      type: String,
    },
    comment: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
