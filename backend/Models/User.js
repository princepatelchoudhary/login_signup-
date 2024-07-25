
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("User", userSchema);
