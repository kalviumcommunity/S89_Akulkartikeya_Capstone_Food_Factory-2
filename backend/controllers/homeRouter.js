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
homeRouter.post('/home', async (req, res) => {
    try {
        const { title, content, dietTips  } = req.body;
        const newhome = new homeSchema({ title, content, dietTips });
        await newhome.save();
        res.status(201).json({ message: 'homepage posted successfully!', data: newhome });
    } catch (error) {
      console.error('Error posting home:', error);    
       res.status(500).json({ message: 'Error posting homepage', error });
    }
  });


module.exports = homeRouter;
