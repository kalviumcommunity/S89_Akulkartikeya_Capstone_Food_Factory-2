// shoppingSchema.js

const mongoose = require('mongoose');

const shoppingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Shopping = mongoose.model('shopping-data', shoppingSchema);
module.exports = Shopping;
