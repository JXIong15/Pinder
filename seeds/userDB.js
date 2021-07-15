const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

const userSeed = [
    {
        _id: ObjectId("0000001fe136c637652883bc"),
        email: "spongbob14@gmail.com",
        password: "Password123!",
        profile: ObjectId("60ef88c621aa76c7d39b9460"),
    },
    // {
    //     _id: ObjectId("00000002f8591e57d818ea77"),
    //     email: "pokemonmaster96@gmail.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("00000003f8591e57d818ea78"),
    //     email: "shagster87@yahoo.com",
    //     password: "password123"
    // },
    // {
    //     _id: ObjectId("00000004f8591e57d818ea79"),
    //     email: "eehoward@gmail.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("00000005f8591e57d818ea7a"),
    //     email: "hiddenleaf22@aol.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("00000006f8591e57d818ea7b"),
    //     email: "j.smith1998@gmail.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("00000007f8591e57d818ea7c"),
    //     email: "amberjones23@hotmail.com",
    //     password: "password123"
    // },
    // {
    //     _id: ObjectId("00000008f8591e57d818ea7d"),
    //     email: "theoneandonlyaang@aol.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("00000009f8591e57d818ea7e"),
    //     email: "kkw77@gmail.com",
    //     password: "Password123!"
    // },
    // {
    //     _id: ObjectId("0000000af8591e57d818ea7f"),
    //     email: "test123@yahoo.com",
    //     password: "Password123!"
    // },
];

const seedUser = () => {
    db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (User)");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

module.exports = seedUser;