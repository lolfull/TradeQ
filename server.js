/**
 * Created by Jian Ping Xu on 5/20/2017.
 */
var express = require('express');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TradeQ", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/createUser', function(req, res){
    res.sendFile(path.join(__dirname+ '/createUser.html'));
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});