const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');



let usersSchema = Schema({
    email: {type: String, require: true, unique: true},
    password: {type:String, required:true},
});
usersSchema.pre('save', function(next) {
    let user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
usersSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
users = mongoose.model('User', usersSchema)
module.exports = users

