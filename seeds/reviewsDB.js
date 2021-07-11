const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

const reviewSeed = [
    {
        _id: ObjectId("0000001fe136c637652883bc"),
        reviews: [
            {
                reviewing: ObjectId("00000004f8591e57d818ea79"),
                title: "",
                body: "",
                rating: 5
            },
            {
                reviewing: ObjectId("00000009f8591e57d818ea7e"),
                title: "boring",
                body: "she never smiled. really boring",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("00000002f8591e57d818ea77"),
        reviews: [
            {
                reviewing: ObjectId("0000000af8591e57d818ea7f"),
                title: "like a second mom",
                body: "I had fun. Reminds me of my mom.",
                rating: 5
            },
            {
                reviewing: ObjectId("00000004f8591e57d818ea79"),
                title: "I like her",
                body: "Emily has a really big dog. She showed me pictures. I hope to meet Clifford in person on the next date!",
                rating: 5
            },
            {
                reviewing: ObjectId("00000009f8591e57d818ea7e"),
                title: "cool",
                body: "Kinda scary, but she did smile at some of my jokes.",
                rating: 3
            },
        ]
    },
    {
        _id: ObjectId("00000003f8591e57d818ea78"),
        reviews: [
            {
                reviewing: ObjectId("00000009f8591e57d818ea7e"),
                title: "chill af",
                body: "we chilled. it was nice.",
                rating: 5
            }
        ]
    },
    {
        _id: ObjectId("00000004f8591e57d818ea79"),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "goofy guy",
                body: "He made a lot of funny jokes. I'd go on a second date.",
                rating: 5
            },
            {
                reviewing: ObjectId("00000002f8591e57d818ea77"),
                title: "weird",
                body: "all he talked about was his pet rat. I feel like he might be fighting animals against each other.",
                rating: 1
            },
            {
                reviewing: ObjectId("00000005f8591e57d818ea7a"),
                title: "boring",
                body: "he didn't say much. it was an awkward date.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("00000005f8591e57d818ea7a"),
        reviews: [
            {
                reviewing: ObjectId("00000004f8591e57d818ea79"),
                title: "",
                body: "",
                rating: 3
            },
            {
                reviewing: ObjectId("0000000af8591e57d818ea7f"),
                title: "",
                body: "",
                rating: 5
            },
        ]
    },
    {
        _id: ObjectId("00000006f8591e57d818ea7b"),
        reviews: [
            {
                reviewing: ObjectId("00000003f8591e57d818ea78"),
                title: "nah",
                body: "He didn't say anything except 'groovy' the whole time. weird guy. but I got free puffs.",
                rating: 3
            },
            {
                reviewing: ObjectId("00000008f8591e57d818ea7d"),
                title: "a lot of energy",
                body: "He's older than me, but he acts way younger. I'm gonna pass. Expect to be talking to an 18 year old.",
                rating: 1
            },
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "cool and funny",
                body: "Spongebob is a lot of fun. It looks like he doesn't have much together, but he has a job, a house, and a pet. Lots of men can barely hold one of those. And Spongebob still finds time to laugh and enjoy life.",
                rating: 5
            },
            {
                reviewing: ObjectId("00000002f8591e57d818ea77"),
                title: "not again",
                body: "There are a lot of childish guys on this app.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("00000007f8591e57d818ea7c"),
        reviews: []
    },
    {
        _id: ObjectId("00000008f8591e57d818ea7d"),
        reviews: [
            {
                reviewing: ObjectId("00000006f8591e57d818ea7b"),
                title: "too young for me",
                body: "She's way too young. We have different views on life, but I still had a fun conversation.",
                rating: 3
            }
        ]
    },
    {
        _id: ObjectId("00000009f8591e57d818ea7e"),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "weirdo",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                rating: 1
            },
            {
                reviewing: ObjectId("00000002f8591e57d818ea77"),
                title: "very weird",
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
                rating: 1
            },
            {
                reviewing: ObjectId("00000003f8591e57d818ea78"),
                title: "okay",
                body: "We smoked, but his stuff was very cheap. Next time, I'll bring my own. If there is a next time.",
                rating: 2
            },
        ]
    },
    {
        _id: ObjectId("0000000af8591e57d818ea7f"),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "fun friend",
                body: "He's a great friend. Don't see myself dating him. I'd hang out for a good laugh.",
                rating: 4
            },
            {
                reviewing: ObjectId("00000005f8591e57d818ea7a"),
                title: "Alright",
                body: "Nice guy. Doesn't talk much.",
                rating: 3
            },
        ]
    }
];


const seedReviews = () => {
db.Reviews
    .remove({})
    .then(() => db.Reviews.collection.insertMany(reviewSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (Reviews)");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

module.exports = seedReviews;