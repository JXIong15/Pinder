const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");
mongoose.promise = Promise;
const {String} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});


userSchema.methods = {
  checkPassword: function (inputPassword) {
    console.log("password ", inputPassword);
    console.log("password ", this.password);
    console.log("first name ", this.firstName);
    console.log(this);
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
