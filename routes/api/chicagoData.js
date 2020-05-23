const router = require("express").Router();
const chicagoDataController = require("../../controllers/chicagoDataController");

// Matches with "/api/chicagoData"
router
  .route("/")
  .get(chicagoDataController.findAll)
  .post(chicagoDataController.create);

// Matches with "/api/chicagoData/:id"
router
  .route("/:id")
  .get(chicagoDataController.findById)
  .put(chicagoDataController.update)
  .delete(chicagoDataController.remove);

// Matches with "/api/chicagoData/category"
router
  .route("/category")
  .get(chicagoDataController.findByClass)

module.exports = router;
