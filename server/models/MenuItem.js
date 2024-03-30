// models/MenuItem.js

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
