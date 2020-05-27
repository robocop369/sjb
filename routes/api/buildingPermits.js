const router = require("express").Router();
const buildingPermitsController = require("../../controllers/buildingPermitsController");

// Matches with "/api/buildingpermits"
// Onclick event route to dynamically display chart data
router
  .route("/")
  .get(buildingPermitsController.findAllBuildingPermits)



module.exports = router;
