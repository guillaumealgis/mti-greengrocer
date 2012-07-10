
/*
 * Vegetable logic file.
 */

var models = require('../../models/vegetable');

// GET    /vegetable/      # Gets the whole vegetable list

exports.list = function (req, res) {
    models.findAll(function (data) {
        res.json(data);
    });
};

// GET    /vegetable/{id}  # Gets a specific vegetable

exports.show = function (req, res) {
    var id = req.params.id;

    models.findOneById(id, function (data) {
        res.json(data);
    });
};

// PUT    /vegetable/{id}  # Updates a vegetable or creates it if it doesn't exist

exports.update = function (req, res) {
    var id = req.params.id;
    var vegetable = req.body.vegetable;
    vegetable = JSON.parse(vegetable);

    models.update(id, vegetable, function (data) {
        res.json(data);
    });
};

// POST   /vegetable/      # Create a new vegetable

exports.add = function (req, res) {
    var vegetable = req.body.vegetable;
    vegetable = JSON.parse(vegetable);

    models.add(vegetable, function (err) {
        res.end(err);
    });
};

// DELETE /vegetable/{id}  # Remove a specific vegetable

exports.remove = function (req, res) {
    var id = req.params.id;

    models.remove(id, function (data) {
        res.json(data);
    });
};
