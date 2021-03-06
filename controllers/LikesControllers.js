const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Likes
            .find(req.query).populate({path:"like", model:"Profile"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Likes
            .findById(req.params.id).populate({path:"like", model:"Profile"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
      db.Likes
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
      db.Likes
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
      db.Likes
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
