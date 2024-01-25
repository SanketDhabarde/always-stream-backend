const express = require("express");
const router = express.Router();
const {
  getAllHistory,
  addVideoToHistory
} = require("../handlers/history.handler");

router.route("/").get(getAllHistory).post(addVideoToHistory);

module.exports = router;
