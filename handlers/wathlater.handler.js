const { User } = require("../models/user.modal");

const getAllWatchedLaterVideos = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId);
    const watchlater = user.watchlater;
    return res.status(200).json({ watchlater });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const addVideoToWatchLater = async (req, res) => {
  const { userId } = req.user;
  const { video } = req.body;
  try {
    const user = await User.findById(userId);
    const watchlater = user.watchlater;

    if (watchlater.some((_video) => _video._id == video._id)) {
      return res.status(409).json({ error: "Video already in watchlater!" });
    }
    watchlater.push({ ...video });
    await User.findByIdAndUpdate(userId, { watchlater });
    return res.status(201).json({ watchlater });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const removeVideoFromWatchLater = async (req, res) => {
  const { userId } = req.user;
  const { videoId } = req.params;
  try {
    const user = await User.findById(userId);
    const watchlater = user.watchlater.filter(
      (_video) => _video._id != videoId
    );
    await User.findByIdAndUpdate(userId, { watchlater });
    return res.status(200).json({ watchlater });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

module.exports = {
  getAllWatchedLaterVideos,
  addVideoToWatchLater,
  removeVideoFromWatchLater,
};
