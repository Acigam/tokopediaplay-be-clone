const Comment = require("../models/commentModel");
const Video = require("../models/videoModel");
const mongoose = require("mongoose");

const getCommentsOfVideo = async (req, res) => {
  const { videoID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(videoID)) {
    return res.status(400).json({ error: "Invalid VideoID parameter" });
  }

  try {
    if (!(await Video.exists({ _id: videoID }))) {
      return res.status(404).json({ message: "Video doesn't exist" });
    }
    const comments = await Comment.find({ videoID }, { videoID: 0, _id: 0, __v: 0 }).sort({
      createdAt: -1,
    });
    res.status(200).json({ amount: comments.length, comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  const { videoID, username, comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(videoID)) {
    return res.status(400).json({ status: "Fail", error: "Invalid videoID parameter" });
  }

  let emptyFields = [];

  if (!username) {
    emptyFields.push("linkProduct");
  }
  if (!comment) {
    emptyFields.push("title");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({
      status: "Fail",
      error: `Missing the following fields: ${emptyFields.join(", ")}`,
      emptyFields,
    });
  }

  try {
    if (!(await Video.exists({ _id: videoID }))) {
      return res.status(404).json({
        status: "Fail",
        error: "Unable to add the comment because the video doesn't exist",
      });
    }

    const newComment = await Comment.create({
      videoID,
      username,
      comment,
    });
    res.status(201).json({ status: "Success", comment: newComment });
  } catch (error) {
    res.status(500).json({ status: "Fail", error: error.message });
  }
};

module.exports = { createComment, getCommentsOfVideo };
