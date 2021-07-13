const router = require("express").Router();
const LikesControllers = require("../../controllers/LikesControllers");
// const withAuth = require('../../utils/auth')

// TO-DO: use withAuth on all funcs

// Matches with "/api/likes"
router.route("/")
  .get(LikesControllers.findAll) // don't need, but good for testing. Maybe delete later

// Matches with "/api/likes/:id"
router
  .route("/:id")
  .get(LikesControllers.findById)
  .delete(LikesControllers.remove)
  .put(LikesControllers.update); // WOULD NEED TO GET ALL MATCHES, ADD NEW-LIKED-USER-ID, AND THEN UPDATE CURRENT-USER'S LIKES

module.exports = router;
