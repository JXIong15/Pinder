const router = require("express").Router();
const UserController = require("../../controllers/UserControllers");

// Matches with "/api/user"
router.route("/")
  .get(UserController.findAll) 
  .post(UserController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;