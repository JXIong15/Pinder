const userSeed = require('./userDB');
const profileSeed = require('./profileDB');
const likesSeed = require('./likesDB');
const reviewSeed = require('./reviewsDB');
const mongoose = require("mongoose");
// const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactuserlist", 
    {useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true}
);

const seedAll = async () => {
    await userSeed();
    await profileSeed();
    await likesSeed();
    await reviewSeed();
    // process.exit(0);
}

seedAll()
// .then(() => process.exit(0));