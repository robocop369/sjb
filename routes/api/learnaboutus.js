const router = require("express").Router();
const learnaboutusController = require("../../controllers/learnaboutusController");

// Matches with "/api/learnaboutus"
router.route("/")
  .get(learnaboutusController.findAll);
//   .post(learnaboutusController.create);

// // Matches with "/api/learnaboutus/:id"
// router
//   .route("/:id")
//   .get(learnaboutusController.findById)
//   .put(learnaboutusController.update)
//   .delete(learnaboutusController.remove);

module.exports = router;
