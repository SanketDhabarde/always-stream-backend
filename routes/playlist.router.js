const express = require("express");
const router = express.Router();
const {
  getPlaylists,
  createPlaylist,
  removePlayList,
  getVideosFromPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} = require("../handlers/playlist.handler");

router.route("/").get(getPlaylists).post(createPlaylist);
router
  .route("/:playlistId")
  .delete(removePlayList)
  .get(getVideosFromPlaylist)
  .post(addVideoToPlaylist);

router.route("/:playlistId/:videoId").delete(removeVideoFromPlaylist);

module.exports = router;
