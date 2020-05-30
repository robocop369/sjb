const db = require("../models/learnaboutus");

// Defining methods for the learnaboutusController (should not change so only doing find all)
module.exports = {
  findAll: function(req, res) {
    db.learnaboutus
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
