const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;


const profileSeed = [
    {
        _id: ObjectId("0000001fe136c637652883bc"),
        intent: "Friends",
        name: "SpongeBob SquarePants",
        age: 22,
        gender: "Male",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Goofy, funny, care free guy."
    },
    {
        _id: ObjectId("00000002f8591e57d818ea77"),
        intent: "Friends",
        name: "Ash Ketchum",
        age: 23,
        gender: "Male",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Certified dog trainer. I love anything having to do with animals!"
    },
    {
        _id: ObjectId(13),
        _id: ObjectId("00000003f8591e57d818ea78"),
        intent: "Friends",
        name: "Shaggy Rogers",
        age: 21,
        gender: "Male",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "My kind of date is lounging around having a smoke or two and listening to grooooovy music."
    },
    {
        _id: ObjectId(14),
        _id: ObjectId("00000004f8591e57d818ea79"),
        intent: "Friends",
        name: "Emily Elizabeth Howard",
        age: 19,
        gender: "Female",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Aspiring teacher. I have a love for learning new things. My ideal date is an intellectual conversation at a cafe or in nature."
    },
    {
        _id: ObjectId("00000005f8591e57d818ea7a"),
        intent: "Friends",
        name: "Kiba Inuzuka",
        age: 28,
        gender: "Male",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "I seek excitement and growth. Don't bore me with anything unnecessary, and don't hold me back."
    },
    {
        _id: ObjectId("00000006f8591e57d818ea7b"),
        intent: "Friends",
        name: "Janet Smith",
        age: 25,
        gender: "Female",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "I like to party. I'm young, wild, and free! Looking for some excitement, so hit my line if that's your thing! ;)"
    },
    {
        _id: ObjectId("00000007f8591e57d818ea7c"),
        intent: "Friends",
        name: "Amber Jones",
        age: 33,
        gender: "Female",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Looking for something serious. I'm a busy business woman who doesn't have time to mess around. If you're just looking for a hook up, don't swipe on me. If you're looking to grow, let's connect!"
    },
    {
        _id: ObjectId("00000008f8591e57d818ea7d"),
        intent: "Friends",
        name: "Aang Avatar",
        age: 32,
        gender: "Male",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "I love going on adventure! Long hikes and walks. The water is beautiful too. I'm a free spirit always eager to learn more."
    },
    {
        _id: ObjectId("00000009f8591e57d818ea7e"),
        intent: "Friends",
        name: "Kim Kardashian",
        age: 40,
        gender: "Female",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Self Love. Empower Women. Newly divorced with 4 children. I'm an entrepreneaur looking to mingle with others."
    },
    {
        _id: ObjectId("0000000af8591e57d818ea7f"),
        intent: "Friends",
        name: "Jennifer Aniston",
        age: 52,
        gender: "Female",
        sex: "Heterosexual",
        location: [
            {
                city: "Chicago",
                state: "IL"
            }
        ],
        bio: "Looking for someone to spend the rest of my life with. I have two furry children."
    }
];

const seedProfile = () => {
db.Profile
    .remove({})
    .then(() => db.Profile.collection.insertMany(profileSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (Profile)");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

module.exports = seedProfile;