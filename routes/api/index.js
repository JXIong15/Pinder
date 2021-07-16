const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const likesRoutes = require("./likes");
const reviewsRoutes = require("./reviews");
const userAuth = require ("./userAuth");

// routes
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/likes", likesRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/userAuth", userAuth)

module.exports = router;
