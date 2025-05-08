const express = require('express');
const doctorRouter = express.Router();
const doctorSchema = require('../models/doctorSchema');

// get request for doctorRouter...
doctorRouter.get('/doctor', async (req, res) => {
  try {
      const doctor = await doctorSchema.find();

      res.status(200).send(doctor); 
  } catch (error) {
      console.error('Error fetching doctors:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// post request for doctorRouter...
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


module.exports = doctorRouter;
