const express = require("express");
const router = express.Router();
const {
  getAllHistory,
  addVideoToHistory,
  removeVideoFromHistory,
  clearAllTheHistory,
} = require("../handlers/history.handler");

router.route("/").get(getAllHistory).post(addVideoToHistory);
router.route("/all").delete(clearAllTheHistory);
router.route("/:videoId").delete(removeVideoFromHistory);

module.exports = router;
