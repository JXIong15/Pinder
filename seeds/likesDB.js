const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

const likesSeed = [
    {
        user: ObjectId("0000001fe136c637652883bc"),
        likes: [
            ObjectId("00000009f8591e57d818ea7e")
        ]
    },
    {
        user: ObjectId("00000002f8591e57d818ea77"),
        likes: [
            ObjectId("00000004f8591e57d818ea79"),
            ObjectId("00000009f8591e57d818ea7e")
        ]
    },
    {
        user: ObjectId("00000003f8591e57d818ea78"),
        likes: []
    },
    {
        user: ObjectId("00000004f8591e57d818ea79"),
        likes: [
            ObjectId("0000001fe136c637652883bc"),
            ObjectId("00000002f8591e57d818ea77"),
            ObjectId("00000003f8591e57d818ea78")
        ]
    },
    {
        user: ObjectId("00000005f8591e57d818ea7a"),
        likes: [
            ObjectId("00000004f8591e57d818ea79"),
            ObjectId("00000009f8591e57d818ea7e"),
            ObjectId("0000000af8591e57d818ea7f")
        ]
    },
    {
        user: ObjectId("00000006f8591e57d818ea7b"),
        likes: [
            ObjectId("0000001fe136c637652883bc"),
            ObjectId("00000002f8591e57d818ea77"),
            ObjectId("00000003f8591e57d818ea78")
        ]
    },
    {
        user: ObjectId("00000007f8591e57d818ea7c"),
        likes: [
            ObjectId("0000001fe136c637652883bc")
        ]
    },
    {
        user: ObjectId("00000008f8591e57d818ea7d"),
        likes: [
            ObjectId("00000004f8591e57d818ea79"),
            ObjectId("00000009f8591e57d818ea7e"),
            ObjectId("0000000af8591e57d818ea7f")
        ]
    },
    {
        user: ObjectId("00000009f8591e57d818ea7e"),
        likes: []
    },
    {
        user: ObjectId("0000000af8591e57d818ea7f"),
        likes: [
            ObjectId("00000002f8591e57d818ea77"),
            ObjectId("00000003f8591e57d818ea78")
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