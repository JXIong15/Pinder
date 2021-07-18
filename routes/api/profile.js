const router = require("express").Router();
const ProfileController = require("../../controllers/ProfileControllers");
const auth = require("../../utils/auth");
// TO-DO: use withAuth on all funcs

// Matches with "/api/profile"
router.route("/")
  .get(auth, ProfileController.findAll)
  .post(ProfileController.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(ProfileController.findById)
  .put(ProfileController.update)
  .delete(ProfileController.remove);

module.exports = router;
