const express = require("express")
const cookiRouter = express.Router();
const cooki = require("../models/cookiSchema");
const cookiSchema = require("../models/cookiSchema");




// GET request for cooki(cookAI)...
cookiRouter.get('/cooki', async (req, res) => {
  try {
    const cooki = await cookiSchema.find();

      res.status(200).send(cooki); 
  } catch (error) {
      console.error('Error fetching cooki:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
  
});



// POST request for  cooki(cookAI)...
cookiRouter.post('/cooki', async (req, res) => {
    try {
        const { name, description, features, sampleInteractions, personality, version  } = req.body;
        const newcooki = new cookiSchema({ name, description, features, sampleInteractions, personality, version });
        await newcooki.save();
        res.status(201).json({ message: 'cooki posted successfully!', data: newcooki });
    } catch (error) {
        console.error('Error posting cooki:', error);
        res.status(500).json({ message: 'Error posting cooki', error });
    }
  });



// PUT request for cooki(cookAI)...
cookiRouter.put('/updateCooki/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const { name, description, features, sampleInteractions, personality, version } = req.body;
    const updatedCooki = await cookiSchema.findByIdAndUpdate(
      id,
      { name, description, features, sampleInteractions, personality, version },
      { new: true } // Return the updated document
    );

    if (!updatedCooki) {
      return res.status(404).send({ msg: "Cooki not found" });
    }

    res.status(200).send({ msg: "Cooki updated successfully", cooki: updatedCooki });
  } catch (error) {
    console.error('Error updating cooki:', error);
    res.status(500).send({ msg: "Error updating cooki" });
  }
});


// DELETE request for cooki(cookAI)...
cookiRouter.delete('/deleteCooki/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const deletedCooki = await cookiSchema.findByIdAndDelete({ _id: id });
    if (!deletedCooki) {
      return res.status(404).send({ msg: "Cooki not found" });
    }

    res.status(200).send({ msg: "Cooki deleted successfully" });
  } catch (error) {
    console.error("Error deleting cooki:", error);
    res.status(500).send({ msg: "Error deleting cooki" });
  }
});

// PATCH request for cooki(cookAI)...
cookiRouter.patch('/patchCooki/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Please provide a valid id" });
    }

    const { name, description, features, sampleInteractions, personality, version } = req.body;
    if (!name && !description && !features && !sampleInteractions && !personality && !version) {
      return res.status(400).send({ message: "Please provide at least one field to update" });
    }

    const updatedCooki = await cookiSchema.findByIdAndUpdate(
      id,
      { name, description, features, sampleInteractions, personality, version },
      { new: true, runValidators: true }
    );

    if (!updatedCooki) {
      return res.status(404).send({ message: "Cooki not found" });
    }

    res.status(200).send({ message: "Cooki updated successfully", cooki: updatedCooki });
  } catch (error) {
    console.error("Error updating cooki:", error.message);
    res.status(500).send({ message: "Error updating cooki", error: error.message });
  }
});


module.exports = cookiRouter;
