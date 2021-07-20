const router = require("express").Router();
const ReviewsControllers = require("../../controllers/ReviewsControllers");


// Matches with "/api/reviews"
router.route("/")
  .get(ReviewsControllers.findAll) // FOR TESTING. DELETE LATER
  .post(ReviewsControllers.create);

// Matches with "/api/reviews/:id"
router
  .route("/:id")
  .get(ReviewsControllers.findById)
  .delete(ReviewsControllers.remove)
  .put(ReviewsControllers.update); 

module.exports = router;