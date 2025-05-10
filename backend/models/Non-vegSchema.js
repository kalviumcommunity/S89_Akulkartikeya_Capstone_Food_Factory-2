const mongoose = require("mongoose");

// Check if the model already exists to avoid overwriting it
if (mongoose.models.NonVeg) {
  delete mongoose.models.NonVeg;
}
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