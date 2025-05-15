// vegSchema.js
const mongoose = require("mongoose");

if (mongoose.models.Veg) {
  delete mongoose.models.Veg;
}
const vegSchema = new mongoose.Schema({
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
    default: "Vegetarian",
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Veg = mongoose.model("Veg", vegSchema);

module.exports = Veg;