const express = require('express');
const shoppingRouter = express.Router();
const shopping = require('../models/shoppingSchema');
const shoppingSchema = require('../models/shoppingSchema');

// GET request for shoppingRouter...
shoppingRouter.get('/shopping', async (req, res) => {
  try {
    const shopping = await shoppingSchema.find();


      res.status(200).send(shopping); 
  } catch (error) {
      console.error('Error fetching shopping:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
}); 


// POST request for shoppingRouter...
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

// PUT request for shoppingRouter...
shoppingRouter.put('/updateShopping/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const { name, price, category, quantity } = req.body;
    const updatedShopping = await shoppingSchema.findByIdAndUpdate(
      id,
      { name, price, category, quantity },
      { new: true }
    );

    if (!updatedShopping) {
      return res.status(404).send({ msg: "Shopping item not found" });
    }

    res.status(200).send({ msg: "Shopping item updated successfully", shopping: updatedShopping });
  } catch (error) {
    console.error('Error updating shopping item:', error);
    res.status(500).send({ msg: "Error updating shopping item" });
  }
});

// DELETE request for shoppingRouter...
shoppingRouter.delete('/deleteShopping/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const deletedShopping = await shoppingSchema.findByIdAndDelete({ _id: id });
    if (!deletedShopping) {
      return res.status(404).send({ msg: "Shopping item not found" });
    }

    res.status(200).send({ msg: "Shopping item deleted successfully" });
  } catch (error) {
    console.error("Error deleting shopping item:", error);
    res.status(500).send({ msg: "Error deleting shopping item" });
  }
});

// PATCH request for shoppingRouter...
shoppingRouter.patch('/patchShopping/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Please provide a valid id" });
    }

    const { name, price, category, quantity } = req.body;
    if (!name && !price && !category && !quantity) {
      return res.status(400).send({ message: "Please provide at least one field to update" });
    }

    const updatedShopping = await shoppingSchema.findByIdAndUpdate(
      id,
      { name, price, category, quantity },
      { new: true, runValidators: true }
    );

    if (!updatedShopping) {
      return res.status(404).send({ message: "Shopping item not found" });
    }

    res.status(200).send({ message: "Shopping item updated successfully", shopping: updatedShopping });
  } catch (error) {
    console.error("Error updating shopping item:", error.message);
    res.status(500).send({ message: "Error updating shopping item", error: error.message });
  }
});


module.exports = shoppingRouter;
