const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Name', nameSchema);
