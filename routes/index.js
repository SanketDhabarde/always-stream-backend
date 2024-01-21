const express = require("express");
const router = express.Router();
const videoRouter = require("./video.router");
const categoryRouter = require("./category.router");
const authRouter = require("./auth.router");

router.use("/videos", videoRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);

module.exports = router;
