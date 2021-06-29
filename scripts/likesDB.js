const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactuserlist"
);

const likesSeed = [
    {
        user: 1,
        likes: [4]
    },
    {
        // user: 2,
        likes: [4, 9]
    },
    {
        user: 3,
        likes: []
    },
    {
        user: 4,
        likes: [1, 2, 3]
    },
    {
        user: 5,
        likes: [4, 9, 10]
    },
    {
        user: 6,
        likes: [1, 2, 3]
    },
    {
        user: 7,
        likes: [1]
    },
    {
        user: 8,
        likes: [4, 9, 10]
    },
    {
        user: 9,
        likes: []
    },
    {
        user: 10,
        likes: [2, 3]
    }
];

db.Likes
    .remove({})
    .then(() => db.Likes.collection.insertMany(likesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
