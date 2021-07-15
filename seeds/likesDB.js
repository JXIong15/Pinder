const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

const likesSeed = [
    {
        _id: ObjectId("0000001fe136c637652883b1"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9466")
        ]
    },
    {
        _id: ObjectId("00000002f8591e57d818eab2"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9463"),
            ObjectId("60ef88c621aa76c7d39b9467")
        ]
    },
    {
        _id: ObjectId("00000003f8591e57d818eab3"),
        likes: []
    },
    {
        _id: ObjectId("00000004f8591e57d818eab4"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9460"),
            ObjectId("60ef88c621aa76c7d39b9461"),
            ObjectId("60ef88c621aa76c7d39b9462")
        ]
    },
    {
        _id: ObjectId("00000005f8591e57d818ea75"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9463"),
            ObjectId("60ef88c621aa76c7d39b9467"),
            ObjectId("60ef88c621aa76c7d39b9468")
        ]
    },
    {
        _id: ObjectId("00000006f8591e57d818eab6"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9460"),
            ObjectId("60ef88c621aa76c7d39b9461"),
            ObjectId("60ef88c621aa76c7d39b9462")
        ]
    },
    {
        _id: ObjectId("00000007f8591e57d818eab7"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9460")
        ]
    },
    {
        _id: ObjectId("00000008f8591e57d818eab8"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9463"),
            ObjectId("60ef88c621aa76c7d39b9467"),
            ObjectId("60ef88c621aa76c7d39b9468")
        ]
    },
    {
        _id: ObjectId("00000009f8591e57d818eab9"),
        likes: []
    },
    {
        _id: ObjectId("0000000af8591e57d818eab0"),
        likes: [
            ObjectId("60ef88c621aa76c7d39b9461"),
            ObjectId("60ef88c621aa76c7d39b9462")
        ]
    }
];

const seedLikes = () => {
db.Likes
    .remove({})
    .then(() => db.Likes.collection.insertMany(likesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (Likes)");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

module.exports = seedLikes;