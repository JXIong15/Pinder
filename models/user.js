const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.promise = Promise;
// const {String} = mongoose.Schema.Types;
const validator = require('validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: {
      validator: validator.isEmail,
      message: 'Invalid Email'
    }
  },
  password: {
    type: String,
    required: 'Password is required',
    validate: {
      validator: validator.isStrongPassword,
      message: 'Not a strong password: min 8 char, at least 1 lower and upper case letter, at least 1 number and symbol'
    },
  }
}, {
    versionKey: false
});


userSchema.methods = {
  checkPassword: function (inputPassword) {
    console.log("password ", inputPassword);
    console.log("password ", this.password);
    // console.log("first name ", this.firstName);
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};
// Define hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);


module.exports = User;
