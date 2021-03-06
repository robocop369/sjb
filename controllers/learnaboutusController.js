const db = require("../models");

// Defining methods for the learnaboutusController (should not change so only doing find all)
module.exports = {
  findAll: function(req, res) {
    db.Learnaboutus
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
