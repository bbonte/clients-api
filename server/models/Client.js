var mongoose = require('mongoose');

// Create the ClientSchema
var ClientSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumbers: {
    type: [String],
    required: true
  }
});

// Export the model Schema
module.exports = ClientSchema;
