const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipesSchema'); // Correct model name


// GET request for recipesRouter...
recipesRouter.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).send(allRecipes); 
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// POST request for recipesRouter...
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

// DELETE request for recipesRouter...
recipesRouter.delete('/deleteRecipe/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const deletedRecipe = await Recipe.findByIdAndDelete({ _id: id });
    if (!deletedRecipe) {
      return res.status(404).send({ msg: "Recipe not found" });
    }

    res.status(200).send({ msg: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).send({ msg: "Error deleting recipe" });
  }
});

// PATCH request for recipesRouter...
recipesRouter.patch('/patchRecipe/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Please provide a valid id" });
    }

    const { name, calories, category } = req.body;
    if (!name && !calories && !category) {
      return res.status(400).send({ message: "Please provide at least one field to update" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, calories, category },
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    res.status(200).send({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (error) {
    console.error("Error updating recipe:", error.message);
    res.status(500).send({ message: "Error updating recipe", error: error.message });
  }
});

module.exports = recipesRouter;
