const express = require("express");
const router = express.Router();
const videoRouter = require("./video.router");
const categoryRouter = require("./category.router");
const authRouter = require("./auth.router");
const likedRouter = require("./likes.router");
const watchlaterRouter = require("./watchlater.router");
const playlistRouter = require("./playlist.router");
const historyRouter = require("./history.router");
const { authVerify } = require("../middlewares/authVerify.middleware");

router.use("/videos", videoRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);
router.use("/user/likes", authVerify, likedRouter);
router.use("/user/watchlater", authVerify, watchlaterRouter);
router.use("/user/playlists", authVerify, playlistRouter);
router.use("/user/history", authVerify, historyRouter);

module.exports = router;
