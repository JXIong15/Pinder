const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

const reviewSeed = [
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc0"),
        profile: ObjectId("60ef88c621aa76c7d39b9460"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9463"),
                title: "fun friend",
                body: "He's a great friend. Don't see myself dating him. I'd hang out for a good laugh.",
                rating: 4
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9469"),
                title: "goofy guy",
                body: "He made a lot of funny jokes. I'd go on a second date.",
                rating: 5
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9465"),
                title: "cool and funny",
                body: "Spongebob is a lot of fun. It looks like he doesn't have much together, but he has a job, a house, and a pet. Lots of men can barely hold one of those. And Spongebob still finds time to laugh and enjoy life.",
                rating: 5
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9468"),
                title: "weirdo",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc1"),
        profile: ObjectId("60ef88c621aa76c7d39b9461"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9469"),
                title: "weird",
                body: "all he talked about was his pet rat. I feel like he might be fighting animals against each other.",
                rating: 1
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9465"),
                title: "not again",
                body: "There are a lot of childish guys on this app.",
                rating: 1
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9468"),
                title: "very weird",
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc2"),
        profile: ObjectId("60ef88c621aa76c7d39b9462"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9465"),
                title: "nah",
                body: "He didn't say anything except 'groovy' the whole time. weird guy. but I got free puffs.",
                rating: 3
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9468"),
                title: "okay",
                body: "We smoked, but his stuff was very cheap. Next time, I'll bring my own. If there is a next time.",
                rating: 2
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc3"),
        profile: ObjectId("60ef88c621aa76c7d39b9463"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9460"),
                title: "",
                body: "",
                rating: 5
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9461"),
                title: "I like her",
                body: "Emily has a really big dog. She showed me pictures. I hope to meet Clifford in person on the next date!",
                rating: 5
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9464"),
                title: "",
                body: "",
                rating: 3
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc4"),
        profile: ObjectId("60ef88c621aa76c7d39b9464"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9469"),
                title: "Alright",
                body: "Nice guy. Doesn't talk much.",
                rating: 3
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9466"),
                title: "boring",
                body: "he didn't say much. it was an awkward date.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc5"),
        profile: ObjectId("60ef88c621aa76c7d39b9465"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9467"),
                title: "too young for me",
                body: "She's way too young. We have different views on life, but I still had a fun conversation.",
                rating: 3
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc6"),
        profile: ObjectId("60ef88c621aa76c7d39b9466"),
        reviews: []
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc7"),
        profile: ObjectId("60ef88c621aa76c7d39b9467"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9465"),
                title: "a lot of energy",
                body: "He's older than me, but he acts way younger. I'm gonna pass. Expect to be talking to an 18 year old.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc8"),
        profile: ObjectId("60ef88c621aa76c7d39b9468"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9460"),
                title: "boring",
                body: "she never smiled. really boring",
                rating: 1
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9462"),
                title: "cool",
                body: "Kinda scary, but she did smile at some of my jokes.",
                rating: 3
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9468"),
                title: "chill af",
                body: "we chilled. it was nice.",
                rating: 5
            },
        ]
    },
    {
        _id: ObjectId("60ef8fcaebde7aca7f06abc9"),
        profile: ObjectId("60ef88c621aa76c7d39b9469"),
        reviews: [
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9461"),
                title: "like a second mom",
                body: "I had fun. Reminds me of my mom.",
                rating: 5
            },
            {
                reviewer: ObjectId("60ef88c621aa76c7d39b9464"),
                title: "",
                body: "",
                rating: 5
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