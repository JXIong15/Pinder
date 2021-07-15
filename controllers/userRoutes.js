const router = require('express').Router();
const { User } = require('../../models');
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrpyt = require('bcrypt')

mongoose.connect('')
mongoose.connection.once("open", ()=>{
    console.log('Connected to MongoDB')
})


// 1. Receive email id and password
let password =  req.body.password;
let email =  req.body.email;
// 2. Create hashes
let password2 = sha256(password)
var bcrypt_hash = bcrypt.hashSync(password2, 10);
// 3. Create login token which we return to client
//  maybe using uuid is better...
let login_token = makeid('4') + parseInt(new Date().getTime()).toString(36);
// 4. create hash of login_token which is stored in mongo
const hashed_token = crypto.createHash('sha256').update(login_token).digest('base64');
// 5. we keep hashed tokens to use at the signin
const token_object = {
  'when':new Date(),
  'hashedToken':hashed_token,
};
// 6. create json and insert into mongodb
let insert_params = {
  createdAt: new Date(),
  services:{
    password : {
      bcrypt : bcrypt_hash
    },
    resume : {
      loginTokens : [token_object]
    },
    email : {
      verificationTokens : [
        {
          // nameHash : nameHash,
          address : email,
          when : new Date(),
        }
      ]
    },
  },
  emails : [
    {
      "address" : email,
      "verified" : false
    }
  ],
  profile : {},
}


// 1. create hash from login token
const hashed_token = crypto.createHash('sha256').update(login_token).digest('base64');
// 2. find user with elemMatch
let find_param = {
  'services.resume.loginTokens':{
    '$elemMatch':{
      'hashedToken':hashed_token
    }
  }
}
// find user
mongoDbHelper.collection("users").findOne(find_param)



