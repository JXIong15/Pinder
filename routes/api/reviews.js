// TO-DO TEST THIS WHOLE DOC

const router = require("express").Router();
const ReviewsControllers = require("../../controllers/ReviewsControllers");
// const withAuth = require('../../utils/auth')

// TO-DO: use withAuth on all funcs

// Matches with "/api/reviews"
router.route("/")
  .get(ReviewsControllers.findAll) // FOR TESTING. DELETE LATER

// Matches with "/api/reviews/:id"
router
  .route("/:id")
  .get(ReviewsControllers.findById)
  .delete(ReviewsControllers.remove)
  .put(ReviewsControllers.update); // push or move from array first before updating (PUT)

module.exports = router;