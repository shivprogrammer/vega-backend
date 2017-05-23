'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  message: { type: String, required: true }
});

module.exports = mongoose.model('contact', contactSchema);
