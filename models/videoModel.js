const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  urlThumbnail: {
    require: true,
    type: String,
  },
  urlVideo: {
    require: true,
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Video", videoSchema);
