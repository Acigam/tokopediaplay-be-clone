const Product = require("../models/productModel");
const Video = require("../models/videoModel");
const mongoose = require("mongoose");

const getProductsOfVideo = async (req, res) => {
  const { videoID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(videoID)) {
    return res.status(400).json({ message: "Invalid videoID parameter" });
  }

  try {
    if (!(await Video.exists({ _id: videoID }))) {
      return res.status(404).json({ message: "Video doesn't exist" });
    }
    const products = await Product.find({ videoID }, { videoID: 0, __v: 0 });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { videoID, linkProduct, title, price } = req.body;

  let emptyFields = [];

  if (!linkProduct) {
    emptyFields.push("linkProduct");
  }
  if (!title) {
    emptyFields.push("title");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({
      message: `Missing the following fields: ${emptyFields.join(", ")}`,
      emptyFields,
    });
  }

  try {
    const video = await Video.findById(videoID);
    if (!video) {
      return res.status(404).json({
        message: "Unable to add the product because the video doesn't exist",
      });
    }
    const product = await Product.create({
      videoID,
      linkProduct,
      title,
      price,
    });
    video.products.push(product._id);
    await video.save();

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProductsOfVideo };
