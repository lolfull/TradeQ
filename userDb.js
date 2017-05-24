/**
 * Created by Jian Ping Xu on 5/22/2017.
 */
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('TradeQ', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'TradeQ' database");
        db.collection('users', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
    }
});

exports.findAll = function(req, res) {
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req, res) {
    var id = require('mongodb').ObjectID(req.params.id);
    console.log('Retrieving user: ' + id);
    db.collection('users', function(err, collection) {
        collection.findOne(id, function(err, item) {
            res.send(item);
        });
    });
};

exports.findByUserName = function(req, res) {
    var uName = req.params.id;
    console.log('Retrieving user: ' + uName);
    db.collection('users', function(err, collection) {
        collection.findOne({username: uName}, function(err, item) {
            res.send(item);
        });
    });
};

exports.addUsers = function(req, res) {
    var users = req.body;
    console.log('Adding user: ' + JSON.stringify(users));
    db.collection('wines', function(err, collection) {
        collection.insert(users, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};