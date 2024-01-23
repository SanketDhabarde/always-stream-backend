const express = require("express");
const router = express.Router();
const {
  getAllWatchedLaterVideos,
  addVideoToWatchLater,
  removeVideoFromWatchLater,
} = require("../handlers/wathlater.handler");

router.route("/").get(getAllWatchedLaterVideos).post(addVideoToWatchLater);
router.route("/:videoId").delete(removeVideoFromWatchLater);

module.exports = router;
