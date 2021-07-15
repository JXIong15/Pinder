const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Reviews
            .find(req.query).populate({path:"reviewer", model:"Profile"})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Reviews
            .findById(req.params.id).populate({path:"reviewer", model:"Profile"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Reviews
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
  
      remove: function(req, res) {
        db.Reviews
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};