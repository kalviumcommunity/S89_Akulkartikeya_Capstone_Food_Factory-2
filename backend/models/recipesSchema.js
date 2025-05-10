const mongoose = require('mongoose');

if (mongoose.models.Recipe) {
  delete mongoose.models.Recipe;
}

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: String, required: true },
  category: { type: String, required: true }, 
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
