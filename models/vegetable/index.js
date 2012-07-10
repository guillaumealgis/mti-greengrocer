
/*
 * Vegetable model.
 */

var fs = require('fs');

var storage_path = __dirname + '/../../data/vegetable.json';

exports.findAll = function (callback) {
    fs.readFile(storage_path, function (err, data) {
        if (err) throw  err;
        callback(JSON.parse(data));
    });
};

exports.findOneById = function (id, callback) {
    fs.readFile(storage_path, function (err, data) {
        if (err) throw  err;

        var records = JSON.parse(data);
        for (var i = records.length - 1; i >= 0; i--) {
            if (records[i]._id === id) {
                callback(records[i]);
                return;
            }
        }

        callback([]);
    });
};

exports.add = function (object, callback) {
    fs.readFile(storage_path, function (err, data) {
        if (err) throw  err;

        object._id = {}.uniqueId(); // See app.js for unique id generation
        records = JSON.parse(data);
        records.push(object);
        records = JSON.stringify(records);
        fs.writeFile(storage_path, records, callback);
    });
};

exports.update = function (id, object, callback) {
    fs.readFile(storage_path, function (err, data) {
        if (err) throw  err;

        records = JSON.parse(data);

        for (var i = records.length - 1; i >= 0; i--) {
            if (records[i]._id === id) {
                records[i] = object;
                records[i]._id = id;
                break;
            }
        }

        records = JSON.stringify(records);
        fs.writeFile(storage_path, records, callback);
    });
};

exports.remove = function (id, callback) {
    fs.readFile(storage_path, function (err, data) {
        if (err) throw  err;

        var records = JSON.parse(data);
        for (var i = records.length - 1; i >= 0; i--) {
            if (records[i]._id === id) {
                records.splice(i, 1);
                break;
            }
        }

        records = JSON.stringify(records);
        fs.writeFile(storage_path, records, callback);
    });
};