const router = require("express").Router();
const homepageController = require("../../controllers2/homepageController");

// Matches with "/api/homepage"
router.route("/")
  .get(homepageController.findAll)
  .post(homepageController.create);

// Matches with "/api/homepage/:id"
router
  .route("/:id")
  .get(homepageController.findById)
  .put(homepageController.update)
  .delete(homepageController.remove);

module.exports = router;
