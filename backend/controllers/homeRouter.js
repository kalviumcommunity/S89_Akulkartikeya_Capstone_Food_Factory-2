const express = require('express');
const homeRouter = express.Router();
const home = require('../models/homeSchema');
const homeSchema = require('../models/homeSchema');



// get request for home page
homeRouter.get('/home', async (req, res) => {
  try {
    const home = await homeSchema.find();


      res.status(200).send(home); 
  } catch (error) {
      console.error('Error fetching home page:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
});

// post request for home page


module.exports = homeRouter;
