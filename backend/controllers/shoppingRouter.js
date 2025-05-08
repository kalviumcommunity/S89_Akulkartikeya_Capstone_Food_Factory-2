const express = require('express');
const shoppingRouter = express.Router();
const shopping = require('../models/shoppingSchema');
const shoppingSchema = require('../models/shoppingSchema');

// get request for shoppingRouter...
shoppingRouter.get('/shopping', async (req, res) => {
  try {
    const shopping = await shoppingSchema.find();


      res.status(200).send(shopping); 
  } catch (error) {
      console.error('Error fetching shopping:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
});


// post request for shoppingRouter...
shoppingRouter.post('/shopping', async (req, res) => {
  try {
    const { name, price, category, quantity } = req.body;
    const newShopping = new shopping({ name, price, category, quantity });
    await newShopping.save();
    return res.status(201).json({ message: 'Shopping posted successfully!', data: newShopping });
  } catch (error) {
    console.error('Error posting shopping:', error);
    return res.status(500).json({ message: 'Error posting shopping', error });
  }
});

module.exports = shoppingRouter;
