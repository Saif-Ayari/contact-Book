const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

const contact = mongoose.model('contactSchema', contactSchema);

module.exports = contact;
