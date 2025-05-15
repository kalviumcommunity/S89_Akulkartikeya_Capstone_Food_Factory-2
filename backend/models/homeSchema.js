// homeSchema.js

const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dietTips: {
    type: [String],
    required: true,
  },
}, {
});

const home = mongoose.model('home', homeSchema);

module.exports = home;
