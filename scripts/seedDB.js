const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactuserlist"
);

const userSeed = [
  {
    email: "spongbob14@gmail.com",
    password: "password123",
    name: "SpongeBob SquarePants",
    age: 22,
    gender: "Male",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Goofy, funny, care free guy.",
    pets: [
      {
        name: 'Gary',
        age: 5,
        gender: "Male",
        type: "Dog",
        breed: "Bull Dog",
        energy: 2,
        bio: "I like sleeping and eating. If my dad likes you, then I will too."
      },
    ],
  },
  {
    email: "pokemonmaster96@gmail.com",
    password: "password123",
    name: "Ash Ketchum",
    age: 23,
    gender: "Male",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Certified dog trainer. I love anything having to do with animals!",
    pets: [
      {
        name: 'Pikachu',
        age: 5,
        gender: "Male",
        type: "Dog",
        breed: "Golden Retriever",
        energy: 5,
        bio: "I'm very active. My dad and I train every day. I'm a good boy who knows when to turn on and off his aggression switch on command."
      },
      {
        name: 'Charizard',
        age: 4,
        gender: "Male",
        type: "Dog",
        breed: "Pomeranian",
        energy: 3,
        bio: "I have a temper. It takes me a while to warm up to people. Once I do, I'm the most loyal and powerful pup you'll ever need."
      },
    ],
  },
  {
    email: "shagster87@yahoo.com",
    password: "password123",
    name: "Shaggy Rogers",
    age: 21,
    gender: "Male",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "My kind of date is lounging around having a smoke or two and listening to grooooovy music.",
    pets: [
      {
        name: 'Scooby',
        age: 5,
        gender: "Male",
        type: "Dog",
        breed: "Great Dane",
        energy: 1,
        bio: "I'm shy when you first meet me, but once I get to know you, I will snuggle you with love."
      },
    ],
  },
  {
    email: "eehoward@gmail.com",
    password: "password123",
    name: "Emily Elizabeth Howard",
    age: 19,
    gender: "Female",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Aspiring teacher. I have a love for learning new things. My ideal date is an intellectual conversation at a cafe or in nature.",
    pets: [
      {
        name: 'Clifford',
        age: 3,
        gender: "Male",
        type: "Dog",
        breed: "Mutt",
        energy: 3,
        bio: "My mom is my life. I'll do anything for her. I'm a really big dog with a really big heart."
      },
    ],
  },
  {
    email: "hiddenleaf22@aol.com",
    password: "password123",
    name: "Kiba Inuzuka",
    age: 28,
    gender: "Male",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "I seek excitement and growth. Don't bore me with anything unnecessary, and don't hold me back.",
    pets: [
      {
        name: 'Akamaru',
        age: 7,
        gender: "Male",
        type: "Dog",
        breed: "Great Pyrenees",
        energy: 5,
        bio: "I'm very loyal and protective of my dad. I'm an active boy, but I know when to relax."
      },
    ],
  },
  {
    email: "j.smith1998@gmail.com",
    password: "password123",
    name: "Janet Smith",
    age: 25,
    gender: "Female",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "I like to party. I'm young, wild, and free! Looking for some excitement, so hit my line if that's your thing! ;)",
    pets: [
      {
        name: 'Loki',
        age: 7,
        gender: "Male",
        type: "Dog",
        breed: "Laborador Retriever",
        energy: 4,
        bio: "Mischievous boy. I like playing pranks and running around. After I get tired out, I will cuddle with you."
      },
      {
        name: 'Thor',
        age: 9,
        gender: "Male",
        type: "Dog",
        breed: "Golden Retriever",
        energy: 4,
        bio: "I'm a chill boy. Occassionally, I'm playful and fun, but my age has slowed me down. I'm a big cuddle bug who is always annoyed by my brother, but I love him."
      },
    ],
  },
  {
    name: "Amber Jones",
    age: 33,
    gender: "Female",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Looking for something serious. I'm a busy business woman who doesn't have time to mess around. If you're just looking for a hook up, don't swipe on me. If you're looking to grow, let's connect!",
    pets: [
      {
        name: 'Nala',
        age: 5,
        gender: "Female",
        type: "Dog",
        breed: "Goldendoodle",
        energy: 3,
        bio: "When I'm not with my nanny, I like cuddling with my mom. I'm a good girl, and I listen to everything I'm told."
      },
    ],
  },
  {
    name: "Aang Avatar",
    age: 32,
    gender: "Male",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "I love going on adventure! Long hikes and walks. The water is beautiful too. I'm a free spirit always eager to learn more.",
    pets: [
      {
        name: 'Appa',
        age: 8,
        gender: "Male",
        type: "Dog",
        breed: "Saint Bernard",
        energy: 5,
        bio: "I can give you rides if you're small enough. Or I cal pull you around in a wagon. When I'm not working, I sleep. My fur is long and soft for you to cuddle with. I'll be your personal pillow."
      },
      {
        name: 'Momo',
        age: 1,
        gender: "Male",
        type: "Dog",
        breed: "Chihuahua",
        energy: 5,
        bio: "I'm very smart! Even though I can be loud and voiceful, I am a good listener. Sometimes, I get into trouble, but my dad always helps me."
      },
    ],
  },
  {
    name: "Kim Kardashian",
    age: 40,
    gender: "Female",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Self Love. Empower Women. Newly divorced with 4 children. I'm an entrepreneaur looking to mingle with others.",
    pets: [
      {
        name: 'Sushi',
        age: 4,
        gender: "Male",
        type: "Dog",
        breed: "Pomeranian",
        energy: 5,
        bio: "I'm soft and cuddly."
      },
      {
        name: 'Sake',
        age: 4,
        gender: "Male",
        type: "Dog",
        breed: "Pomeranian",
        energy: 5,
        bio: "I love talking!"
      },
    ],
  },
  {
    name: "Jennifer Aniston",
    age: 52,
    gender: "Female",
    location: [
      {
        city: "Chicago",
        state: "IL"
      }
    ],
    bio: "Looking for someone to spend the rest of my life with. I have two furry children.",
    pets: [
      {
        name: 'Sophie',
        age: 4,
        gender: "Female",
        type: "Dog",
        breed: "Pittbull",
        energy: 3,
        bio: "I'm an adoptee who has a lot of love to give. I may look scary, but I just wanna give you kisses."
      },
      {
        name: 'Clyde',
        age: 3,
        gender: "Male",
        type: "Dog",
        breed: "Terrier",
        energy: 5,
        bio: "I'm small but mighty!"
      },
    ],
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
