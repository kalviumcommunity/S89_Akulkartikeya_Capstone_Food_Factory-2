const express = require('express');
const doctorRouter = express.Router();
const doctorSchema = require('../models/doctorSchema');

// GET request for doctorRouter...
doctorRouter.get('/doctor', async (req, res) => {
  try {
      const doctor = await doctorSchema.find();

      res.status(200).send(doctor); 
  } catch (error) {
      console.error('Error fetching doctors:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// POST request for doctorRouter...
doctorRouter.post('/doctor', async (req, res) => {
  try {
      const { name, specialization, contact  } = req.body;
      const newdoctor = new doctorSchema({ name, specialization, contact });
      await newdoctor.save();
      res.status(201).json({ message: 'doctor posted successfully!', data: newdoctor });
  } catch (error) {
      console.error('Error while posting doctor:', error);
      res.status(500).json({ message: 'Error while  posting doctor', error });
  }
});

// PUT request for doctorRouter...
doctorRouter.put('/updateDoctor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const { name, specialization, contact } = req.body;
    const updatedDoctor = await doctorSchema.findByIdAndUpdate(
      id,
      { name, specialization, contact },
      { new: true } 
    );

    if (!updatedDoctor) {
      return res.status(404).send({ msg: "Doctor not found" });
    }

    res.status(200).send({ msg: "Doctor updated successfully", doctor: updatedDoctor });
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).send({ msg: "Error updating doctor" });
  }
});


// DELETE request for doctorRouter...
doctorRouter.delete('/deleteDoctor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ msg: "Please provide id" });
    }

    const deletedDoctor = await doctorSchema.findByIdAndDelete({ _id: id });
    if (!deletedDoctor) {
      return res.status(404).send({ msg: "Doctor not found" });
    }

    res.status(200).send({ msg: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).send({ msg: "Error deleting doctor" });
  }
});

// PATCH request for doctorRouter...
doctorRouter.patch('/patchDoctor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Please provide a valid id" });
    }

    const { name, specialization, contact } = req.body;
    if (!name && !specialization && !contact) {
      return res.status(400).send({ message: "Please provide at least one field to update" });
    }

    const updatedDoctor = await doctorSchema.findByIdAndUpdate(
      id,
      { name, specialization, contact },
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return res.status(404).send({ message: "Doctor not found" });
    }

    res.status(200).send({ message: "Doctor updated successfully", doctor: updatedDoctor });
  } catch (error) {
    console.error("Error updating doctor:", error.message);
    res.status(500).send({ message: "Error updating doctor", error: error.message });
  }
});


module.exports = doctorRouter;
