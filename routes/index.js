const express = require('express');
const router = express.Router();
const videoRouter = require("./video.router");
const categoryRouter = require("./category.router");

router.use("/videos", videoRouter);
router.use("/categories", categoryRouter);

module.exports = router;