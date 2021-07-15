const mongoose = require("mongoose");
const {Schema, model } = mongoose;
const validator = require('validator')

const userSchema = new Schema({
  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
    validate:{
      validator: validator.isEmail,
      message: 'Not a valid email',
      isAsync: false
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: validator.isStrongPassword,
      message: 'Not a strong password: min 8 char, at least 1 lower and upper case letter, at least 1 number and symbol'
    },
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

const User = model("User", userSchema);

module.exports = User;
