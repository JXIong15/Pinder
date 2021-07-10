const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Reviews
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log(req)
        // console.log(req.body)
        db.Reviews
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};