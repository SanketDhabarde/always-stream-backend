const { Schema, model } = require("mongoose");
const { videoSchema } = require("./video.model");

const userSchema = new Schema({
  _id: String,
  email: String,
  passward: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  firstName: String,
  lastName: String,
  likes: [videoSchema],
  history: [videoSchema],
  playlists: [videoSchema],
  watchlater: [videoSchema],
});

const User = model("User", userSchema);

module.exports = { User };
