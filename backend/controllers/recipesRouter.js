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

module.exports = recipesRouter;
