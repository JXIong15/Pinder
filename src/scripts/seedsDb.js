const mongoose = require("mongoose");
const db = require("../models");
const { Types: { ObjectId } } = mongoose;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactuserlist"
);

const userSeed = [
    {
        _id: ObjectId("0000001fe136c637652883bc"),
        email: "spongbob14@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(2),
        email: "pokemonmaster96@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(3),
        email: "shagster87@yahoo.com",
        password: "password123"
    },
    {
        _id: ObjectId(4),
        email: "eehoward@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(5),
        email: "hiddenleaf22@aol.com",
        password: "password123"
    },
    {
        _id: ObjectId(6),
        email: "j.smith1998@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(7),
        email: "amberjones23@hotmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(8),
        email: "theoneandonlyaang@aol.com",
        password: "password123"
    },
    {
        _id: ObjectId(9),
        email: "kkw77@gmail.com",
        password: "password123"
    },
    {
        _id: ObjectId(10),
        email: "test123@yahoo.com",
        password: "password123"
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (User)");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


const profileSeed = [
    {
        user: ObjectId("0000001fe136c637652883bc"),
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
        user: ObjectId(2),
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
        user: ObjectId(3),
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
        user: ObjectId(4),
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
        _id: ObjectId(15),
        user: ObjectId(5),
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
        _id: ObjectId(16),
        user: ObjectId(6),
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
        _id: ObjectId(17),
        user: ObjectId(7),
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
        _id: ObjectId(18),
        user: ObjectId(8),
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
        _id: ObjectId(19),
        user: ObjectId(9),
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
        _id: ObjectId(100),
        user: ObjectId(10),
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
        console.log(data.result.n + " records inserted! (Profile)");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });



const likesSeed = [
    {
        user: ObjectId("0000001fe136c637652883bc"),
        likes: [
            ObjectId(9)
        ]
    },
    {
        _id: ObjectId(22),
        user: ObjectId(2),
        likes: [
            ObjectId(4),
            ObjectId(9)
        ]
    },
    {
        _id: ObjectId(23),
        user: ObjectId(3),
        likes: []
    },
    {
        _id: ObjectId(24),
        user: ObjectId(4),
        likes: [
            ObjectId("0000001fe136c637652883bc"),
            ObjectId(2), 
            ObjectId(3)
        ]
    },
    {
        _id: ObjectId(25),
        user: ObjectId(5),
        likes: [
            ObjectId(4),
            ObjectId(9), 
            ObjectId(10)
        ]
    },
    {
        _id: ObjectId(26),
        user: ObjectId(6),
        likes: [
            ObjectId("0000001fe136c637652883bc"),
            ObjectId(2), 
            ObjectId(3)
        ]
    },
    {
        _id: ObjectId(17),
        user: ObjectId(7),
        likes: [
            ObjectId("0000001fe136c637652883bc")
        ]
    },
    {
        _id: ObjectId(28),
        user: ObjectId(8),
        likes: [
            ObjectId(4),
            ObjectId(9), 
            ObjectId(10)
        ]
    },
    {
        _id: ObjectId(29),
        user: ObjectId(9),
        likes: []
    },
    {
        _id: ObjectId(200),
        user: ObjectId(10),
        likes: [
            ObjectId(2),
            ObjectId(3)
        ]
    }
];

db.Likes
    .remove({})
    .then(() => db.Likes.collection.insertMany(likesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (Likes)");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });



const reviewSeed = [
    {
        user: ObjectId("0000001fe136c637652883bc"),
        reviews: [
            {
                reviewing: ObjectId(4),
                title: "",
                body: "",
                rating: 5
            },
            {
                reviewing: ObjectId(9),
                title: "boring",
                body: "she never smiled. really boring",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId(32),
        user: ObjectId(2),
        reviews: [
            {
                reviewing: ObjectId(10),
                title: "like a second mom",
                body: "I had fun. Reminds me of my mom.",
                rating: 5
            },
            {
                reviewing: ObjectId(4),
                title: "I like her",
                body: "Emily has a really big dog. She showed me pictures. I hope to meet Clifford in person on the next date!",
                rating: 5
            },
            {
                reviewing: ObjectId(9),
                title: "cool",
                body: "Kinda scary, but she did smile at some of my jokes.",
                rating: 3
            },
        ]
    },
    {
        _id: ObjectId(33),
        user: ObjectId(3),
        reviews: [
            {
                reviewing: ObjectId(9),
                title: "chill af",
                body: "we chilled. it was nice.",
                rating: 5
            }
        ]
    },
    {
        _id: ObjectId(34),
        user: ObjectId(4),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "goofy guy",
                body: "He made a lot of funny jokes. I'd go on a second date.",
                rating: 5
            },
            {
                reviewing: ObjectId(2),
                title: "weird",
                body: "all he talked about was his pet rat. I feel like he might be fighting animals against each other.",
                rating: 1
            },
            {
                reviewing: ObjectId(5),
                title: "boring",
                body: "he didn't say much. it was an awkward date.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId(35),
        user: ObjectId(5),
        reviews: [
            {
                reviewing: ObjectId(4),
                title: "",
                body: "",
                rating: 3
            },
            {
                reviewing: ObjectId(10),
                title: "",
                body: "",
                rating: 5
            },
        ]
    },
    {
        _id: ObjectId(36),
        user: ObjectId(6),
        reviews: [
            {
                reviewing: ObjectId(3),
                title: "nah",
                body: "He didn't say anything except 'groovy' the whole time. weird guy. but I got free puffs.",
                rating: 3
            },
            {
                reviewing: ObjectId(8),
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
                reviewing: ObjectId(2),
                title: "not again",
                body: "There are a lot of childish guys on this app.",
                rating: 1
            },
        ]
    },
    {
        _id: ObjectId(37),
        user: ObjectId(7),
        reviews: []
    },
    {
        _id: ObjectId(38),
        user: ObjectId(8),
        reviews: [
            {
                reviewing: ObjectId(6),
                title: "too young for me",
                body: "She's way too young. We have different views on life, but I still had a fun conversation.",
                rating: 3
            }
        ]
    },
    {
        _id: ObjectId(39),
        user: ObjectId(9),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "weirdo",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                rating: 1
            },
            {
                reviewing: ObjectId(2),
                title: "very weird",
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
                rating: 1
            },
            {
                reviewing: ObjectId(3),
                title: "okay",
                body: "We smoked, but his stuff was very cheap. Next time, I'll bring my own. If there is a next time.",
                rating: 2
            },
        ]
    },
    {
        _id: ObjectId(300),
        user: ObjectId(10),
        reviews: [
            {
                reviewing: ObjectId("0000001fe136c637652883bc"),
                title: "fun friend",
                body: "He's a great friend. Don't see myself dating him. I'd hang out for a good laugh.",
                rating: 4
            },
            {
                reviewing: ObjectId(5),
                title: "Alright",
                body: "Nice guy. Doesn't talk much.",
                rating: 3
            },
        ]
    }
];

db.Reviews
    .remove({})
    .then(() => db.Reviews.collection.insertMany(reviewSeed))
    .then(data => {
        console.log(data.result.n + " records inserted! (Reviews)");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
