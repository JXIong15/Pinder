const router = require("express").Router();
const UserController = require("../../controllers/UserControllers");
// const withAuth = require('../../utils/auth')

// TO-DO: use withAuth on all funcs

// Matches with "/api/profile"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;