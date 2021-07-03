const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/reactuserlist", 
//     {useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true}
// );

const userSeed = [
    {
        _id: ObjectId("0000001fe136c637652883bc"),
        email: "spongbob14@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000002f8591e57d818ea77"),
        email: "pokemonmaster96@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000003f8591e57d818ea78"),
        email: "shagster87@yahoo.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000004f8591e57d818ea79"),
        email: "eehoward@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000005f8591e57d818ea7a"),
        email: "hiddenleaf22@aol.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000006f8591e57d818ea7b"),
        email: "j.smith1998@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000007f8591e57d818ea7c"),
        email: "amberjones23@hotmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000008f8591e57d818ea7d"),
        email: "theoneandonlyaang@aol.com",
        password: "password123"
    },
    {
        _id: ObjectId("00000009f8591e57d818ea7e"),
        email: "kkw77@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId("0000000af8591e57d818ea7f"),
        email: "test123@yahoo.com",
        password: "password123"
    },
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











// const mongoose = require("mongoose");
// const db = require("../models");


// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/reactuserlist"
// );


// const userSeed = [
//     {
//         _id: 1,
//         email: "spongbob14@gmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "SpongeBob SquarePants",
//             age: 22,
//             gender: "Male",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Goofy, funny, care free guy."
//         },
//         likes: [4],
//         reviews: [
//             {
//                 reviewing: 4,
//                 title: "",
//                 body: "",
//                 rating: 5
//             },
//             {
//                 reviewing: 9,
//                 title: "boring",
//                 body: "she never smiled. really boring",
//                 rating: 1
//             },
//         ]
//     },
//     {
//         _id: 2,
//         email: "pokemonmaster96@gmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Ash Ketchum",
//             age: 23,
//             gender: "Male",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Certified dog trainer. I love anything having to do with animals!"
//         },
//         likes: [4, 9],
//         reviews: [
//             {
//                 reviewing: 10,
//                 title: "like a second mom",
//                 body: "I had fun. Reminds me of my mom.",
//                 rating: 5
//             },
//             {
//                 reviewing: 4,
//                 title: "I like her",
//                 body: "Emily has a really big dog. She showed me pictures. I hope to meet Clifford in person on the next date!",
//                 rating: 5
//             },
//             {
//                 reviewing: 9,
//                 title: "cool",
//                 body: "Kinda scary, but she did smile at some of my jokes.",
//                 rating: 3
//             },
//         ]
//     },
//     {
//         _id: 3,
//         email: "shagster87@yahoo.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Shaggy Rogers",
//             age: 21,
//             gender: "Male",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "My kind of date is lounging around having a smoke or two and listening to grooooovy music."
//         },
//         likes: [],
//         reviews: [
//             {
//                 reviewing: 9,
//                 title: "chill af",
//                 body: "we chilled. it was nice.",
//                 rating: 5
//             }
//         ]
//     },
//     {
//         _id: 4,
//         email: "eehoward@gmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Emily Elizabeth Howard",
//             age: 19,
//             gender: "Female",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Aspiring teacher. I have a love for learning new things. My ideal date is an intellectual conversation at a cafe or in nature."
//         },
//         likes: [1, 2, 3],
//         reviews: [
//             {
//                 reviewing: 1,
//                 title: "goofy guy",
//                 body: "He made a lot of funny jokes. I'd go on a second date.",
//                 rating: 5
//             },
//             {
//                 reviewing: 2,
//                 title: "weird",
//                 body: "all he talked about was his pet rat. I feel like he might be fighting animals against each other.",
//                 rating: 1
//             },
//             {
//                 reviewing: 5,
//                 title: "boring",
//                 body: "he didn't say much. it was an awkward date.",
//                 rating: 1
//             },
//         ]
//     },
//     {
//         _id: 5,
//         email: "hiddenleaf22@aol.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Kiba Inuzuka",
//             age: 28,
//             gender: "Male",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "I seek excitement and growth. Don't bore me with anything unnecessary, and don't hold me back."
//         },
//         likes: [4, 9, 10],
//         reviews: [
//             {
//                 reviewing: 4,
//                 title: "",
//                 body: "",
//                 rating: 3
//             },
//             {
//                 reviewing: 10,
//                 title: "",
//                 body: "",
//                 rating: 5
//             },
//         ]
//     },
//     {
//         _id: 6,
//         email: "j.smith1998@gmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Janet Smith",
//             age: 25,
//             gender: "Female",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "I like to party. I'm young, wild, and free! Looking for some excitement, so hit my line if that's your thing! ;)"
//         },
//         likes: [1, 2, 3],
//         reviews: [
//             {
//                 reviewing: 3,
//                 title: "nah",
//                 body: "He didn't say anything except 'groovy' the whole time. weird guy. but I got free puffs.",
//                 rating: 3
//             },
//             {
//                 reviewing: 8,
//                 title: "a lot of energy",
//                 body: "He's older than me, but he acts way younger. I'm gonna pass. Expect to be talking to an 18 year old.",
//                 rating: 1
//             },
//             {
//                 reviewing: 1,
//                 title: "cool and funny",
//                 body: "Spongebob is a lot of fun. It looks like he doesn't have much together, but he has a job, a house, and a pet. Lots of men can barely hold one of those. And Spongebob still finds time to laugh and enjoy life.",
//                 rating: 5
//             },
//             {
//                 reviewing: 2,
//                 title: "not again",
//                 body: "There are a lot of childish guys on this app.",
//                 rating: 1
//             },
//         ]
//     },
//     {
//         _id: 7,
//         email: "amberjones23@hotmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Amber Jones",
//             age: 33,
//             gender: "Female",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Looking for something serious. I'm a busy business woman who doesn't have time to mess around. If you're just looking for a hook up, don't swipe on me. If you're looking to grow, let's connect!"
//         },
//         likes: [1],
//         reviews: []
//     },
//     {
//         _id: 8,
//         email: "theoneandonlyaang@aol.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Aang Avatar",
//             age: 32,
//             gender: "Male",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "I love going on adventure! Long hikes and walks. The water is beautiful too. I'm a free spirit always eager to learn more."
//         },
//         likes: [4, 9, 10],
//         reviews: [
//             {
//                 reviewing: 6,
//                 title: "too young for me",
//                 body: "She's way too young. We have different views on life, but I still had a fun conversation.",
//                 rating: 3
//             }
//         ]
//     },
//     {
//         _id: 9,
//         email: "kkw77@gmail.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Kim Kardashian",
//             age: 40,
//             gender: "Female",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Self Love. Empower Women. Newly divorced with 4 children. I'm an entrepreneaur looking to mingle with others."
//         },
//         likes: [],
//         reviews: [
//             {
//                 reviewing: 1,
//                 title: "weirdo",
//                 body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//                 rating: 1
//             },
//             {
//                 reviewing: 2,
//                 title: "very weird",
//                 body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
//                 rating: 1
//             },
//             {
//                 reviewing: 3,
//                 title: "okay",
//                 body: "We smoked, but his stuff was very cheap. Next time, I'll bring my own. If there is a next time.",
//                 rating: 3
//             },
//         ]
//     },
//     {
//         _id: 10,
//         email: "test123@yahoo.com",
//         password: "password123",
//         profile: {
//             intent: "Friends",
//             name: "Jennifer Aniston",
//             age: 52,
//             gender: "Female",
//             sex: "Heterosexual",
//             location: [
//                 {
//                     city: "Chicago",
//                     state: "IL"
//                 }
//             ],
//             bio: "Looking for someone to spend the rest of my life with. I have two furry children."
//         },
//         likes: [2, 3],
//         reviews: [
//             {
//                 reviewing: 1,
//                 title: "fun friend",
//                 body: "He's a great friend. Don't see myself dating him. I'd hang out for a good laugh.",
//                 rating: 4
//             },
//             {
//                 reviewing: 5,
//                 title: "Alright",
//                 body: "Nice guy. Doesn't talk much.",
//                 rating: 3
//             },
//         ]
//     },
// ];

// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(userSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
