const mongoose = require("mongoose");

const brand_schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  models: { type: [String] },
})

const Brand = mongoose.model('User', brand_schema);

module.exports = Brand;

