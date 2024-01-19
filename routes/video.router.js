const express = require("express");
const router = express.Router();
const { getAllVideos, getVideo } = require("../handlers/video.handler");

router.route("/").get(getAllVideos);
router.route("/:id").get(getVideo);

module.exports = router;
