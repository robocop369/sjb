const router = require("express").Router();
const chicagoDataController = require("../../controllers/chicagoDataController");

// Matches with "/api/chicagoData"
router
  .route("/")
  .get(chicagoDataController.findAll)



module.exports = router;
