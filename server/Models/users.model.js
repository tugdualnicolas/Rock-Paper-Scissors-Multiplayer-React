const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique:true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const users = mongoose.model("users", userschema);

module.exports = users;
