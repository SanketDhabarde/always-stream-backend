const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  description: String,
  img: String,
});

const Category = model("Category", categorySchema);

module.exports = { Category };
