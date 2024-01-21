const express = require("express");
const router = express.Router();
const { signUpHandler, loginHandler } = require("../handlers/auth.handler");

router.route("/signup").post(signUpHandler);
router.route("/login").post(loginHandler);

module.exports = router;
