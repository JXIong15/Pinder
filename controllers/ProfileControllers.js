const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Profile
            .find(req.query)
              .populate({path:"user", model:"User"})
              .populate({path:"likes", model:"Likes"})
              .populate({path:"reviews", model:"Reviews"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Profile
            .findById(req.params.id)
            .populate({path:"user", model:"User"})
              .populate({path:"likes", model:"Likes"})
              .populate({path:"reviews", model:"Reviews"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
      db.Profile
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
      db.Profile
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
      db.Profile
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
};
