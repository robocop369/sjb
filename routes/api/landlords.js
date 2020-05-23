const router = require("express").Router();
const landlordsController = require("../../controllers/landlordsController");

// Matches with "/api/landlords"
router.route("/")
  .get(landlordsController.findAll)
  .post(landlordsController.create);

// Matches with "/api/landlords/:id"
router
  .route("/:id")
  .get(landlordsController.findById)
  .put(landlordsController.update)
  .delete(landlordsController.remove);

module.exports = router;
