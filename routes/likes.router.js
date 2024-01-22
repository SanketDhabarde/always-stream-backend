const express = require("express");
const router = express.Router();
const {
  getAllLikedVideos,
  addLikedVideo,
  removeLikedVideo,
} = require("../handlers/likes.handler");

router.route("/").get(getAllLikedVideos).post(addLikedVideo);
router.route("/:videoId").delete(removeLikedVideo);

module.exports = router;
