const jwt = require("jsonwebtoken");

const authVerify = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decodedToken._id };
    return next();
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ error: "The token is invalid. Unauthorized access error." });
  }
};

module.exports = { authVerify };
