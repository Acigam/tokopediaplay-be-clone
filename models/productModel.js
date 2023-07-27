const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  videoID: {
    require: true,
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  linkProduct: {
    require: true,
    type: String,
  },
  title: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
