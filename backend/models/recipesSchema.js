// recipesSchema.js

const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  category: { 
    type: String,
    required: true,
  },
}, {
});

const recipes = mongoose.model('recipes', recipesSchema);

module.exports = recipes;
