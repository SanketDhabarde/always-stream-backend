const express = require("express");
const router = express.Router();
const {
  getPlaylists,
  createPlaylist,
  removePlayList,
} = require("../handlers/playlist.handler");

router.route("/").get(getPlaylists).post(createPlaylist);
router.route("/:playlistId").delete(removePlayList);

module.exports = router;