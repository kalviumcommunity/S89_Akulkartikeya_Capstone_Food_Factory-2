const mongoose = require("mongoose");

const nonVegSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: Number, // Time in minutes
    required: true,
  },
  category: {
    type: String,
    default: "Non-Vegetarian",
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const NonVeg = mongoose.model("NonVeg", nonVegSchema);

module.exports = NonVeg;