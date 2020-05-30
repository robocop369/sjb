const router = require("express").Router();
const learnaboutusController = require("../../controllers/learnaboutusController");

// Matches with "/api/learnaboutus"
router.route("/")
  .get(learnaboutusController.findAll);

module.exports = router;
