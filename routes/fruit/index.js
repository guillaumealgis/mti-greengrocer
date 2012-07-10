
/*
 * Fruit logic file.
 */

var models = require('../../models/fruit');

// GET    /fruit/      # Gets the whole fruit list

exports.list = function (req, res) {
    models.findAll(function (data) {
        res.json(data);
    });
};

// GET    /fruit/{id}  # Gets a specific fruit

exports.show = function (req, res) {
    var id = req.params.id;

    models.findOneById(id, function (data) {
        res.json(data);
    });
};

// PUT    /fruit/{id}  # Updates a fruit or creates it if it doesn't exist

exports.update = function (req, res) {
    var id = req.params.id;
    var fruit = req.body.fruit;
    fruit = JSON.parse(fruit);

    models.update(id, fruit, function (data) {
        res.json(data);
    });
};

// POST   /fruit/      # Create a new fruit

exports.add = function (req, res) {
    var fruit = req.body.fruit;
    fruit = JSON.parse(fruit);

    models.add(fruit, function (err) {
        res.end(err);
    });
};

// DELETE /fruit/{id}  # Remove a specific fruit

exports.remove = function (req, res) {
    var id = req.params.id;

    models.remove(id, function (data) {
        res.json(data);
    });
};
