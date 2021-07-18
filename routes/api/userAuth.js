const express = require("express");
const router = express.Router();
const db = require("../../models");
const passport = require("../../passport");
require('dotenv').config()
const jwt = require('jsonwebtoken');


router.get("/test", function (req, res) {
  res.json(req.user);
});

router.post("/signup", function (req, res) {
  db.User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.json({ msg: "This user already has an account!" });
    } else {
      db.User.create(req.body).then(function () {
        res.redirect(307, "/login");
      });
    }
  });
});


const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.send("NEED TOKEN!");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({auth: false, message: "FAILED TO AUTH"})
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

router.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send("YOU ARE AUTHENTICATED!")
})


router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("login hit");
  console.log("req", req.user.id);
  const email = req.user.email;
  const password = req.user.password;
  const id = req.user.id;
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  })
  

  res.json({auth: true, token: token, user: req.user});
});



router.get("/logout", function (req, res) {
  console.log("logout!");
  req.logout();
  res.sendStatus(200)
});
// //protected routes
// router.get("/userlogged", function (req,res){
//   if(!req.user){
//   res.redirect("/login")
//   }else{
//   res.json(req.user);
//   }
//   })
module.exports = router;