const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  _id: String,
  alt: String,
  views: String,
  duration: String,
  title: String,
  thumbnail: String,
  creatorName: String,
  avatar: String,
  category: String,
  description: String,
});

const Video = model("Video", videoSchema);

module.exports = { Video, videoSchema };
