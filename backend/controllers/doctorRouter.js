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

module.exports = doctorRouter;
