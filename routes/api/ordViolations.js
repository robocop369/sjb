const router = require("express").Router();
const ordViolationssController = require("../../controllers/ordViolationsController");

// Matches with "/api/ordviolations"
router
  .route("/")
  .get(ordViolationssController.findAllOrdViolations)



module.exports = router;

