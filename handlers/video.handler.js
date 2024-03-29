const { Video } = require("../models/video.model");

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({ total: videos.length, videos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    res.status(200).json({ video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { getAllVideos, getVideo };
