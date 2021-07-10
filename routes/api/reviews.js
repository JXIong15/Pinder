// TO-DO TEST THIS WHOLE DOC

const router = require("express").Router();
const ReviewsControllers = require("../../controllers/ReviewsControllers");
// const withAuth = require('../../utils/auth')

// TO-DO: use withAuth on all funcs

// Matches with "/api/reviews"
router.route("/")
  .get(ReviewsControllers.findAll) 
//   .post(LikesControllers.create);

// Matches with "/api/reviews/:id"
router
  .route("/:id")
  .get(ReviewsControllers.findById) // IS THERE A WAY TO DO THIS WITH USERID?
//   .delete(ReviewsControllers.remove)
//   .post(ReviewsControllers.create);

module.exports = router;