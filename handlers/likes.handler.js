const { User } = require("../models/user.modal");

const getAllLikedVideos = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId);
    return res.status(200).json({ likes: user.likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const addLikedVideo = async (req, res) => {
  const { userId } = req.user;
  const { video } = req.body;
  try {
    const user = await User.findById(userId);
    const likes = user.likes;

    if (likes.some((data) => data._id == video._id)) {
      return res.status(409).json({ error: "Already liked the video" });
    }

    likes.push({ ...video });

    await User.findByIdAndUpdate(userId, { likes });

    return res.status(201).json({ likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const removeLikedVideo = async (req, res) => {
  const { userId } = req.user;
  const { videoId } = req.params;
  try {
    const user = await User.findById(userId);
    const likes = user.likes.filter((video) => video._id != videoId);

    await User.findByIdAndUpdate(userId, { likes });
    return res.status(200).json({ likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

module.exports = { getAllLikedVideos, addLikedVideo, removeLikedVideo };
