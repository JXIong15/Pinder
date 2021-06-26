const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: [{
    type: String,
    required: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  }],
  password: [{
    type: String,
    required: true,
    validate: {
      len: [6],
      isAlphaNumeric: true,
    },
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
