const router = require("express").Router();
const abanBuildingsController = require("../../controllers/abanBuildingsController");

// Matches with "/api/abanbuildings"
router
  .route("/")
  .get(abanBuildingsController.findAllAbanBuildings)



module.exports = router;

