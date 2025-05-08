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



module.exports = cookiRouter;
