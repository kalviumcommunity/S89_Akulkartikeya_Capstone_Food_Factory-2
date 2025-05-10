const express = require('express');
const homeRouter = express.Router();
const homeSchema = require('../models/homeSchema'); // Correct import

// GET request for home page.....
homeRouter.get('/home', async (req, res) => {
  try {
    const home = await homeSchema.find();
    res.status(200).send(home); 
  } catch (error) {
    console.error('Error fetching home page:', error);
    res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// POST request for home page.....
homeRouter.post('/home', async (req, res) => {
  try {
    const { title, content, dietTips } = req.body;
    const newhome = new homeSchema({ title, content, dietTips });
    await newhome.save();
    res.status(201).json({ message: 'homepage posted successfully!', data: newhome });
  } catch (error) {
    console.error('Error posting home:', error);    
    res.status(500).json({ message: 'Error posting homepage', error });
  }
});

// PUT request for homeRouter...
homeRouter.put('/updateHome/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const { title, content, dietTips } = req.body;
    const updatedHome = await homeSchema.findByIdAndUpdate(
      id,
      { title, content, dietTips },
      { new: true }
    );

    if (!updatedHome) {
      return res.status(404).send({ msg: "Home entry not found" });
    }

    res.status(200).send({ msg: "Home entry updated successfully", home: updatedHome });
  } catch (error) {
    console.error('Error updating home entry:', error);
    res.status(500).send({ msg: "Error updating home entry" });
  }
});

// DELETE request for homeRouter...
homeRouter.delete('/deleteHome/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const deletedHome = await homeSchema.findByIdAndDelete({ _id: id });
    if (!deletedHome) {
      return res.status(404).send({ msg: "Home entry not found" });
    }

    res.status(200).send({ msg: "Home entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting home entry:", error);
    res.status(500).send({ msg: "Error deleting home entry" });
  }
});

// PATCH request for homeRouter...
homeRouter.patch('/patchHome/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Please provide a valid id" });
    }

    const { title, content, dietTips } = req.body;
    if (!title && !content && !dietTips) {
      return res.status(400).send({ message: "Please provide at least one field to update" });
    }

    const updatedHome = await homeSchema.findByIdAndUpdate(
      id,
      { title, content, dietTips },
      { new: true, runValidators: true }
    );

    if (!updatedHome) {
      return res.status(404).send({ message: "Home entry not found" });
    }

    res.status(200).send({ message: "Home entry updated successfully", home: updatedHome });
  } catch (error) {
    console.error("Error updating home entry:", error.message);
    res.status(500).send({ message: "Error updating home entry", error: error.message });
  }
});


module.exports = homeRouter;