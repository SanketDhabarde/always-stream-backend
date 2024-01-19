const { Category } = require("../models/category.model");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json({ total: categories.length, categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getAllCategories, getCategory };
