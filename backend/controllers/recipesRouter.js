const express = require('express');
const recipesRouter = express.Router();
const recipes = require('../models/recipesSchema');
const recipesSchema = require('../models/recipesSchema');



// get request for recipesRouter...
recipesRouter.get('/recipes', async (req, res) => {
  try {
    const recipes = await recipesSchema.find();

      
      res.status(200).send(recipes); 
  } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// post request for recipesRouter...
recipesRouter.post('/recipes', async (req, res) => {
    try {
        const { name, calories, catecategory  } = req.body;
        const newrecipes = new recipes({ name, calories, catecategory });
        await newrecipes.save();
        res.status(201).json({ message: 'recipes posted successfully!', data: newrecipes });
    } catch (error) {
        console.error('Error posting recipes:', error);
        res.status(500).json({ message: 'Error posting recipes', error });
    }
  });


module.exports = recipesRouter;
