const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const likesRoutes = require("./likes");
const reviewsRoutes = require("./reviews");
const passport = require("../../passport");
require('dotenv').config()
const jwt = require('jsonwebtoken');
const verifyJWT = require("../../utils/verifyJWT");

// routes
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/likes", likesRoutes);
router.use("/reviews", reviewsRoutes);


router.get('/login', verifyJWT, (req, res) => {
    res.send("YOU ARE AUTHENTICATED!");
    // NEED TO GET DATA
    console.log("req", req)
    console.log("res", res);
})

router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("login hit");

    const email = req.user.email;
    const password = req.user.password;
    const id = req.user.id;

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
    })


    res.json({ auth: true, token: token, user: req.user });
});



router.get("/logout", function (req, res) {
    console.log("logout!");
    req.logout();
    res.sendStatus(200)
});


module.exports = router;
