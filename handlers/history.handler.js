const { User } = require("../models/user.modal");

const getAllHistory = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId);
    return res.status(200).json({ history: user.history });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const addVideoToHistory = async (req, res) => {
  const { userId } = req.user;
  const { video } = req.body;
  try {
    const user = await User.findById(userId);
    const history = user.history;
    if (history.some((_video) => _video._id == video._id)) {
      return res.status(409).json({ error: "Video already added in history" });
    }
    history.push({ ...video });
    await User.findByIdAndUpdate(userId, { history });
    return res.status(201).json({ history });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

module.exports = {
  getAllHistory,
  addVideoToHistory
};
