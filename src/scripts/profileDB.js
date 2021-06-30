const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactuserlist"
);

const profileSeed = [
    {
        user: 1,
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
        user: 2,
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
        user: 3,
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
        user: 4,
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
        user: 5,
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
        user: 6,
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
        user: 7,
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
        user: 8,
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
        user: 9,
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
        user: 10,
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

db.Profile
    .remove({})
    .then(() => db.Profile.collection.insertMany(profileSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
