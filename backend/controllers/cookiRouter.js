const express = require("express")
const cookiRouter = express.Router();
const cooki = require("../models/cookiSchema");
const cookiSchema = require("../models/cookiSchema");


// get request for cooki(cookAI)...
cookiRouter.get('/cooki', async (req, res) => {
  try {
    const cooki = await cookiSchema.find();

      res.status(200).send(cooki); 
  } catch (error) {
      console.error('Error fetching cooki:', error);
      res.status(500).send({ message: 'Internal Server Error' }); 
  }
  
});

// post request for  cooki(cookAI)...
cookiRouter.post('/cooki', async (req, res) => {
    try {
        const { name, description, features, sampleInteractions, personality, version  } = req.body;
        const newcooki = new cooki({ name, description, features, sampleInteractions, personality, version });
        await newcooki.save();
        res.status(201).json({ message: 'cooki posted successfully!', data: newcooki });
    } catch (error) {
        console.error('Error posting cooki:', error);
        res.status(500).json({ message: 'Error posting cooki', error });
    }
  });

module.exports = cookiRouter;
