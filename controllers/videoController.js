const Video = require("../models/videoModel");
const mongoose = require("mongoose");

const getVideos = async (req, res) => {
  const querySearch = req.query.query_search;

  try {
    if (querySearch) {
      const videos = await Video.find(
        { title: { $regex: querySearch, $options: "i" } },
        { products: 0, __v: 0 }
      );
      return res.status(200).json({ videos });
    }
    const videos = await Video.find({}, { products: 0, __v: 0 });
    res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVideo = async (req, res) => {
  const { title, urlThumbnail, urlVideo } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!urlThumbnail) {
    emptyFields.push("urlThumbnail");
  }
  if (!urlVideo) {
    emptyFields.push("urlVideo");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({
      message: `Please fill in the following fields: ${emptyFields.join(", ")}`,
      emptyFields,
    });
  }

  try {
    const video = await Video.create({ title, urlThumbnail, urlVideo });
    res.status(201).json({ video });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVideo = async (req, res) => {
  const { videoID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(videoID)) {
    return res.status(400).json({ error: "Invalid VideoID parameter" });
  }

  try {
    const video = await Video.findById(videoID, { __v: 0 }).populate("products", {
      videoID: 0,
      __v: 0,
    });
    if (!video) {
      return res.status(404).json({ error: "Video doesn't exist" });
    }

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getVideos, getVideo, createVideo };
