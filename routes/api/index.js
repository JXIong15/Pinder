const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const likesRoutes = require("./likes");
const reviewsRoutes = require("./reviews");

// routes
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/likes", likesRoutes);
router.use("/reviews", reviewsRoutes);

module.exports = router;
