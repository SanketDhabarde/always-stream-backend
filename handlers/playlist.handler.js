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

const getVideosFromPlaylist = async (req, res) => {
  const { userId } = req.user;
  const { playlistId } = req.params;
  try {
    const user = await User.findById(userId);
    const playlist = user.playlists.find(
      (playlist) => playlist._id === playlistId
    );
    return res.status(200).json({ playlist });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const addVideoToPlaylist = async (req, res) => {
  const { userId } = req.user;
  const { playlistId } = req.params;
  const { video } = req.body;
  try {
    const user = await User.findById(userId);
    const playlist = user.playlists.find(
      (playlist) => playlist._id === playlistId
    );

    if (playlist.videos.some((_video) => _video._id == video._id)) {
      return res
        .status(409)
        .json({ error: "Video already exists in playlist" });
    }

    playlist.videos.push(video);

    const playlists = user.playlists.map((_playlist) =>
      _playlist._id === playlistId ? playlist : _playlist
    );
    await User.findByIdAndUpdate(userId, { playlists });
    return res.status(200).json({ playlist });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const removeVideoFromPlaylist = async (req, res) => {
  const { userId } = req.user;
  const { playlistId, videoId } = req.params;
  try {
    const user = await User.findById(userId);
    const playlist = user.playlists.find(
      (playlist) => playlist._id === playlistId
    );
    playlist.videos = playlist?.videos.filter(video => video._id != videoId);

    const playlists = user.playlists.map((_playlist) =>
      _playlist._id === playlistId ? playlist : _playlist
    );
    await User.findByIdAndUpdate(userId, { playlists });
    return res.status(200).json({ playlist });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
}

module.exports = {
  getPlaylists,
  createPlaylist,
  removePlayList,
  getVideosFromPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist
};
