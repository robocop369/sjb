const router = require("express").Router();
const homepagesController = require("../../controllers/homepagesController");

// Matches with "/api/homepage/:id"
router.route("/")
  .get(homepagesController.findAll)
  //might need another id "/api/homepage/:id/:eventid"

module.exports = router;
