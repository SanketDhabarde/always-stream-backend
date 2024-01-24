const express = require("express");
const router = express.Router();
const {
  getPlaylists,
  createPlaylist,
  removePlayList,
  getVideosFromPlaylist,
  addVideoToPlaylist,
} = require("../handlers/playlist.handler");

router.route("/").get(getPlaylists).post(createPlaylist);
router
  .route("/:playlistId")
  .delete(removePlayList)
  .get(getVideosFromPlaylist)
  .post(addVideoToPlaylist);

module.exports = router;
