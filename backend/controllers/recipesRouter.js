const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipesSchema'); // Correct model name


// GET request
recipesRouter.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).send(allRecipes); 
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// POST request
recipesRouter.post('/recipes', async (req, res) => {
  try {
    
    const { name, calories, category } = req.body;
    const newRecipe = new Recipe({ name, calories, category });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe posted successfully!', data: newRecipe });
  } catch (error) {
    console.error('Error posting recipe:', error);
    res.status(500).json({ message: 'Error posting recipe', error });
  }
});

// PUT request for recipesRouter...
recipesRouter.put('/updateRecipe/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const { name, calories, category } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, calories, category },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).send({ msg: "Recipe not found" });
    }

    res.status(200).send({ msg: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).send({ msg: "Error updating recipe" });
  }
});

module.exports = recipesRouter;
