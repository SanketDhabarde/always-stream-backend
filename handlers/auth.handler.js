const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.modal");

const signUpHandler = async (req, res) => {
  try {
    const { email, passward, ...rest } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(422).json({
        errors: "Unprocessable Entity. Email Already Exists.",
      });
    }

    const _id = uuid();
    const encryptedPassward = bcrypt.hashSync(passward, 7);
    const newUser = {
      _id,
      email,
      passward: encryptedPassward,
      ...rest,
      likes: [],
      history: [],
      playlists: [],
      watchlater: [],
    };

    const user = await User.create(newUser);
    const encodedToken = jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      createdUser: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        likes: [],
        history: [],
        playlists: [],
        watchlater: [],
      },
      encodedToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { signUpHandler };
