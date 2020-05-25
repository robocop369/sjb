const router = require("express").Router();
const buildingPermitsController = require("../../controllers/buildingPermitsController");

// Matches with "/api/buildingpermits"
router
  .route("/")
  .get(buildingPermitsController.findAll)



module.exports = router;
