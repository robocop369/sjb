const router = require("express").Router();
const buildingPermitsController = require("../../controllers/buildingPermitsController");

// Matches with "/api/buildingpermits"
router
  .route("/")
  .get(buildingPermitsController.findAllBuildingPermits)



module.exports = router;
