const router = require("express").Router();
const homepageController = require("../../controllers/homepageController");

//should never need to list all documents. We only ever show 1 based on what was clicked. 
// Matches with "/api/homepage"
// router.route("/")
//   .get(homepageController.findAll)
//   .post(homepageController.create);

// Matches with "/api/homepage/:id"
router
  .route("/:id")
  .get(homepageController.findById)
  .put(homepageController.update)
  .delete(homepageController.remove);

module.exports = router;
