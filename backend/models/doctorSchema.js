// doctorSchema.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
}, {
});

const doctor = mongoose.model('doctor', doctorSchema);

module.exports = doctor;
