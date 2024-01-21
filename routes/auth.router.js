const express = require("express");
const router = express.Router();
const { signUpHandler } = require("../handlers/auth.handler");

router.route("/signup").post(signUpHandler);

module.exports = router;
