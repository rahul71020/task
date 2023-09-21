const mongoose = require("mongoose")
const { Schema } = mongoose;
var Registers = new mongoose.Schema({
  First_Name: {
    type: String
  },
  Last_Name: {
    type: String,
    default: true
  },
  email: {
    type: String,
    default: true
  },
  selectedCountry: {
    type: String,
    default: true
  },
  selectedState: {
    type: String,
    default: true
  },
  selectedCity: {
    type: String,
    default: true
  },
  Gender: {
    type: String,
    default: true
  },
  Date_of_Birth: {
    type: String,
    default: true
  },
  Age: {
    type: String,
    default: true
  },
  
},
  {
    collection: 'Register',
    timestamps: true
  }
);

const Register = mongoose.model('Register', Registers)

module.exports = Register