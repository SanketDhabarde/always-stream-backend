const { User } = require("../models/user.modal");
const { v4: uuid } = require("uuid");

const getPlaylists = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId);
    res.status(200).json({ playlists: user.playlists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const createPlaylist = async (req, res) => {
  const { userId } = req.user;
  const { title } = req.body;
  try {
    const user = await User.findById(userId);
    const playlists = user.playlists;
    playlists.push({
      _id: uuid(),
      title,
      videos: [],
    });
    await User.findByIdAndUpdate(userId, { playlists });
    return res.status(201).json({ playlists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const removePlayList = async (req, res) => {
  const { userId } = req.user;
  const { playlistId } = req.params;
  try {
    const user = await User.findById(userId);
    const playlists = user.playlists.filter(
      (playlist) => playlist._id !== playlistId
    );
    await User.findByIdAndUpdate(userId, { playlists });
    return res.status(200).json({ playlists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

module.exports = { getPlaylists, createPlaylist, removePlayList };
