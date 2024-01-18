const express = require("express");
const router = express.Router();
const { getAllVideos } = require("../handlers/video.handler");

router.route("/").get(getAllVideos);

module.exports = router;
