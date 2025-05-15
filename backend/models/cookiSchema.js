// cookiSchema.js

const mongoose = require("mongoose");

const cookiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  sampleInteractions: {
    type: [String],
    required: true,
  },
  personality: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    default: "1.0",
  },
}, {
});

const cooki = mongoose.model("Cooki", cookiSchema);
  
module.exports = cooki;
